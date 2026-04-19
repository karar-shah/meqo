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
    <footer className="w-full mt-auto bg-[#d3e978] h-20 md:h-24 lg:h-32 flex items-center justify-center gap-4 md:gap-8 z-50">
      <Image
        className="w-12 md:w-16 h-auto relative"
        width={64}
        height={64}
        sizes="100vw"
        alt="Coffee Icon"
        src="/icons/coffee.svg"
      />
      <div className="relative text-lg md:text-xl lg:text-2xl leading-tight text-center text-[#0e0f27]">
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
      <body className="min-h-screen flex flex-col bg-gray-100 font-sans text-base antialiased select-none" style={{ overscrollBehavior: 'none' }}>
        <ThemeWrapper>
          <NavBar />
          {/* position:relative on the container above means the absolute arrows anchor here */}
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 mt-24 md:mt-32 pt-8 pb-16 md:pb-24 flex flex-col items-center gap-16 md:gap-24">
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
