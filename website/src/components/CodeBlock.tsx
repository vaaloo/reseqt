import { codeToHtml } from "shiki";
import { CopyButton } from "./CopyButton";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export async function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      light: "github-light",
      dark: "github-dark-dimmed",
    },
    defaultColor: false,
  });

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden text-sm w-full min-w-0">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{filename}</span>
          <CopyButton code={code} />
        </div>
      )}
      <div className="relative group">
        {!filename && (
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all">
            <CopyButton code={code} />
          </div>
        )}
        <div
          className="[&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:leading-relaxed [&>pre]:font-mono [&>pre]:text-[13px]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded text-[13px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
      {children}
    </code>
  );
}
