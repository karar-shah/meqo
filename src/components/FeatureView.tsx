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
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 w-full max-w-4xl">
          <Image
            src={centerImage}
            alt="Feature Card"
            width={1363}
            height={1490}
            className="w-auto h-[40vh] max-h-[600px] object-contain"
            priority
            loading="eager"
          />
          <div
            className="mt-8 md:mt-12 w-full max-w-4xl relative text-2xl md:text-3xl lg:text-4xl leading-tight font-medium text-white text-center inline-block px-4"
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
      <div className="w-full max-w-7xl flex flex-col sm:flex-row text-left font-['Archivo'] relative z-0 items-center justify-between gap-8 md:gap-12 flex-1 min-h-[60vh]">

        {/* Texts Section */}
        <div className="flex flex-col gap-4 md:gap-6 text-[#d3e978] w-full md:w-[420px] shrink-0 relative z-30">
          <div className="flex flex-col gap-2">
            <div className="text-base md:text-lg leading-tight font-semibold">
              {category}
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl leading-tight font-medium text-white" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <div className="flex flex-col gap-3 md:gap-5 text-white mt-2 md:mt-4">
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-3 md:gap-4">
                <Image
                  src="/icons/check-circle-broken-green.svg"
                  alt="Check"
                  width={96}
                  height={96}
                  className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                />
                <div className="flex-1 text-sm md:text-base lg:text-lg leading-snug font-light">
                  {bullet}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Image Section - absolute positioning relative to ThemeWrapper */}
        <div className="flex-1 flex max-w-none h-full w-full items-center justify-end overflow-visible z-10 pointer-events-none relative rounded-t-3xl md:rounded-t-[3rem] bg-[#0e0f27] mt-[10vh] lg:-mr-28 mb-24">
          <Image
            src={centerImage}
            alt={title}
            width={1067}
            height={2048}
            className="w-full max-w-full md:w-[140%] md:max-w-[140%] h-auto min-h-[700px] max-h-[110vh] md:max-h-[130vh] object-contain object-right pointer-events-auto rounded-t-3xl md:rounded-t-[3rem]"
            priority
          />
        </div>

      </div>

      {/* Bottom Navigation */}
      <BottomNavigation theme="dark" position="absolute" showGrid={true} />
    </>
  );
}
