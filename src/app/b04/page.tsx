"use client";

import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function B02Page() {
    const router = useRouter();

    const onAllExamplesClick = useCallback(() => {
        router.push("/b03");
    }, [router]);

    const onHomeClick = useCallback(() => {
        router.push("/");
    }, [router]);

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
            <div className="w-[1840px] flex flex-col items-start gap-[120px] text-left">
                <div className="w-full flex flex-col items-start gap-[80px]">
                    <h1 className="w-full text-[96px] leading-[120%] font-medium">
                        Die neue Ära klinischer Entscheidungs- und Dokumentationsunterstützung
                    </h1>

                    <div className="w-full h-[400px] flex flex-col items-center justify-center text-[35.42px]">
                        <div className="w-[1187px] shadow-[0px_10px_50px_rgba(0,0,0,0.2)] rounded-[50px] bg-white border-[2.5px] border-[#e0e0eb] box-border flex flex-col items-start p-[40.5px] gap-[40.5px]">
                            <div className="w-full flex flex-col items-start shrink-0">
                                <div className="w-full flex items-start gap-[30px]">
                                    <Image
                                        className="w-[101px] h-[109px] shrink-0"
                                        width={101}
                                        height={109}
                                        alt="Prof Valmed Logo"
                                        src="/icons/b04-logo.svg"
                                    />
                                    <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
                                        <div className="w-full relative leading-[51px] font-semibold text-[35.42px]">
                                            Prof. Valmed: Sepsis-Überwachung
                                        </div>
                                        <div className="w-full relative text-[40.48px] leading-[60.73px] whitespace-pre-wrap">
                                            Patientin Margret Blume.  Zunehmende Tachykardie. qSOFA 2. Sepsis-Verdacht.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full relative text-[56px] leading-[150%] inline-block">
                        <span className="font-light">Prof. Valmed® verfügt über die CE-Kennzeichnung: <br /></span>
                        <span className="font-semibold">Das erste KI-gestützte, LLM-basierte Tool zur Unterstützung klinischer Entscheidungen.<br /></span>
                        <span className="font-light"><br />Aktuelle, medizinisch geprüfte Daten in Echtzeit &ndash; gestützt auf 2,5 Millionen kuratierte Dokumente. Dank flexibler Schnittstellen nahtlos integrierbar in Ihre bestehenden Systeme.</span>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start gap-[43px]">
                    {checklist.map((item, index) => (
                        <div key={index} className="w-full flex items-center gap-[64px]">
                            <Image
                                className="w-[160px] h-[160px] shrink-0"
                                width={160}
                                height={160}
                                alt="Check"
                                src="/icons/check-circle-broken.svg"
                            />
                            <div className="flex-1 flex flex-col items-start justify-center text-[56px]">
                                <div className="relative leading-[150%] font-semibold">{item.title}</div>
                                <div className="w-full relative leading-[150%] font-light text-[#5d5c6d]">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full relative text-[56px] leading-[150%] font-light inline-block">
                    MEQO und Prof. Valmed® &ndash; gemeinsam für fundierte Entscheidungen und höchste Qualitätsstandards.
                </div>

                <div className="w-full h-[2px] relative border-t-2 border-[#e0e0eb] box-border" />
            </div>

            <div className="w-[1840px] flex flex-col items-center gap-[120px] self-center mt-[120px] pb-[20px]">
                <div className="w-[1515px] relative text-[80px] leading-[120%] font-medium inline-block text-center mb-[20px]">
                    Entdecken Sie, was möglich ist &ndash; mit unseren Flows und Beispiel-Prompts.
                </div>

                <div className="w-full flex flex-row items-center justify-center gap-[64px] text-[56px]">
                    <div
                        className="h-[180px] w-[592px] rounded-[48px] bg-[#0e0f27] flex items-center justify-center px-[64px] box-border gap-[32px] cursor-pointer text-white transition-opacity hover:opacity-90"
                        onClick={onAllExamplesClick}
                    >
                        <div className="h-[96px] w-[96px] shrink-0 flex items-center justify-center relative">
                            <Image
                                src="/icons/grid-01.svg"
                                alt="Grid"
                                width={96}
                                height={96}
                                className="w-[96px] h-[96px]"
                            />
                        </div>
                        <div className="relative leading-[150%] font-semibold whitespace-nowrap">Alle Beispiele</div>
                    </div>

                    <div
                        className="h-[180px] w-[592px] rounded-[48px] border-4 border-[#0e0f27] bg-white flex items-center justify-center px-[64px] box-border gap-[32px] cursor-pointer text-[#0e0f27] transition-colors hover:bg-gray-50"
                        onClick={onHomeClick}
                    >
                        <div className="h-[96px] w-[96px] shrink-0 flex items-center justify-center relative">
                            <Image
                                src="/icons/home-smile.svg"
                                alt="Home"
                                width={94}
                                height={94}
                                className="w-[94px] h-[94px]"
                            />
                        </div>
                        <div className="relative leading-[150%] font-semibold whitespace-nowrap">Startseite</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
