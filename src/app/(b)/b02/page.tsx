import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation";
import Customers from "../../components/Customers";

export default function B02Page() {
  const checklistItems = [
    {
      title: "Monitoring",
      desc: "Vitaldaten & Laborwerte überwachen, Kritisches sofort melden"
    },
    {
      title: "Dokumentation",
      desc: "Automatisiert vorbereiten"
    },
    {
      title: "Recherche",
      desc: "Komplexe Akten durchsuchen und das Wesentliche extrahieren"
    },
    {
      title: "Kommunikation",
      desc: "Einfaches Messaging mit allen Beteiligten"
    }
  ];

  return (
    <div className="flex flex-col justify-between w-full flex-1">
      <div className="w-full flex flex-col items-center gap-12 md:gap-16 text-left">
        <div className="w-full flex flex-col items-center gap-8 md:gap-12 text-center">
          <h1 className="w-full text-3xl md:text-5xl lg:text-6xl leading-tight font-medium">
            Ihr Agenten-Team &ndash; wie eine Assistenz, die mitdenkt und entlastet
          </h1>
          <p className="w-full text-lg md:text-xl lg:text-2xl leading-relaxed max-w-5xl">
            <span className="font-light">Der MEQO Copilot </span>
            <span className="font-semibold">denkt mit, erinnert und priorisiert</span>
            <span className="font-light"> &ndash; damit nichts übersehen wird. Die Agenten arbeiten kontinuierlich im Hintergrund, prüfen und melden sich, wenn es darauf ankommt.</span>
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center">
          <Image
            src="/images/b02-image.png"
            alt="MEQO Copilot Interface"
            width={1085}
            height={870}
            className="w-full max-w-2xl h-auto object-contain flex-1"
          />

          <div className="flex-1 flex flex-col items-start gap-6 md:gap-8 max-w-xl">
            {checklistItems.map((item, i) => (
              <div key={i} className="w-full flex items-center gap-6 md:gap-8">
                <Image
                  src="/icons/check-circle-broken.svg"
                  alt="Check"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 shrink-0"
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="text-xl md:text-2xl leading-relaxed font-semibold">{item.title}</div>
                  <div className="w-full text-lg md:text-xl leading-relaxed font-light text-[#5d5c6d]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col mt-12 md:mt-16 gap-8">
        <BottomNavigation
          showPrev={true}
          prevHref="/b01"
          homeHref="/"
          showNext={true}
          nextHref="/b03"
        />
        <Customers />
      </div>
    </div>
  );
}
