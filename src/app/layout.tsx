import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

import KioskShell from "@/components/KioskShell";
import NavBar from "@/components/NavBar";
import ThemeWrapper from "@/components/ThemeWrapper";


const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "MEQO &ndash; Agentenbasierte Versorgungsintelligenz",
  description: "Intuitiv nutzbare Lösungen für die Gesundheitsversorgung von morgen",
};

// Extracted Header Component is now in src/components/NavBar.tsx

// Extracted Footer Component from test/page
function Footer() {
  return (
    <footer className="w-full mt-auto bg-[#d3e978] h-10 md:h-12 lg:h-14 flex items-center justify-center z-50">
      <div className="relative text-xs md:text-sm lg:text-base leading-[1.1] text-center text-[#0e0f27] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
        <a href="https://www.meqo.de/impressum" target="_blank" rel="noopener noreferrer" className="underline">
          Impressum
        </a>
        <span className="whitespace-pre">        </span>
        <a href="https://www.meqo.de/datenschutz" target="_blank" rel="noopener noreferrer" className="underline">
          Datenschutz
        </a>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`light ${archivo.variable}`} style={{ colorScheme: 'light' }}>
      <body className="flex flex-col bg-gray-100 font-sans text-sm antialiased select-none overflow-x-hidden lg:h-screen lg:overflow-hidden min-h-screen overflow-y-auto" style={{ overscrollBehavior: 'none' }}>
        <ThemeWrapper>
          <NavBar />
          {/* position:relative on the container above means the absolute arrows anchor here */}
          <main className="flex-1 max-w-[789px] mx-auto w-full px-4 md:px-6 mt-20 md:mt-24 pt-2 pb-2 md:pb-4 flex flex-col items-center lg:min-h-0 lg:overflow-hidden">
            <KioskShell>
              {children}
            </KioskShell>
          </main>
          <Footer />
        </ThemeWrapper>
      </body>

    </html>
  );
}
