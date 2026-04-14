/**
 * PartnerCard
 * Reusable card used in the partnership section.
 *
 * Layout:
 *  ┌──────────────────────────────┐
 *  │                              │  ← flex-1 logo area (vertically centred)
 *  │          [logo image]        │
 *  │                              │
 *  ├──────────────────────────────┤
 *  │        Mehr erfahren         │  ← fixed-height footer button, rounded bottom
 *  └──────────────────────────────┘
 *
 * The `hasSidePadding` prop mirrors the extra 120 px horizontal padding applied
 * to the Prof. Valmed card in the Figma design.
 */

interface PartnerCardProps {
  logoSrc: string;
  logoAlt: string;
  hasSidePadding?: boolean;
}

export default function PartnerCard({
  logoSrc,
  logoAlt,
  hasSidePadding = false,
}: PartnerCardProps) {
  return (
    <div className="flex flex-col flex-1 h-[37.037vw] rounded-[4.630vw] bg-[#F3F3F7] overflow-hidden">
      {/* Logo area */}
      <div
        className={`flex-1 flex items-center justify-center pt-[5.556vw] ${
          hasSidePadding ? "px-[5.556vw]" : ""
        }`}
      >
        <img
          src={logoSrc}
          alt={logoAlt}
          className="h-[5.556vw] w-auto max-w-full object-contain"
        />
      </div>

      {/* "Mehr erfahren" footer button */}
      <button className="liga-off flex items-center justify-center h-[10.556vw] shrink-0 rounded-b-[4.630vw] cursor-pointer active:opacity-70 transition-opacity">
        <span className="font-semibold text-[2.593vw] leading-[4.444vw] text-[#0E0F27] underline underline-offset-auto">
          Mehr erfahren
        </span>
      </button>
    </div>
  );
}
