import Image from "next/image";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation";
import Customers from "../../components/Customers";

export default function B03Page() {

  const features = [
    {
      title: "Smartere Prozesse",
      description: "Teamkommunikation und Zusammenarbeit deutlich vereinfachen &ndash; von Übergaben bis Konsilanfragen."
    },
    {
      title: "Mehr Sicherheit",
      description: "Offene Aufgaben im Blick behalten und klinische Scores sowie Qualitätsanforderungen automatisch prüfen."
    },
    {
      title: "Bessere Entscheidungen",
      description: "Das Agenten-Team denkt mit, prüft und empfiehlt &ndash; und entlastet so das medizinische Personal."
    }
  ];

  return (
    <div className="flex flex-col justify-between w-full flex-1">
      <div className="w-full flex flex-col items-start gap-3 md:gap-4 lg:gap-6 text-left max-w-5xl self-center">
        <div className="w-full flex flex-col items-start gap-3 md:gap-4">
          <h1 className="w-full text-lg md:text-2xl lg:text-3xl leading-tight font-medium">
            Warum agentenbasierte Versorgungsintelligenz?
          </h1>
          <div className="w-full flex flex-col items-start gap-2 md:gap-3">
            {features.map((feature, i) => (
              <div key={i} className="w-full flex items-start gap-3 md:gap-4 text-xs md:text-sm lg:text-base leading-relaxed">
                <Image
                  src="/icons/check-circle-broken.svg"
                  alt="Check"
                  width={64}
                  height={64}
                  className="w-7 h-7 md:w-8 md:h-8 shrink-0"
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="font-semibold">{feature.title}</div>
                  <div className="w-full font-light text-[#5d5c6d]">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[180px] md:h-[220px] lg:h-[280px] relative text-left text-sm md:text-base">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              className="absolute top-0 left-0 rounded-2xl md:rounded-3xl w-full h-full object-cover"
              width={1840}
              height={800}
              sizes="100vw"
              alt="Hero Background"
              src="/images/1.png"
              priority
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-md mask-[linear-gradient(to_bottom,transparent,black)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)] rounded-b-2xl md:rounded-b-3xl bg-linear-to-b from-[#0e0f27]/0 to-[#0e0f27]/80 w-full h-2/3" />
          </div>
          <Link
            href="/d01"
            className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 shadow-[0px_0px_100px_#0e0f27] rounded-2xl md:rounded-3xl bg-[#d3e978] h-10 md:h-12 flex items-center justify-center px-4 md:px-8 box-border gap-2 cursor-pointer transition-opacity active:opacity-80 drop-shadow-xl w-max"
          >
            <Image
              className="h-5 md:h-6 w-5 md:w-6 relative"
              width={40}
              height={40}
              sizes="100vw"
              alt="Cursor Click"
              src="/icons/cursor-click-02.svg"
            />
            <div className="relative font-semibold text-sm md:text-base">Jetzt ausprobieren</div>
          </Link>
        </div>

        <div className="w-full flex flex-col items-start text-sm md:text-base leading-relaxed mt-1 md:mt-2">
          <div className="font-semibold">Welche Idee haben Sie?</div>
          <div className="font-light text-[#5d5c6d]">Lassen Sie uns bei dem besten Kaffee auf der DMEA miteinander sprechen.</div>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col mt-3 md:mt-4 gap-3">
        <BottomNavigation
          showPrev={true}
          prevHref="/b02"
          homeHref="/"
          showNext={false}
        />
        <Customers />
      </div>
    </div>
  );
}
