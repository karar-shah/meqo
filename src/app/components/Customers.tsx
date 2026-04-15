import Image from "next/image";

export default function Customers() {
  return (
    <>

      <hr className="w-full border-[#0e0f27]/30 my-[100px]" />
      <div className="w-[1840px] flex flex-col items-center gap-[80px]">
        <h2 className="w-full text-center text-[56px] font-semibold ">
          Unsere wichtigsten Kunden
        </h2>
        <div className="w-full relative flex items-start justify-center flex-wrap content-start gap-y-0 gap-x-[163px]">
          <div className="h-[180px] w-[422px] flex flex-col items-start justify-center">
            <Image
              className="w-full h-[71.2px] relative object-cover opacity-50"
              width={422}
              height={71}
              sizes="100vw"
              alt="Customer 1"
              src="/images/bottom1.svg"
            />
          </div>
          <Image
            className="h-[180px] w-[439px] relative object-cover opacity-50"
            width={439}
            height={180}
            sizes="100vw"
            alt="Customer 2"
            src="/images/bottom2.svg"
          />
          <Image
            className="h-[180px] w-[415px]"
            width={415}
            height={180}
            sizes="100vw"
            alt="Customer 3"
            src="/images/bottom3.svg"
          />
        </div>
      </div>
    </>
  );
}
