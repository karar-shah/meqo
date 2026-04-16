import Link from 'next/link';
import Image from 'next/image';

interface BottomNavigationProps {
  prevHref?: string;
  homeHref?: string;
  nextHref?: string;
  gridHref?: string;
  showPrev?: boolean;
  showNext?: boolean;
  showGrid?: boolean;
  theme?: "light" | "dark";
  position?: "default" | "absolute";
}

export default function BottomNavigation({
  prevHref = '/',
  homeHref = '/',
  nextHref = '/b02',
  gridHref = '/d01',
  showPrev = false,
  showNext = true,
  showGrid = false,
  theme = "light",
  position = "default",
}: BottomNavigationProps) {
  const isDark = theme === "dark";

  // General button styling depending on theme
  // We match the specific styles requested:
  // Light: border-[#0e0f27] text-[#0e0f27] hover:bg-[#f3f3f7] (or no border for prev/next)
  // Dark: border-white text-white hover:bg-white/10
  
  // Actually, prev/next buttons in light mode don't have border. They have just hover:bg-[#f3f3f7].
  // Home button has border. Grid button has border.

  // Let's create helper classes
  const generalText = isDark ? "text-white" : "text-[#0e0f27]";
  const hoverBg = isDark ? "hover:bg-white/10" : "hover:bg-[#f3f3f7]";
  const iconFilter = isDark ? "brightness-0 invert" : "";

  // The centered bordered button style (Home, Grid)
  const borderedButtonClass = `flex items-center justify-center gap-[32px] h-[180px] w-[592px] rounded-[48px] border-4 transition-colors ${
    isDark ? "border-white bg-[#0e0f27]/0" : "border-[#0e0f27]"
  } ${hoverBg} ${generalText}`;

  // The unbordered button style (Prev, Next)
  const plainButtonClass = `flex items-center gap-[32px] h-[180px] py-[32px] px-[32px] rounded-[48px] transition-colors ${hoverBg} ${generalText}`;

  const containerClass = position === "absolute"
    ? "absolute top-[3290px] left-1/2 -translate-x-1/2 flex items-center gap-[64px]"
    : "w-[1840px] flex items-center justify-between pt-[80px]";

  return (
    <div className={containerClass}>
      {position === "default" && (
        <div className="flex-1 flex justify-start">
          {showPrev && (
            <Link href={prevHref} className={plainButtonClass}>
              <Image src="/icons/arrow-narrow-right.svg" alt="Vorherige Seite" width={96} height={96} className={`shrink-0 rotate-180 ${iconFilter}`} />
              <span className="text-[56px] font-semibold leading-[150%]">Vorherige Seite</span>
            </Link>
          )}
        </div>
      )}

      <div className={`flex items-center justify-center ${position === "absolute" ? "gap-[64px]" : "flex-1 gap-[64px]"}`}>
        {showGrid && (
          <Link href={gridHref} className={borderedButtonClass}>
            <div className="h-[96px] w-[96px] relative flex shrink-0 items-center justify-center">
              <Image src="/icons/grid-01.svg" alt="Alle Beispiele" width={72} height={72} className={iconFilter} />
            </div>
            <span className="text-[56px] font-semibold leading-[150%]">Alle Beispiele</span>
          </Link>
        )}
        <Link href={homeHref} className={borderedButtonClass}>
          <div className="h-[96px] w-[96px] relative flex shrink-0 items-center justify-center">
            <Image src="/icons/home-smile.svg" alt="Startseite" width={72} height={72} className={iconFilter} />
          </div>
          <span className="text-[56px] font-semibold leading-[150%]">Startseite</span>
        </Link>
      </div>

      {position === "default" && (
        <div className="flex-1 flex justify-end">
          {showNext && (
            <Link href={nextHref} className={plainButtonClass}>
              <span className="text-[56px] font-semibold leading-[150%]">Nächste Seite</span>
              <Image src="/icons/arrow-narrow-right.svg" alt="Nächste Seite" width={96} height={96} className={`shrink-0 ${iconFilter}`} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
