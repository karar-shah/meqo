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
  const borderedButtonClass = `flex items-center justify-center gap-2 h-10 md:h-11 px-4 md:px-6 w-max min-w-[140px] md:min-w-[180px] rounded-xl border md:border-2 transition-colors ${isDark ? "border-white bg-[#0e0f27]/0" : "border-[#0e0f27]"
    } ${hoverBg} ${generalText}`;

  // The unbordered button style (Prev, Next)
  const plainButtonClass = `flex items-center gap-2 h-10 md:h-11 py-1 px-3 md:px-4 rounded-xl transition-colors ${hoverBg} ${generalText}`;

  const containerClass = position === "absolute"
    ? "relative w-full flex justify-center items-center gap-4 md:gap-6 mt-auto pb-4 z-50 shrink-0"
    : "w-full max-w-7xl mx-auto flex items-center justify-between pt-3 md:pt-4 px-4";

  return (
    <div className={containerClass}>
      {position === "default" && (
        <div className="flex-1 flex justify-start">
          {showPrev && (
            <Link href={prevHref} className={plainButtonClass}>
              <div className="h-4 w-4 md:h-5 md:w-5 relative shrink-0">
                <Image 
                  src="/icons/arrow-narrow-right.svg" 
                  alt="Vorherige Seite" 
                  fill 
                  className={`object-contain rotate-180 ${iconFilter}`} 
                />
              </div>
              <span className="text-sm md:text-base font-semibold leading-relaxed">Vorherige Seite</span>
            </Link>
          )}
        </div>
      )}

      <div className={`flex items-center justify-center ${position === "absolute" ? "gap-2 md:gap-4" : "flex-1 gap-2 md:gap-4"}`}>
        {showGrid && (
          <Link href={gridHref} className={borderedButtonClass}>
            <div className="h-4 w-4 md:h-5 md:w-5 relative shrink-0">
              <Image 
                src="/icons/grid-01.svg" 
                alt="Alle Beispiele" 
                fill 
                className={`object-contain ${iconFilter}`} 
              />
            </div>
            <span className="text-sm md:text-base font-semibold leading-relaxed">Alle Beispiele</span>
          </Link>
        )}
        <Link href={homeHref} className={borderedButtonClass}>
          <div className="h-4 w-4 md:h-5 md:w-5 relative shrink-0">
            <Image 
              src="/icons/home-smile.svg" 
              alt="Startseite" 
              fill 
              className={`object-contain ${iconFilter}`} 
            />
          </div>
          <span className="text-sm md:text-base font-semibold leading-relaxed">Startseite</span>
        </Link>
      </div>

      {position === "default" && (
        <div className="flex-1 flex justify-end">
          {showNext && (
            <Link href={nextHref} className={plainButtonClass}>
              <span className="text-sm md:text-base font-semibold leading-relaxed">Nächste Seite</span>
              <div className="h-4 w-4 md:h-5 md:w-5 relative shrink-0">
                <Image 
                  src="/icons/arrow-narrow-right.svg" 
                  alt="Nächste Seite" 
                  fill 
                  className={`object-contain ${iconFilter}`} 
                />
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
