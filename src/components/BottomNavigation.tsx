import Link from 'next/link';
import Image from 'next/image';

interface BottomNavigationProps {
  prevHref?: string;
  nextHref?: string;
}

export default function BottomNavigation({ prevHref = '/', nextHref = '/b02' }: BottomNavigationProps) {
  return (
    <div className="w-[1840px] relative flex items-center py-[32px] border-t border-[#d3e978]/30">
      <Link 
        href={prevHref}
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-[32px] h-[180px] border-4 border-[#0e0f27] rounded-[48px] px-[64px] py-[32px] hover:bg-[#f3f3f7] transition-colors text-[#0e0f27]"
      >
        <Image src="/icons/home-smile.svg" alt="Startseite" width={96} height={96} className="shrink-0" />
        <span className="text-[56px] font-semibold leading-normal">Startseite</span>
      </Link>
      
      <Link 
        href={nextHref}
        className="ml-auto flex items-center gap-[32px] h-[180px] px-[64px] py-[32px] hover:bg-[#f3f3f7] rounded-[48px] transition-colors text-[#0e0f27]"
      >
        <span className="text-[56px] font-semibold leading-normal">Nächste Seite</span>
        <Image src="/icons/arrow-narrow-right.svg" alt="Nächste Seite" width={96} height={96} className="shrink-0" />
      </Link>
    </div>
  );
}
