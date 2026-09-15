"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import * as gtag from "@/lib/gtag";
import styles from "./Article.module.css";

export default function ArticleClient({ slug, initialEn, initialEs }) {
  const { lang, t, social } = useLanguage();
  const article = lang === "es" ? initialEs : initialEn;

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
          <Link href="/engineering" className={styles.breadcrumbLink}>
            {lang === "es" ? "Notas Técnicas" : "Engineering Notes"}
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbActive}>{article.category}</span>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.metaRow}>
            <span className={styles.categoryTag}>{article.category}</span>
            <span className={styles.dot}>•</span>
            <span>{article.readTime}</span>
            <span className={styles.dot}>•</span>
            <span>{article.date}</span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.summary}>{article.summary}</p>
        </header>

        {/* Article Body Content */}
        <article className={styles.contentArea}>
          {article.content?.map((paragraph, idx) => (
            <p key={idx} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </article>

        {/* Author Bio Box */}
        <div className={styles.authorBox}>
          <div className={styles.authorAvatar}>NG</div>
          <div>
            <div className={styles.authorName}>Ing. Noé González Mendoza</div>
            <div className={styles.authorBio}>
              {lang === "es"
                ? "Senior Software Engineer con más de 10 años de trayectoria en ingeniería de software, especializado en desarrollo Full Stack con React, Next.js, Node.js, plataformas SaaS multi-tenant y bases de datos relacionales."
                : "Senior Software Engineer with 10+ years of software engineering experience, specialized in Full Stack development with React, Next.js, Node.js, multi-tenant SaaS platforms, and relational database systems."}
            </div>
          </div>
        </div>

        {/* Recruiter / Collaboration CTA */}
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>
            {lang === "es"
              ? "¿Te interesa profundizar en estos temas técnicos?"
              : "Interested in discussing these engineering patterns?"}
          </h2>
          <p className={styles.ctaText}>
            {lang === "es"
              ? "Estoy disponible para oportunidades remotas como Senior Software Engineer donde la solidez técnica y la arquitectura de sistemas marquen la diferencia."
              : "I am available for remote Senior Software Engineer roles where engineering rigor and real-world system architecture matter."}
          </p>
          <div className={styles.ctaButtons}>
            <Link
              href="/hire-me"
              className={styles.btnPrimary}
              onClick={() => gtag.trackContactCTA("article_hire_me")}
            >
              ⚡ {lang === "es" ? "Perfil de Contratación" : "Recruiter Quick Scan"}
            </Link>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
              onClick={() => gtag.trackLinkedInClick("article_cta")}
            >
              LinkedIn Profile
            </a>
            <Link href="/engineering" className={styles.btnSecondary}>
              {lang === "es" ? "← Todas las Notas" : "← All Notes"}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
