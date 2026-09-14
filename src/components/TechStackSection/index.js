"use client";

import styles from "./TechStackSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function TechStackSection() {
  const { t } = useLanguage();
  const { techStack } = t;

  return (
    <section id="tech-stack" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>{techStack.badge}</span>
          <h2 className={styles.sectionTitle}>{techStack.title}</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>{techStack.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {techStack.groups.map((group, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.groupCategory}>{group.category}</h3>
              <div className={styles.badgeList}>
                {group.items.map((item, iIdx) => (
                  <span key={iIdx} className={styles.techBadge}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
