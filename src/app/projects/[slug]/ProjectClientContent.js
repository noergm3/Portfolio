"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import * as gtag from "@/lib/gtag";
import styles from "./ProjectPage.module.css";

export default function ProjectClientContent({
  slug,
  initialEn,
  initialEs,
  allProjectsEn,
  allProjectsEs,
}) {
  const { lang, t, social } = useLanguage();
  const project = lang === "es" ? initialEs : initialEn;
  const allProjects = lang === "es" ? allProjectsEs : allProjectsEn;

  useEffect(() => {
    gtag.trackProjectView(slug);
  }, [slug]);

  // Find 2 other projects to recommend
  const otherProjects = allProjects
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  const labels = t.projects?.labels || {
    problem: "The Challenge / Problem",
    solution: "Engineered Solution",
    features: "Key Capabilities",
    tech: "Technologies",
    contribution: "My Role & Contribution",
    challengesLabel: "Engineering Challenges & How They Were Solved",
    architectureLabel: "Architecture & Design",
    backToProjects: "← Back to Projects",
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.glowBlob} aria-hidden="true" />

      <main className={styles.container}>
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>
            {t.nav?.home || "Home"}
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/#projects" className={styles.breadcrumbLink}>
            {t.nav?.projects || "Projects"}
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbActive}>{project.title}</span>
        </nav>

        {/* Hero Header */}
        <header className={styles.heroHeader}>
          <div className={styles.badgeRow}>
            {project.status && (
              <span className={styles.statusBadge}>✓ {project.status}</span>
            )}
            {project.type && (
              <span className={styles.typeBadge}>{project.type}</span>
            )}
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.highlight}>{project.highlight}</p>

          {/* Quick Meta Grid */}
          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Role & Scope</span>
              <span className={styles.metaValue}>
                {lang === "es"
                  ? "Senior Software Engineer & Arquitectura"
                  : "Senior Software Engineer & Architecture"}
              </span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Domain</span>
              <span className={styles.metaValue}>{project.type}</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Status</span>
              <span className={styles.metaValue}>{project.status}</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Core Stack</span>
              <span className={styles.metaValue}>
                {project.technologies.slice(0, 3).join(" · ")}
              </span>
            </div>
          </div>
        </header>

        {/* 1. Problem & Challenge */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            {labels.problem || "The Problem & Operational Context"}
          </h2>
          <div className={styles.card}>
            <p className={styles.paragraph}>{project.problem}</p>
          </div>
        </section>

        {/* 2. Architecture & System Design */}
        {project.architectureDetails && (
          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              {labels.architectureLabel || "Architecture & System Design"}
            </h2>
            <div className={styles.card}>
              <p className={styles.paragraph}>{project.architectureDetails}</p>
            </div>
          </section>
        )}

        {/* Operational Flow Diagram if available */}
        {project.diagramFlow && (
          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              {labels.diagramFlow || "Commercial Operational Flow"}
            </h2>
            <div className={styles.diagramBox}>
              <pre>{project.diagramFlow}</pre>
            </div>
          </section>
        )}

        {/* Multi-Branch Hierarchical Structure if available */}
        {project.diagramTree && (
          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              {labels.diagramTree || "Multi-Branch Hierarchical Structure"}
            </h2>
            <div className={styles.diagramBox}>
              <pre>{project.diagramTree}</pre>
            </div>
          </section>
        )}

        {/* 3. Engineered Solution */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            {labels.solution || "Engineered Solution"}
          </h2>
          <div className={styles.card}>
            <p className={styles.paragraph}>{project.solution}</p>
          </div>
        </section>

        {/* 4. Key Capabilities & Features */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            {labels.features || "Key Features Implemented"}
          </h2>
          <div className={styles.featuresGrid}>
            {project.features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span className={styles.featureText}>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Engineering Challenges Solved */}
        {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
          <section className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              {labels.challengesLabel || "Engineering Challenges & Solutions"}
            </h2>
            <div className={styles.challengesList}>
              {project.engineeringChallenges.map((challenge, idx) => (
                <div key={idx} className={styles.challengeItem}>
                  <strong>Challenge {idx + 1}:</strong> {challenge}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. My Role & Contribution */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            {labels.contribution || "My Direct Role & Contribution"}
          </h2>
          <div className={styles.card}>
            <p className={styles.paragraph}>{project.contribution}</p>
          </div>
        </section>

        {/* 7. Technologies Used */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            {labels.tech || "Technologies & Tools"}
          </h2>
          <div className={styles.techGrid}>
            {project.technologies.map((tech, idx) => (
              <span key={idx} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Recruiter / Hiring Manager CTA */}
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaHeading}>
            {lang === "es"
              ? "¿Buscas un Senior Software Engineer con experiencia real en sistemas?"
              : "Looking for a Senior Software Engineer with real systems experience?"}
          </h2>
          <p className={styles.ctaSubheading}>
            {lang === "es"
              ? "Aporto solidez en arquitecturas React/Next.js, backend Node.js, modelado de datos y diseño de software tolerante a fallos. Platiquemos sobre cómo puedo sumar a tu equipo."
              : "I bring depth across modern React/Next.js architectures, Node.js backend services, data modeling, and resilient software systems. Let's discuss how I can contribute to your team."}
          </p>
          <div className={styles.ctaButtonGroup}>
            <Link
              href="/hire-me"
              className={styles.primaryBtn}
              onClick={() => gtag.trackContactCTA("case_study_hire_me")}
            >
              ⚡ {lang === "es" ? "Ver Perfil para Reclutadores" : "Recruiter Quick Scan"}
            </Link>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              onClick={() => gtag.trackLinkedInClick("case_study_cta")}
            >
              LinkedIn Profile
            </a>
            <a
              href={`mailto:${social.email}`}
              className={styles.secondaryBtn}
              onClick={() => gtag.trackEmailClick("case_study_cta")}
            >
              {lang === "es" ? "Enviar Correo" : "Send Email"}
            </a>
          </div>
        </div>

        {/* Explore Other Projects */}
        <section className={styles.otherProjects}>
          <h3 className={styles.otherProjectsHeading}>
            {lang === "es" ? "Otros Casos de Estudio" : "Explore Other Case Studies"}
          </h3>
          <div className={styles.otherProjectsGrid}>
            {otherProjects.map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className={styles.otherProjectCard}
              >
                <div>
                  <span className={styles.otherProjectType}>{other.type}</span>
                  <h4 className={styles.otherProjectTitle}>{other.title}</h4>
                  <p className={styles.otherProjectHighlight}>{other.highlight}</p>
                </div>
                <span className={styles.otherProjectLinkText}>
                  {labels.btnCaseStudy || "View Case Study →"}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
