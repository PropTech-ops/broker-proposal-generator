# Broker Proposal Builder

A simple real estate proposal builder that helps brokers create client-ready proposal PDFs from client requirements, property notes, and investment or leasing details.

This project was adapted and customized from an open-source proposal generator concept and rebuilt for real estate broker workflows.

## What This Is

Broker Proposal Builder is a browser-based tool for creating polished real estate proposals without a backend, login, database, or paid API.

It works as a simple starter kit: open the app, add proposal blocks, fill in property/client details, save drafts locally, and print or save the proposal as a PDF.

## Who It Is For

- Commercial real estate brokers
- Leasing consultants
- Investment sales advisors
- Landlord representatives
- Boutique brokerages
- Realtors who want a DIY proposal tool
- Non-technical real estate professionals learning to customize apps with AI coding tools

## What It Can Create

- Office leasing proposals
- Warehouse leasing proposals
- Retail leasing proposals
- Investment sale proposals
- Landlord property pitch documents
- WhatsApp follow-up drafts
- Email follow-up drafts

## Key Features

- Block-based proposal builder
- Proposal types for leasing, investment, and landlord pitches
- Client proposal preview
- Editorial investment memo print/PDF design
- Browser print / Save as PDF
- Local draft saving with `localStorage`
- Open, duplicate, and delete saved proposals
- Broker tools for WhatsApp and email drafts
- Optional broker follow-up appendix in PDF
- Responsive layout for desktop, tablet, and mobile
- HTML, CSS, and JavaScript only

## Demo Workflow

1. Click `Create New Proposal`.
2. Enter a proposal title.
3. Choose a proposal type.
4. Add proposal blocks such as `Property Snapshot`, `Investment Snapshot`, or `Risks / Red Flags`.
5. Fill in the fields.
6. Review the live client proposal preview.
7. Save the draft locally.
8. Print or save the proposal as a PDF.

## Tech Stack

- HTML
- CSS
- JavaScript
- Browser `localStorage`
- Browser print / Save as PDF

No backend, login, database, or API is required.

## How To Run Locally

You can open `index.html` directly in your browser.

For the best local testing experience, run a simple local server:

```bash
cd project-folder
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/index.html
```

## How To Save Proposals

Saved proposals are stored in your browser using `localStorage`.

This means:

- Drafts stay in the same browser on the same device.
- No account is needed.
- Clearing browser storage can delete saved proposals.
- Saved proposals are not synced across devices.

## How To Print / Save As PDF

1. Open or create a proposal.
2. Click `Print / Save PDF`.
3. In the browser print dialog, choose `Save as PDF`.
4. Open `More Settings`.
5. Turn off `Headers and Footers` for a clean PDF.
6. Save the PDF.

## How To Customize

Most changes happen in these files:

- `index.html` controls the page structure.
- `style.css` controls the visual design and PDF styling.
- `scripts.js` controls proposal types, blocks, fields, saving, and preview generation.

Common customizations:

- App name
- Logo initials
- Accent color
- Proposal types
- Proposal blocks
- Field labels
- PDF design
- Advisor details
- Currency
- Example sample data

Example: to change the accent color, open `style.css` and search for:

```css
--primary
```

Example: to change proposal types, open `scripts.js` and search for:

```js
const proposalTypes
```

Example: to change proposal blocks, open `scripts.js` and search for:

```js
const blockTemplates
```

## How To Use This Repo With Codex

Open this folder in Codex, Google Antigravity, VS Code, or another AI coding tool and ask it to make focused changes.

Good example prompts:

- "Explain this repo like I am a real estate professional, not a developer."
- "Customize this proposal builder for Dubai investment sales."
- "Add a new proposal block for parking and building amenities."
- "Change the PDF design to match my brokerage brand colors."

See `PROMPTS.md` for copy-paste prompts.

## Suggested Use Cases

- Dubai office investment memo
- Commercial leasing proposal
- Landlord property pitch
- Retail shop proposal
- Warehouse lease recommendation
- Broker follow-up package after a site visit

## Known Limitations

- Saves are browser-only and device-only.
- There is no cloud sync.
- There is no login.
- There is no database.
- There is no file upload server.
- Large property photos can use browser storage quickly.
- Browser print headers/footers must be turned off manually.

## Roadmap

Possible future improvements:

- Export/import saved proposals
- Advisor profile settings
- More proposal templates
- Optional cloud database
- Optional AI parsing for messy notes
- Deployment to Vercel or Netlify
- PDF generation through a backend service

## Credits / Origin Note

This project was adapted and customized from an open-source proposal generator concept and rebuilt for real estate broker workflows.

The original repository license is MIT and includes the copyright notice in `LICENSE`.

## License

MIT License. See `LICENSE`.

## Recommended GitHub Description

DIY real estate proposal builder for brokers -- create client-ready leasing and investment proposal PDFs using HTML, CSS, JavaScript, and localStorage.

## Recommended GitHub Topics

- real-estate
- proptech
- proposal-generator
- broker-tools
- localstorage
- html-css-javascript
- ai-coding
- codex
- commercial-real-estate
