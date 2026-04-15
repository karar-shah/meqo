import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation";
import Customers from "../components/Customers";

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
      <div className="w-[1840px] flex flex-col items-center gap-[80px] text-left">
        <div className="w-full flex flex-col items-center gap-[80px]">
          <h1 className="w-full text-[96px] leading-[120%] font-medium">
            Ihr Agenten-Team &ndash; wie eine Assistenz, die mitdenkt und entlastet
          </h1>
          <p className="w-full text-[56px] leading-[150%]">
            <span className="font-light">Der MEQO Copilot </span>
            <span className="font-semibold">denkt mit, erinnert und priorisiert</span>
            <span className="font-light"> &ndash; damit nichts übersehen wird. Die Agenten arbeiten kontinuierlich im Hintergrund, prüfen und melden sich, wenn es darauf ankommt.</span>
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-[40px]">
          <Image
            src="/images/b02-image.png"
            alt="MEQO Copilot Interface"
            width={1085}
            height={870}
            className="w-[1085px] h-auto object-cover"
          />

          <div className="w-full flex flex-col items-start gap-[43px]">
            {checklistItems.map((item, i) => (
              <div key={i} className="w-full flex items-center gap-[64px]">
                <Image
                  src="/icons/check-circle-broken.svg"
                  alt="Check"
                  width={160}
                  height={160}
                  className="w-[160px] h-[160px] shrink-0"
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="text-[56px] leading-[150%] font-semibold">{item.title}</div>
                  <div className="w-full text-[56px] leading-[150%] font-light text-[#5d5c6d]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[1840px] mb-[80px]">
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
