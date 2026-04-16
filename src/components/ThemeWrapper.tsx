"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isWhitePage = pathname === "/" || pathname.startsWith("/b");
  const isDarkPage = !isWhitePage;

  return (
    <div
      className={`relative w-full max-w-[2160px] mx-auto min-h-[3840px] text-center shadow-2xl overflow-hidden flex flex-col transition-colors duration-300 ${
        isDarkPage ? "bg-[#0e0f27] text-white" : "bg-white text-[#0e0f27]"
      }`}
    >
      {children}
    </div>
  );
}
