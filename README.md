# Broker Proposal Builder

Broker Proposal Builder is a copyable template repo for real estate brokers, leasing professionals, property advisors, and realtors who want a simple proposal generator.

Use it to build client-ready leasing proposals, investment sale memos, and landlord property pitches from client notes, property details, and deal numbers.

This is a GitHub template repository. Click **Use this template** on GitHub to create your own copy, then customize it for your market, brokerage, and proposal style.

It runs with only HTML, CSS, JavaScript, browser `localStorage`, and browser Print / Save as PDF.

This project was adapted and customized from an open-source proposal generator concept and rebuilt for real estate broker workflows.

## Use This Template

1. Click **Use this template** on GitHub.
2. Create your own copy.
3. Open the project in Codex, Google Antigravity, VS Code, or any editor.
4. Open `index.html` or run a local server.
5. Start customizing proposal types, blocks, and PDF design.

## What This Is

Broker Proposal Builder is a browser-based starter kit for creating polished real estate proposals without a backend, login, database, or paid API.

Open the app, add proposal blocks, fill in property/client details, save drafts locally, and print or save the proposal as a PDF.

## Best For

- Commercial real estate brokers
- Leasing professionals
- Property advisors
- Investment sales teams
- Landlord representatives
- Realtors learning AI coding

## What It Can Create

- Office leasing proposals
- Warehouse leasing proposals
- Retail leasing proposals
- Investment sale proposals
- Landlord property pitch documents
- WhatsApp follow-up drafts for brokers
- Email follow-up drafts for brokers

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

## What You Can Customize

- App name
- Logo initials
- Proposal types
- Proposal blocks
- Field labels
- PDF design
- Accent color
- Sample data
- Advisor details
- Currency formatting

Most beginner-friendly changes happen in these files:

- `index.html` controls the page structure.
- `style.css` controls the visual design and PDF styling.
- `scripts.js` controls proposal types, blocks, fields, saving, and preview generation.

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

## Demo Workflow

1. Click `Create New Proposal`.
2. Enter a proposal title.
3. Choose a proposal type.
4. Add proposal blocks such as `Property Snapshot`, `Investment Snapshot`, or `Risks / Red Flags`.
5. Fill in the fields.
6. Review the live client proposal preview.
7. Save the draft locally.
8. Print or save the proposal as a PDF.

## Tutorial Workflow

1. Copy template.
2. Open in Codex.
3. Ask Codex to explain the repo.
4. Customize proposal types.
5. Edit proposal blocks.
6. Change PDF design.
7. Test sample proposal.
8. Save as PDF.
9. Deploy if needed.

## Video Tutorial Companion Guide

The guide is available through GitHub Pages after Pages is enabled from the `/docs` folder.

To publish the guide, go to Settings -> Pages -> Deploy from a branch -> main -> /docs.

## Tech Stack

- HTML
- CSS
- JavaScript
- Browser `localStorage`
- Browser print / Save as PDF

## Not Included

- No backend
- No login
- No cloud database
- No payment system
- No AI API by default
- No legal/commercial advice
- Browser `localStorage` only

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

## Disclaimer

This tool is for proposal generation and educational purposes. Users should verify all property details, legal terms, title documents, taxes, service charges, and commercial assumptions before sharing with clients or making decisions.

## Before Recording Your Tutorial

- Repo is public
- Repo is marked as template
- README is clear
- LICENSE is present
- Sample inputs are added
- App runs locally
- PDF prints cleanly
- Browser headers/footers are turned off before saving PDF

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
