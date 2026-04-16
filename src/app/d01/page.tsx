import Image from "next/image";
import Link from "next/link";

export default function D01Page() {
  return (
    <div className="flex flex-col w-full items-center flex-1 text-white ">
      <div className="w-[1840px] flex flex-col items-end gap-[120px] mt-[651px] ">
        <h1 className="w-full text-[80px] leading-[120%] font-medium text-center text-[#d3e978]">
          Wählen Sie einen Prompt aus:
        </h1>

        <div className="flex flex-col items-center gap-[76px] w-full text-left text-[56px]">
          {/* Prompt 1 */}
          <div className="w-[1520px] rounded-[100px] bg-white/20 flex items-center justify-center p-[100px] box-border gap-[48px] cursor-pointer hover:bg-white/30 transition-colors">
            <div className="flex-1 relative leading-[150%] font-light">
              Benachrichte mich, wenn Vanco-Spiegel und Kreatinin da ist.
              Bewerte mit Prof. Valmed.
            </div>
            <Image
              className="w-[80px] h-[80px] brightness-0 invert"
              width={80}
              height={80}
              alt="Arrow right"
              src="/icons/arrow-narrow-right.svg"
            />
          </div>

          {/* Prompt 2 */}
          <div className="w-[1520px] rounded-[100px] bg-white/20 flex items-center justify-center p-[100px] box-border gap-[48px] cursor-pointer hover:bg-white/30 transition-colors">
            <div className="flex-1 relative leading-[150%] font-light">
              Prüfe alle Arztbriefe und Laborbefunde,
              <br />
              ob es schon mal Hinweise auf akutes Nierenversagen gab.
            </div>
            <Image
              className="w-[80px] h-[80px] brightness-0 invert"
              width={80}
              height={80}
              alt="Arrow right"
              src="/icons/arrow-narrow-right.svg"
            />
          </div>

          {/* Prompt 3 */}
          <div className="w-[1520px] rounded-[100px] bg-white/20 flex items-center justify-center p-[100px] box-border gap-[48px] cursor-pointer hover:bg-white/30 transition-colors">
            <div className="flex-1 relative leading-[150%] font-light">
              Frau Müller kann nicht alleine in ihre Wohnung im 3. Stock
              entlassen werden. Organisiere mit dem Sozialdienst die Entlassung
              nächste Woche.
            </div>
            <Image
              className="w-[80px] h-[80px] brightness-0 invert"
              width={80}
              height={80}
              alt="Arrow right"
              src="/icons/arrow-narrow-right.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[644px]">
        <Link
          href={"/"}
          className="h-[180px] w-[592px] rounded-[48px] border-4 border-white bg-transparent flex items-center justify-center px-[64px] box-border gap-[32px] cursor-pointer text-white transition-colors hover:bg-white/10"
        >
          <div className="h-[96px] w-[96px] shrink-0 flex items-center justify-center relative">
            <Image
              src="/icons/home-smile.svg"
              alt="Home"
              width={94}
              height={94}
              className="w-[94px] h-[94px] brightness-0 invert"
            />
          </div>
          <div className="relative leading-[150%] font-semibold whitespace-nowrap">
            Startseite
          </div>
        </Link>
      </div>
    </div>
  );
}
