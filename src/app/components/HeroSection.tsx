/**
 * HeroSection
 * Top section of the exhibition screen.
 *
 * Contains:
 *  - Display heading
 *  - Sub-heading / description
 *  - Full-width hero image with dark gradient overlay
 *  - Lime-coloured "Jetzt ausprobieren" CTA button overlaid on the image
 *
 * All dimensions are expressed in vw, proportional to the 2160 px Figma
 * design width (1 design-px = 0.04630 vw).
 */
export default function HeroSection() {
  return (
    <section className="flex flex-col gap-[4.815vw]">
      {/* ── Heading block ── */}
      <div className="flex flex-col items-center gap-[2.222vw]">
        <h1 className="liga-off w-full text-center font-medium text-[4.444vw] leading-[120%] text-[#0E0F27]">
          Entdecken Sie unsere agentenbasierte Versorgungsintelligenz
        </h1>

        <p className="w-full text-center font-light text-[2.593vw] leading-[150%] text-[#0E0F27]">
          Intuitiv nutzbare Lösungen für die Gesundheitsversorgung von morgen &ndash;
          kombiniert mit einer leistungsstarken Plattform zur Erstellung
          individueller Agenten.
        </p>
      </div>

      {/* ── Hero image with overlay & CTA ── */}
      <div className="relative w-full h-[37.037vw] rounded-[4.630vw] overflow-hidden">
        {/* Background photo */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/eac0bc9ae7b396ae4cf84ae537a05cf07a311ca6?width=3680"
          alt="Medizinisches Team bei der Zusammenarbeit"
          className="w-full h-full object-cover"
        />

        {/* Gradient + blur overlay (bottom 66 % of image) */}
        <div
          className="absolute inset-x-0 bottom-0 rounded-b-[4.630vw]"
          style={{
            height: "66.125%",
            background:
              "linear-gradient(180deg, rgba(14,15,39,0) 0%, rgba(14,15,39,0.80) 100%)",
            backdropFilter: "blur(15.1px)",
          }}
        />

        {/* CTA button — horizontally centered, 12.5 % from image bottom */}
        <div className="absolute bottom-[4.630vw] left-1/2 -translate-x-1/2">
          <button className="cta-shadow flex items-center gap-[1.481vw] h-[8.333vw] px-[2.963vw] rounded-[2.222vw] bg-[#D3E978] cursor-pointer active:opacity-80 transition-opacity">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c33297a25e9935afdc87041be4e2d23243bdfeee?width=192"
              alt=""
              aria-hidden="true"
              className="w-[4.444vw] h-[4.444vw] shrink-0"
            />
            <span className="font-semibold text-[2.593vw] leading-[150%] text-[#0E0F27] whitespace-nowrap">
              Jetzt ausprobieren
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
