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
        <div className="flex flex-col  w-full flex-1">
            <div className="w-full max-w-5xl flex flex-col items-start gap-12 md:gap-16 lg:gap-24 text-left self-center">
                <div className="w-full flex flex-col items-start gap-8 md:gap-12">
                    <h1 className="w-full text-3xl md:text-5xl lg:text-6xl leading-tight font-medium">
                        Die neue Ära klinischer Entscheidungs- und Dokumentationsunterstützung
                    </h1>

                    <div className="w-full flex flex-col items-center justify-center text-base md:text-lg">
                        <div className="w-full max-w-3xl lg:max-w-4xl shadow-xl rounded-3xl md:rounded-[48px] bg-white border-2 md:border-4 border-[#e0e0eb] box-border flex flex-col items-start p-8 md:p-12 gap-8 md:gap-12 mx-auto">
                            <div className="w-full flex flex-col items-start shrink-0">
                                <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8">
                                    <Image
                                        className="w-20 h-20 md:w-24 md:h-24 shrink-0"
                                        width={96}
                                        height={96}
                                        alt="Prof Valmed Logo"
                                        src="/icons/b04-logo.svg"
                                    />
                                    <div className="flex-1 flex flex-col items-center sm:items-start justify-center gap-2">
                                        <div className="w-full relative leading-relaxed font-semibold text-xl md:text-2xl text-center sm:text-left">
                                            Prof. Valmed: Sepsis-Überwachung
                                        </div>
                                        <div className="w-full relative text-lg md:text-xl leading-relaxed whitespace-pre-wrap text-center sm:text-left">
                                            Patientin Margret Blume.  Zunehmende Tachykardie. qSOFA 2. Sepsis-Verdacht.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full relative text-lg md:text-xl lg:text-2xl leading-relaxed inline-block">
                        <span className="font-light">Prof. Valmed® verfügt über die CE-Kennzeichnung: <br /></span>
                        <span className="font-semibold">Das erste KI-gestützte, LLM-basierte Tool zur Unterstützung klinischer Entscheidungen.<br /></span>
                        <span className="font-light"><br />Aktuelle, medizinisch geprüfte Daten in Echtzeit &ndash; gestützt auf 2,5 Millionen kuratierte Dokumente. Dank flexibler Schnittstellen nahtlos integrierbar in Ihre bestehenden Systeme.</span>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start gap-6 md:gap-8">
                    {checklist.map((item, index) => (
                        <div key={index} className="w-full flex items-center gap-6 md:gap-8">
                            <Image
                                className="w-12 h-12 md:w-16 md:h-16 shrink-0"
                                width={64}
                                height={64}
                                alt="Check"
                                src="/icons/check-circle-broken.svg"
                            />
                            <div className="flex-1 flex flex-col items-start justify-center text-xl md:text-2xl">
                                <div className="relative leading-relaxed font-semibold">{item.title}</div>
                                <div className="w-full relative leading-relaxed font-light text-[#5d5c6d]">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full relative text-lg md:text-xl lg:text-2xl leading-relaxed font-light inline-block">
                    MEQO und Prof. Valmed® &ndash; gemeinsam für fundierte Entscheidungen und höchste Qualitätsstandards.
                </div>

                <div className="w-full h-px relative border-t-2 border-[#e0e0eb] box-border" />
            </div>

            <div className="w-full max-w-5xl flex flex-col items-center gap-12 md:gap-16 self-center mt-16 md:mt-24 pb-8 md:pb-12">
                <div className="w-full relative text-2xl md:text-4xl lg:text-5xl leading-tight font-medium inline-block text-center mb-4 md:mb-8">
                    Entdecken Sie, was möglich ist &ndash; mit unseren Flows und Beispiel-Prompts.
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-xl md:text-2xl">
                    <Link
                        href={"/d01"}
                        className="h-16 md:h-24 w-full md:w-auto md:min-w-[320px] max-w-md rounded-3xl md:rounded-[48px] bg-[#0e0f27] flex items-center justify-center px-6 md:px-12 box-border gap-4 md:gap-6 cursor-pointer text-white transition-opacity hover:opacity-90"

                    >
                        <div className="h-8 w-8 md:h-12 md:w-12 shrink-0 flex items-center justify-center relative">
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
                        className="h-16 md:h-24 w-full md:w-auto md:min-w-[320px] max-w-md rounded-3xl md:rounded-[48px] border-2 md:border-4 border-[#0e0f27] bg-white flex items-center justify-center px-6 md:px-12 box-border gap-4 md:gap-6 cursor-pointer text-[#0e0f27] transition-colors hover:bg-gray-50"

                    >
                        <div className="h-8 w-8 md:h-12 md:w-12 shrink-0 flex items-center justify-center relative">
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
