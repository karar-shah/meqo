import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="w-[1840px] flex flex-col items-start gap-[104px]">
        <div className="w-full flex flex-col items-center gap-[48px]">
          <h1 className="w-full relative text-[96px] leading-[120%] font-medium">
            Entdecken Sie unsere agentenbasierte Versorgungsintelligenz
          </h1>
          <p className="w-[1728px] relative text-[56px] leading-[150%] font-light inline-block">
            Intuitiv nutzbare Lösungen für die Gesundheitsversorgung von morgen
            &ndash; kombiniert mit einer leistungsstarken Plattform zur
            Erstellung individueller Agenten.
          </p>
        </div>
        <div className="w-[1840px] h-[800px] relative text-left text-[56px]">
          <div className="absolute top-0 left-0 w-[1840px] h-[800px]">
            <Image
              className="absolute top-0 left-0 rounded-[100px] w-[1840px] h-[800px] object-cover"
              width={1840}
              height={800}
              sizes="100vw"
              alt="Hero Background"
              src="/images/1.png"
              priority
              loading="eager"
            />
            <div className="absolute top-[271px] left-0 backdrop-blur-[30.22px] mask-[linear-gradient(to_bottom,transparent,black)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)] rounded-b-[100px] bg-linear-to-b from-[#0e0f27]/0 to-[#0e0f27]/80 w-[1840px] h-[529px]" />
          </div>
          <Link
            href="/d01"
            className="absolute top-[520px] left-[calc(50%-369px)] shadow-[0px_0px_100px_#0e0f27] rounded-[48px] bg-[#d3e978] h-[180px] flex items-center justify-center py-[32px] px-[64px] box-border gap-[32px] cursor-pointer transition-all duration-75 active:opacity-80 active:scale-[0.98] drop-shadow-xl"
          >
            <Image
              className="h-[96px] w-[96px] relative"
              width={96}
              height={96}
              sizes="100vw"
              alt="Cursor Click"
              src="/icons/cursor-click-02.svg"
            />
            <div className="relative leading-[150%] font-semibold">
              Jetzt ausprobieren
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-[80px]">
        <div className="w-full flex flex-col items-start gap-[48px]">
          <h2 className="w-full relative text-[96px] leading-[120%] font-medium">
            Spürbare Entlastung für Sie, Ihr Team <br />
            und die gesamte Versorgung
          </h2>
          <div className="w-full relative text-[56px] leading-[150%] font-light">
            MEQO koorperiert mit dem medizinisch zertifizierten Prof. Valmed®.
          </div>
        </div>
        <div className="w-full h-[800px] flex items-center gap-[48px] text-left text-[56px]">
          <Link
            href="/b01"
            className="h-[800px] w-[896px] rounded-[100px] bg-[#f3f3f7] flex flex-col items-center justify-center pt-[120px] pb-0 px-0 box-border gap-[80px] cursor-pointer hover:bg-[#e4e4e9] transition-colors"
          >
            <div className="h-[120px] flex flex-col items-start pt-[12px] pb-0 px-0 box-border">
              <div className="flex flex-col items-center justify-center">
                <Image
                  className="h-[107.7px] w-auto relative"
                  style={{ width: "auto" }}
                  width={460}
                  height={108}
                  sizes="100vw"
                  alt="MEQO Logo"
                  src="/logo-meqo.svg"
                />
              </div>
            </div>
            <div className="w-full h-[228px] rounded-b-[100px] flex items-center justify-center">
              <div className="relative underline leading-[96px] font-semibold">
                Mehr erfahren
              </div>
            </div>
          </Link>
          <Link
            href="/b04"
            className="h-[800px] w-[896px] rounded-[100px] bg-[#f3f3f7] flex flex-col items-center justify-center pt-[120px] px-[120px] pb-0 box-border gap-[80px] cursor-pointer hover:bg-[#e4e4e9] transition-colors"
          >
            <Image
              className="w-[681.7px] h-auto relative max-h-full shrink-0"
              style={{ height: "auto" }}
              width={682}
              height={120}
              sizes="100vw"
              alt="Prof Valmed Logo"
              src="/Logo_R 1.svg"
            />
            <div className="w-full h-[228px] rounded-b-[100px] flex items-center justify-center shrink-0">
              <div className="relative underline leading-[96px] font-semibold">
                Mehr erfahren
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
