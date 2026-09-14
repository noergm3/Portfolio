"use client";

import styles from "./ProjectsSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>{projects.badge}</span>
          <h2 className={styles.sectionTitle}>{projects.title}</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>{projects.subtitle}</p>
        </div>

        <div className={styles.projectsList}>
          {projects.list.map((proj) => (
            <article
              key={proj.id}
              className={`${styles.projectCard} ${
                proj.id === "national-education" ? styles.enterpriseCard : ""
              }`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.titleGroup}>
                  <div className={styles.typeBadgeRow}>
                    <span className={styles.typeBadge}>{proj.type}</span>
                    {proj.tenantIsolationNotice && (
                      <span className={styles.tenantBadge}>
                        🛡️ {proj.tenantIsolationNotice}
                      </span>
                    )}
                  </div>
                  <h3 className={styles.projectTitle}>{proj.title}</h3>
                  <p className={styles.projectHighlight}>{proj.highlight}</p>
                </div>
              </div>

              {/* Special visual diagrams for specific projects */}
              {proj.flowDiagram && (
                <div className={styles.flowDiagramContainer}>
                  <span className={styles.diagramLabel}>{projects.labels.diagramFlow}</span>
                  <div className={styles.flowRow}>
                    {proj.flowDiagram.map((step, sIdx) => (
                      <div key={sIdx} className={styles.flowStepWrapper}>
                        <span className={styles.flowNode}>{step}</span>
                        {sIdx < proj.flowDiagram.length - 1 && (
                          <span className={styles.flowArrow}>→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {proj.treeArchitecture && (
                <div className={styles.treeContainer}>
                  <span className={styles.diagramLabel}>{projects.labels.diagramTree}</span>
                  <div className={styles.treeBox}>
                    <div className={styles.treeRoot}>🏢 {proj.treeArchitecture.root}</div>
                    <div className={styles.treeBranch}>
                      └── 📍 {proj.treeArchitecture.branches}
                      <div className={styles.treeSubComponents}>
                        {proj.treeArchitecture.components.map((comp, cIdx) => (
                          <span key={cIdx} className={styles.treeLeaf}>
                            ├── {comp}
                          </span>
                        ))}
                      </div>
                      <div className={styles.treeStations}>
                        {proj.treeArchitecture.stations.map((st, sIdx) => (
                          <span key={sIdx} className={styles.treeSubLeaf}>
                            └── {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Problem & Solution */}
              <div className={styles.problemSolutionGrid}>
                <div className={styles.columnBox}>
                  <div className={styles.boxHeader}>
                    <span className={styles.boxDotRed}></span>
                    <span className={styles.boxTitle}>{projects.labels.problem}</span>
                  </div>
                  <p className={styles.boxText}>{proj.problem}</p>
                </div>

                <div className={styles.columnBox}>
                  <div className={styles.boxHeader}>
                    <span className={styles.boxDotGreen}></span>
                    <span className={styles.boxTitle}>{projects.labels.solution}</span>
                  </div>
                  <p className={styles.boxText}>{proj.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className={styles.featuresSection}>
                <span className={styles.sectionSubhead}>{projects.labels.features}:</span>
                <ul className={styles.featuresList}>
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <span className={styles.featureCheck}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* My Role & Contribution */}
              <div className={styles.contributionSection}>
                <span className={styles.sectionSubhead}>{projects.labels.contribution}:</span>
                <p className={styles.contributionText}>{proj.contribution}</p>
              </div>

              {/* Technologies */}
              <div className={styles.techFooter}>
                <span className={styles.techLabel}>{projects.labels.tech}:</span>
                <div className={styles.techPills}>
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
