"use client";

import styles from "./ArchitectureSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function ArchitectureSection() {
  const { t } = useLanguage();
  const { architecture } = t;

  return (
    <section id="architecture" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>{architecture.badge}</span>
          <h2 className={styles.sectionTitle}>{architecture.title}</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>{architecture.subtitle}</p>
        </div>

        {/* Visual Architecture Diagram */}
        <div className={styles.diagramCard}>
          <div className={styles.diagramGrid}>
            {/* Step 1: User & Client */}
            <div className={styles.diagramNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeBadge}>01. Presentation</span>
                <h4 className={styles.nodeTitle}>Next.js & React UI</h4>
              </div>
              <div className={styles.nodeBody}>
                <span className={styles.nodeTech}>MUI · Responsive UI · State</span>
                <p className={styles.nodeDetail}>
                  Server Components, SSR & Optimized Client Bundles
                </p>
              </div>
            </div>

            <div className={styles.connector}>
              <span className={styles.connectorLine}></span>
              <span className={styles.connectorLabel}>HTTPS / REST API</span>
              <span className={styles.connectorArrow}>►</span>
            </div>

            {/* Step 2: API & Gateway */}
            <div className={styles.diagramNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeBadge}>02. Application & Logic</span>
                <h4 className={styles.nodeTitle}>Node.js / Express API</h4>
              </div>
              <div className={styles.nodeBody}>
                <span className={styles.nodeTech}>JWT Auth · RBAC · Tenant Resolver</span>
                <p className={styles.nodeDetail}>
                  Business Rules, Middleware & Request Isolation
                </p>
              </div>
            </div>

            <div className={styles.connector}>
              <span className={styles.connectorLine}></span>
              <span className={styles.connectorLabel}>Encrypted SQL</span>
              <span className={styles.connectorArrow}>►</span>
            </div>

            {/* Step 3: Data Tier */}
            <div className={styles.diagramNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeBadge}>03. Persistence</span>
                <h4 className={styles.nodeTitle}>SQL Server / PostgreSQL</h4>
              </div>
              <div className={styles.nodeBody}>
                <span className={styles.nodeTech}>Prisma ORM · Stored Procedures</span>
                <p className={styles.nodeDetail}>
                  Tenant Isolated Schemas, ACID & Audit Trails
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive Tiers */}
        <div className={styles.tiersGrid}>
          {architecture.tiers.map((tier, idx) => (
            <div key={idx} className={styles.tierCard}>
              <div className={styles.tierHeader}>
                <span className={styles.tierNumber}>TIER {idx + 1}</span>
                <h3 className={styles.tierTitle}>{tier.title}</h3>
                <span className={styles.tierTech}>{tier.tech}</span>
              </div>
              <ul className={styles.tierPoints}>
                {tier.points.map((point, pIdx) => (
                  <li key={pIdx} className={styles.tierPoint}>
                    <span className={styles.pointCheck}>▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
