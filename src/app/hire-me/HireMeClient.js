"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import * as gtag from "@/lib/gtag";
import styles from "./HireMe.module.css";

export default function HireMeClient({ initialEn, initialEs, projectsEn, projectsEs }) {
  const { lang, t, social } = useLanguage();
  const hireData = lang === "es" ? initialEs : initialEn;
  const projects = lang === "es" ? projectsEs : projectsEn;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(social.email);
    setCopied(true);
    gtag.trackEmailClick("hire_me_copy");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleLinkedIn = () => {
    gtag.trackLinkedInClick("hire_me_page");
  };

  const handleResume = () => {
    gtag.trackResumeDownload("hire_me_page");
  };

  // Top 4 enterprise/SaaS systems for quick evaluation
  const keyProjects = projects.slice(0, 4);

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
          <span className={styles.breadcrumbActive}>
            {lang === "es" ? "Perfil de Contratación" : "Hire Me"}
          </span>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.statusPill}>
            <span className={styles.pulseDot} />
            {hireData.badge || "Available for Remote Senior Frontend Roles"}
          </div>

          <h1 className={styles.title}>{hireData.title}</h1>
          <p className={styles.subtitle}>{hireData.subtitle}</p>

          <div className={styles.locationBar}>
            <span>📍 {social.location || "Managua, Nicaragua"} (UTC-6 / CST)</span>
            <span>⚡ Available for Global Remote Teams (US, LatAm, EU)</span>
            <span>💼 International Contractor (W-8BEN)</span>
          </div>

          <div className={styles.fastActionBar}>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkedIn}
              className={styles.btnPrimary}
            >
              {hireData.cta?.btnLinkedIn || "Connect on LinkedIn"}
            </a>
            <a
              href={social.resumeUrl || "/Noe-Gonzalez-Mendoza-Resume.pdf"}
              download="Noe-Gonzalez-Mendoza-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResume}
              className={styles.btnSecondary}
            >
              {hireData.cta?.btnResume || "Download Resume (PDF)"}
            </a>
            <button
              onClick={handleCopyEmail}
              className={styles.btnSecondary}
              type="button"
            >
              {copied
                ? lang === "es"
                  ? "✓ ¡Copiado!"
                  : "✓ Copied!"
                : lang === "es"
                ? "Copiar Email"
                : "Copy Email"}
            </button>
          </div>
        </header>

        {/* 1. Quick Facts for 30-Second Scan */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {lang === "es" ? "Datos Rápidos (Escaneo en 30 Segundos)" : "Quick Facts (30-Second Scan)"}
          </h2>
          <div className={styles.factsGrid}>
            {hireData.quickFacts?.map((fact, idx) => (
              <div key={idx} className={styles.factCard}>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Core Value Propositions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {lang === "es" ? "¿Por Qué Contratar a Noé?" : "Why Hire Noé?"}
          </h2>
          <div className={styles.propsGrid}>
            {hireData.valueProps?.map((prop, idx) => (
              <div key={idx} className={styles.propCard}>
                <div className={styles.propIcon}>{prop.icon || "⚙️"}</div>
                <h3 className={styles.propTitle}>{prop.title}</h3>
                <p className={styles.propDesc}>{prop.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Featured Real Systems */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {lang === "es" ? "Sistemas y Casos de Estudio Verificados" : "Verified Systems & Case Studies"}
          </h2>
          <div className={styles.systemsGrid}>
            {keyProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className={styles.systemCard}
                onClick={() => gtag.trackProjectView(p.slug)}
              >
                <div>
                  <div className={styles.systemType}>{p.type}</div>
                  <h3 className={styles.systemTitle}>{p.title}</h3>
                  <p className={styles.systemHighlight}>{p.highlight}</p>
                  <div className={styles.systemStack}>
                    {p.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className={styles.stackTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.systemLink}>
                  {lang === "es" ? "Ver Caso de Estudio →" : "View Case Study →"}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Contact Box */}
        <div className={styles.contactBox}>
          <h2 className={styles.contactHeading}>
            {hireData.cta?.heading || "Ready to Discuss Opportunities?"}
          </h2>
          <p className={styles.contactSubtext}>
            {hireData.cta?.subheading ||
              "I am actively exploring Senior Frontend opportunities with high-performing remote teams worldwide."}
          </p>
          <div className={styles.contactActions}>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkedIn}
              className={styles.btnPrimary}
            >
              {hireData.cta?.btnLinkedIn || "Connect on LinkedIn"}
            </a>
            <a
              href={`mailto:${social.email}`}
              className={styles.btnSecondary}
              onClick={() => gtag.trackEmailClick("hire_me_bottom")}
            >
              {hireData.cta?.btnEmail || "Email Directly"}
            </a>
            <a
              href={social.resumeUrl || "/Noe-Gonzalez-Mendoza-Resume.pdf"}
              download="Noe-Gonzalez-Mendoza-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResume}
              className={styles.btnSecondary}
            >
              {hireData.cta?.btnResume || "Download Resume (PDF)"}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
