import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import KioskShell from "@/components/KioskShell";


const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "MEQO &ndash; Agentenbasierte Versorgungsintelligenz",
  description: "Intuitiv nutzbare Lösungen für die Gesundheitsversorgung von morgen",
};

// Extracted Header Component
function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-center pt-[80px]">
      <div className="w-[1840px] flex justify-between items-center">
        <Image
          src="/logo-meqo.svg"
          alt="MEQO"
          width={460}
          height={110}
          className="h-[110px] w-auto relative"
        />
        <Image
          src="/Logo_R 1.svg"
          alt="Prof Valmed"
          width={625}
          height={115}
          className="h-[115px] w-auto relative"
        />
      </div>
    </header>
  );
}

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
      <body className="min-h-screen flex flex-col bg-gray-100 font-sans text-[56px] text-[#0e0f27] antialiased select-none" style={{ overscrollBehavior: 'none' }}>
        <div className="relative w-full max-w-[2160px] mx-auto min-h-[3840px] bg-white text-center shadow-2xl overflow-hidden flex flex-col">
          <Header />
          {/* position:relative on the container above means the absolute arrows anchor here */}
          <main className="flex-1 w-full px-[160px] pt-[355px] pb-[180px] flex flex-col items-center gap-[220px]">
            <KioskShell>
              {children}
            </KioskShell>
          </main>
          <Footer />
        </div>
      </body>

    </html>
  );
}
