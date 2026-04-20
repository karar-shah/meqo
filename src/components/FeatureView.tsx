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
          <div className="bg-[#f4f5f8] rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center w-[90%] max-w-[460px] shadow-xl mx-auto">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-6 shrink-0 bg-gray-200">
              <Image 
                src="/images/Mask group1.png" 
                alt="Profile" 
                width={112} 
                height={112} 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-[#0e0f27] text-2xl md:text-3xl font-medium mb-6">
              Interesse geweckt?
            </h2>
            <div className="text-[#0e0f27] text-base md:text-lg flex flex-col gap-6 font-light">
              <p className="leading-relaxed">
                Gerne berate ich Sie in einem<br />persönlichen Gespräch.
              </p>
              <p>
                hallo@meqo.de
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Mehr erfahren:</span><br />
                <a href="http://www.meqo.de/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                  http://www.meqo.de/
                </a>
              </p>
            </div>
          </div>
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
      <div className="w-full max-w-7xl flex flex-col lg:flex-row text-left font-['Archivo'] relative z-0 items-center justify-start gap-8 lg:gap-12 flex-1 lg:h-full lg:min-h-0">

        {/* Texts Section */}
        <div className="flex flex-col items-center justify-center md:justify-start gap-4 md:gap-6 text-[#d3e978] w-full lg:w-[420px] shrink-0 relative z-30 pt-8 lg:pt-0">
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
        <div className="flex-1 flex max-w-none h-full w-full items-center justify-center lg:justify-end overflow-visible z-10 pointer-events-none relative rounded-t-3xl md:rounded-t-[3rem] bg-[#0e0f27] mt-[5vh] lg:mt-[5vh] lg:-mr-28 mb-12 lg:mb-0">
          <Image
            src={centerImage}
            alt={title}
            width={1067}
            height={2048}
            className="w-full max-w-full lg:w-[140%] lg:max-w-[140%] h-auto min-h-[400px] lg:min-h-0 max-h-[60vh] lg:max-h-[70vh] object-contain object-center lg:object-right pointer-events-auto rounded-t-3xl md:rounded-t-[3rem] md:[clip-path:inset(0_100px_0_105px)]"
            priority
          />
        </div>

      </div>

      {/* Bottom Navigation */}
      <BottomNavigation theme="dark" position="absolute" showGrid={true} />
    </>
  );
}
