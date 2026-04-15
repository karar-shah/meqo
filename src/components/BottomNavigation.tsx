import Link from 'next/link';
import Image from 'next/image';

interface BottomNavigationProps {
  prevHref?: string;
  homeHref?: string;
  nextHref?: string;
  showPrev?: boolean;
  showNext?: boolean;
}

export default function BottomNavigation({
  prevHref = '/',
  homeHref = '/',
  nextHref = '/b02',
  showPrev = false,
  showNext = true,
}: BottomNavigationProps) {
  return (
    <div className="w-[1840px] flex items-center justify-between  pt-[80px]">
      <div className="flex-1 flex justify-start">
        {showPrev && (
          <Link
            href={prevHref}
            className="flex items-center gap-[32px] h-[180px] py-[32px] px-[32px] hover:bg-[#f3f3f7] rounded-[48px] transition-colors text-[#0e0f27]"
          >
            <Image src="/icons/arrow-narrow-right.svg" alt="Vorherige Seite" width={96} height={96} className="shrink-0 rotate-180" />
            <span className="text-[56px] font-semibold leading-[150%]">Vorherige Seite</span>
          </Link>
        )}
      </div>

      <div className="flex-1 flex justify-center">
        <Link
          href={homeHref}
          className="flex items-center justify-center gap-[32px] h-[180px] border-4 border-[#0e0f27] rounded-[48px] px-[64px] py-[32px] hover:bg-[#f3f3f7] transition-colors text-[#0e0f27]"
        >
          <Image src="/icons/home-smile.svg" alt="Startseite" width={96} height={96} className="shrink-0" />
          <span className="text-[56px] font-semibold leading-[150%]">Startseite</span>
        </Link>
      </div>

      <div className="flex-1 flex justify-end">
        {showNext && (
          <Link
            href={nextHref}
            className="flex items-center gap-[32px] h-[180px] py-[32px] px-[32px] hover:bg-[#f3f3f7] rounded-[48px] transition-colors text-[#0e0f27]"
          >
            <span className="text-[56px] font-semibold leading-[150%]">Nächste Seite</span>
            <Image src="/icons/arrow-narrow-right.svg" alt="Nächste Seite" width={96} height={96} className="shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}
