"use client";

import styles from "./About.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>{about.badge}</span>
          <h2 className={styles.sectionTitle}>{about.title}</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.aboutGrid}>
          {/* Main narrative */}
          <div className={styles.textColumn}>
            <div className={styles.leadQuote}>
              <span className={styles.leadQuoteBar}></span>
              <p className={styles.leadText}>“{about.lead}”</p>
            </div>

            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx} className={styles.aboutText}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* End-to-End Delivery Card */}
          <div className={styles.e2eColumn}>
            <div className={styles.e2eCard}>
              <h3 className={styles.e2eTitle}>{about.e2eTitle}</h3>
              <p className={styles.e2eSubtitle}>
                Engineering architecture spanning presentation down to raw data persistence:
              </p>

              <div className={styles.flowSteps}>
                {about.e2eSteps.map((step, idx) => (
                  <div key={idx} className={styles.flowRow}>
                    <div className={styles.stepIndicator}>
                      <span className={styles.stepNum}>0{idx + 1}</span>
                      {idx < about.e2eSteps.length - 1 && (
                        <span className={styles.stepLine}></span>
                      )}
                    </div>

                    <div className={styles.stepContent}>
                      <span className={styles.stepLayer}>{step.layer}</span>
                      <span className={styles.stepTech}>{step.tech}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.principlePills}>
                <span className={styles.pill}>✓ Modular Component Architecture</span>
                <span className={styles.pill}>✓ Strict RBAC & Tenant Isolation</span>
                <span className={styles.pill}>✓ ACID Relational Database Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
