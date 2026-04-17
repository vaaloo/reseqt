"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      aria-label="Copy code"
      className="p-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-700/70 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
    </button>
  );
}
