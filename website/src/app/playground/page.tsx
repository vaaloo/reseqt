import type { Metadata } from "next";
import { PlaygroundClient } from "@/components/PlaygroundClient";

export const metadata: Metadata = {
  title: "Playground — ReSeqt",
  description: "Test the ReSeqt alignment viewer live with your own FASTA data.",
};

export default function PlaygroundPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
          Playground
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Paste a FASTA alignment or load a file. Changes update the viewer in real time.
        </p>
      </div>
      <PlaygroundClient />
    </div>
  );
}
