import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="w-full flex flex-col items-start gap-12 md:gap-16 lg:gap-24">
        <div className="w-full flex flex-col items-center gap-6 md:gap-8">
          <h1 className="w-full relative text-4xl md:text-5xl lg:text-7xl leading-tight font-semibold text-center">
            Entdecken Sie unsere agentenbasierte Versorgungsintelligenz
          </h1>
          <p className="w-full max-w-5xl relative text-lg md:text-xl lg:text-2xl leading-relaxed font-light inline-block text-center">
            Intuitiv nutzbare Lösungen für die Gesundheitsversorgung von morgen
            &ndash; kombiniert mit einer leistungsstarken Plattform zur
            Erstellung individueller Agenten.
          </p>
        </div>
        <div className="w-full aspect-[16/9] md:h-[400px] lg:h-[600px] relative text-left text-lg md:text-xl">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              className="absolute top-0 left-0 rounded-3xl md:rounded-[48px] w-full h-full object-cover"
              width={1840}
              height={800}
              sizes="100vw"
              alt="Hero Background"
              src="/images/1.png"
              priority
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-md mask-[linear-gradient(to_bottom,transparent,black)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)] rounded-b-3xl md:rounded-b-[48px] bg-linear-to-b from-[#0e0f27]/0 to-[#0e0f27]/80 w-full h-2/3" />
          </div>
          <Link
            href="/d01"
            className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 shadow-[0px_0px_60px_#0e0f27] rounded-[32px] md:rounded-[48px] bg-[#d3e978] h-16 md:h-20 flex items-center justify-center px-6 md:px-12 box-border gap-4 cursor-pointer transition-all duration-75 active:opacity-80 active:scale-[0.98] drop-shadow-xl w-max"
          >
            <Image
              className="h-8 md:h-10 w-8 md:w-10 relative"
              width={40}
              height={40}
              sizes="100vw"
              alt="Cursor Click"
              src="/icons/cursor-click-02.svg"
            />
            <div className="relative font-semibold text-lg md:text-xl">
              Jetzt ausprobieren
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-12 md:gap-16 lg:gap-24">
        <div className="w-full flex flex-col items-center gap-6 md:gap-8 text-center">
          <h2 className="w-full relative text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
            Spürbare Entlastung für Sie, Ihr Team <br />
            und die gesamte Versorgung
          </h2>
          <div className="w-full relative text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
            MEQO kooperiert mit dem medizinisch zertifizierten Prof. Valmed®.
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-stretch gap-6 md:gap-8 lg:gap-12 text-left text-xl md:text-2xl">
          <Link
            href="/b01"
            className="flex-1 rounded-3xl md:rounded-[48px] bg-[#f3f3f7] flex flex-col items-center justify-between pt-12 md:pt-16 pb-0 px-0 box-border gap-8 cursor-pointer hover:bg-[#e4e4e9] transition-colors min-h-[300px] md:min-h-[400px]"
          >
            <div className="flex flex-col items-center justify-center flex-1 w-full pt-8 px-6">
              <Image
                className="h-12 md:h-16 w-auto relative"
                style={{ width: "auto" }}
                width={460}
                height={108}
                sizes="100vw"
                alt="MEQO Logo"
                src="/logo-meqo.svg"
              />
            </div>
            <div className="w-full py-6 md:py-8 mt-auto rounded-b-3xl md:rounded-b-[48px] flex items-center justify-center shrink-0">
              <div className="relative underline font-semibold">
                Mehr erfahren
              </div>
            </div>
          </Link>
          <Link
            href="/b04"
            className="flex-1 rounded-3xl md:rounded-[48px] bg-[#f3f3f7] flex flex-col items-center justify-between pt-12 md:pt-16 pb-0 px-6 box-border gap-8 cursor-pointer hover:bg-[#e4e4e9] transition-colors min-h-[300px] md:min-h-[400px]"
          >
            <div className="flex flex-col items-center justify-center flex-1 w-full pt-8 px-6">
              <Image
                className="h-12 md:h-16 w-auto relative max-h-full shrink-0"
                style={{ height: "auto" }}
                width={682}
                height={120}
                sizes="100vw"
                alt="Prof Valmed Logo"
                src="/Logo_R 1.svg"
              />
            </div>
            <div className="w-full py-6 md:py-8 mt-auto rounded-b-3xl md:rounded-b-[48px] flex items-center justify-center shrink-0">
              <div className="relative underline font-semibold">
                Mehr erfahren
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
