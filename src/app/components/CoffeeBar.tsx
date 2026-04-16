/**
 * CoffeeBar
 * Bottom strip shown on the exhibition screen — lime background with a
 * "Live-Demo und Kaffee" call-to-action.
 *
 * All sizes are expressed in vw so the bar scales proportionally with the
 * 2160 px design width (1 design-px = 0.04630 vw).
 */
export default function CoffeeBar() {
  return (
    <div className="w-full flex items-center justify-center gap-[2.222vw] bg-[#D3E978] h-[8.333vw] shrink-0">
      {/* Coffee cup icon — original SVG from Figma */}
      <svg
        className="w-[4.444vw] h-[4.444vw] shrink-0"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M73.0013 34.6193H76.8108C80.8522 34.6193 84.728 36.2247 87.5857 39.0824C90.4434 41.9401 92.0488 45.816 92.0488 49.8573C92.0488 53.8987 90.4434 57.7746 87.5857 60.6323C84.728 63.49 80.8522 65.0954 76.8108 65.0954H73.0013M73.0013 34.6193H12.0488V68.9049C12.0488 72.9463 13.6543 76.8222 16.512 79.6799C19.3696 82.5375 23.2455 84.143 27.2869 84.143H57.763C61.8044 84.143 65.6803 82.5375 68.5379 79.6799C71.3956 76.8222 73.0011 72.9463 73.0011 68.9049L73.0013 34.6193ZM27.2871 7.94971V19.3783M42.5253 7.94971V19.3783M57.763 7.94971V19.3783"
          stroke="#0E0F27"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="text-[2.593vw] leading-[110%] text-center text-[#0E0F27]">
        <strong className="font-semibold">Live-Demo und Kaffee &ndash; &nbsp;</strong>
        <span className="font-normal">Sprechen Sie uns gerne an.</span>
      </p>
    </div>
  );
}
