# ReSeqt

A React component for visualizing multiple sequence alignments (MSA). Works with nucleotide and amino acid sequences, renders via canvas for smooth performance, and ships with coloring schemes, conservation tracking, search, sorting, and a dark mode out of the box.

## Contents

- [Why ReSeqt](#why-reseqt)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Input Format](#input-format)
- [Color Schemes](#color-schemes)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Dark Mode](#dark-mode)
- [Styling & Theming](#styling--theming)
- [Notes](#notes)
- [Development](#development)
- [License](#license)

---

## Why ReSeqt

Most MSA viewers are desktop applications or web tools that require a backend. ReSeqt is a self-contained React component — drop it into your app, pass a FASTA string, and you have a fully interactive alignment viewer. No server, no preprocessing, no extra dependencies.

It is built for developers who build bioinformatics tools in React, and for scientists who need to embed alignment data in a web interface without rolling their own viewer.

---

## Features

- Renders alignments from a raw multi-FASTA string
- Nucleotide and amino acid color schemes (Clustal-inspired)
- Four color modes: **residue**, **conservation**, **identity**, **mono**
- Conservation histogram track
- Consensus sequence row
- Sequence search (filter by name)
- Sorting by name, length, gap %, identity against a reference, or manual drag-to-reorder
- Go-to-position navigation
- Zoom (7 levels, mouse wheel supported)
- Region selection + copy as FASTA
- Overview minimap
- PNG export (current view or selection)
- Dark mode via `[data-theme="dark"]` on `<html>`
- Responsive via ResizeObserver — adapts to its container

---

## Installation

```bash
npm install reseqt
```

```bash
yarn add reseqt
```

---

## Usage

### Minimal example

```tsx
import { ReSeqt } from "reseqt";
import "reseqt/style.css";

const fasta = `
>Seq1
ATGCATGCATGC
>Seq2
ATGC--GCATGC
>Seq3
ATGCATGC--GC
`.trim();

export default function App() {
  return <ReSeqt fasta={fasta} />;
}
```

The CSS import is required. Without it the component will render but the layout and theming will break.

---

### With amino acid sequences

```tsx
import { ReSeqt } from "reseqt";
import "reseqt/style.css";

const fasta = `
>Human_HBA
MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHG
>Mouse_HBA
MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTTKTYFPHFDVSHGSAQVKAHG
>Zebrafish_HBA
MSLSDKDKAAVRALWSKIGPNVEADIGAEALGRMLTVYPQTKTYFSHWADLSPGSGPVKK
`.trim();

export default function AlignmentPage() {
  return <ReSeqt fasta={fasta} isAminoAcid />;
}
```

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `fasta` | `string` | ✓ | — | Raw multi-FASTA string (see format below) |
| `isAminoAcid` | `boolean` | — | `false` | Use amino acid color scheme and legend instead of nucleotide |

That is the full public API. All other behaviors (sorting, color scheme, zoom, search) are controlled through the toolbar inside the component.

---

## Input Format

ReSeqt accepts standard FASTA format as a plain string. Each sequence starts with a `>` header line followed by one or more lines of sequence data.

```
>SequenceName optional description
ATGCATGCATGC
>AnotherSeq
ATGC--GCATGC
```

**Notes:**
- Gap characters: `-`, `.`, and spaces are all treated as gaps
- Multi-line sequences are supported — the parser concatenates lines automatically
- Whitespace around sequence data is stripped
- Empty sequences are accepted gracefully (they will appear as all-gap rows)
- There is no enforced upper limit on alignment size, though browser performance will degrade with very large alignments (thousands of sequences × thousands of columns)

---

## Color Schemes

The toolbar includes a color scheme selector. Four modes are available:

| Mode | Description |
|------|-------------|
| **Residue** | Static per-character colors based on biochemical type |
| **Conservation** | Intensity scaled by conservation score (0–1) per column |
| **Identity** | Match/mismatch against a reference sequence; reference row uses residue colors |
| **Mono** | No background colors; text only — best at larger zoom levels (≥14 px/cell) |

### Nucleotide colors (`isAminoAcid={false}`, default)

| Residue | Color |
|---------|-------|
| A (Adenine) | Green |
| T / U (Thymine / Uracil) | Red |
| C (Cytosine) | Blue |
| G (Guanine) | Amber |
| Ambiguous (N, R, Y…) | Slate |

### Amino acid colors (`isAminoAcid={true}`)

Groups residues by biochemical property:

| Group | Residues | Color |
|-------|----------|-------|
| Hydrophobic | A V I L M F W | Indigo |
| Tyrosine | Y | Violet |
| Histidine | H | Cyan |
| Polar | S T N Q | Emerald |
| Basic / Positive | K R | Red |
| Acidic / Negative | D E | Orange |
| Cysteine | C | Yellow |
| Glycine | G | Slate |
| Proline | P | Pink |

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + F` | Open sequence search |
| `Ctrl + G` | Go to position (1-based column) |
| `Ctrl + =` / `Ctrl + +` | Zoom in |
| `Ctrl + -` | Zoom out |
| `Ctrl + Scroll` | Zoom with mouse wheel |
| `Ctrl + A` | Select all |
| `Ctrl + C` | Copy selected region as FASTA |
| `Esc` | Close panels / clear selection |

---

## Dark Mode

ReSeqt has full dark mode support. It detects the `[data-theme="dark"]` attribute on the `<html>` element and switches both the CSS variables and the canvas rendering colors automatically.

### How to enable dark mode

Set `data-theme="dark"` on the root `<html>` element:

```html
<!-- index.html -->
<html data-theme="dark">
```

Or toggle it dynamically in JavaScript:

```js
document.documentElement.setAttribute("data-theme", "dark");
// to revert:
document.documentElement.removeAttribute("data-theme");
```

ReSeqt uses a `MutationObserver` internally to watch for this attribute change and re-renders the canvas immediately — no prop, no React state, no page reload needed.

### CSS Variables

ReSeqt uses CSS custom properties for all UI chrome (toolbar, labels, panels). The component ships defaults for both light and dark mode. You can override them in your own stylesheet to match your app's theme.

**Core surface variables:**

| Variable | Light default | Dark default |
|----------|--------------|--------------|
| `--clr-surface-a0` | `#ffffff` | `#0f172a` |
| `--clr-surface-a10` | `#f8fafc` | `#1e293b` |
| `--clr-surface-a20` | `#f1f5f9` | `#334155` |
| `--clr-surface-a30` | `#e2e8f0` | `#475569` |
| `--clr-border` | `#e2e8f0` | `#334155` |
| `--clr-input-bg` | `#ffffff` | `#1e293b` |

**Primary / accent:**

| Variable | Light default | Dark default |
|----------|--------------|--------------|
| `--clr-primary-a0` | `#0071f2` | `#3b82f6` |
| `--clr-text-secondary` | `#475569` | `#94a3b8` |
| `--clr-text-muted` | `#64748b` | `#64748b` |

### Overriding the theme

To use a custom palette, redefine the variables in your own CSS:

```css
/* custom-theme.css */
:root {
  --clr-surface-a0: #fefce8;
  --clr-primary-a0: #ca8a04;
  --clr-border: #fde68a;
}

[data-theme="dark"] {
  --clr-surface-a0: #1c1917;
  --clr-primary-a0: #fbbf24;
  --clr-border: #44403c;
}
```

Import this after `reseqt/style.css` so your overrides take precedence.

> **Note:** Canvas rendering colors (cell backgrounds, gap color, row stripes) are computed in JavaScript from the current `data-theme` value and are not exposed as CSS variables. Those colors cannot be overridden via CSS.

---

## Styling & Theming

The component fills 100% of its container width and computes its height dynamically based on the number of visible panels (search bar, conservation track, overview map, etc.). You can control the width by sizing the wrapper element:

```tsx
<div style={{ width: "100%", maxWidth: 1200 }}>
  <ReSeqt fasta={fasta} />
</div>
```

There is no `height` prop — height is managed internally based on the number of sequences and which optional panels are active.

---

## Notes

- **Text rendering in cells:** Character labels are only shown at zoom levels ≥ 14 px/cell (the default cell size is 11 px). Zoom in using the toolbar or `Ctrl + scroll` to see residue letters.
- **Large alignments:** There is no hard limit, but rendering thousands of sequences × thousands of columns in a browser is inherently memory-intensive. For exploratory use, it works well. For production use with very large datasets, consider subsetting the alignment before passing it to the component.
- **Mobile / touch:** The component is designed for desktop. Touch-based drag-to-scroll and hover interactions are not tested and may not behave as expected on mobile devices.
- **React version:** The package declares `react ^19` as a peer dependency. React 18 may work but is not officially tested.
- **SSR:** The component uses `document` and canvas APIs and is not compatible with server-side rendering. Use dynamic imports or `"use client"` as appropriate for your framework.

---

## License

MIT © [vaaloo](https://github.com/vaaloo)
