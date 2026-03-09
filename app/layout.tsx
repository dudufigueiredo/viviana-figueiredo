import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Viviana Figueiredo — Decoração de Interiores",
  description:
    "Decoradora de interiores há mais de 20 anos criando espaços com alma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
