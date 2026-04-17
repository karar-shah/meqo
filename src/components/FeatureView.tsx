import Image from "next/image";
import BottomNavigation from "./BottomNavigation";

interface FeatureViewProps {
  category: string;
  title: string;
  bullets: string[];
  centerImage: string;
  isEndPage?: boolean;
}

export default function FeatureView({
  category,
  title,
  bullets,
  centerImage,
  isEndPage,
}: FeatureViewProps) {
  if (isEndPage) {
    return (
      <>
        {/* End Page Main Content */}
        <div className="absolute top-[1126px] left-1/2 -translate-x-1/2 flex flex-col items-center z-10 w-full">
          <Image
            src={centerImage}
            alt="Feature Card"
            width={1363}
            height={1490}
            className="w-[1363px] h-[1490px] object-cover"
          />
          <div
            className="mt-[350px] w-[1515px] h-[192px] relative text-[80px] leading-[120%] font-medium font-['Archivo'] text-white text-center inline-block"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation theme="dark" position="absolute" showGrid={true} />
      </>
    );
  }

  return (
    <>
      {/* Wrapper inside main that takes the standard width */}
      <div className="w-[1840px] flex flex-col text-left font-['Archivo'] relative z-0">

        {/* Texts Section */}
        <div className="flex flex-col gap-[64px] text-[#d3e978] w-full">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[56px] leading-[150%] font-semibold">
              {category}
            </div>
            <div className="text-[96px] leading-[120%] font-medium text-white" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <div className="flex flex-col gap-[32px] text-white">
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-[48px]">
                <Image
                  src="/icons/check-circle-broken-green.svg"
                  alt="Check"
                  width={96}
                  height={96}
                  className="w-[96px] h-[96px] shrink-0"
                />
                <div className="flex-1 text-[56px] leading-[150%] font-light">
                  {bullet}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Image Section - absolute positioning relative to ThemeWrapper */}
      <div className="w-[1067px] max-h-[2048px] flex items-start justify-center overflow-hidden z-10 pointer-events-none relative rounded-t-[53px] bg-[#0e0f27]">
        <Image
          src={centerImage}
          alt={title}
          width={1067}
          height={2048}
          className="w-auto h-[2048px] object-cover pointer-events-auto rounded-t-[53px]"
        />


        {/* Blending div at the bottom of the image */}
        {/* <div className="absolute -bottom-[1px] -left-[5px] w-[calc(100%+10px)] z-20 pointer-events-none" style={{
          height: "770px",
          background: "linear-gradient(0deg, #0e0f27 15px, rgba(14, 15, 39, 0) 100%)",
        }} /> */}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation theme="dark" position="absolute" showGrid={true} />
    </>
  );
}
