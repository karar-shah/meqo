"use client";

import type { NextPage } from 'next';
import { useCallback } from 'react';
import Image from "next/image";
import styles from "../index.module.css";

const A01Start: NextPage = () => {

    const onButtonContainerClick = useCallback(() => {
        // Add your code here
    }, []);

    return (
        <div className={styles.a01Start}>
            <div className={styles.coffeeBar}>
                <Image className={styles.coffeeIcon} width={96} height={96} sizes="100vw" alt="" src="/icons/coffee.svg" />
                <div className={styles.liveDemoUndKaffeeContainer}>
                    <span className={styles.liveDemoUndKaffee}>Live-Demo und Kaffee &ndash; </span>
                    <span>Sprechen Sie uns gerne an.</span>
                </div>
            </div>
            <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                    <div className={styles.entdeckenSieUnsereAgentenbaParent}>
                        <div className={styles.entdeckenSieUnsere}>Entdecken Sie unsere agentenbasierte Versorgungsintelligenz</div>
                        <div className={styles.intuitivNutzbareLsungen}>Intuitiv nutzbare Lösungen für die Gesundheitsversorgung von morgen – kombiniert mit einer leistungsstarken Plattform zur Erstellung individueller Agenten.</div>
                    </div>
                    <div className={styles.groupParent}>
                        <div className={styles.rectangleParent}>
                            <Image className={styles.groupChild} width={1840} height={800} sizes="100vw" alt="" src="/images/1.png" />
                            <div className={styles.groupItem} />
                        </div>
                        <div className={styles.button} onClick={onButtonContainerClick}>
                            <Image className={styles.cursorClick02Icon} width={96} height={96} sizes="100vw" alt="" src="/icons/cursor-click-02.svg" />
                            <div className={styles.primaryButton}>Jetzt ausprobieren</div>
                            <div className={styles.settings02} />
                        </div>
                    </div>
                </div>
                <div className={styles.frameContainer}>
                    <div className={styles.sprbareEntlastungFrSieIParent}>
                        <div className={styles.entdeckenSieUnsere}>Spürbare Entlastung für Sie, Ihr Team <br />und die gesamte Versorgung</div>
                        <div className={styles.meqoKoorperiertMit}>MEQO koorperiert mit dem medizinisch zertifizierten Prof. Valmed®.</div>
                    </div>
                    <div className={styles.frameDiv}>
                        <div className={styles.frameParent2} onClick={onButtonContainerClick}>
                            <div className={styles.logoWrapper}>
                                <div className={styles.logo}>
                                    <Image className={styles.logoChild} width={459.9} height={107.7} sizes="100vw" alt="" src="/logo-meqo.svg" />
                                </div>
                            </div>
                            <div className={styles.button2}>
                                <div className={styles.primaryButton2}>Mehr erfahren</div>
                            </div>
                        </div>
                        <div className={styles.groupContainer} onClick={onButtonContainerClick}>
                            <Image className={styles.frameChild} width={681.7} height={120} sizes="100vw" alt="" src="/Logo_R 1.svg" />
                            <div className={styles.button3}>
                                <div className={styles.primaryButton2}>Mehr erfahren</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default A01Start;
