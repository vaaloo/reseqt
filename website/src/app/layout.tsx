import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReSeqt — MSA viewer for React",
  description:
    "A self-contained React component for visualizing multiple sequence alignments. Pass a FASTA string, get a fully interactive viewer. No backend required.",
  metadataBase: new URL("https://reseqt.vaaloo.fr"),
  openGraph: {
    title: "ReSeqt — MSA viewer for React",
    description:
      "Self-contained React component for multiple sequence alignment visualization. FASTA input, canvas rendering, dark mode, TypeScript.",
    url: "https://reseqt.vaaloo.fr",
    siteName: "ReSeqt",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
