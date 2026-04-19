"use client";

import Image from "next/image";
import BottomNavigation from "@/components/BottomNavigation";
import Customers from "../../components/Customers";
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
      <div className="w-full max-w-5xl flex flex-col items-start gap-3 md:gap-4 text-left">
        <h1 className="w-full text-lg md:text-xl lg:text-2xl leading-tight font-semibold text-[#0e0f27]">
          MEQO Copilot &ndash; die intelligente Schicht <br /> über Ihrer bestehenden IT
        </h1>

        {/* Video Player Area */}
        <div className="w-full h-[200px] md:h-[260px] lg:h-[340px] relative rounded-2xl md:rounded-3xl overflow-hidden transform-gpu [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
          {/* Custom styles to scale up native video controls for touch display */}
          <style dangerouslySetInnerHTML={{
            __html: `
            .kiosk-video::-webkit-media-controls-panel {
              zoom: 1; /* reset scale for desktop */
            }
          `}} />

          <video
            ref={videoRef}
            className="kiosk-video absolute top-0 left-0 w-full h-full object-cover rounded-2xl md:rounded-3xl"
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
              {/* Play Button */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0e0f27]/80 flex items-center justify-center hover:bg-[#0e0f27] transition-colors shadow-2xl">
                <Image
                  src="/icons/play.svg"
                  alt="Play"
                  width={64}
                  height={64}
                  className="w-6 h-6 md:w-8 md:h-8 ml-1"
                />
              </div>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="w-full flex flex-col gap-3 md:gap-4 text-xs md:text-sm lg:text-base leading-relaxed font-normal">
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

      <div className="w-full mx-auto flex flex-col mt-3 md:mt-4 gap-3">
        <BottomNavigation showPrev={false} homeHref="/" showNext={true} nextHref="/b02" />

        <Customers />
      </div>
    </div>
  );
}
