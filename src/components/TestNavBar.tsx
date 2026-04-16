"use client";

import { usePathname } from "next/navigation";

/**
 * Temporary development navigation bar for testing page transitions.
 *
 * Shows pill-shaped buttons for each page, with the active one highlighted.
 * Also includes swipe-left / swipe-right arrows.
 *
 * >>> REMOVE THIS COMPONENT once real button layout is implemented. <<<
 */

const PAGES = [
  { path: "/", label: "Home" },
  { path: "/b01", label: "B01" },
  { path: "/b02", label: "B02" },
  { path: "/b03", label: "B03" },
  { path: "/b04", label: "B04f" },
];

export default function TestNavBar() {
  const { goTo, goPrev, goNext, hasPrev, hasNext } = useSwipeNav();
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-[16px] bg-[#0e0f27]/90 backdrop-blur-md rounded-b-[32px] px-[32px] py-[16px] shadow-2xl">
      {/* Prev arrow */}
      <button
        onClick={goPrev}
        disabled={!hasPrev}
        className="w-[64px] h-[64px] rounded-full bg-white/10 text-white flex items-center justify-center text-[28px] font-bold disabled:opacity-20 hover:bg-white/20 transition-colors active:scale-90"
        style={{ transition: "transform 0.1s" }}
      >
        ←
      </button>

      {/* Page buttons */}
      {PAGES.map((p) => {
        const isActive = pathname === p.path;
        return (
          <button
            key={p.path}
            onClick={() => goTo(p.path)}
            className={`
              px-[28px] py-[12px] rounded-full text-[24px] font-semibold
              transition-all duration-200
              ${
                isActive
                  ? "bg-[#d3e978] text-[#0e0f27] shadow-lg scale-110"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
              }
            `}
            style={{ transition: "transform 0.15s, background 0.2s" }}
          >
            {p.label}
          </button>
        );
      })}

      {/* Next arrow */}
      <button
        onClick={goNext}
        disabled={!hasNext}
        className="w-[64px] h-[64px] rounded-full bg-white/10 text-white flex items-center justify-center text-[28px] font-bold disabled:opacity-20 hover:bg-white/20 transition-colors active:scale-90"
        style={{ transition: "transform 0.1s" }}
      >
        →
      </button>
    </div>
  );
}
