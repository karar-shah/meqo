import CoffeeBar from "./components/CoffeeBar";
import HeroSection from "./components/HeroSection";
import PartnershipSection from "./components/PartnershipSection";

/**
 * Exhibition touch-screen page.
 *
 * The design canvas is 2160 × 3840 px (9 : 16 portrait).
 * All spatial values are expressed in vw so the layout scales seamlessly
 * across any screen sharing that aspect ratio (e.g. 1080 × 1920).
 *
 * Vertical rhythm (design-px → vw):
 *   ┌─────────────────────────────────────────┐
 *   │  top padding          381 px → 17.64 vw │
 *   │  HeroSection                            │
 *   │  gap                  220 px → 10.19 vw │
 *   │  PartnershipSection                     │
 *   │  bottom padding       383 px → 17.73 vw │
 *   ├─────────────────────────────────────────┤
 *   │  CoffeeBar            180 px →  8.33 vw │
 *   └─────────────────────────────────────────┘
 *   Total                  3840 px → 177.78 vw
 */
export default function ExhibitionScreen() {
  return (
    <div className="flex flex-col min-h-[177.78vw] bg-white">
      {/* Main scrollable content */}
      <main className="flex-1 flex flex-col px-[7.407vw] pt-[17.639vw] pb-[17.731vw] gap-[10.185vw]">
        <HeroSection />
        <PartnershipSection />
      </main>

      {/* Sticky lime footer bar */}
      <CoffeeBar />
    </div>
  );
}
