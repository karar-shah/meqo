import Image from "next/image";
import Link from "next/link";

export default function B02Page() {

    const checklist = [
        {
            title: "CE-geprüft & zertifiziert",
            description: "Vertrauen durch CE0483-Zertifizierung"
        },
        {
            title: "EU-konform",
            description: "Entwickelt nach aktuellen EU-Richtlinien"
        },
        {
            title: "Datenschutz garantiert",
            description: "Sicher, vertraulich, DSGVO-konform"
        }
    ];

    return (
        <div className="flex flex-col w-full flex-1">
            <div className="w-full max-w-5xl flex flex-col items-start gap-3 md:gap-4 lg:gap-6 text-left self-center">
                <div className="w-full flex flex-col items-start gap-3 md:gap-4">
                    <h1 className="w-full text-lg md:text-2xl lg:text-3xl leading-tight font-medium">
                        Die neue Ära klinischer Entscheidungs- und Dokumentationsunterstützung
                    </h1>

                    <div className="w-full flex flex-col items-center justify-center text-xs md:text-sm">
                        <div className="w-full max-w-3xl lg:max-w-4xl shadow-xl rounded-2xl md:rounded-3xl bg-white border md:border-2 border-[#e0e0eb] box-border flex flex-col items-start p-4 md:p-6 gap-3 md:gap-4 mx-auto">
                            <div className="w-full flex flex-col items-start shrink-0">
                                <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                                    <Image
                                        className="w-12 h-12 md:w-14 md:h-14 shrink-0"
                                        width={96}
                                        height={96}
                                        alt="Prof Valmed Logo"
                                        src="/icons/b04-logo.svg"
                                    />
                                    <div className="flex-1 flex flex-col items-center sm:items-start justify-center gap-1">
                                        <div className="w-full relative leading-relaxed font-semibold text-sm md:text-base text-center sm:text-left">
                                            Prof. Valmed: Sepsis-Überwachung
                                        </div>
                                        <div className="w-full relative text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-center sm:text-left">
                                            Patientin Margret Blume.  Zunehmende Tachykardie. qSOFA 2. Sepsis-Verdacht.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full relative text-xs md:text-sm lg:text-base leading-relaxed inline-block">
                        <span className="font-light">Prof. Valmed® verfügt über die CE-Kennzeichnung: <br /></span>
                        <span className="font-semibold">Das erste KI-gestützte, LLM-basierte Tool zur Unterstützung klinischer Entscheidungen.<br /></span>
                        <span className="font-light"><br />Aktuelle, medizinisch geprüfte Daten in Echtzeit &ndash; gestützt auf 2,5 Millionen kuratierte Dokumente. Dank flexibler Schnittstellen nahtlos integrierbar in Ihre bestehenden Systeme.</span>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start gap-2 md:gap-3">
                    {checklist.map((item, index) => (
                        <div key={index} className="w-full flex items-center gap-3 md:gap-4">
                            <Image
                                className="w-7 h-7 md:w-8 md:h-8 shrink-0"
                                width={64}
                                height={64}
                                alt="Check"
                                src="/icons/check-circle-broken.svg"
                            />
                            <div className="flex-1 flex flex-col items-start justify-center text-sm md:text-base">
                                <div className="relative leading-relaxed font-semibold">{item.title}</div>
                                <div className="w-full relative leading-relaxed font-light text-[#5d5c6d]">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full relative text-xs md:text-sm lg:text-base leading-relaxed font-light inline-block">
                    MEQO und Prof. Valmed® &ndash; gemeinsam für fundierte Entscheidungen und höchste Qualitätsstandards.
                </div>

                <div className="w-full h-px relative border-t border-[#e0e0eb] box-border" />
            </div>

            <div className="w-full max-w-5xl flex flex-col items-center gap-4 md:gap-6 self-center mt-4 md:mt-6 pb-2 md:pb-4">
                <div className="w-full relative text-base md:text-xl lg:text-2xl leading-tight font-medium inline-block text-center mb-1 md:mb-2">
                    Entdecken Sie, was möglich ist &ndash; mit unseren Flows und Beispiel-Prompts.
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-sm md:text-base">
                    <Link
                        href={"/d01"}
                        className="h-10 md:h-12 w-full md:w-auto md:min-w-[200px] max-w-sm rounded-xl md:rounded-2xl bg-[#0e0f27] flex items-center justify-center px-4 md:px-8 box-border gap-2 md:gap-3 cursor-pointer text-white transition-opacity hover:opacity-90"

                    >
                        <div className="h-5 w-5 md:h-6 md:w-6 shrink-0 flex items-center justify-center relative">
                            <Image
                                src="/icons/grid-01.svg"
                                alt="Grid"
                                width={48}
                                height={48}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="relative leading-relaxed font-semibold whitespace-nowrap">Alle Beispiele</div>
                    </Link>

                    <Link
                        href={"/"}
                        className="h-10 md:h-12 w-full md:w-auto md:min-w-[200px] max-w-sm rounded-xl md:rounded-2xl border md:border-2 border-[#0e0f27] bg-white flex items-center justify-center px-4 md:px-8 box-border gap-2 md:gap-3 cursor-pointer text-[#0e0f27] transition-colors hover:bg-gray-50"

                    >
                        <div className="h-5 w-5 md:h-6 md:w-6 shrink-0 flex items-center justify-center relative">
                            <Image
                                src="/icons/home-smile.svg"
                                alt="Home"
                                width={48}
                                height={48}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="relative leading-relaxed font-semibold whitespace-nowrap">Startseite</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
