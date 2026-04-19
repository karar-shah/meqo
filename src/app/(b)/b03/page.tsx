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
      <div className="w-full flex flex-col items-start gap-12 md:gap-16 lg:gap-24 text-left max-w-5xl self-center">
        <div className="w-full flex flex-col items-start gap-8 md:gap-12">
          <h1 className="w-full text-3xl md:text-5xl lg:text-6xl leading-tight font-medium">
            Warum agentenbasierte Versorgungsintelligenz?
          </h1>
          <div className="w-full flex flex-col items-start gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="w-full flex items-start gap-6 md:gap-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
                <Image
                  src="/icons/check-circle-broken.svg"
                  alt="Check"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 shrink-0"
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="font-semibold">{feature.title}</div>
                  <div className="w-full font-light text-[#5d5c6d]">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
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
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-md mask-[linear-gradient(to_bottom,transparent,black)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)] rounded-b-3xl md:rounded-b-[48px] bg-linear-to-b from-[#0e0f27]/0 to-[#0e0f27]/80 w-full h-2/3" />
          </div>
          <Link
            href="/d01"
            className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 shadow-[0px_0px_100px_#0e0f27] rounded-[32px] md:rounded-[48px] bg-[#d3e978] h-16 md:h-20 flex items-center justify-center px-6 md:px-12 box-border gap-4 cursor-pointer transition-opacity active:opacity-80 drop-shadow-xl w-max"
          >
            <Image
              className="h-8 md:h-10 w-8 md:w-10 relative"
              width={40}
              height={40}
              sizes="100vw"
              alt="Cursor Click"
              src="/icons/cursor-click-02.svg"
            />
            <div className="relative font-semibold text-lg md:text-xl">Jetzt ausprobieren</div>
          </Link>
        </div>

        <div className="w-full flex flex-col items-start text-xl md:text-2xl leading-relaxed mt-4 md:mt-8">
          <div className="font-semibold">Welche Idee haben Sie?</div>
          <div className="font-light text-[#5d5c6d]">Lassen Sie uns bei dem besten Kaffee auf der DMEA miteinander sprechen.</div>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col mt-12 md:mt-16 gap-8">
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
