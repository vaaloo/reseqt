import Link from "next/link";
import { GithubIcon } from "./GithubIcon";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-2">
        <Link
          href="/"
          className="shrink-0 flex items-center gap-0.5 font-bold text-slate-900 dark:text-slate-100 tracking-tight"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-mono">Re</span>
          <span className="font-mono">Seqt</span>
        </Link>

        <div className="flex items-center gap-0.5 min-w-0">
          <Link
            href="/docs"
            className="px-2.5 sm:px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            Docs
          </Link>
          <Link
            href="/playground"
            className="px-2.5 sm:px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap hidden min-[360px]:block"
          >
            Playground
          </Link>
          <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1 sm:mx-1.5" />
          <a
            href="https://github.com/vaaloo/reseqt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <GithubIcon size={17} />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
