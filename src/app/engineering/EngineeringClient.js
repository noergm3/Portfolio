"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Engineering.module.css";

export default function EngineeringClient({ initialEn, initialEs }) {
  const { lang, t } = useLanguage();
  const engineeringData = lang === "es" ? initialEs : initialEn;

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
            {engineeringData.badge || "Engineering Notes"}
          </span>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <span className={styles.badge}>{engineeringData.badge}</span>
          <h1 className={styles.title}>{engineeringData.title}</h1>
          <p className={styles.subtitle}>{engineeringData.subtitle}</p>
        </header>

        {/* Articles List */}
        <div className={styles.articlesList}>
          {engineeringData.articles?.map((article) => (
            <Link
              key={article.slug}
              href={`/engineering/${article.slug}`}
              className={styles.articleCard}
            >
              <div className={styles.articleMeta}>
                <span className={styles.categoryTag}>{article.category}</span>
                <span className={styles.dot}>•</span>
                <span>{article.readTime}</span>
                <span className={styles.dot}>•</span>
                <span>{article.date}</span>
              </div>
              <h2 className={styles.articleTitle}>{article.title}</h2>
              <p className={styles.articleSummary}>{article.summary}</p>
              <span className={styles.readMore}>
                {lang === "es" ? "Leer artículo completo →" : "Read Full Note →"}
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
