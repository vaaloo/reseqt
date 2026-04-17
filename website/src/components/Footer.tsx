import Link from "next/link";
import { GithubIcon } from "./GithubIcon";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300 font-mono">ReSeqt</span>
          <span>MIT License</span>
          <span>v1.0.0</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/docs" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            Docs
          </Link>
          <Link href="/playground" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            Playground
          </Link>
          <a
            href="https://www.npmjs.com/package/reseqt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            npm
          </a>
          <a
            href="https://github.com/vaaloo/reseqt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center gap-1.5"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
