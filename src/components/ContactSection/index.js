"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const { social } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>Contacto Directo</span>
          <h2 className={styles.sectionTitle}>¿Tienes un proyecto en mente?</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>
            Estoy disponible para colaborar en proyectos de desarrollo de software,
            arquitectura de aplicaciones web, consultoría en bases de datos y
            nuevas oportunidades profesionales.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card: Correo Electrónico */}
          <div className={styles.contactCard}>
            <div className={styles.iconCircle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Correo Electrónico</h3>
            <p className={styles.cardDetail}>{social.email}</p>
            <div className={styles.cardButtons}>
              <button
                onClick={handleCopyEmail}
                className={`${styles.copyBtn} ${copied ? styles.copied : ""}`}
                type="button"
                aria-label="Copiar correo al portapapeles"
              >
                {copied ? "✓ ¡Copiado!" : "Copiar correo"}
              </button>
              <a
                href={`mailto:${social.email}`}
                className={styles.actionBtn}
              >
                Enviar email
              </a>
            </div>
          </div>

          {/* Card: LinkedIn */}
          <div className={styles.contactCard}>
            <div className={styles.iconCircle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.368 4.266 5.452v6.289zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.919-2.064 2.063-2.064 1.14 0 2.064.926 2.064 2.064 0 1.139-.925 2.065-2.064 2.065zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>LinkedIn</h3>
            <p className={styles.cardDetail}>in/ingnoegonzalez</p>
            <div className={styles.cardButtons}>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinBtn}
              >
                Conectar en LinkedIn
              </a>
            </div>
          </div>

          {/* Card: GitHub */}
          <div className={styles.contactCard}>
            <div className={styles.iconCircle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>GitHub</h3>
            <p className={styles.cardDetail}>@noergm3</p>
            <div className={styles.cardButtons}>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
              >
                Ver Repositorios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
