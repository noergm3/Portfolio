"use client";

import styles from "./ProjectsSection.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>Casos de Éxito & Portafolio</span>
          <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>
            Una selección de sistemas empresariales, aplicaciones web y
            arquitecturas desarrolladas con enfoque en rendimiento, seguridad y experiencia.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.folderIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>

                <div className={styles.actionLinks}>
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkIcon}
                      aria-label={`Ver demo en vivo de ${project.title}`}
                      title="Ver demo en vivo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.techStack}>
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
