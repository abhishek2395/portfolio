import type { Metadata } from "next";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaiswalabhishek.com"),
  title: "Abhishek Jaiswal — AI Product Manager & AI Engineer",
  description:
    "Technical AI product manager and engineer. Built an open-source LLM evaluation framework benchmarking 300+ models, and shipped a production multi-agent AI system to 98% automation inside a Fortune 500 financial institution. Open to AI PM and AI engineering roles.",
  keywords: [
    "AI Product Manager",
    "AI Engineer",
    "LLM Evaluation",
    "Agentic AI",
    "Multi-Agent Systems",
    "LLM-as-judge",
    "RAG",
    "Abhishek Jaiswal",
  ],
  openGraph: {
    title: "Abhishek Jaiswal — AI Product Manager & AI Engineer",
    description:
      "I build the AI products I'd manage. Production multi-agent systems, an open-source LLM eval framework covering 300+ models, and grounded RAG with real eval rigor.",
    url: "https://jaiswalabhishek.com",
    siteName: "Abhishek Jaiswal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jaiswal — AI Product Manager & AI Engineer",
    description:
      "I build the AI products I'd manage. Production multi-agent systems and an open-source LLM eval framework covering 300+ models.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${jetbrains.variable}`}>
      <body className="grain min-h-screen bg-void font-sans text-paper antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
