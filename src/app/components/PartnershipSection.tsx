import PartnerCard from "./PartnerCard";

/**
 * PartnershipSection
 * Second content block on the exhibition screen.
 *
 * Contains:
 *  - Display heading
 *  - Short description
 *  - Side-by-side MEQO and Prof. Valmed® partner cards
 */
export default function PartnershipSection() {
  return (
    <section className="flex flex-col gap-[3.704vw]">
      {/* ── Heading block ── */}
      <div className="flex flex-col gap-[2.222vw]">
        <h2 className="liga-off w-full text-center font-medium text-[4.444vw] leading-[120%] text-[#0E0F27]">
          Spürbare Entlastung für Sie, Ihr Team
          <br />
          und die gesamte Versorgung
        </h2>

        <p className="w-full text-center font-light text-[2.593vw] leading-[150%] text-[#0E0F27]">
          MEQO koorperiert mit dem medizinisch zertifizierten Prof. Valmed®.
        </p>
      </div>

      {/* ── Partner cards ── */}
      <div className="flex gap-[2.222vw]">
        {/* MEQO card — no horizontal padding on the logo */}
        <PartnerCard
          logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/af012b939fac6ceb6f1f1c8d7daf2182f0b40a4a?width=920"
          logoAlt="MEQO"
        />

        {/* Prof. Valmed card — extra side padding constrains the wider logo */}
        <PartnerCard
          logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/39f91ae698803bacbb8079359e04afd7788673ac?width=1363"
          logoAlt="Prof. Valmed®"
          hasSidePadding
        />
      </div>
    </section>
  );
}
