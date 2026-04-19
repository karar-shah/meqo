"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isWhitePage = pathname === "/" || pathname.startsWith("/b");
  const isDarkPage = !isWhitePage;

  return (
    <div
      className={`relative w-full min-h-screen text-center flex flex-col transition-colors duration-300 ${
        isDarkPage ? "bg-[#0e0f27] text-white" : "bg-white text-[#0e0f27]"
      }`}
    >
      {children}
    </div>
  );
}
