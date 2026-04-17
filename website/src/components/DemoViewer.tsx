"use client";

import dynamic from "next/dynamic";
import { PROTEIN_SAMPLE } from "@/lib/samples";
import { ViewerDesktopNotice } from "./ViewerDesktopNotice";
import "reseqt/style.css";

const ReSeqt = dynamic(() => import("reseqt").then((m) => m.ReSeqt), {
  ssr: false,
  loading: () => (
    <div className="h-80 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
      <span className="text-sm text-slate-400 dark:text-slate-500">Loading viewer…</span>
    </div>
  ),
});

export function DemoViewer() {
  return (
    <>
      {/* Mobile notice — hidden on md+ */}
      <div className="md:hidden">
        <ViewerDesktopNotice context="demo" />
      </div>
      {/* Viewer — hidden on mobile */}
      <div className="hidden md:block rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
        <ReSeqt fasta={PROTEIN_SAMPLE} isAminoAcid />
      </div>
    </>
  );
}
