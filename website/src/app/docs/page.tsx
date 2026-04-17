import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation — ReSeqt",
  description: "Full documentation for the ReSeqt MSA viewer React component.",
};

const sections = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "props", label: "Props" },
  { id: "input-format", label: "Input format" },
  { id: "color-schemes", label: "Color schemes" },
  { id: "keyboard-shortcuts", label: "Keyboard shortcuts" },
  { id: "dark-mode", label: "Dark mode" },
  { id: "theming", label: "Theming" },
  { id: "notes", label: "Notes" },
];

const INSTALL = `npm install reseqt
# or
yarn add reseqt`;

const BASIC = `import { ReSeqt } from "reseqt";
import "reseqt/style.css";

const fasta = \`
>Seq1
ATGCATGCATGC
>Seq2
ATGC--GCATGC
>Seq3
ATGCATGC--GC
\`.trim();

export default function App() {
  return <ReSeqt fasta={fasta} />;
}`;

const AA = `import { ReSeqt } from "reseqt";
import "reseqt/style.css";

export default function App() {
  return <ReSeqt fasta={proteinFasta} isAminoAcid />;
}`;

const FASTA_FORMAT = `>Human_HBA
MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTT
>Mouse_HBA
MVLSGEDKSNIKAAWGKIGGHGAEYGAEALERMFASFPTT
>Zebrafish_HBA
MSLSDKDKAAVRALWSKIGPNVEADIGAEALGRMLTVYPQ`;

const DARK_HTML = `<!-- index.html -->
<html data-theme="dark">`;

const DARK_JS = `// Toggle at runtime
document.documentElement.setAttribute("data-theme", "dark");

// Revert to light
document.documentElement.setAttribute("data-theme", "light");`;

const DARK_REACT = `"use client";
import { useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  };

  return <button onClick={toggle}>{dark ? "Light" : "Dark"}</button>;
}`;

const CSS_OVERRIDE = `/* Import reseqt styles first */
import "reseqt/style.css";

/* Then override variables in your own CSS */
:root {
  --clr-primary-a0: #7c3aed;
  --clr-surface-a0: #fafafa;
  --clr-border: #e4e4e7;
}

[data-theme="dark"] {
  --clr-primary-a0: #a78bfa;
  --clr-surface-a0: #18181b;
  --clr-border: #27272a;
}`;

export default function DocsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex gap-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-44 shrink-0">
          <div className="sticky top-20">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
              On this page
            </p>
            <nav className="flex flex-col gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 py-1 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <a
                href="https://github.com/vaaloo/reseqt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                <ExternalLink size={11} />
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/reseqt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                <ExternalLink size={11} />
                npm
              </a>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile section nav — hidden on lg (sidebar visible) */}
          <nav className="lg:hidden mb-8 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
              On this page
            </p>
            <div className="flex flex-wrap gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-3">
              Documentation
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Everything you need to integrate and configure ReSeqt in your React application.
            </p>
          </div>

          {/* Installation */}
          <section id="installation" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Installation
            </h2>
            <CodeBlock code={INSTALL} language="bash" />
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              ReSeqt requires React 19 as a peer dependency. It ships pre-compiled — no bundler
              configuration needed.
            </p>
          </section>

          {/* Usage */}
          <section id="usage" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Usage
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Import the component and its stylesheet. The CSS import is required — without it the
              layout and theming will break.
            </p>
            <CodeBlock code={BASIC} filename="App.tsx" />
            <p className="mt-6 mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              For protein sequences, pass <InlineCode>isAminoAcid</InlineCode> to use the amino acid
              color palette:
            </p>
            <CodeBlock code={AA} filename="App.tsx" />
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              The component uses browser APIs (<InlineCode>document</InlineCode>,{" "}
              <InlineCode>canvas</InlineCode>). If you use SSR (Next.js, Remix…), load it with a
              dynamic import and <InlineCode>ssr: false</InlineCode>.
            </p>
          </section>

          {/* Props */}
          <section id="props" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Props
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              ReSeqt has a deliberately minimal API. All interactive features — sorting, color
              scheme, zoom, search — are built into the toolbar inside the component.
            </p>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">
                      Prop
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">
                      Default
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3">
                      <InlineCode>fasta</InlineCode>
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400 font-mono text-xs">
                      string
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">required</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                      Raw multi-FASTA string. See{" "}
                      <a
                        href="#input-format"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Input format
                      </a>{" "}
                      below.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <InlineCode>isAminoAcid</InlineCode>
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400 font-mono text-xs">
                      boolean
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">
                      <InlineCode>false</InlineCode>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                      When <InlineCode>true</InlineCode>, uses amino acid color scheme and legend
                      instead of nucleotide.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
              <InlineCode>ReSeqtProps</InlineCode> is exported for use in typed projects:{" "}
              <InlineCode>{"import type { ReSeqtProps } from 'reseqt'"}</InlineCode>
            </p>
          </section>

          {/* Input format */}
          <section id="input-format" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Input format
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The <InlineCode>fasta</InlineCode> prop accepts standard FASTA format as a plain
              string. Each sequence starts with a <InlineCode>&gt;</InlineCode> header line,
              followed by one or more lines of sequence data.
            </p>
            <CodeBlock code={FASTA_FORMAT} language="text" />
            <div className="mt-6 rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
              {[
                [
                  "Gap characters",
                  "–, . and spaces are all treated as gaps.",
                ],
                [
                  "Multi-line sequences",
                  "The parser concatenates lines automatically. Line breaks inside a sequence are fine.",
                ],
                ["Whitespace", "Leading and trailing whitespace around sequence data is stripped."],
                [
                  "Empty sequences",
                  "Accepted gracefully. They appear as all-gap rows in the viewer.",
                ],
                [
                  "Alignment size",
                  "No hard limit is enforced. Performance depends on the browser and the device — see Notes below.",
                ],
              ].map(([key, val]) => (
                <div key={key as string} className="px-4 py-3 flex gap-3 sm:gap-4 text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-300 w-28 sm:w-40 shrink-0">
                    {key}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 leading-relaxed">{val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Color schemes */}
          <section id="color-schemes" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Color schemes
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              The toolbar includes a color scheme selector. Four modes are available:
            </p>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto mb-8">
              <table className="w-full min-w-[400px] text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 w-36">
                      Mode
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Residue",
                      "Static per-character colors based on biochemical type. Default mode.",
                    ],
                    [
                      "Conservation",
                      "Intensity scaled by conservation score (0–1) per column. Higher conservation = more saturated.",
                    ],
                    [
                      "Identity",
                      "Match/mismatch compared against a selected reference sequence. The reference row uses residue colors.",
                    ],
                    [
                      "Mono",
                      "No background colors — text only. Most readable at zoom ≥ 14 px/cell.",
                    ],
                  ].map(([name, desc]) => (
                    <tr
                      key={name as string}
                      className="border-b last:border-0 border-slate-100 dark:border-slate-800"
                    >
                      <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                        {name}
                      </td>
                      <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Nucleotide palette{" "}
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                (isAminoAcid=false, default)
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
              {[
                { label: "A · Adenine", color: "#059669", text: "white" },
                { label: "T / U · Thymine", color: "#e11d48", text: "white" },
                { label: "C · Cytosine", color: "#2563eb", text: "white" },
                { label: "G · Guanine", color: "#d97706", text: "white" },
                { label: "Ambiguous", color: "#64748b", text: "white" },
              ].map((c) => (
                <div key={c.label} className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                  <div className="h-8" style={{ backgroundColor: c.color }} />
                  <div className="px-2.5 py-2 bg-white dark:bg-slate-900">
                    <p className="text-xs text-slate-600 dark:text-slate-400">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Amino acid palette{" "}
              <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                (isAminoAcid=true)
              </span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Groups residues by biochemical property:
            </p>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <table className="w-full min-w-[380px] text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Group</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Residues</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Color</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hydrophobic", "A V I L M F W", "#4f46e5", "Indigo"],
                    ["Tyrosine", "Y", "#7c3aed", "Violet"],
                    ["Histidine", "H", "#0891b2", "Cyan"],
                    ["Polar", "S T N Q", "#059669", "Emerald"],
                    ["Basic / Positive", "K R", "#dc2626", "Red"],
                    ["Acidic / Negative", "D E", "#ea580c", "Orange"],
                    ["Cysteine", "C", "#ca8a04", "Yellow"],
                    ["Glycine", "G", "#64748b", "Slate"],
                    ["Proline", "P", "#db2777", "Pink"],
                  ].map(([group, res, hex, name]) => (
                    <tr key={group as string} className="border-b last:border-0 border-slate-100 dark:border-slate-800">
                      <td className="px-4 py-2.5 text-slate-700 dark:text-slate-300 font-medium">{group}</td>
                      <td className="px-4 py-2.5 font-mono text-xs text-slate-500 dark:text-slate-400">{res}</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-sm shrink-0" style={{ backgroundColor: hex as string }} />
                          <span className="text-xs text-slate-500 dark:text-slate-400">{name}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Keyboard shortcuts */}
          <section id="keyboard-shortcuts" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Keyboard shortcuts
            </h2>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <table className="w-full min-w-[400px] text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 w-52">
                      Shortcut
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ctrl + F", "Open sequence search (filter by name)"],
                    ["Ctrl + G", "Go to position (1-based column index)"],
                    ["Ctrl + = / Ctrl + +", "Zoom in"],
                    ["Ctrl + −", "Zoom out"],
                    ["Ctrl + Scroll", "Zoom with mouse wheel"],
                    ["Ctrl + A", "Select all sequences and columns"],
                    ["Ctrl + C", "Copy selected region as FASTA"],
                    ["Esc", "Close open panels / clear selection"],
                  ].map(([shortcut, action]) => (
                    <tr
                      key={shortcut as string}
                      className="border-b last:border-0 border-slate-100 dark:border-slate-800"
                    >
                      <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">
                        {shortcut}
                      </td>
                      <td className="px-4 py-2.5 text-slate-500 dark:text-slate-400">{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dark mode */}
          <section id="dark-mode" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Dark mode
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              ReSeqt has full dark mode support. It reads{" "}
              <InlineCode>data-theme=&quot;dark&quot;</InlineCode> on the{" "}
              <InlineCode>&lt;html&gt;</InlineCode> element and switches both CSS variables and
              canvas rendering colors automatically. A MutationObserver watches for changes — no
              prop, no React state, no page reload needed.
            </p>

            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
              Static dark mode
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
              Set the attribute directly on <InlineCode>&lt;html&gt;</InlineCode> in your HTML file:
            </p>
            <CodeBlock code={DARK_HTML} language="html" filename="index.html" />

            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3 mt-8">
              Dynamic toggle
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
              Toggle at runtime via JavaScript:
            </p>
            <CodeBlock code={DARK_JS} language="js" />

            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3 mt-8">
              React toggle component
            </h3>
            <CodeBlock code={DARK_REACT} language="tsx" filename="ThemeToggle.tsx" />
          </section>

          {/* Theming */}
          <section id="theming" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Theming
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              ReSeqt uses CSS custom properties for all UI chrome (toolbar, labels, panels). You can
              override them in your own stylesheet to match your application&apos;s theme. Import
              your overrides <em>after</em> <InlineCode>reseqt/style.css</InlineCode> so they take
              precedence.
            </p>

            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Core CSS variables
            </h3>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto mb-8">
              <table className="w-full min-w-[460px] text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Variable</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Light</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Dark</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["--clr-surface-a0", "#ffffff", "#0f172a"],
                    ["--clr-surface-a10", "#f8fafc", "#1e293b"],
                    ["--clr-surface-a20", "#f1f5f9", "#334155"],
                    ["--clr-surface-a30", "#e2e8f0", "#475569"],
                    ["--clr-border", "#e2e8f0", "#334155"],
                    ["--clr-input-bg", "#ffffff", "#1e293b"],
                    ["--clr-primary-a0", "#0071f2", "#3b82f6"],
                    ["--clr-text-secondary", "#475569", "#94a3b8"],
                    ["--clr-text-muted", "#64748b", "#64748b"],
                  ].map(([variable, light, dark]) => (
                    <tr
                      key={variable as string}
                      className="border-b last:border-0 border-slate-100 dark:border-slate-800"
                    >
                      <td className="px-4 py-2.5 font-mono text-xs text-slate-700 dark:text-slate-300">
                        {variable}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {light}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {dark}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
              Overriding variables
            </h3>
            <CodeBlock code={CSS_OVERRIDE} language="css" filename="theme.css" />
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              <strong className="text-slate-700 dark:text-slate-300">Note:</strong> Canvas rendering
              colors (cell backgrounds, gap color, row stripes) are computed in JavaScript from the
              current <InlineCode>data-theme</InlineCode> value and are not exposed as CSS variables.
              Those cannot be overridden via CSS.
            </p>
          </section>

          {/* Notes */}
          <section id="notes" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Notes
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Character labels at small zoom",
                  body: "Residue letters are only shown at zoom levels ≥ 14 px/cell. The default cell size is 11 px. Zoom in using the toolbar or Ctrl + scroll to see individual characters.",
                },
                {
                  title: "Large alignments",
                  body: "There is no hard limit on alignment size, but rendering thousands of sequences × thousands of columns in a browser is memory-intensive. The component works well for exploratory use. For very large production datasets, consider subsetting the alignment before passing it to the component.",
                },
                {
                  title: "Mobile / touch",
                  body: "The component is designed for desktop use. Touch-based interactions (drag-to-scroll, hover residue info) are not tested and may behave unexpectedly on mobile devices.",
                },
                {
                  title: "Server-side rendering",
                  body: "ReSeqt uses document, canvas, and ResizeObserver — all browser-only APIs. It is not compatible with SSR. Use next/dynamic with ssr: false (Next.js), or React.lazy + a client-only guard in other frameworks.",
                },
                {
                  title: "React version",
                  body: "React 19 is declared as a peer dependency. React 18 may work but is not officially tested.",
                },
                {
                  title: "Manual sort",
                  body: "Drag-to-reorder sequences works when the sort mode is set to 'Manual'. Switching to any other sort mode resets the manual ordering.",
                },
              ].map((note) => (
                <div
                  key={note.title}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 p-5"
                >
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1.5 text-[15px]">
                    {note.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {note.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Links */}
          <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/playground"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-colors"
              >
                Try the Playground
              </Link>
              <a
                href="https://github.com/vaaloo/reseqt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <ExternalLink size={13} />
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/reseqt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <ExternalLink size={13} />
                npm
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
