"use client";

import styles from "./ExperienceSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>{experience.badge}</span>
          <h2 className={styles.sectionTitle}>{experience.title}</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>{experience.subtitle}</p>
        </div>

        <div className={styles.bannerHeadline}>
          <span className={styles.bannerIcon}>⚡</span>
          <span className={styles.bannerText}>{experience.headline}</span>
        </div>

        <div className={styles.timeline}>
          {experience.timeline.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelinePeriod}>
                <span className={styles.periodBadge}>{item.period}</span>
              </div>

              <div className={styles.timelineMarker}>
                <div className={styles.circle}></div>
                {idx < experience.timeline.length - 1 && (
                  <div className={styles.line}></div>
                )}
              </div>

              <div className={styles.timelineContent}>
                <h3 className={styles.roleTitle}>{item.role}</h3>
                <p className={styles.focusDesc}>{item.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
