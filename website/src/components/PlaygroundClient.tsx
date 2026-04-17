"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { PROTEIN_SAMPLE, NUCLEOTIDE_SAMPLE } from "@/lib/samples";
import { Sun, Moon, Upload, ChevronDown } from "lucide-react";
import { ViewerDesktopNotice } from "./ViewerDesktopNotice";
import "reseqt/style.css";

const ReSeqt = dynamic(() => import("reseqt").then((m) => m.ReSeqt), {
  ssr: false,
  loading: () => (
    <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-xl">
      <span className="text-sm text-slate-400">Loading viewer…</span>
    </div>
  ),
});

export function PlaygroundClient() {
  const [fasta, setFasta] = useState(PROTEIN_SAMPLE);
  const [isAminoAcid, setIsAminoAcid] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [inputOpen, setInputOpen] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setIsDark(current === "dark");
  }, []);

  const handleFastaChange = (value: string) => {
    setFasta(value);
    if (value.trim() && !value.includes(">")) {
      setError("Doesn't look like FASTA format. Sequences must start with a '>' header line.");
    } else {
      setError(null);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      handleFastaChange(text);
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const loadSample = (sample: string, aminoAcid: boolean) => {
    setFasta(sample);
    setIsAminoAcid(aminoAcid);
    setError(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2.5 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        {/* Mode toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Mode</span>
          <div className="flex rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 text-xs font-medium">
            <button
              onClick={() => setIsAminoAcid(false)}
              className={`px-3 py-1.5 transition-colors ${
                !isAminoAcid
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
            >
              Nucleotide
            </button>
            <button
              onClick={() => setIsAminoAcid(true)}
              className={`px-3 py-1.5 transition-colors border-l border-slate-200 dark:border-slate-700 ${
                isAminoAcid
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
            >
              Amino acid
            </button>
          </div>
        </div>

        {/* Samples */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Samples</span>
          <button
            onClick={() => loadSample(PROTEIN_SAMPLE, true)}
            className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            HBA proteins
          </button>
          <button
            onClick={() => loadSample(NUCLEOTIDE_SAMPLE, false)}
            className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            CoV S-gene
          </button>
        </div>

        {/* File upload + dark mode — always on own line on small screens via flex-wrap */}
        <div className="flex items-center gap-2 sm:ml-auto">
          <label className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
            <Upload size={13} />
            Load file
            <input
              type="file"
              accept=".fasta,.fa,.aln,.txt"
              className="sr-only"
              onChange={handleFileUpload}
            />
          </label>

          <button
            onClick={toggleDark}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? <Sun size={13} /> : <Moon size={13} />}
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>

      {/* FASTA input */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <button
          onClick={() => setInputOpen(!inputOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
        >
          <span>FASTA input</span>
          <ChevronDown
            size={15}
            className={`text-slate-400 transition-transform duration-200 ${inputOpen ? "rotate-180" : ""}`}
          />
        </button>
        {inputOpen && (
          <>
            {error && (
              <div className="px-4 py-2.5 bg-red-50 dark:bg-red-950/30 border-t border-red-200 dark:border-red-900/50 text-sm text-red-700 dark:text-red-400">
                {error}
              </div>
            )}
            <textarea
              value={fasta}
              onChange={(e) => handleFastaChange(e.target.value)}
              className="w-full h-44 p-4 font-mono text-xs bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 resize-none focus:outline-none border-t border-slate-200 dark:border-slate-800 placeholder:text-slate-300 dark:placeholder:text-slate-600"
              placeholder={`>Sequence_1\nATGCATGCATGC\n>Sequence_2\nATGC--GCATGC`}
              spellCheck={false}
              autoComplete="off"
            />
          </>
        )}
      </div>

      {/* Viewer — desktop only */}
      <div className="md:hidden">
        <ViewerDesktopNotice context="playground" />
      </div>
      <div className="hidden md:block rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
        <ReSeqt fasta={fasta} isAminoAcid={isAminoAcid} />
      </div>
    </div>
  );
}
