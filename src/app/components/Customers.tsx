import Image from "next/image";

export default function Customers() {
  return (
    <>
      <hr className="w-full border-[#0e0f27]/30 my-8 md:my-12 lg:my-16" />
      <div className="w-full max-w-5xl self-center flex flex-col items-center gap-6 md:gap-8 lg:gap-12">
        <h2 className="w-full text-center text-xl md:text-2xl lg:text-3xl font-semibold text-[#0e0f27]">
          Unsere wichtigsten Kunden
        </h2>
        <div className="w-full relative flex items-center justify-center flex-wrap gap-8 md:gap-12 lg:gap-16">
          <div className="h-10 md:h-12 w-auto flex flex-col items-center justify-center">
            <Image
              className="w-auto h-full relative object-contain opacity-50"
              width={422}
              height={71}
              sizes="100vw"
              alt="Customer 1"
              src="/images/bottom1.svg"
            />
          </div>
          <div className="h-10 md:h-12 w-auto flex flex-col items-center justify-center">
            <Image
              className="h-full w-auto relative object-contain opacity-50"
              width={439}
              height={180}
              sizes="100vw"
              alt="Customer 2"
              src="/images/bottom2.svg"
            />
          </div>
          <div className="h-10 md:h-12 w-auto flex flex-col items-center justify-center">
            <Image
              className="h-full w-auto relative object-contain opacity-50 text-gray-500 fill-gray-500"
              style={{ filter: "brightness(0) opacity(0.5)" }} // apply a filter to make it look like the others as bottom3.svg might not have opacity baked in or be an svg that accepts coloring easily
              width={415}
              height={180}
              sizes="100vw"
              alt="Customer 3"
              src="/images/bottom3.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
