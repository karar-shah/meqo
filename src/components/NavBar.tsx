"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavBarProps {
  // We can pass dark mode or use usePathname internally
}

export default function NavBar(props: NavBarProps) {
  const pathname = usePathname();
  // White theme for root and /b routes, everything else is dark theme
  const isWhitePage = pathname === "/" || pathname.startsWith("/b");
  const isDarkPage = !isWhitePage;

  // For now, making the black parts white as a placeholder
  const filterClass = isDarkPage ? "brightness-0 invert" : "";

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-center pt-3 md:pt-4">
      <div className="w-full max-w-[789px] px-4 md:px-6 flex justify-between items-center">
        <Image
          src="/logo-meqo.svg"
          alt="MEQO"
          width={460}
          height={110}
          className={`h-6 md:h-7 lg:h-8 w-auto relative ${filterClass}`}
          style={{ width: "auto" }}
        />
        {!(pathname.startsWith("/f") || pathname.startsWith("/g")) ?
          <Image
            src={isDarkPage ? "/Logo_R 2.svg" : "/Logo_R 1.svg"}
            alt="Prof Valmed"
            width={625}
            height={115}
            className="h-6 md:h-7 lg:h-8 w-auto relative"
            style={{ width: "auto" }}
          /> : (
            null)}
      </div>
    </header>
  );
}
