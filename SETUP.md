# Setup Guide

This guide is for real estate professionals who want to run and customize the Broker Proposal Builder.

## Option 1: Download The Repo

1. Open the GitHub repo.
2. Click `Code`.
3. Click `Download ZIP`.
4. Unzip the folder.
5. Open the folder on your computer.

## Option 2: Clone The Repo

If you use Git:

```bash
git clone https://github.com/PropTech-ops/broker-proposal-generator.git
cd broker-proposal-generator
```

## Open Directly In Browser

Double-click:

```text
index.html
```

This works because the project is HTML, CSS, and JavaScript only.

## Run With A Local Server

This is better for testing browser features.

```bash
cd project-folder
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/index.html
```

## Open In Codex / Google Antigravity / VS Code

1. Open your AI coding tool.
2. Choose `Open Folder`.
3. Select this project folder.
4. Ask the tool to explain or customize the app.

Useful first prompt:

```text
Explain this repo like I am a real estate professional, not a developer.
```

## Test A Sample Proposal

1. Open the app.
2. Click `Create New Proposal`.
3. Choose `Investment Sale Proposal`.
4. Add these blocks:
   - Client Investment Requirement
   - Property Snapshot
   - Investment Snapshot
   - Rental Income / Yield
   - Investment Rationale
   - Risks / Red Flags
   - Recommended Next Steps
5. Fill in sample details from `docs/sample-inputs.md`.
6. Click `Save Draft`.
7. Open the `Preview` tab.

## Print A Clean PDF

1. Click `Print / Save PDF`.
2. Choose `Save as PDF`.
3. Open `More Settings`.
4. Turn off `Headers and Footers`.
5. Save the PDF.

Important: browsers add page date, title, file path, and page numbers unless you turn off `Headers and Footers`.
