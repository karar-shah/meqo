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
    <footer className="absolute bottom-0 left-0 bg-[#d3e978] w-full h-[180px] flex items-center justify-center gap-[48px] z-50">
      <Image
        className="w-[96px] h-auto relative"
        width={96}
        height={96}
        sizes="100vw"
        alt="Coffee Icon"
        src="/icons/coffee.svg"
      />
      <div className="relative text-[56px] leading-[110%] text-center text-[#0e0f27]">
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
      <body className="min-h-screen flex flex-col bg-gray-100 font-sans text-[56px] antialiased select-none" style={{ overscrollBehavior: 'none' }}>
        <ThemeWrapper>
          <NavBar />
          {/* position:relative on the container above means the absolute arrows anchor here */}
          <main className="flex-1 w-full px-[160px] pt-[355px] pb-[180px] flex flex-col items-center gap-[220px]">
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
