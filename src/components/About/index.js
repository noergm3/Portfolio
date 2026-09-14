"use client";

import styles from "./About.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>Perfil Profesional</span>
          <h2 className={styles.sectionTitle}>Sobre mí</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.textColumn}>
            {personal.bio.map((paragraph, idx) => (
              <p key={idx} className={styles.aboutText}>
                {paragraph}
              </p>
            ))}

            <div className={styles.highlightPills}>
              <span className={styles.pill}>⚡ Arquitecturas Escalables</span>
              <span className={styles.pill}>🛡️ Código Limpio & Seguro</span>
              <span className={styles.pill}>📊 Bases de Datos de Alto Rendimiento</span>
            </div>
          </div>

          <div className={styles.statsColumn}>
            <div className={styles.statsGrid}>
              {personal.stats.map((stat, idx) => (
                <div key={idx} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.quoteCard}>
              <span className={styles.quoteSymbol}>“</span>
              <p className={styles.quoteText}>
                La ingeniería de software no se trata solo de escribir código, sino
                de resolver problemas complejos de negocio de forma elegante,
                eficiente y mantenible en el tiempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
