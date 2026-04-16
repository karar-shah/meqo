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
      <div className="w-[1840px] flex flex-col items-start gap-[120px] text-left">
        <div className="w-full flex flex-col items-start gap-[80px]">
          <h1 className="w-full text-[96px] leading-[120%] font-medium">
            Warum agentenbasierte Versorgungsintelligenz?
          </h1>
          <div className="w-full flex flex-col items-start gap-[43px]">
            {features.map((feature, i) => (
              <div key={i} className="w-full flex items-start gap-[64px] text-[56px] leading-[150%]">
                <Image
                  src="/icons/check-circle-broken.svg"
                  alt="Check"
                  width={160}
                  height={160}
                  className="w-[160px] h-[160px] shrink-0"
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="font-semibold">{feature.title}</div>
                  <div className="w-full font-light text-[#5d5c6d]">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
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
            />
            <div className="absolute top-[271px] left-0 backdrop-blur-[30.22px] mask-[linear-gradient(to_bottom,transparent,black)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black)] rounded-b-[100px] bg-linear-to-b from-[#0e0f27]/0 to-[#0e0f27]/80 w-[1840px] h-[529px]" />
          </div>
          <Link
            href="/d01"
            className="absolute top-[520px] left-[calc(50%-369px)] shadow-[0px_0px_100px_#0e0f27] rounded-[48px] bg-[#d3e978] h-[180px] flex items-center justify-center py-[32px] px-[64px] box-border gap-[32px] cursor-pointer transition-opacity active:opacity-80 drop-shadow-xl"
          >
            <Image
              className="h-[96px] w-[96px] relative"
              width={96}
              height={96}
              sizes="100vw"
              alt="Cursor Click"
              src="/icons/cursor-click-02.svg"
            />
            <div className="relative leading-[150%] font-semibold">Jetzt ausprobieren</div>
          </Link>
        </div>

        <div className="w-full flex flex-col items-start text-[56px] leading-[150%]">
          <div className="font-semibold">Welche Idee haben Sie?</div>
          <div className="font-light text-[#5d5c6d]">Lassen Sie uns bei dem besten Kaffee auf der DMEA miteinander sprechen.</div>
        </div>
      </div>

      <div className="w-[1840px] mb-[80px]">
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
