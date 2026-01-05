"use client";

import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
    // Datos de ejemplo, luego puedes reemplazar por tus proyectos reales
    const projects = [
        { id: 1, title: "Proyecto 1", description: "Descripción corta del proyecto.", link: "#" },
        { id: 2, title: "Proyecto 2", description: "Descripción corta del proyecto.", link: "#" },
        { id: 3, title: "Proyecto 3", description: "Descripción corta del proyecto.", link: "#" },
        { id: 4, title: "Proyecto 4", description: "Descripción corta del proyecto.", link: "#" },
    ];

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.title}>Proyectos</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
