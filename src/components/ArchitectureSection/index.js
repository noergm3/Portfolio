"use client";

import { Fragment } from "react";
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
            {architecture.diagramNodes?.map((node, nIdx) => (
              <Fragment key={nIdx}>
                <div className={styles.diagramNode}>
                  <div className={styles.nodeHeader}>
                    <span className={styles.nodeBadge}>{node.badge}</span>
                    <h4 className={styles.nodeTitle}>{node.title}</h4>
                  </div>
                  <div className={styles.nodeBody}>
                    <span className={styles.nodeTech}>{node.tech}</span>
                    <p className={styles.nodeDetail}>{node.detail}</p>
                  </div>
                </div>

                {nIdx < architecture.diagramNodes.length - 1 && (
                  <div className={styles.connector}>
                    <span className={styles.connectorLine}></span>
                    <span className={styles.connectorLabel}>
                      {architecture.connectors?.[nIdx] || "HTTPS / REST API"}
                    </span>
                    <span className={styles.connectorArrow}>►</span>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Deep Dive Tiers */}
        <div className={styles.tiersGrid}>
          {architecture.tiers.map((tier, idx) => (
            <div key={idx} className={styles.tierCard}>
              <div className={styles.tierHeader}>
                <span className={styles.tierNumber}>
                  {(architecture.tierPrefix || "TIER")} {idx + 1}
                </span>
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
