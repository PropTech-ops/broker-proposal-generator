# Customization Guide

This guide explains how to customize the Broker Proposal Builder without needing a backend.

## Main Files

- `index.html`: page layout and visible containers
- `style.css`: app design and PDF design
- `scripts.js`: proposal types, blocks, fields, localStorage, and preview logic

## Change The App Name

Open `index.html` and search for:

```text
Broker Proposal Builder
```

Replace it with your app or brokerage tool name.

## Change Logo Initials

Open `index.html` and search for:

```text
BP
```

Replace it with your initials, for example:

```text
RS
```

## Change Accent Color

Open `style.css` and search for:

```css
--primary
```

Change the color value.

Example:

```css
--primary: #d6f866;
```

## Change Proposal Types

Open `scripts.js` and search for:

```js
const proposalTypes
```

Add, remove, or rename proposal types.

## Change Proposal Blocks

Open `scripts.js` and search for:

```js
const blockTemplates
```

Each block has:

- `icon`
- `title`
- `helper`
- `previewTitle`
- `fields`

## Change Field Labels

Open `scripts.js` and search for the field label.

Example:

```js
field("salePrice", "Sale price", "text", "Example: 8 Cr")
```

Change `"Sale price"` to your preferred label.

## Add A New Block

1. Open `scripts.js`.
2. Add a new entry inside `blockTemplates`.
3. Add the block name to the correct recommended block list:
   - `leasingBlocks`
   - `investmentBlocks`
   - `landlordBlocks`

## Change PDF Design

Open `style.css` and search for:

```css
Editorial Investment Memo
```

This section controls the client-facing PDF style.

## Change Advisor Details

Advisor details are currently handled through proposal fields or fallback text. You can add a dedicated Advisor block or hard-code default advisor text in `scripts.js`.

Search for:

```js
getAdvisorName
```

## Change Currency

Open `scripts.js` and search for:

```js
getCurrencyCode
```

The app uses `AED` when Dubai/UAE/AED/Dirham appears in the proposal data. Otherwise, it defaults to `INR`.

## Add Example Sample Data

Open:

```text
docs/sample-inputs.md
```

Add your own sample client requirements, properties, and investment numbers.
