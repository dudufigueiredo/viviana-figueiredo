import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSerifDisplay.variable} ${inter.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
