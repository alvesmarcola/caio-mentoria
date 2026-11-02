import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentoria Exclusiva de Day Trade | Método Caio",
  description: "Domine o mercado financeiro com consistência, gestão de risco blindada e acompanhamento direto com o mentor Caio. Vagas limitadas para a próxima turma.",
  keywords: ["Day Trade", "Mentoria Day Trade", "Mercado Financeiro", "Gestão de Risco", "Price Action", "Caio Trader"],
  openGraph: {
    title: "Mentoria Exclusiva de Day Trade | Método Caio",
    description: "Domine o mercado financeiro com consistência, gestão de risco blindada e acompanhamento direto com o mentor Caio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
