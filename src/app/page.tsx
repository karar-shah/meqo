import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="w-full flex flex-col items-start gap-4 md:gap-6">
        <div className="w-full flex flex-col items-center gap-2 md:gap-3">
          <h1 className="w-full relative text-xl md:text-2xl lg:text-3xl leading-tight font-semibold text-center">
            Entdecken Sie unsere agentenbasierte Versorgungsintelligenz
          </h1>
          <p className="w-full max-w-5xl relative text-xs md:text-sm lg:text-base leading-relaxed font-light inline-block text-center">
            Intuitiv nutzbare Lösungen für die Gesundheitsversorgung von morgen
            &ndash; kombiniert mit einer leistungsstarken Plattform zur
            Erstellung individueller Agenten.
          </p>
        </div>
        <div className="w-full h-[200px] md:h-[240px] lg:h-[320px] relative text-left text-sm md:text-base">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              className="absolute top-0 left-0 rounded-2xl md:rounded-3xl w-full h-full object-cover"
              width={1840}
              height={800}
              sizes="100vw"
              alt="Hero Background"
              src="/images/1.png"
              priority
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-md mask-[linear-gradient(to_bottom,transparent,black)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)] rounded-b-2xl md:rounded-b-3xl bg-linear-to-b from-[#0e0f27]/0 to-[#0e0f27]/80 w-full h-2/3" />
          </div>
          <Link
            href="/d01"
            className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 shadow-[0px_0px_60px_#0e0f27] rounded-2xl md:rounded-3xl bg-[#d3e978] h-10 md:h-12 flex items-center justify-center px-4 md:px-8 box-border gap-2 cursor-pointer transition-all duration-75 active:opacity-80 active:scale-[0.98] drop-shadow-xl w-max"
          >
            <Image
              className="h-5 md:h-6 w-5 md:w-6 relative"
              width={40}
              height={40}
              sizes="100vw"
              alt="Cursor Click"
              src="/icons/cursor-click-02.svg"
            />
            <div className="relative font-semibold text-sm md:text-base">
              Jetzt ausprobieren
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-4 md:gap-6">
        <div className="w-full flex flex-col items-center gap-2 md:gap-3 text-center">
          <h2 className="w-full relative text-lg md:text-xl lg:text-2xl leading-tight font-semibold">
            Spürbare Entlastung für Sie, Ihr Team <br />
            und die gesamte Versorgung
          </h2>
          <div className="w-full relative text-xs md:text-sm lg:text-base leading-relaxed font-light">
            MEQO kooperiert mit dem medizinisch zertifizierten Prof. Valmed®.
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-stretch gap-3 md:gap-4 lg:gap-6 text-left text-base md:text-lg">
          <Link
            href="/b01"
            className="flex-1 rounded-2xl md:rounded-3xl bg-[#f3f3f7] flex flex-col items-center justify-between pt-6 md:pt-8 pb-0 px-0 box-border gap-3 cursor-pointer hover:bg-[#e4e4e9] transition-colors min-h-[140px] md:min-h-[180px]"
          >
            <div className="flex flex-col items-center justify-center flex-1 w-full pt-3 px-4">
              <Image
                className="h-8 md:h-10 w-auto relative"
                style={{ width: "auto" }}
                width={460}
                height={108}
                sizes="100vw"
                alt="MEQO Logo"
                src="/logo-meqo.svg"
              />
            </div>
            <div className="w-full py-3 md:py-4 mt-auto rounded-b-2xl md:rounded-b-3xl flex items-center justify-center shrink-0">
              <div className="relative underline font-semibold text-sm md:text-base">
                Mehr erfahren
              </div>
            </div>
          </Link>
          <Link
            href="/b04"
            className="flex-1 rounded-2xl md:rounded-3xl bg-[#f3f3f7] flex flex-col items-center justify-between pt-6 md:pt-8 pb-0 px-4 box-border gap-3 cursor-pointer hover:bg-[#e4e4e9] transition-colors min-h-[140px] md:min-h-[180px]"
          >
            <div className="flex flex-col items-center justify-center flex-1 w-full pt-3 px-4">
              <Image
                className="h-8 md:h-10 w-auto relative max-h-full shrink-0"
                style={{ height: "auto" }}
                width={682}
                height={120}
                sizes="100vw"
                alt="Prof Valmed Logo"
                src="/Logo_R 1.svg"
              />
            </div>
            <div className="w-full py-3 md:py-4 mt-auto rounded-b-2xl md:rounded-b-3xl flex items-center justify-center shrink-0">
              <div className="relative underline font-semibold text-sm md:text-base">
                Mehr erfahren
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
