import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Image from "next/image";
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
    <footer className="w-full mt-auto bg-[#d3e978] h-10 md:h-12 lg:h-14 flex items-center justify-center gap-2 md:gap-4 z-50">
      <Image
        className="w-6 md:w-8 h-auto relative"
        width={64}
        height={64}
        sizes="100vw"
        alt="Coffee Icon"
        src="/icons/coffee.svg"
      />
      <div className="relative text-xs md:text-sm lg:text-base leading-tight text-center text-[#0e0f27]">
        <span className="font-semibold">Live-Demo und Kaffee &ndash; </span>
        <span>Sprechen Sie uns gerne an.</span>
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
      <body className="h-screen flex flex-col bg-gray-100 font-sans text-sm antialiased select-none overflow-hidden" style={{ overscrollBehavior: 'none' }}>
        <ThemeWrapper>
          <NavBar />
          {/* position:relative on the container above means the absolute arrows anchor here */}
          <main className="flex-1 min-h-0 max-w-7xl mx-auto w-full px-4 md:px-6 mt-12 md:mt-14 pt-2 pb-2 md:pb-4 flex flex-col items-center gap-4 md:gap-6 overflow-y-auto">
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
