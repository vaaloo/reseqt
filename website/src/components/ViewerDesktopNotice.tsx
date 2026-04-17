import { Monitor } from "lucide-react";

interface ViewerDesktopNoticeProps {
  context?: "demo" | "playground";
}

export function ViewerDesktopNotice({ context = "demo" }: ViewerDesktopNoticeProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-center gap-5">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center">
        <Monitor size={22} className="text-indigo-500 dark:text-indigo-400" />
      </div>
      <div className="max-w-xs">
        <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
          Desktop experience
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {context === "playground"
            ? "The interactive viewer requires a desktop browser. You can still prepare your FASTA input here and open the playground on a larger screen."
            : "The interactive alignment viewer is designed for desktop use. Open this page on a wider screen to explore the live demo."}
        </p>
      </div>
    </div>
  );
}
