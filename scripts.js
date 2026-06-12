const proposalTypes = [
    {
        id: "officeLeasing",
        name: "Office Leasing Proposal",
        description: "Prepare a client-ready office leasing recommendation with requirement fit, property terms, and next steps."
    },
    {
        id: "warehouseLeasing",
        name: "Warehouse Leasing Proposal",
        description: "Prepare an industrial or warehouse proposal covering area, location, loading, power, rent, and lease terms."
    },
    {
        id: "retailLeasing",
        name: "Retail Leasing Proposal",
        description: "Prepare a retail proposal for shops, high street units, or mall spaces with frontage, rent, CAM, and fit-out notes."
    },
    {
        id: "investmentSale",
        name: "Investment Sale Proposal",
        description: "Prepare an investor proposal with property overview, commercial terms, income, yield context, risks, and recommendation."
    },
    {
        id: "landlordPitch",
        name: "Landlord Property Pitch",
        description: "Prepare a landlord-facing pitch to present a property professionally to tenants, brokers, or occupiers."
    }
];

const state = {
    currentStep: 1,
    proposalType: "",
    outputType: "",
    client: {},
    property: {},
    advisor: {}
};

document.addEventListener("DOMContentLoaded", () => {
    setupTheme();
    renderProposalTypes();
    bindEvents();
    updatePreview();
});

function setupTheme() {
    const toggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        toggle.textContent = "Light Mode";
        toggle.setAttribute("aria-pressed", "true");
    }

    toggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        toggle.textContent = isDark ? "Light Mode" : "Dark Mode";
        toggle.setAttribute("aria-pressed", String(isDark));
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

function renderProposalTypes() {
    const grid = document.getElementById("proposalTypeGrid");
    grid.innerHTML = "";

    proposalTypes.forEach(type => {
        const card = document.createElement("div");
        card.className = "choice-card";
        card.innerHTML = `
            <label for="${type.id}">
                <input id="${type.id}" name="proposalType" type="radio" value="${type.name}">
                <span class="choice-title">${type.name}</span>
                <span class="choice-desc">${type.description}</span>
            </label>
        `;
        grid.appendChild(card);
    });
}

function bindEvents() {
    document.querySelectorAll("[data-next-step]").forEach(button => {
        button.addEventListener("click", () => {
            const nextStep = Number(button.dataset.nextStep);
            if (validateStep(state.currentStep)) showStep(nextStep);
        });
    });

    document.querySelectorAll("[data-back-step]").forEach(button => {
        button.addEventListener("click", () => showStep(Number(button.dataset.backStep)));
    });

    document.getElementById("generateProposalBtn").addEventListener("click", () => {
        if (validateStep(4)) showStep(5);
    });

    document.getElementById("downloadBtn").addEventListener("click", exportPdf);
    document.getElementById("copyWhatsappBtn").addEventListener("click", copyWhatsappMessage);
    document.getElementById("startOverBtn").addEventListener("click", resetApp);

    document.getElementById("proposalForm").addEventListener("input", () => {
        collectFormData();
        clearErrors();
        updatePreview();
    });
}

function collectFormData() {
    const selectedProposalType = document.querySelector('input[name="proposalType"]:checked');
    const selectedOutputType = document.querySelector('input[name="outputType"]:checked');

    state.proposalType = selectedProposalType ? selectedProposalType.value : "";
    state.outputType = selectedOutputType ? selectedOutputType.value : "";

    state.client = {
        clientName: getValue("clientName"),
        companyName: getValue("companyName"),
        requirementType: getValue("requirementType"),
        city: getValue("city"),
        preferredLocation: getValue("preferredLocation"),
        areaRequired: getValue("areaRequired"),
        budget: getValue("budget"),
        timeline: getValue("timeline"),
        importantNotes: getValue("importantNotes"),
        messyClientRequirement: getValue("messyClientRequirement")
    };

    state.property = {
        propertyName: getValue("propertyName"),
        propertyLocation: getValue("propertyLocation"),
        propertyArea: getValue("propertyArea"),
        price: getValue("price"),
        cam: getValue("cam"),
        securityDeposit: getValue("securityDeposit"),
        lockInPeriod: getValue("lockInPeriod"),
        leaseTerm: getValue("leaseTerm"),
        escalation: getValue("escalation"),
        availability: getValue("availability"),
        keyHighlights: getValue("keyHighlights"),
        redFlags: getValue("redFlags"),
        propertyNotes: getValue("propertyNotes")
    };

    state.advisor = {
        advisorName: getValue("advisorName"),
        advisorPhone: getValue("advisorPhone"),
        advisorEmail: getValue("advisorEmail")
    };
}

function getValue(id) {
    const field = document.getElementById(id);
    return field ? field.value.trim() : "";
}

function validateStep(step) {
    collectFormData();

    if (step === 1 && !state.proposalType) {
        showError("proposalTypeError", "Choose one proposal type to continue.");
        return false;
    }

    if (step === 2) {
        const required = ["clientName", "companyName", "requirementType", "city", "preferredLocation", "areaRequired", "budget", "timeline"];
        if (required.some(key => !state.client[key])) {
            showError("clientError", "Complete the main client requirement fields before continuing.");
            return false;
        }
    }

    if (step === 3) {
        const required = ["propertyName", "propertyLocation", "propertyArea", "price", "keyHighlights"];
        if (required.some(key => !state.property[key])) {
            showError("propertyError", "Complete property name, location, area, price, and key highlights.");
            return false;
        }
    }

    if (step === 4 && !state.outputType) {
        showError("generateError", "Choose the output type you want to generate.");
        return false;
    }

    return true;
}

function showError(id, message) {
    clearErrors();
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    ["proposalTypeError", "clientError", "propertyError", "generateError"].forEach(id => {
        document.getElementById(id).textContent = "";
    });
}

function showStep(step) {
    state.currentStep = step;

    document.querySelectorAll(".step-view").forEach(view => {
        view.classList.toggle("is-active", Number(view.dataset.step) === step);
    });

    document.querySelectorAll("[data-step-indicator]").forEach(item => {
        const itemStep = Number(item.dataset.stepIndicator);
        item.classList.toggle("is-active", itemStep === step);
        item.classList.toggle("is-complete", itemStep < step);
    });

    updatePreview();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updatePreview() {
    collectFormData();

    document.getElementById("summaryProposalType").textContent = state.proposalType || "Select a proposal type";
    document.getElementById("summaryClient").textContent = state.client.clientName
        ? `${state.client.clientName}${state.client.companyName ? `, ${state.client.companyName}` : ""}`
        : "Client details will appear here.";
    document.getElementById("previewTitle").textContent = state.property.propertyName || state.proposalType || "Proposal preview";

    document.getElementById("proposalPreview").innerHTML = `
        <section class="proposal-section output-focus">
            <h3>Selected output</h3>
            <p>${outputSummary()}</p>
        </section>
        <section class="proposal-section">
            <h3>Executive summary</h3>
            <p>${executiveSummary()}</p>
        </section>
        <section class="proposal-section">
            <h3>Client requirement summary</h3>
            ${listItems([
                ["Client", state.client.clientName],
                ["Company", state.client.companyName],
                ["Requirement", state.client.requirementType],
                ["City", state.client.city],
                ["Preferred location", state.client.preferredLocation],
                ["Area required", state.client.areaRequired],
                ["Budget", state.client.budget],
                ["Timeline", state.client.timeline],
                ["Important notes", state.client.importantNotes],
                ["Raw client note", state.client.messyClientRequirement]
            ])}
        </section>
        <section class="proposal-section">
            <h3>Property overview</h3>
            ${listItems([
                ["Property", state.property.propertyName],
                ["Location", state.property.propertyLocation],
                ["Area", state.property.propertyArea],
                ["Availability", state.property.availability],
                ["Key highlights", state.property.keyHighlights],
                ["Raw property notes", state.property.propertyNotes]
            ])}
        </section>
        <section class="proposal-section">
            <h3>Commercial terms table</h3>
            ${commercialTermsTable()}
        </section>
        <section class="proposal-section">
            <h3>Why this property fits</h3>
            <p>${whyItFits()}</p>
        </section>
        <section class="proposal-section">
            <h3>Risks / points to verify</h3>
            <p>${valueOrFallback(state.property.redFlags, "Confirm CAM breakup, final chargeable area, parking allocation, legal title, handover date, and all commercial terms before closure.")}</p>
        </section>
        <section class="proposal-section">
            <h3>Recommended next steps</h3>
            ${listItems([
                ["1", "Confirm whether the location, budget, and area match the client requirement."],
                ["2", "Arrange a site visit or property walkthrough."],
                ["3", "Verify commercial terms, documents, and negotiation points."],
                ["4", "Share final offer or letter of intent after client approval."]
            ], true)}
        </section>
        <section class="proposal-section">
            <h3>Advisor contact details</h3>
            ${listItems([
                ["Advisor", state.advisor.advisorName],
                ["Phone", state.advisor.advisorPhone],
                ["Email", state.advisor.advisorEmail]
            ])}
        </section>
        <section class="proposal-section">
            <h3>Client follow-up WhatsApp message</h3>
            <div class="message-box">${whatsappMessage()}</div>
        </section>
        <section class="proposal-section">
            <h3>Email draft</h3>
            <div class="message-box">${emailDraft()}</div>
        </section>
    `;
}

function outputSummary() {
    const outputNotes = {
        "Quick WhatsApp Summary": "Generate a short, practical message for quick client follow-up.",
        "Client Email Draft": "Generate a polished email with context, recommendation, risks, and next steps.",
        "Professional PDF Proposal": "Generate a structured proposal preview that can be exported as a PDF."
    };

    return outputNotes[state.outputType] || "Choose an output type in Step 4 to shape the final proposal format.";
}

function executiveSummary() {
    if (!state.proposalType && !state.client.clientName && !state.property.propertyName) {
        return "Start by selecting a proposal type and filling client/property details. The proposal will build itself here as you type.";
    }

    return `${valueOrFallback(state.proposalType, "This proposal")} is prepared for ${valueOrFallback(state.client.clientName, "the client")} of ${valueOrFallback(state.client.companyName, "the client company")}. It recommends ${valueOrFallback(state.property.propertyName, "the property")} at ${valueOrFallback(state.property.propertyLocation, "the proposed location")} for a ${valueOrFallback(state.client.requirementType, "real estate")} requirement.`;
}

function whyItFits() {
    return `${valueOrFallback(state.property.propertyName, "This property")} appears relevant because it is in ${valueOrFallback(state.property.propertyLocation, "the preferred market")}, offers ${valueOrFallback(state.property.propertyArea, "the required area")}, and can be evaluated against the client's budget of ${valueOrFallback(state.client.budget, "the stated budget")}. Key highlights: ${valueOrFallback(state.property.keyHighlights, "Add property highlights to make this section stronger.")}`;
}

function commercialTermsTable() {
    const rows = [
        ["Rent or sale price", state.property.price],
        ["Maintenance / CAM", state.property.cam],
        ["Security deposit", state.property.securityDeposit],
        ["Lock-in period", state.property.lockInPeriod],
        ["Lease term", state.property.leaseTerm],
        ["Escalation", state.property.escalation],
        ["Availability", state.property.availability]
    ];

    return `
        <table>
            <tbody>
                ${rows.map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(valueOrFallback(value, "To be confirmed"))}</td></tr>`).join("")}
            </tbody>
        </table>
    `;
}

function listItems(items, keepLabelsSmall = false) {
    return `
        <ul>
            ${items
                .filter(([, value]) => value)
                .map(([label, value]) => `<li><strong>${escapeHtml(label)}${keepLabelsSmall ? "." : ":"}</strong> ${escapeHtml(value)}</li>`)
                .join("") || "<li>Details will appear here as you fill the form.</li>"}
        </ul>
    `;
}

function whatsappMessage() {
    return escapeHtml(`Hi ${state.client.clientName || "Client"}, sharing a quick summary for ${state.property.propertyName || "the shortlisted property"} at ${state.property.propertyLocation || "the proposed location"}.

Area: ${state.property.propertyArea || "To be confirmed"}
Price/Rent: ${state.property.price || "To be confirmed"}
CAM: ${state.property.cam || "To be confirmed"}
Availability: ${state.property.availability || "To be confirmed"}

Why it fits: ${whyItFits()}

Next step: Please confirm if you would like to schedule a visit or discuss negotiation points.`);
}

function emailDraft() {
    return escapeHtml(`Subject: ${state.property.propertyName || "Property"} proposal for your ${state.client.requirementType || "real estate"} requirement

Dear ${state.client.clientName || "Client"},

As discussed, please find below a proposal for ${state.property.propertyName || "the shortlisted property"} in ${state.property.propertyLocation || "the proposed location"}.

The property has been considered against your requirement for ${state.client.areaRequired || "the required area"} in ${state.client.preferredLocation || "the preferred location"}, with a budget of ${state.client.budget || "the stated budget"} and timeline of ${state.client.timeline || "the required timeline"}.

Key property highlights:
${state.property.keyHighlights || "To be added"}

Commercial terms:
Rent/Sale Price: ${state.property.price || "To be confirmed"}
Maintenance/CAM: ${state.property.cam || "To be confirmed"}
Security Deposit: ${state.property.securityDeposit || "To be confirmed"}
Lease Term: ${state.property.leaseTerm || "To be confirmed"}

Recommended next step:
Let us verify pending terms and schedule a site visit or commercial discussion.

Regards,
${state.advisor.advisorName || "Your Real Estate Advisor"}
${state.advisor.advisorPhone || ""}
${state.advisor.advisorEmail || ""}`);
}

function valueOrFallback(value, fallback) {
    return value && value.trim ? value.trim() : fallback;
}

function exportPdf() {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        alert("PDF library is still loading. Please try again in a moment.");
        return;
    }

    collectFormData();
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });
    const margin = 48;
    const width = pdf.internal.pageSize.getWidth() - margin * 2;
    const pageHeight = pdf.internal.pageSize.getHeight();
    let y = margin;

    const addText = (text, size = 10, style = "normal", gap = 8) => {
        pdf.setFont("helvetica", style);
        pdf.setFontSize(size);
        pdf.splitTextToSize(String(text || ""), width).forEach(line => {
            if (y > pageHeight - margin) {
                pdf.addPage();
                y = margin;
            }
            pdf.text(line, margin, y);
            y += size + 6;
        });
        y += gap;
    };

    addText("Broker Proposal Assistant", 18, "bold", 4);
    addText(`Output type: ${state.outputType || "Professional PDF Proposal"}`, 10, "normal", 8);
    addText(state.proposalType || "Real Estate Proposal", 14, "bold", 10);
    addText("Executive summary", 13, "bold", 2);
    addText(executiveSummary(), 10, "normal", 8);
    addText("Client requirement summary", 13, "bold", 2);
    addText(`Client: ${state.client.clientName}\nCompany: ${state.client.companyName}\nRequirement: ${state.client.requirementType}\nCity: ${state.client.city}\nLocation: ${state.client.preferredLocation}\nArea: ${state.client.areaRequired}\nBudget: ${state.client.budget}\nTimeline: ${state.client.timeline}\nNotes: ${state.client.importantNotes}`, 10, "normal", 8);
    addText("Property overview", 13, "bold", 2);
    addText(`Property: ${state.property.propertyName}\nLocation: ${state.property.propertyLocation}\nArea: ${state.property.propertyArea}\nHighlights: ${state.property.keyHighlights}`, 10, "normal", 8);
    addText("Commercial terms", 13, "bold", 2);
    addText(`Price/Rent: ${state.property.price}\nCAM: ${state.property.cam}\nSecurity Deposit: ${state.property.securityDeposit}\nLock-in: ${state.property.lockInPeriod}\nLease Term: ${state.property.leaseTerm}\nEscalation: ${state.property.escalation}\nAvailability: ${state.property.availability}`, 10, "normal", 8);
    addText("Why this property fits", 13, "bold", 2);
    addText(whyItFits(), 10, "normal", 8);
    addText("Risks / points to verify", 13, "bold", 2);
    addText(valueOrFallback(state.property.redFlags, "Confirm CAM breakup, area, documents, handover date, and commercial terms."), 10, "normal", 8);
    addText("Recommended next steps", 13, "bold", 2);
    addText("1. Confirm fit with client requirement.\n2. Schedule site visit.\n3. Verify commercial and legal terms.\n4. Share final offer or LOI.", 10, "normal", 8);
    addText("Advisor contact details", 13, "bold", 2);
    addText(`Advisor: ${state.advisor.advisorName || "To be added"}\nPhone: ${state.advisor.advisorPhone || "To be added"}\nEmail: ${state.advisor.advisorEmail || "To be added"}`, 10, "normal", 8);
    addText("Client follow-up WhatsApp message", 13, "bold", 2);
    addText(whatsappMessage().replace(/&amp;/g, "&"), 10, "normal", 8);
    addText("Email draft", 13, "bold", 2);
    addText(emailDraft().replace(/&amp;/g, "&"), 10, "normal", 8);

    pdf.save(`${slugify(state.property.propertyName || state.client.clientName || "property-proposal")}.pdf`);
}

function copyWhatsappMessage() {
    const text = whatsappMessage()
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#039;/g, "'");

    navigator.clipboard.writeText(text).then(() => {
        document.getElementById("copyWhatsappBtn").textContent = "Copied";
        setTimeout(() => {
            document.getElementById("copyWhatsappBtn").textContent = "Copy WhatsApp";
        }, 1400);
    });
}

function resetApp() {
    document.getElementById("proposalForm").reset();
    state.currentStep = 1;
    state.proposalType = "";
    state.outputType = "";
    state.client = {};
    state.property = {};
    state.advisor = {};
    clearErrors();
    showStep(1);
    updatePreview();
}

function slugify(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "proposal";
}

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
