"use client";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2 className={styles.title}>Contacto</h2>
            <p className={styles.text}>
                Si quieres comunicarte conmigo, puedes enviarme un correo o visitar mi perfil de LinkedIn.
            </p>

            <div className={styles.buttons}>
                <a
                    href="mailto:noergm3@gmail.com"
                    className={styles.contactButton}
                >
                    ✉️ Correo
                </a>

                <a
                    href="https://www.linkedin.com/in/ingnoegonzalez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinButton}
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}
