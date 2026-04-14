import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "MEQO – Agentenbasierte Versorgungsintelligenz",
  description:
    "Intuitiv nutzbare Lösungen für die Gesundheitsversorgung von morgen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${archivo.variable}`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
