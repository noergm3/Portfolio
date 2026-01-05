"use client";

import { useEffect, useState } from "react";
import styles from "./HomeSection.module.css";
import { Parallax } from 'react-scroll-parallax';

export default function HomeSection() {
    const [typedName, setTypedName] = useState("");
    const [typedSubtitle, setTypedSubtitle] = useState("");

    const fullName = "Noé González";
    const subtitleText = "Sitio en construcción";

    // Máquina de escribir para el nombre
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedName(fullName.slice(0, index + 1));
            index++;
            if (index === fullName.length) clearInterval(interval);
        }, 120);
        return () => clearInterval(interval);
    }, []);

    // Máquina de escribir para el subtítulo
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedSubtitle(subtitleText.slice(0, index + 1));
            index++;
            if (index === subtitleText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className={styles.homeSection}>
            <Parallax speed={5}>
                <h1 className={styles.neon}>
                    <span className={styles.titlePrefix}>Ing. </span>
                    {typedName}
                    <span className={styles.blinkingCursor}>&lt;/&gt;</span>
                </h1>
            </Parallax>
            <p className={styles.subtitle}>
                ⚙️ {typedSubtitle}
                <span className={styles.blinkingCursor}>&lt;/&gt;</span>
            </p>
            <div className={styles.buttons}>
                {/* <button className={styles.comingButton}>Próximamente</button> */}

                <a
                    href="https://www.linkedin.com/in/ingnoegonzalez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinButton}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.368 4.266 5.452v6.289zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.919-2.064 2.063-2.064 1.14 0 2.064.926 2.064 2.064 0 1.139-.925 2.065-2.064 2.065zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
                    </svg>
                    <span>Contacto | LinkedIn</span>
                </a>
            </div>
        </section>
    );
}
