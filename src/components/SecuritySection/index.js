"use client";

import styles from "./SecuritySection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function SecuritySection() {
  const { t } = useLanguage();
  const { security } = t;

  return (
    <section id="security" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>{security.badge}</span>
          <h2 className={styles.sectionTitle}>{security.title}</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>{security.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {security.pillars.map((pillar, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.shieldIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
