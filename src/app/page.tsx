import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex-1 flex flex-col justify-between gap-4 pb-2 md:pb-4">
      <div className="w-full flex flex-col items-center gap-4 md:gap-6 flex-1 min-h-0">
        <div className="w-full flex flex-col items-center gap-2 md:gap-3 shrink-0">
          <h1 className="w-full relative text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold text-center">
            Entdecken Sie unsere agentenbasierte Versorgungsintelligenz
          </h1>
          <p className="w-full max-w-2xl relative text-sm md:text-base lg:text-lg leading-relaxed font-light inline-block text-center">
            Intuitiv nutzbare Lösungen für die Gesundheitsversorgung von morgen
            &ndash; kombiniert mit einer leistungsstarken Plattform zur
            Erstellung individueller Agenten.
          </p>
        </div>
        
        <div className="w-full flex-1 relative min-h-[160px] text-left text-sm md:text-base rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            width={1840}
            height={800}
            sizes="100vw"
            alt="Hero Background"
            src="/images/1.png"
            priority
            loading="eager"
          />
          <div className="absolute bottom-0 left-0 backdrop-blur-md mask-[linear-gradient(to_bottom,transparent,black)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)] bg-linear-to-b from-[#0e0f27]/0 to-[#0e0f27]/80 w-full h-2/3" />
          <Link
            href="/d01"
            className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 shadow-[0px_0px_60px_#0e0f27] rounded-2xl md:rounded-3xl bg-[#d3e978] h-12 md:h-14 flex items-center justify-center px-6 md:px-8 box-border gap-2 cursor-pointer transition-all duration-75 active:opacity-80 active:scale-[0.98] drop-shadow-xl w-max z-10"
          >
            <Image
              className="h-6 w-6 relative"
              width={40}
              height={40}
              sizes="100vw"
              alt="Cursor Click"
              src="/icons/cursor-click-02.svg"
            />
            <div className="relative font-semibold text-base md:text-lg text-[#0e0f27]">
              Jetzt ausprobieren
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-4 md:gap-6 shrink-0 mt-2 md:mt-4">
        <div className="w-full flex flex-col items-center gap-1 md:gap-2 text-center">
          <h2 className="w-full relative text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold">
            Spürbare Entlastung für Sie, Ihr Team <br />
            und die gesamte Versorgung
          </h2>
          <div className="w-full relative text-sm md:text-base lg:text-lg leading-relaxed font-light">
            MEQO kooperiert mit dem medizinisch zertifizierten Prof. Valmed®.
          </div>
        </div>
        <div className="w-full flex flex-row items-stretch gap-4 md:gap-6 text-left text-base md:text-lg">
          <Link
            href="/b01"
            className="flex-1 rounded-2xl md:rounded-3xl bg-[#f3f3f7] flex flex-col items-center justify-between pt-6 md:pt-8 pb-0 px-0 box-border gap-3 cursor-pointer hover:bg-[#e4e4e9] transition-colors min-h-[140px] md:min-h-[160px]"
          >
            <div className="flex flex-col items-center justify-center flex-1 w-full pt-2 px-4">
              <Image
                className="h-8 md:h-10 w-auto relative object-contain"
                width={460}
                height={108}
                sizes="100vw"
                alt="MEQO Logo"
                src="/logo-meqo.svg"
              />
            </div>
            <div className="w-full py-3 md:py-4 mt-auto rounded-b-2xl md:rounded-b-3xl flex items-center justify-center shrink-0">
              <div className="relative underline font-semibold text-sm md:text-base text-[#0e0f27]">
                Mehr erfahren
              </div>
            </div>
          </Link>
          <Link
            href="/b04"
            className="flex-1 rounded-2xl md:rounded-3xl bg-[#f3f3f7] flex flex-col items-center justify-between pt-6 md:pt-8 pb-0 px-4 box-border gap-3 cursor-pointer hover:bg-[#e4e4e9] transition-colors min-h-[140px] md:min-h-[160px]"
          >
            <div className="flex flex-col items-center justify-center flex-1 w-full pt-2 px-4">
              <Image
                className="h-8 md:h-10 w-auto relative object-contain max-h-full shrink-0"
                width={625}
                height={115}
                sizes="100vw"
                alt="Prof Valmed Logo"
                src="/Logo_R 1.svg"
              />
            </div>
            <div className="w-full py-3 md:py-4 mt-auto rounded-b-2xl md:rounded-b-3xl flex items-center justify-center shrink-0">
              <div className="relative underline font-semibold text-sm md:text-base text-[#0e0f27]">
                Mehr erfahren
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
