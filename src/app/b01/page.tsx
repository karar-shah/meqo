"use client";

import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation";
import Customers from "../components/Customers";
import { useRef, useState } from "react";

export default function B01Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className="flex flex-col justify-between w-full flex-1">
      <div className="w-[1840px] flex flex-col items-start gap-[120px] text-left">
        <h1 className="w-full text-[96px] leading-[120%] font-medium">
          MEQO Copilot &ndash; die intelligente Schicht <br /> über Ihrer bestehenden IT
        </h1>

        {/* Video Player Area */}
        <div className="w-full h-[1035px] relative rounded-[100px] overflow-hidden transform-gpu [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[100px]"
            width={1840}
            height={1035}
            src="/vid_1_short_comp.mp4"
            poster="/images/video_thumbnail.png"
            controls={isPlaying}
            preload="none"
            aria-label="Video player"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={togglePlay}
            >
              {/* Dark Overlay */}
              {/* <div className="absolute inset-0 bg-black/20 mix-blend-multiply" /> */}

              {/* Play Button */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-[#0e0f27]/80 flex items-center justify-center hover:bg-[#0e0f27] transition-colors shadow-2xl">
                <Image
                  src="/icons/play.svg"
                  alt="Play"
                  width={144}
                  height={144}
                  className="w-[144px] h-[144px] ml-[16px]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="w-full flex flex-col gap-[80px] text-[56px] leading-[150%] font-light">
          <p>
            MEQO Copilot verbindet Ihre bestehenden Systeme &ndash; <br />
            <span className="font-semibold">KIS, Labor, Radiologie und Vitaldaten</span> &ndash; und macht daraus eine <br />
            handlungsfähige Versorgungsintelligenz. Kein weiteres System, sondern als <br />
            intelligente Schicht über Ihrer bestehenden IT.
          </p>
          <p>
            Wir unterstützen nicht nur die intelligente Automatisierung von Prozessen, <br />
            sondern machen auch Expertenwissen breit verfügbar und für andere <br />
            Anwender:innen nutzbar.
          </p>
        </div>
      </div>

      <div className="w-[1840px] mb-[80px]">
        <BottomNavigation showPrev={false} homeHref="/" showNext={true} nextHref="/b02" />

        <Customers />
      </div>
    </div>
  );
}
