# Broker Proposal Assistant Documentation

## Overview

This project is a single-page real estate proposal assistant. It helps a broker collect client requirements, enter property details, choose an output format, and review a generated proposal before exporting or copying text.

The app uses:

- `index.html` for the page structure and form fields
- `style.css` for the modern two-column layout and visual design
- `scripts.js` for step navigation, live preview generation, WhatsApp copy, and PDF export
- `data.json` as a small reference list of proposal types

## Current Step Flow

1. **Proposal Type**: Broker selects the proposal category.
2. **Client Requirement**: Broker enters client name, company, city, area, budget, timeline, notes, and pasted WhatsApp/email requirements.
3. **Property Details**: Broker enters property name, location, area, commercial terms, highlights, risks, and pasted property notes.
4. **Generate Proposal**: Broker chooses WhatsApp, email, or PDF output and can add advisor contact details.
5. **Review & Export**: Broker reviews the live proposal, exports PDF, copies WhatsApp text, or starts over.

## Main JavaScript Sections

- `proposalTypes`: Controls the Step 1 proposal type cards.
- `state`: Stores the current step and all form data.
- `collectFormData()`: Reads values from the form into `state`.
- `validateStep()`: Checks required fields before moving forward.
- `showStep()`: Switches between the five app steps.
- `updatePreview()`: Rebuilds the right-side live proposal preview.
- `executiveSummary()` and `whyItFits()`: Generate broker-style narrative sections.
- `commercialTermsTable()`: Builds the commercial terms table.
- `whatsappMessage()` and `emailDraft()`: Generate client-ready communication drafts.
- `exportPdf()`: Creates a PDF using jsPDF.

## Beginner Customization Guide

To add a new proposal type:

1. Open `scripts.js`.
2. Add a new object to the `proposalTypes` array with `id`, `name`, and `description`.

To add a new field:

1. Add the label and input in the correct step inside `index.html`.
2. Add the field to `collectFormData()` in `scripts.js`.
3. Add it to `updatePreview()` or one of the message helper functions if it should appear in the final proposal.

To change the design:

1. Open `style.css`.
2. Start with the CSS variables at the top for colors.
3. Adjust `.builder-layout`, `.form-grid`, inputs, and `.proposal-section` for layout and spacing.

## Removed Old Logic

The previous agency-style service and package selection has been replaced. The app no longer asks users to choose web services, marketing packages, predefined plans, or total cost estimates.
