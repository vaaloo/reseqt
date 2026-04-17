import Link from "next/link";
import {
  ArrowRight,
  Terminal,
  Dna,
  Layers,
  Moon,
  MousePointer2,
  Code2,
  Microscope,
  GraduationCap,
} from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import { DemoViewer } from "@/components/DemoViewer";
import { GithubIcon } from "@/components/GithubIcon";

const INSTALL_CMD = `npm install reseqtjs`;

const BASIC_USAGE = `import { ReSeqt } from "reseqtjs";
import "reseqtjs/style.css";

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

const AA_USAGE = `// For protein sequences, set isAminoAcid={true}
// to switch to the amino acid color scheme.
<ReSeqt fasta={proteinFasta} isAminoAcid />`;

const DARK_MODE_CODE = `// Toggle dark mode by setting data-theme on <html>.
// ReSeqt responds via a MutationObserver — no re-render needed.
document.documentElement.setAttribute("data-theme", "dark");

// Revert to light:
document.documentElement.setAttribute("data-theme", "light");`;

const features = [
  {
    icon: Terminal,
    title: "Canvas rendering",
    description:
      "Smooth scrolling and crisp rendering via HTML5 canvas. Handles hundreds of sequences and long alignments without layout issues.",
  },
  {
    icon: Code2,
    title: "Minimal API",
    description:
      "Two props: fasta and isAminoAcid. Pass a FASTA string, get a fully functional viewer. Nothing more required.",
  },
  {
    icon: Layers,
    title: "Four color modes",
    description:
      "Switch between residue, conservation, identity against reference, or monochrome — directly from the built-in toolbar.",
  },
  {
    icon: Moon,
    title: "Built-in dark mode",
    description:
      'Responds to [data-theme="dark"] on <html> via a MutationObserver. One attribute change, instant update.',
  },
  {
    icon: MousePointer2,
    title: "Rich interactions",
    description:
      "Search, sort, zoom, select regions, copy as FASTA, export as PNG. Keyboard shortcuts for everything.",
  },
  {
    icon: Dna,
    title: "NT & AA support",
    description:
      "Biochemically meaningful color palettes for both nucleotide and amino acid sequences. Color legend included.",
  },
];

const audiences = [
  {
    icon: Code2,
    title: "React developers",
    description:
      "Building a bioinformatics web app and need a production-ready alignment viewer? Install, import, pass FASTA. Done.",
  },
  {
    icon: Microscope,
    title: "Bioinformaticians",
    description:
      "Exploring MSA data in the browser, sharing results with collaborators, or building custom tooling on web technologies.",
  },
  {
    icon: GraduationCap,
    title: "Research & education",
    description:
      "Embedding interactive alignments in papers, supplementary materials, course platforms, or lab portals.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1] mb-5 sm:mb-6">
            Sequence alignment{" "}
            <span className="text-indigo-600 dark:text-indigo-400">visualization</span>
            {" "}for React.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
            A self-contained component that renders multi-FASTA data as a fully interactive
            alignment viewer — no backend, no preprocessing, no extra configuration.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-10 sm:mb-12">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium text-sm transition-colors"
            >
              View Documentation
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm transition-colors"
            >
              Try the Playground
            </Link>
            <a
              href="https://github.com/vaaloo/reseqt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium text-sm transition-colors"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          </div>
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide font-medium mb-2.5">
              Install
            </p>
            <div className="max-w-xs">
              <CodeBlock code={INSTALL_CMD} language="bash" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 border-t border-slate-100 dark:border-slate-800/50">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            See it in action
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Hemoglobin alpha-chain (HBA) across six vertebrates. Try the toolbar — color schemes,
            search, zoom, conservation track.
          </p>
        </div>
        <DemoViewer />
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-slate-100 dark:border-slate-800/50">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Everything you need
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Built for real-world use — not just a pretty colored grid.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-indigo-200 dark:hover:border-indigo-800/60 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 transition-colors">
                <f.icon
                  size={17}
                  className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1.5 text-[15px]">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-slate-100 dark:border-slate-800/50">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Quick start
          </h2>
          <p className="text-slate-500 dark:text-slate-400">Up and running in under a minute.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
              Nucleotide alignment
            </p>
            <CodeBlock code={BASIC_USAGE} filename="App.tsx" />
          </div>
          <div className="flex flex-col gap-6 min-w-0">
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                Protein sequences
              </p>
              <CodeBlock code={AA_USAGE} filename="App.tsx" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                Dark mode
              </p>
              <CodeBlock code={DARK_MODE_CODE} language="js" />
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <Moon size={16} className="text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Dark mode
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                One attribute. Full dark mode.
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                ReSeqt watches for{" "}
                <code className="text-[13px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  data-theme=&quot;dark&quot;
                </code>{" "}
                on{" "}
                <code className="text-[13px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  &lt;html&gt;
                </code>{" "}
                via a MutationObserver. Canvas colors and UI chrome both switch instantly. Theming
                is further customizable via CSS variables.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/docs#dark-mode"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-950/70 font-medium text-sm transition-colors"
              >
                Dark mode guide
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-100 dark:border-slate-800/50 mt-8">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Who is this for?
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.title} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <a.icon size={20} className="text-slate-400 dark:text-slate-500 mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-[15px]">
                {a.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Built for Phylogeny.fr */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-slate-100 dark:border-slate-800/50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src="/images/phylogeny.ico"
            alt="Phylogeny.fr"
            className="w-12 h-12 rounded-xl shrink-0"
          />
          <div>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
              Built for
            </p>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Phylogeny.fr
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
              ReSeqt was originally developed for{" "}
              <a
                href="https://www.phylogeny.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Phylogeny.fr
              </a>
              , a web platform for phylogenetic analysis. The need for a modern,
              embeddable alignment viewer — one that could live directly in a React app without
              a backend — is what led to this library. It is now open source and available
              for anyone to use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center border-t border-slate-100 dark:border-slate-800/50">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
          Ready to use it?
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto">
          Read the docs for the full API reference, or jump straight into the playground.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium transition-colors"
          >
            Read the docs
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/playground"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 font-medium transition-colors"
          >
            Open Playground
          </Link>
        </div>
      </section>
    </>
  );
}
