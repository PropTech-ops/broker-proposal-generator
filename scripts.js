const STORAGE_KEY = "brokerProposalBuilder.proposals";

const proposalTypes = [
    "Office Leasing Proposal",
    "Warehouse Leasing Proposal",
    "Retail Leasing Proposal",
    "Investment Sale Proposal",
    "Landlord Property Pitch"
];

const leasingBlocks = [
    "clientRequirement",
    "propertySnapshot",
    "leaseCommercialTerms",
    "locationHighlights",
    "fitOutPossession",
    "whyThisFits",
    "risksRedFlags",
    "recommendedNextSteps",
    "whatsappFollowUp",
    "emailDraft"
];

const investmentBlocks = [
    "clientInvestmentRequirement",
    "propertySnapshot",
    "investmentSnapshot",
    "rentalIncomeYield",
    "occupancyStatus",
    "exitPotential",
    "investmentRationale",
    "risksRedFlags",
    "recommendedNextSteps",
    "whatsappFollowUp",
    "emailDraft"
];

const landlordBlocks = [
    "propertySnapshot",
    "idealTenantProfile",
    "locationAdvantages",
    "propertyHighlights",
    "expectedCommercialTerms",
    "marketingPositioning",
    "brokerRemarks",
    "risksRedFlags",
    "recommendedNextSteps",
    "emailWhatsappPitch"
];

const blockTemplates = {
    clientRequirement: {
        icon: "👤",
        title: "Client Requirement",
        helper: "Capture the client's core need in a few useful fields.",
        previewTitle: "Client Requirement",
        fields: [
            field("clientName", "Client name", "text", "Example: Rohit Sharma"),
            field("companyName", "Company name", "text", "Example: Apex Logistics"),
            field("requirementSummary", "Requirement summary", "textarea", "Example: Needs a Grade A office with quick possession."),
            field("locationPreference", "Location preference", "text", "Example: Golf Course Road or Cyber City"),
            field("areaRequired", "Area required", "text", "Example: 10,000"),
            field("budget", "Budget", "text", "Example: 110 per sq.ft"),
            field("timeline", "Timeline", "text", "Example: Move-in within 60 days"),
            field("clientNotes", "Client Notes", "textarea", "Paste WhatsApp notes or call notes here.")
        ]
    },
    clientInvestmentRequirement: {
        icon: "💼",
        title: "Client Investment Requirement",
        helper: "Summarize investment budget, return expectations, and preferred asset type.",
        previewTitle: "Client Investment Requirement",
        fields: [
            field("clientName", "Client name", "text", "Example: Neha Kapoor"),
            field("companyName", "Company name", "text", "Example: Kapoor Holdings"),
            field("investmentGoal", "Investment goal", "textarea", "Example: Stable rental income with long-term appreciation."),
            field("preferredAsset", "Preferred asset", "text", "Example: Leased office or retail asset"),
            field("budget", "Budget", "text", "Example: 8 Cr"),
            field("targetYield", "Target yield", "text", "Example: 8%+"),
            field("clientNotes", "Client Notes", "textarea", "Paste investor notes or WhatsApp messages.")
        ]
    },
    propertySnapshot: {
        icon: "🏢",
        title: "Property Snapshot",
        helper: "Add the property basics brokers usually share first.",
        previewTitle: "Property Snapshot",
        fields: [
            field("propertyPhoto", "Upload property photo", "file", ""),
            field("propertyName", "Property name", "text", "Example: One Horizon Center"),
            field("location", "Location", "text", "Example: Golf Course Road, Gurgaon"),
            field("mapLink", "Google Maps link", "url", "Example: https://maps.google.com/..."),
            field("propertyType", "Property type", "text", "Example: Grade A office"),
            field("area", "Area", "text", "Example: 12,000"),
            field("availability", "Availability", "text", "Example: Immediate"),
            field("keyHighlights", "Key highlights", "textarea", "Example: Metro nearby, efficient floor plate, premium building."),
            field("propertyNotes", "Broker Notes", "textarea", "Paste brochure, WhatsApp, or memory notes.")
        ]
    },
    leaseCommercialTerms: {
        icon: "₹",
        title: "Lease Commercial Terms",
        helper: "Add the main lease numbers without a long spreadsheet.",
        previewTitle: "Lease Commercial Terms",
        table: true,
        fields: [
            field("rent", "Rent per sq.ft", "text", "Example: 125"),
            field("cam", "Maintenance / CAM", "text", "Example: 18 per sq.ft"),
            field("securityDeposit", "Security deposit", "text", "Example: 3 months"),
            field("lockIn", "Lock-in", "text", "Example: 3 years"),
            field("leaseTerm", "Lease term", "text", "Example: 5 years"),
            field("escalation", "Escalation", "text", "Example: 15% every 3 years"),
            field("parking", "Parking", "text", "Example: 20 reserved car parks"),
            field("brokerage", "Brokerage", "text", "Example: 1 month rent")
        ]
    },
    locationHighlights: {
        icon: "📍",
        title: "Location Highlights",
        helper: "Explain why the micro-market works for the client.",
        previewTitle: "Location Highlights",
        fields: [
            field("connectivity", "Connectivity", "textarea", "Example: Close to metro, NH access, airport route."),
            field("neighbourhood", "Neighbourhood", "textarea", "Example: Surrounded by corporates, cafes, hotels, banks."),
            field("brokerNote", "Broker note", "textarea", "Add your practical location insight.")
        ]
    },
    fitOutPossession: {
        icon: "🛠",
        title: "Fit-out / Possession Notes",
        helper: "Clarify possession, fit-out, rent-free, and handover points.",
        previewTitle: "Fit-out / Possession Notes",
        fields: [
            field("possession", "Possession", "text", "Example: Immediate / 30 days"),
            field("fitOut", "Fit-out condition", "text", "Example: Warm shell / plug-and-play"),
            field("rentFree", "Rent-free period", "text", "Example: 45 days negotiable"),
            field("notes", "Notes", "textarea", "Add handover or fit-out notes.")
        ]
    },
    whyThisFits: {
        icon: "✅",
        title: "Why This Fits",
        helper: "Write the broker recommendation in plain language.",
        previewTitle: "Why This Property Fits",
        fields: [
            field("fitReason", "Main fit reason", "textarea", "Example: Matches the client's preferred location, size, budget, and timeline."),
            field("negotiationPoint", "Negotiation point", "textarea", "Example: Ask for rent-free period and parking confirmation.")
        ]
    },
    risksRedFlags: {
        icon: "⚠",
        title: "Risks / Red Flags",
        helper: "List what should be verified before closure.",
        previewTitle: "Risks / Red Flags",
        fields: [
            field("titleRisk", "Title/document risk", "text", "Example: Title documents to be verified"),
            field("parkingRisk", "Parking risk", "text", "Example: Allocation pending"),
            field("fitOutRisk", "Fit-out risk", "text", "Example: Fit-out cost not confirmed"),
            field("camClarity", "CAM clarity", "text", "Example: CAM breakup required"),
            field("locationConcern", "Location concern", "text", "Example: Peak-hour traffic"),
            field("otherNotes", "Other notes", "textarea", "Add any other red flags.")
        ]
    },
    recommendedNextSteps: {
        icon: "➡",
        title: "Recommended Next Steps",
        helper: "Give the client a simple action plan.",
        previewTitle: "Recommended Next Steps",
        fields: [
            field("stepOne", "Step 1", "text", "Example: Confirm commercial fit with management"),
            field("stepTwo", "Step 2", "text", "Example: Schedule site visit"),
            field("stepThree", "Step 3", "text", "Example: Verify terms and documents"),
            field("stepFour", "Step 4", "text", "Example: Submit LOI after approval")
        ]
    },
    whatsappFollowUp: {
        icon: "💬",
        title: "WhatsApp Follow-up",
        helper: "Auto-start with editable WhatsApp-style text.",
        previewTitle: "WhatsApp Follow-up Draft",
        messageBlock: true,
        copyType: "whatsapp",
        fields: [
            field("message", "WhatsApp message", "textarea", "")
        ]
    },
    emailDraft: {
        icon: "✉",
        title: "Email Draft",
        helper: "Auto-start with a client-ready email draft.",
        previewTitle: "Email Draft",
        messageBlock: true,
        copyType: "email",
        fields: [
            field("email", "Email draft", "textarea", "")
        ]
    },
    investmentSnapshot: {
        icon: "📊",
        title: "Investment Snapshot",
        helper: "Capture the core investor numbers.",
        previewTitle: "Investment Snapshot",
        table: true,
        fields: [
            field("salePrice", "Sale price", "text", "Example: 8 Cr"),
            field("expectedMonthlyRent", "Expected monthly rent", "text", "Example: 7.5 lakh"),
            field("annualIncome", "Expected Annual Rental Income", "text", "Example: 90 lakh"),
            field("expectedYield", "Expected yield", "text", "Example: 8.5%"),
            field("occupancyStatus", "Occupancy status", "text", "Example: Leased"),
            field("expectedAppreciation", "Expected appreciation", "text", "Example: 6-8% annually"),
            field("exitPotential", "Exit potential", "text", "Example: Strong resale demand")
        ]
    },
    rentalIncomeYield: {
        icon: "📈",
        title: "Rental Income / Yield",
        helper: "Show rental income and yield assumptions clearly.",
        previewTitle: "Rental Income / Yield",
        table: true,
        fields: [
            field("currentRent", "Current Rent", "text", "Example: 7 lakh per month"),
            field("expectedRent", "Expected Rent", "text", "Example: 7.5 lakh per month"),
            field("annualIncome", "Annual income", "text", "Example: 90 lakh"),
            field("yield", "Yield", "text", "Example: 8.5%"),
            field("tenantName", "Tenant name if leased", "text", "Example: ABC Pvt Ltd"),
            field("leaseExpiry", "Lease expiry if leased", "text", "Example: March 2028")
        ]
    },
    occupancyStatus: {
        icon: "🔑",
        title: "Occupancy Status",
        helper: "Explain vacancy, tenant, and lease status.",
        previewTitle: "Occupancy Status",
        fields: [
            field("status", "Status", "text", "Example: Leased / vacant"),
            field("tenant", "Tenant", "text", "Example: ABC Pvt Ltd"),
            field("leaseDetails", "Lease details", "textarea", "Example: Lease valid till March 2028 with escalation due in 2027.")
        ]
    },
    exitPotential: {
        icon: "🚪",
        title: "Exit Potential",
        helper: "Summarize future resale or liquidity potential.",
        previewTitle: "Exit Potential",
        fields: [
            field("exitSummary", "Exit summary", "textarea", "Example: Strong exit potential due to location and tenant demand."),
            field("buyerProfile", "Likely buyer profile", "text", "Example: HNI, family office, income investor")
        ]
    },
    investmentRationale: {
        icon: "🧠",
        title: "Investment Rationale",
        helper: "Explain why the asset deserves investor attention.",
        previewTitle: "Investment Rationale",
        fields: [
            field("rationale", "Investment rationale", "textarea", "Example: Stable income, good tenant demand, and appreciation potential."),
            field("verify", "Points to verify", "textarea", "Example: Title, lease, tenant quality, charges, and rent assumptions.")
        ]
    },
    idealTenantProfile: {
        icon: "🎯",
        title: "Ideal Tenant Profile",
        helper: "Define who this landlord should target.",
        previewTitle: "Ideal Tenant Profile",
        fields: [
            field("tenantProfile", "Ideal tenant profile", "textarea", "Example: MNC, IT company, clinic, showroom, or premium service brand."),
            field("why", "Why these tenants fit", "textarea", "Example: Building quality, frontage, and location match this tenant category.")
        ]
    },
    locationAdvantages: {
        icon: "📌",
        title: "Location Advantages",
        helper: "Position the property by its local advantages.",
        previewTitle: "Location Advantages",
        fields: [
            field("advantages", "Location advantages", "textarea", "Example: Metro access, corporate catchment, retail visibility."),
            field("catchment", "Catchment", "text", "Example: Corporate occupiers and premium residential nearby")
        ]
    },
    propertyHighlights: {
        icon: "⭐",
        title: "Property Highlights",
        helper: "List the strongest selling points.",
        previewTitle: "Property Highlights",
        fields: [
            field("highlights", "Highlights", "textarea", "Example: Wide frontage, efficient layout, parking, lifts, power backup."),
            field("amenities", "Building amenities", "textarea", "Example: Security, cafeteria, visitor parking, managed lobby.")
        ]
    },
    expectedCommercialTerms: {
        icon: "💰",
        title: "Expected Commercial Terms",
        helper: "Add landlord's asking terms.",
        previewTitle: "Expected Commercial Terms",
        table: true,
        fields: [
            field("expectedRent", "Expected Rent", "text", "Example: 125 per sq.ft"),
            field("deposit", "Deposit", "text", "Example: 3 months"),
            field("lockIn", "Lock-in", "text", "Example: 3 years"),
            field("brokerage", "Brokerage expectation", "text", "Example: 1 month rent"),
            field("availability", "Availability", "text", "Example: Immediate")
        ]
    },
    marketingPositioning: {
        icon: "📣",
        title: "Marketing Positioning",
        helper: "Describe how the property should be marketed.",
        previewTitle: "Marketing Positioning",
        fields: [
            field("positioning", "Positioning", "textarea", "Example: Position as a premium, ready-to-occupy office for growth-stage companies."),
            field("channels", "Marketing notes", "textarea", "Example: Share with corporate brokers, nearby occupiers, and direct tenant leads.")
        ]
    },
    brokerRemarks: {
        icon: "📝",
        title: "Broker Remarks",
        helper: "Add practical comments from the broker's point of view.",
        previewTitle: "Broker Remarks",
        fields: [
            field("remarks", "Broker remarks", "textarea", "Example: Pricing should stay flexible for strong tenants with clean profile."),
            field("restrictions", "Restrictions, if any", "textarea", "Example: No restaurant use, signage rules apply.")
        ]
    },
    emailWhatsappPitch: {
        icon: "✉",
        title: "Email / WhatsApp Pitch",
        helper: "Editable pitch message for landlord-side marketing.",
        previewTitle: "Email / WhatsApp Pitch",
        messageBlock: true,
        copyType: "both",
        fields: [
            field("pitch", "Pitch message", "textarea", "")
        ]
    }
};

const state = {
    currentProposal: null,
    setupExpanded: true,
    includeFollowupsInPrint: false
};

document.addEventListener("DOMContentLoaded", () => {
    fillProposalTypeSelect();
    bindEvents();
    renderHome();
});

function field(name, label, type, placeholder) {
    return { name, label, type, placeholder };
}

function fillProposalTypeSelect() {
    const select = document.getElementById("proposalTypeSelect");
    select.innerHTML = proposalTypes.map(type => `<option>${type}</option>`).join("");
}

function bindEvents() {
    document.getElementById("createProposalBtn").addEventListener("click", createNewProposal);
    document.getElementById("backHomeBtn").addEventListener("click", showHome);
    document.getElementById("backHomeSetupBtn").addEventListener("click", showHome);
    document.getElementById("editSetupBtn").addEventListener("click", () => {
        state.setupExpanded = true;
        syncTopBar();
    });
    document.getElementById("saveDraftBtn").addEventListener("click", saveDraft);
    document.getElementById("saveDraftSetupBtn").addEventListener("click", saveDraft);
    document.getElementById("printBtn").addEventListener("click", () => window.print());
    document.getElementById("printSetupBtn").addEventListener("click", () => window.print());
    document.getElementById("copyFullBtn").addEventListener("click", copyFullProposal);
    document.getElementById("copyWhatsappBtn").addEventListener("click", copyWhatsapp);
    document.getElementById("copyEmailBtn").addEventListener("click", copyEmail);
    document.getElementById("toolsCopyWhatsappBtn").addEventListener("click", copyWhatsapp);
    document.getElementById("toolsCopyEmailBtn").addEventListener("click", copyEmail);
    document.getElementById("mobileSaveBtn").addEventListener("click", saveDraft);
    document.getElementById("includeFollowupsPrint").addEventListener("change", updateFollowupPrintSetting);
    document.getElementById("includeFollowupsPrintSetup").addEventListener("change", updateFollowupPrintSetting);
    document.querySelectorAll("[data-view-tab]").forEach(button => {
        button.addEventListener("click", () => showResponsiveView(button.dataset.viewTab));
    });
    document.getElementById("mobilePrintBtn").addEventListener("click", () => window.print());

    document.getElementById("proposalTitleInput").addEventListener("input", event => {
        state.currentProposal.title = event.target.value;
        updateProposal();
    });

    document.getElementById("proposalTitleInput").addEventListener("blur", () => {
        collapseSetupIfComplete();
        updateProposal();
    });

    document.getElementById("statusSelect").addEventListener("change", event => {
        state.currentProposal.status = event.target.value;
        collapseSetupIfComplete();
        updateProposal();
    });

    document.getElementById("proposalTypeSelect").addEventListener("change", event => {
        changeProposalType(event.target.value);
    });

    document.getElementById("savedProposalList").addEventListener("click", event => {
        const button = event.target.closest("button");
        if (!button) return;

        if (button.dataset.action === "open") openProposal(button.dataset.id);
        if (button.dataset.action === "duplicate") duplicateProposal(button.dataset.id);
        if (button.dataset.action === "delete") deleteProposal(button.dataset.id);
    });

    document.getElementById("blockLibrary").addEventListener("click", event => {
        const button = event.target.closest("button");
        if (button) addBlock(button.dataset.blockType);
    });

    document.getElementById("activeBlocks").addEventListener("click", event => {
        const button = event.target.closest("button");
        if (!button) return;

        if (button.dataset.action === "remove") removeBlock(button.dataset.blockId);
        if (button.dataset.action === "toggle") toggleBlock(button.dataset.blockId);
        if (button.dataset.action === "copyBlock") copyBlockMessage(button.dataset.blockId);
    });

    document.getElementById("activeBlocks").addEventListener("input", event => {
        const field = event.target.closest("[data-block-id]");
        if (!field) return;

        updateBlockField(field.dataset.blockId, event.target.name, event.target.value);
    });

    document.getElementById("activeBlocks").addEventListener("change", event => {
        if (event.target.type !== "file") return;

        const field = event.target.closest("[data-block-id]");
        if (!field) return;

        updateBlockFile(field.dataset.blockId, event.target.name, event.target.files[0]);
    });
}

function createNewProposal() {
    const type = proposalTypes[0];
    state.currentProposal = {
        id: createId(),
        title: "Untitled Broker Proposal",
        proposalType: type,
        status: "Draft",
        blocks: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    state.setupExpanded = true;
    showBuilder();
}

function changeProposalType(type) {
    const previousType = state.currentProposal.proposalType;
    const confirmed = state.currentProposal.blocks.length === 0 || window.confirm("Changing proposal type will clear active blocks so you can add the right recommended blocks. Continue?");

    if (!confirmed) {
        document.getElementById("proposalTypeSelect").value = previousType;
        return;
    }

    state.currentProposal.proposalType = type;
    state.currentProposal.blocks = [];

    collapseSetupIfComplete();
    updateProposal();
}

function createBlock(type) {
    const template = blockTemplates[type];
    return {
        id: createId(),
        type,
        collapsed: false,
        fields: createEmptyFields(template),
        autoFields: {}
    };
}

function createEmptyFields(template) {
    const fields = {};
    template.fields.forEach(item => {
        fields[item.name] = "";
    });
    return fields;
}

function getRecommendedBlocks(proposalType) {
    if (proposalType === "Investment Sale Proposal") return investmentBlocks;
    if (proposalType === "Landlord Property Pitch") return landlordBlocks;
    return leasingBlocks;
}

function showHome() {
    renderHome();
    document.getElementById("homeScreen").classList.remove("is-hidden");
    document.getElementById("builderScreen").classList.add("is-hidden");
}

function showBuilder() {
    document.getElementById("homeScreen").classList.add("is-hidden");
    document.getElementById("builderScreen").classList.remove("is-hidden");
    removeDuplicateBlocks();
    syncTopBar();
    showResponsiveView("build");
    renderBuilder();
}

function syncTopBar() {
    document.getElementById("proposalTitleInput").value = state.currentProposal.title;
    document.getElementById("proposalTypeSelect").value = state.currentProposal.proposalType;
    document.getElementById("statusSelect").value = state.currentProposal.status;
    document.getElementById("topSummaryTitle").textContent = state.currentProposal.title || "Untitled Broker Proposal";
    document.getElementById("topSummaryMeta").textContent = `${state.currentProposal.proposalType} · ${state.currentProposal.status}`;
    document.getElementById("includeFollowupsPrint").checked = state.includeFollowupsInPrint;
    document.getElementById("includeFollowupsPrintSetup").checked = state.includeFollowupsInPrint;
    document.body.classList.toggle("include-followups-print", state.includeFollowupsInPrint);

    const setupComplete = isSetupComplete();
    document.getElementById("setupFields").classList.toggle("is-hidden", setupComplete && !state.setupExpanded);
    document.getElementById("setupSummary").classList.toggle("is-hidden", !setupComplete || state.setupExpanded);
}

function updateFollowupPrintSetting(event) {
    state.includeFollowupsInPrint = event.target.checked;
    syncTopBar();
    renderPreview();
}

function showResponsiveView(viewName) {
    document.querySelectorAll("[data-view-tab]").forEach(button => {
        button.classList.toggle("is-active", button.dataset.viewTab === viewName);
    });

    document.querySelectorAll("[data-view-panel]").forEach(panel => {
        panel.classList.toggle("is-active", panel.dataset.viewPanel === viewName);
    });
}

function isSetupComplete() {
    const title = (state.currentProposal.title || "").trim();
    const hasRealTitle = title && title !== "Untitled Broker Proposal";
    return hasRealTitle && Boolean(state.currentProposal.proposalType);
}

function renderHome() {
    const proposals = loadProposals();
    const list = document.getElementById("savedProposalList");

    if (!proposals.length) {
        list.innerHTML = `
            <div class="empty-card">
                <h3>No saved proposals yet</h3>
                <p>Create a proposal, stack a few blocks, and save it locally in this browser.</p>
            </div>
        `;
        return;
    }

    list.innerHTML = proposals
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .map(proposal => `
            <article class="saved-card">
                <div>
                    <span class="status-pill">${escapeHtml(proposal.status || "Draft")}</span>
                    <h3>${escapeHtml(proposal.title || "Untitled Proposal")}</h3>
                    <p>${escapeHtml(getClientName(proposal) || "Client not added")}</p>
                </div>
                <dl>
                    <div>
                        <dt>Proposal type</dt>
                        <dd>${escapeHtml(proposal.proposalType)}</dd>
                    </div>
                    <div>
                        <dt>Last updated</dt>
                        <dd>${formatDate(proposal.updatedAt)}</dd>
                    </div>
                </dl>
                <div class="card-actions">
                    <button class="secondary-btn small-btn" type="button" data-action="open" data-id="${proposal.id}">Open</button>
                    <button class="secondary-btn small-btn" type="button" data-action="duplicate" data-id="${proposal.id}">Duplicate</button>
                    <button class="danger-btn small-btn" type="button" data-action="delete" data-id="${proposal.id}">Delete</button>
                </div>
            </article>
        `)
        .join("");
}

function renderBuilder() {
    removeDuplicateBlocks();
    renderBlockLibrary();
    renderActiveBlocks();
    renderPreview();
}

function removeDuplicateBlocks() {
    const seenTypes = [];
    state.currentProposal.blocks = state.currentProposal.blocks.filter(block => {
        if (seenTypes.includes(block.type)) return false;
        seenTypes.push(block.type);
        return true;
    });
}

function renderBlockLibrary() {
    const recommended = getRecommendedBlocks(state.currentProposal.proposalType);
    const activeTypes = state.currentProposal.blocks.map(block => block.type);

    document.getElementById("blockLibrary").innerHTML = recommended.map(type => {
        const template = blockTemplates[type];
        const alreadyAdded = activeTypes.includes(type);
        return `
            <article class="library-card ${alreadyAdded ? "is-added" : ""}">
                <div class="block-icon">${template.icon}</div>
                <div>
                    <h3>${escapeHtml(template.title)}</h3>
                    <p>${escapeHtml(template.helper)}</p>
                </div>
                <button class="secondary-btn small-btn" type="button" data-block-type="${type}" ${alreadyAdded ? "disabled" : ""}>
                    ${alreadyAdded ? "Added" : "Add"}
                </button>
            </article>
        `;
    }).join("");
}

function renderActiveBlocks() {
    const container = document.getElementById("activeBlocks");

    if (!state.currentProposal.blocks.length) {
        container.innerHTML = `
            <div class="empty-card">
                <h3>No active blocks</h3>
                <p>Add blocks from the library to start building the proposal.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = state.currentProposal.blocks.map(block => {
        const template = blockTemplates[block.type];
        return `
            <article class="editor-block" data-block-id="${block.id}">
                <header class="editor-block-header">
                    <div class="block-heading">
                        <span class="block-icon">${template.icon}</span>
                        <div>
                            <h3>${escapeHtml(template.title)}</h3>
                            <p>${escapeHtml(template.helper)}</p>
                        </div>
                    </div>
                    <div class="block-actions">
                        <button class="secondary-btn small-btn" type="button" data-action="toggle" data-block-id="${block.id}">
                            ${block.collapsed ? "Expand" : "Collapse"}
                        </button>
                        <button class="danger-btn small-btn" type="button" data-action="remove" data-block-id="${block.id}">Remove</button>
                    </div>
                </header>
                <div class="block-fields ${block.collapsed ? "is-hidden" : ""}" data-block-id="${block.id}">
                    ${renderBlockFields(block, template)}
                    ${template.copyType ? `<button class="secondary-btn small-btn block-copy-btn" type="button" data-action="copyBlock" data-block-id="${block.id}">Copy ${template.copyType === "email" ? "Email" : "Message"}</button>` : ""}
                </div>
            </article>
        `;
    }).join("");
}

function renderBlockFields(block, template) {
    return template.fields.map(item => {
        const value = block.fields[item.name] || "";
        if (item.type === "file") {
            return `
                <label>
                    <span>${escapeHtml(item.label)}</span>
                    <input name="${item.name}" type="file" accept="image/*">
                    ${value ? `<img class="photo-preview" src="${escapeHtml(value)}" alt="Uploaded property preview">` : ""}
                </label>
            `;
        }

        if (item.type === "textarea") {
            return `
                <label>
                    <span>${escapeHtml(item.label)}</span>
                    <textarea name="${item.name}" rows="4" placeholder="${escapeHtml(item.placeholder)}">${escapeHtml(value)}</textarea>
                </label>
            `;
        }

        return `
            <label>
                <span>${escapeHtml(item.label)}</span>
                <input name="${item.name}" type="${item.type || "text"}" value="${escapeHtml(value)}" placeholder="${escapeHtml(item.placeholder)}">
            </label>
        `;
    }).join("");
}

function renderPreview() {
    const preview = document.getElementById("proposalPreview");
    const toolsMount = document.getElementById("brokerToolsMount");
    const chips = getPreviewChips();
    const proposalBlocks = getOrderedPreviewBlocks().filter(block => !isBrokerToolBlock(block.type));
    const brokerToolBlocks = getOrderedPreviewBlocks().filter(block => isBrokerToolBlock(block.type));
    const sections = proposalBlocks
        .map(renderPreviewBlock)
        .filter(Boolean)
        .join("");
    const brokerTools = brokerToolBlocks
        .map(renderBrokerToolBlock)
        .filter(Boolean)
        .join("");

    preview.innerHTML = `
        <div class="document-card">
            <header class="document-cover">
                <div>
                    <p class="memo-label">Private Investment Memo</p>
                    <span class="document-badge">${escapeHtml(state.currentProposal.proposalType)}</span>
                    <h1>${escapeHtml(state.currentProposal.title || "Untitled Broker Proposal")}</h1>
                    <p>${escapeHtml(getPrimaryPropertyLine())}</p>
                </div>
                <div class="cover-meta">
                    ${coverMetaRow("Prepared for", getPreparedFor())}
                    ${coverMetaRow("Prepared by", getAdvisorName())}
                    ${coverMetaRow("Date", formatDate(new Date().toISOString()))}
                </div>
            </header>
            ${chips.length ? `<div class="summary-chips kpi-grid">${chips.join("")}</div>` : ""}
            ${proposalSection("Executive Summary", `<div class="executive-card">${escapeHtml(getDocumentIntro())}</div>`, "executive-section")}
            ${sections || `<p class="empty-preview">Add blocks and fill fields to build the proposal preview.</p>`}
            ${renderAdvisorFooter()}
            ${brokerTools ? `<section class="broker-followup-appendix"><h2>Broker Follow-up Appendix</h2>${brokerTools}</section>` : ""}
        </div>
    `;

    toolsMount.innerHTML = brokerTools || `<div class="empty-card"><h3>No broker tools yet</h3><p>Add WhatsApp Follow-up or Email Draft blocks to create copy-ready messages.</p></div>`;
}

function getOrderedPreviewBlocks() {
    const order = getRecommendedBlocks(state.currentProposal.proposalType);
    return [...state.currentProposal.blocks].sort((a, b) => {
        return order.indexOf(a.type) - order.indexOf(b.type);
    });
}

function renderPreviewBlock(block) {
    const template = blockTemplates[block.type];
    const photoHtml = block.fields.propertyPhoto
        ? `<img class="document-photo" src="${escapeHtml(block.fields.propertyPhoto)}" alt="Property photo">`
        : "";
    const rows = template.fields
        .map(item => [item.label, cleanDisplayValue(item.name, block.fields[item.name]), item.name])
        .filter(([label, value, fieldName]) => value && label !== "Upload property photo" && !isInternalProposalField(fieldName));

    if (!rows.length && !photoHtml && block.type !== "risksRedFlags" && block.type !== "recommendedNextSteps") return "";

    if (template.messageBlock) {
        const value = rows[0][1];
        const boxClass = block.type === "emailDraft" ? "email-card" : "phone-card";
        return proposalSection(template.previewTitle, `<div class="${boxClass}">${escapeHtml(value)}</div>`, "message-section");
    }

    if (template.table) {
        return proposalSection(template.previewTitle, `${photoHtml}${renderTable(rows)}`, "table-section");
    }

    if (["whyThisFits", "investmentRationale"].includes(block.type)) {
        return proposalSection(template.previewTitle, `${photoHtml}${renderFitCards(rows)}`, "fit-section");
    }

    if (block.type === "risksRedFlags") {
        return proposalSection(template.previewTitle, renderRiskCards(rows), "risk-section");
    }

    if (block.type === "recommendedNextSteps") {
        return proposalSection(template.previewTitle, renderStepCards(rows), "steps-section");
    }

    return proposalSection(template.previewTitle, `${photoHtml}${renderDetailList(rows)}`, `${block.type}-section detail-section`);
}

function renderBrokerToolBlock(block) {
    const template = blockTemplates[block.type];
    const rows = template.fields
        .map(item => [item.label, cleanDisplayValue(item.name, block.fields[item.name]), item.name])
        .filter(([, value]) => value);

    if (!rows.length) return "";

    const value = rows[0][1];
    const boxClass = block.type === "emailDraft" ? "email-card" : "phone-card";
    return `
        <section class="broker-tool-card ${block.type}">
            <h3>${escapeHtml(template.previewTitle)}</h3>
            <div class="${boxClass}">${escapeHtml(value)}</div>
        </section>
    `;
}

function isBrokerToolBlock(type) {
    return ["whatsappFollowUp", "emailDraft", "emailWhatsappPitch"].includes(type);
}

function proposalSection(title, content, className = "") {
    return `
        <section class="proposal-section ${className}">
            <h2>${escapeHtml(title)}</h2>
            ${content}
        </section>
    `;
}

function renderDetailList(rows) {
    const noteFieldNames = ["clientNotes", "notes", "verify", "otherNotes"];
    const detailRows = rows.filter(([, , fieldName]) => !noteFieldNames.includes(fieldName));
    const noteRows = rows.filter(([, , fieldName]) => noteFieldNames.includes(fieldName));

    return `
        <div class="detail-list">
            ${detailRows.map(([label, value, fieldName]) => `
                <div>
                    <strong>${escapeHtml(label)}</strong>
                    <p>${renderFieldValue(fieldName, value)}</p>
                </div>
            `).join("")}
        </div>
        ${noteRows.map(([label, value, fieldName]) => `
            <div class="note-box">
                <strong>${escapeHtml(label)}</strong>
                <p>${renderFieldValue(fieldName, value)}</p>
            </div>
        `).join("")}
    `;
}

function renderFitCards(rows) {
    const cards = getInvestmentFitCards();
    return `
        <div class="fit-card-grid">
            ${cards.map(card => `
                <div class="fit-card">
                    <span>${escapeHtml(card.title)}</span>
                    <p>${escapeHtml(card.text)}</p>
                </div>
            `).join("")}
        </div>
    `;
}

function renderRiskCards(rows) {
    const standardRisks = getRiskReviewItems();
    if (!rows.length) {
        rows = standardRisks.map(item => [item.title, item.text, "risk"]);
    }

    return `
        <div class="risk-card-grid">
            ${rows.map(([label, value, fieldName]) => `
                <div class="risk-card">
                    <strong>${escapeHtml(label)}</strong>
                    <p>${renderFieldValue(fieldName, value)}</p>
                </div>
            `).join("")}
        </div>
    `;
}

function renderStepCards(rows) {
    const steps = getRecommendedStepCards(rows);
    return `
        <div class="step-card-grid">
            ${steps.map((step, index) => `
                <div class="step-card">
                    <span>${index + 1}</span>
                    <strong>${escapeHtml(step.title)}</strong>
                    <p>${escapeHtml(step.text)}</p>
                </div>
            `).join("")}
        </div>
    `;
}

function renderTable(rows) {
    return `
        <table>
            <tbody>
                ${rows.map(([label, value, fieldName]) => `<tr><th>${escapeHtml(label)}</th><td>${renderFieldValue(fieldName, value)}</td></tr>`).join("")}
            </tbody>
        </table>
    `;
}

function renderFieldValue(fieldName, value) {
    if (fieldName === "mapLink") {
        return `<a href="${escapeHtml(value)}" target="_blank" rel="noopener noreferrer">${escapeHtml(value)}</a>`;
    }

    return escapeHtml(value);
}

function addBlock(type) {
    const alreadyAdded = state.currentProposal.blocks.some(block => block.type === type);
    if (alreadyAdded) {
        showSaveMessage("Block already added");
        return;
    }

    const block = createBlock(type);
    hydrateSmartBlock(block);
    state.currentProposal.blocks.unshift(block);
    updateProposal();
    setTimeout(() => {
        document.getElementById("activeBlocks").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
}

function removeBlock(blockId) {
    state.currentProposal.blocks = state.currentProposal.blocks.filter(block => block.id !== blockId);
    updateProposal();
}

function toggleBlock(blockId) {
    const block = findBlock(blockId);
    if (!block) return;
    block.collapsed = !block.collapsed;
    updateProposal();
}

function updateBlockField(blockId, fieldName, value) {
    const block = findBlock(blockId);
    if (!block) return;

    block.fields[fieldName] = value;
    if (isSmartMessageBlock(block.type)) {
        block.autoFields = block.autoFields || {};
        block.autoFields[fieldName] = false;
    }
    hydrateSmartTextBlocks();
    updateProposalLive(blockId);
}

function updateProposalLive(blockId) {
    state.currentProposal.updatedAt = new Date().toISOString();
    syncTopBar();
    renderPreview();
    showEditingState(blockId);
}

function updateBlockFile(blockId, fieldName, file) {
    const block = findBlock(blockId);
    if (!block || !file) return;

    const reader = new FileReader();
    reader.onload = () => {
        block.fields[fieldName] = reader.result;
        updateProposal();
    };
    reader.readAsDataURL(file);
}

function updateProposal() {
    state.currentProposal.updatedAt = new Date().toISOString();
    syncTopBar();
    renderBuilder();
}

function collapseSetupIfComplete() {
    if (isSetupComplete()) state.setupExpanded = false;
}

function saveDraft() {
    collapseSetupIfComplete();
    saveCurrentProposal();
    updateProposal();
    showSaveMessage("Proposal saved locally");
}

function saveCurrentProposal() {
    const proposals = loadProposals();
    const existing = proposals.some(proposal => proposal.id === state.currentProposal.id);
    const nextProposals = existing
        ? proposals.map(proposal => proposal.id === state.currentProposal.id ? state.currentProposal : proposal)
        : [state.currentProposal, ...proposals];

    saveProposals(nextProposals);
}

function openProposal(id) {
    const proposal = loadProposals().find(item => item.id === id);
    if (!proposal) return;

    state.currentProposal = proposal;
    state.setupExpanded = false;
    showBuilder();
}

function duplicateProposal(id) {
    const proposals = loadProposals();
    const proposal = proposals.find(item => item.id === id);
    if (!proposal) return;

    const copy = JSON.parse(JSON.stringify(proposal));
    copy.id = createId();
    copy.title = `${copy.title || "Untitled Proposal"} Copy`;
    copy.status = "Draft";
    copy.createdAt = new Date().toISOString();
    copy.updatedAt = new Date().toISOString();

    saveProposals([copy, ...proposals]);
    renderHome();
}

function deleteProposal(id) {
    const confirmed = window.confirm("Delete this proposal from this browser?");
    if (!confirmed) return;

    saveProposals(loadProposals().filter(proposal => proposal.id !== id));
    renderHome();
}

function loadProposals() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
}

function saveProposals(proposals) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(proposals));
}

function getPreviewChips() {
    const chips = [
        ["Sale Price", getFirstFieldValue(["salePrice"])],
        ["Area", getFirstFieldValue(["area", "areaRequired"])],
        ["Expected Annual Rental Income", getFirstFieldValue(["annualIncome"])],
        ["Expected Yield", getFirstFieldValue(["expectedYield", "yield", "targetYield"])],
        ["Occupancy Status", getFirstFieldValue(["occupancyStatus", "status"])],
        ["Expected Monthly Rent", getFirstFieldValue(["expectedMonthlyRent", "expectedRent", "currentRent"])]
    ];

    return chips
        .filter(([, value]) => value)
        .map(([label, value], index) => `
            <div class="summary-chip ${index === 0 ? "is-primary" : ""}">
                <span>${escapeHtml(label)}</span>
                <strong>${escapeHtml(cleanDisplayValue(label, value))}</strong>
            </div>
        `);
}

function isInternalProposalField(fieldName) {
    return ["propertyNotes", "brokerNote", "marketingNotes", "remarks"].includes(fieldName);
}

function getDocumentIntro() {
    const client = getClientName(state.currentProposal);
    const company = getCompanyName(state.currentProposal);
    const type = state.currentProposal.proposalType;
    const property = getFieldFromProposal(state.currentProposal, "propertyName");
    const location = getFieldFromProposal(state.currentProposal, "location");
    const asset = property || "the shortlisted asset";
    const market = location || "the target market";
    const salePrice = cleanDisplayValue("salePrice", getFirstFieldValue(["salePrice"])) || "the indicated sale price";
    const annualIncome = cleanDisplayValue("annualIncome", getFirstFieldValue(["annualIncome"])) || "the projected rental income";
    const yieldValue = getFirstFieldValue(["expectedYield", "yield", "targetYield"]) || "the target yield";

    if (type === "Investment Sale Proposal") {
        return `This proposal presents ${asset} as a fitted commercial office investment opportunity in ${market}. The asset aligns with the client's requirement for a ready commercial office with rental income potential, strong accessibility, and medium-term capital appreciation prospects. At ${salePrice}, with ${annualIncome} and an indicated yield of ${yieldValue}, the opportunity should be evaluated further through title verification, service charge review, parking confirmation, lease review, and rental comparable analysis.`;
    }

    if (type === "Landlord Property Pitch") {
        return `This proposal positions ${asset} in ${market} for targeted tenant outreach. The property should be marketed around its location advantages, tenant suitability, expected commercials, and readiness for occupation, with final terms confirmed before circulation.`;
    }

    return `This proposal presents ${asset} in ${market} as a practical leasing option for ${client || "the client"}${company ? ` at ${company}` : ""}. The recommendation is based on location fit, area suitability, commercial terms, possession timeline, and points requiring verification before closure.`;
}

function getRiskReviewItems() {
    return [
        { title: "Title / ownership verification", text: "Review title deed, ownership status, authority records, and transfer eligibility." },
        { title: "Service charges / CAM", text: "Confirm annual service charges, maintenance obligations, and any owner association dues." },
        { title: "Parking allocation", text: "Verify allocated parking, visitor parking access, and any paid parking conditions." },
        { title: "Fit-out / MEP condition", text: "Inspect AC, MEP, ceiling, flooring, pantry, washroom access, and fit-out condition." },
        { title: "Rental comparables", text: "Validate achievable rent against recent leases and current competing availability." },
        { title: "Exit liquidity", text: "Assess likely resale demand, buyer pool depth, and future leasing flexibility." }
    ];
}

function getInvestmentFitCards() {
    const location = getFieldFromProposal(state.currentProposal, "location") || "the target micro-market";
    const property = getFieldFromProposal(state.currentProposal, "propertyName") || "the asset";
    const propertyType = getFieldFromProposal(state.currentProposal, "propertyType") || "commercial office asset";
    const area = cleanDisplayValue("area", getFirstFieldValue(["area", "areaRequired"])) || "the available area";
    const salePrice = cleanDisplayValue("salePrice", getFirstFieldValue(["salePrice"])) || "the sale price";
    const annualIncome = cleanDisplayValue("annualIncome", getFirstFieldValue(["annualIncome"])) || "the expected annual rental income";
    const yieldValue = getFirstFieldValue(["expectedYield", "yield", "targetYield"]) || "the expected yield";

    return [
        {
            title: "Location Fit",
            text: `${location} offers accessibility, tenant demand, and proximity advantages that can support demand from SMEs, consulting firms, trading companies, and professional services occupiers.`
        },
        {
            title: "Asset Fit",
            text: `${property} provides a ${propertyType} format with ${area}, making it easier to position than larger or shell-and-core inventory when tenant demand favors manageable, ready commercial spaces.`
        },
        {
            title: "Investment Fit",
            text: `At ${annualIncome} against ${salePrice}, the asset indicates an estimated gross yield of ${yieldValue}, subject to service charges, vacancy, transfer costs, and final transaction expenses.`
        }
    ];
}

function getRecommendedStepCards(rows) {
    const customSteps = rows.map(([, value]) => value).filter(Boolean);
    if (customSteps.length) {
        return customSteps.map((value, index) => ({
            title: ["Verify Documents", "Confirm Charges", "Inspect Asset", "Validate Rent", "Submit Offer"][index] || `Step ${index + 1}`,
            text: value
        }));
    }

    return [
        { title: "Verify Documents", text: "Review title deed, ownership status, building approvals, and authority records." },
        { title: "Confirm Charges", text: "Check service charges, parking allocation, transfer costs, and any owner association dues." },
        { title: "Inspect Asset", text: "Inspect fit-out, AC, MEP, pantry/washroom access, and physical condition." },
        { title: "Validate Rent", text: "Compare achievable rent against recent leases and current market availability." },
        { title: "Submit Offer", text: "Proceed with offer subject to due diligence and final commercial confirmation." }
    ];
}

function coverMetaRow(label, value) {
    if (!value) return "";
    return `
        <div>
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
        </div>
    `;
}

function getPrimaryPropertyLine() {
    const property = getFieldFromProposal(state.currentProposal, "propertyName");
    const location = getFieldFromProposal(state.currentProposal, "location");
    if (property && location) return `${property} - ${location}`;
    if (property) return property;
    if (location) return location;
    return "Premium real estate proposal memo";
}

function getPreparedFor() {
    const client = getClientName(state.currentProposal);
    const company = getCompanyName(state.currentProposal);
    if (client && company) return `${client}, ${company}`;
    return client || company || "";
}

function getAdvisorName() {
    return getFieldFromProposal(state.currentProposal, "advisorName") || "Broker Proposal Builder";
}

function renderAdvisorFooter() {
    return `
        <footer class="advisor-footer">
            <div>
                <span>Prepared by</span>
                <strong>${escapeHtml(getAdvisorName())}</strong>
            </div>
            <p>Review all commercial terms, ownership documents, taxes, and building charges before final closure.</p>
        </footer>
    `;
}

function getClientName(proposal) {
    return getFieldFromProposal(proposal, "clientName");
}

function getCompanyName(proposal) {
    return getFieldFromProposal(proposal, "companyName");
}

function getFirstFieldValue(fieldNames) {
    for (const fieldName of fieldNames) {
        const value = getFieldFromProposal(state.currentProposal, fieldName);
        if (value) return value;
    }
    return "";
}

function getFieldFromProposal(proposal, fieldName) {
    if (!proposal || !proposal.blocks) return "";

    for (const block of proposal.blocks) {
        if (block.fields && block.fields[fieldName]) return block.fields[fieldName];
    }

    return "";
}

function hydrateSmartTextBlocks() {
    state.currentProposal.blocks.forEach(hydrateSmartBlock);
}

function hydrateSmartBlock(block) {
    block.autoFields = block.autoFields || {};

    if (block.type === "whatsappFollowUp" && (!block.fields.message || block.autoFields.message)) {
        block.fields.message = buildWhatsappMessage();
        block.autoFields.message = true;
    }

    if (block.type === "emailDraft" && (!block.fields.email || block.autoFields.email)) {
        block.fields.email = buildEmailDraft();
        block.autoFields.email = true;
    }

    if (block.type === "emailWhatsappPitch" && (!block.fields.pitch || block.autoFields.pitch)) {
        block.fields.pitch = buildLandlordPitch();
        block.autoFields.pitch = true;
    }
}

function isSmartMessageBlock(type) {
    return ["whatsappFollowUp", "emailDraft", "emailWhatsappPitch"].includes(type);
}

function buildWhatsappMessage() {
    const client = getFieldFromProposal(state.currentProposal, "clientName") || "Client";
    const property = getFieldFromProposal(state.currentProposal, "propertyName") || "the shortlisted property";
    const location = getFieldFromProposal(state.currentProposal, "location") || "the proposed location";
    const area = cleanDisplayValue("area", getFirstFieldValue(["area", "areaRequired"])) || "To be confirmed";
    const salePrice = cleanDisplayValue("salePrice", getFirstFieldValue(["salePrice"])) || cleanDisplayValue("rent", getFirstFieldValue(["rent", "expectedRent"])) || "To be confirmed";
    const annualIncome = cleanDisplayValue("annualIncome", getFirstFieldValue(["annualIncome"])) || "To be confirmed";
    const yieldValue = getFirstFieldValue(["expectedYield", "yield", "targetYield"]) || "To be confirmed";

    return `Hi ${client}, sharing a quick investment summary for ${property}.

Location: ${location}
Area: ${area}
Sale Price / Commercials: ${salePrice}
Annual Income: ${annualIncome}
Expected Yield: ${yieldValue}

The opportunity should be reviewed further for title, service charges, parking, lease status, and current rental comparables.

Next step: Please confirm if you would like me to arrange inspection and due diligence checks.`;
}

function buildEmailDraft() {
    const client = getFieldFromProposal(state.currentProposal, "clientName") || "Client";
    const property = getFieldFromProposal(state.currentProposal, "propertyName") || "the shortlisted property";
    const location = getFieldFromProposal(state.currentProposal, "location") || "the proposed location";

    return `Subject: ${property} proposal for your real estate requirement

Dear ${client},

As discussed, please find a proposal for ${property} at ${location}.

The property has been reviewed against your requirement, location preference, budget, and timeline. I have also highlighted the key commercial terms, fit points, risks to verify, and recommended next steps.

Recommended next step:
Let us verify the pending terms and schedule a site visit or commercial discussion.

Regards,
Your Real Estate Advisor`;
}

function buildLandlordPitch() {
    const property = getFieldFromProposal(state.currentProposal, "propertyName") || "your property";
    const location = getFieldFromProposal(state.currentProposal, "location") || "the location";

    return `Sharing a landlord-side positioning note for ${property} at ${location}.

The property can be marketed to suitable tenants by highlighting its location, layout, amenities, commercial terms, and availability.

Recommended next step: confirm expected rent, tenant profile, brokerage terms, and marketing permissions before outreach.`;
}

function copyFullProposal() {
    copyText(buildFullProposalText(), "copyFullBtn", "Copy Full Proposal");
}

function copyWhatsapp() {
    copyText(getMessageText(["whatsappFollowUp", "emailWhatsappPitch"]), "copyWhatsappBtn", "Copy WhatsApp");
}

function copyEmail() {
    copyText(getMessageText(["emailDraft", "emailWhatsappPitch"]), "copyEmailBtn", "Copy Email");
}

function copyBlockMessage(blockId) {
    const block = findBlock(blockId);
    if (!block) return;

    const template = blockTemplates[block.type];
    const firstField = template.fields[0];
    const button = document.querySelector(`[data-action="copyBlock"][data-block-id="${blockId}"]`);
    copyRawText(block.fields[firstField.name] || "").then(() => {
        if (!button) return;
        const originalLabel = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => {
            button.textContent = originalLabel;
        }, 1300);
    });
}

function getMessageText(types) {
    for (const type of types) {
        const block = state.currentProposal.blocks.find(item => item.type === type);
        if (block) {
            const firstField = blockTemplates[type].fields[0];
            if (block.fields[firstField.name]) return block.fields[firstField.name];
        }
    }
    return buildWhatsappMessage();
}

function buildFullProposalText() {
    const lines = [
        state.currentProposal.title,
        state.currentProposal.proposalType,
        ""
    ];

    state.currentProposal.blocks.forEach(block => {
        if (isBrokerToolBlock(block.type)) return;
        const template = blockTemplates[block.type];
        const rows = template.fields
            .map(item => [item.label, cleanDisplayValue(item.name, block.fields[item.name])])
            .filter(([, value]) => value);

        if (!rows.length) return;
        lines.push(template.previewTitle);
        rows.forEach(([label, value]) => lines.push(`${label}: ${value}`));
        lines.push("");
    });

    return lines.join("\n");
}

function copyText(text, buttonId, originalLabel) {
    copyRawText(text).then(() => {
        if (!buttonId) return;
        const button = document.getElementById(buttonId);
        button.textContent = "Copied";
        setTimeout(() => {
            button.textContent = originalLabel;
        }, 1300);
    });
}

function copyRawText(text) {
    return navigator.clipboard
        ? navigator.clipboard.writeText(text)
        : fallbackCopyText(text);
}

function fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    return Promise.resolve();
}

function cleanDisplayValue(fieldName, value) {
    if (!value) return "";
    if (fieldName === "propertyPhoto") return "";
    if (fieldName === "mapLink") return value;
    if (fieldName.toLowerCase().includes("area")) return formatArea(value);
    if (isMoneyField(fieldName)) return formatMoney(value);
    return value;
}

function isMoneyField(fieldName) {
    return /budget|rent|cam|price|income|deposit|brokerage|commercial/i.test(fieldName);
}

function formatArea(value) {
    if (!value) return "";
    if (/sq\.? ?ft|sqft/i.test(value)) return value;
    if (/\d/.test(value)) return `${value} sq.ft`;
    return value;
}

function formatMoney(value) {
    if (!value) return "";
    if (/inr|rs\.?|aed|dirham/i.test(value)) return value;
    if (!/\d/.test(value)) return value;
    return `${getCurrencyCode()} ${value}`;
}

function getCurrencyCode() {
    const text = JSON.stringify(state.currentProposal || {});
    return /dubai|uae|aed|dirham/i.test(text) ? "AED" : "INR";
}

function findBlock(blockId) {
    return state.currentProposal.blocks.find(block => block.id === blockId);
}

function createId() {
    return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatDate(value) {
    if (!value) return "Not saved";
    return new Date(value).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

function showSaveMessage(message) {
    const element = document.getElementById("saveMessage");
    element.textContent = message;
    setTimeout(() => {
        element.textContent = "";
    }, 1600);
}

function showEditingState(blockId) {
    const message = document.getElementById("saveMessage");
    message.textContent = "Editing...";

    document.querySelectorAll(".editor-block").forEach(block => {
        block.classList.toggle("is-editing", block.dataset.blockId === blockId);
    });

    clearTimeout(showEditingState.timer);
    showEditingState.timer = setTimeout(() => {
        message.textContent = "";
        document.querySelectorAll(".editor-block").forEach(block => {
            block.classList.remove("is-editing");
        });
    }, 900);
}

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
