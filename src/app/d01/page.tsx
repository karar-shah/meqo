import Image from "next/image";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation";

export default function D01Page() {
  return (
    <div className="flex flex-col w-full items-center flex-1 text-white ">
      <div className="w-full max-w-5xl flex flex-col items-center gap-6 md:gap-8 lg:gap-12 mt-12 md:mt-16 ">
        <h1 className="w-full text-xl md:text-2xl lg:text-3xl leading-tight font-semibold text-center text-[#d3e978]">
          Wählen Sie einen Prompt aus:
        </h1>

        <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-4xl text-left text-sm md:text-base lg:text-lg">
          {/* Prompt 1 */}
          <Link href="/e01"
            className="w-full rounded-2xl md:rounded-3xl bg-white/20 flex items-center justify-center p-4 md:p-6 box-border gap-4 md:gap-6 cursor-pointer hover:bg-white/30 transition-all active:opacity-90 active:scale-[0.99] shadow-xl">
            <div className="flex-1 relative leading-relaxed">
              Benachrichte mich, wenn Vanco-Spiegel und Kreatinin da ist.
              Bewerte mit Prof. Valmed.
            </div>
            <Image
              className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert"
              width={48}
              height={48}
              alt="Arrow right"
              src="/icons/arrow-narrow-right.svg"
            />
          </Link>

          {/* Prompt 2 */}
          <Link href="/f01"
            className="w-full rounded-2xl md:rounded-3xl bg-white/20 flex items-center justify-center p-4 md:p-6 box-border gap-4 md:gap-6 cursor-pointer hover:bg-white/30 transition-all active:opacity-90 active:scale-[0.99] shadow-xl">
            <div className="flex-1 relative leading-relaxed">
              Prüfe alle Arztbriefe und Laborbefunde,
              <br />
              ob es schon mal Hinweise auf akutes Nierenversagen gab.
            </div>
            <Image
              className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert"
              width={48}
              height={48}
              alt="Arrow right"
              src="/icons/arrow-narrow-right.svg"
            />
          </Link>

          {/* Prompt 3 */}
          <Link href="/g01"
            className="w-full rounded-2xl md:rounded-3xl bg-white/20 flex items-center justify-center p-4 md:p-6 box-border gap-4 md:gap-6 cursor-pointer hover:bg-white/30 transition-all active:opacity-90 active:scale-[0.99] shadow-xl">
            <div className="flex-1 relative leading-relaxed">
              Frau Müller kann nicht alleine in ihre Wohnung im 3. Stock
              entlassen werden. Organisiere mit dem Sozialdienst die Entlassung
              nächste Woche.
            </div>
            <Image
              className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert"
              width={48}
              height={48}
              alt="Arrow right"
              src="/icons/arrow-narrow-right.svg"
            />
          </Link>
        </div>
      </div>
      <BottomNavigation theme="dark" position="absolute" showGrid={false} />
    </div>
  );
}
