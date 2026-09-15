"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import { useLanguage } from "@/context/LanguageContext";
import * as gtag from "@/lib/gtag";

export default function Footer() {
  const { t, social } = useLanguage();
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e, targetId) => {
    if (pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const homeHref = (hash) => (pathname === "/" ? hash : `/${hash}`);

  const handleLinkedInClick = () => {
    gtag.trackLinkedInClick("footer");
  };

  const handleResumeClick = () => {
    gtag.trackResumeDownload("footer");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <a href={homeHref("#home")} onClick={handleScrollToTop} className={styles.logo}>
              <span className={styles.bracket}>&lt;</span>
              Noé González
              <span className={styles.bracket}> /&gt;</span>
            </a>
            <p className={styles.brandRole}>{t.footer.tagline}</p>
            <p className={styles.locationTag}>
              📍 {t.footer.locationTag || "Managua, Nicaragua · Available for Remote Opportunities"}
            </p>
          </div>

          <nav className={styles.footerNav} aria-label="Footer Navigation">
            <a href={homeHref("#home")} onClick={(e) => handleLinkClick(e, "#home")}>
              {t.nav.home}
            </a>
            <a href={homeHref("#about")} onClick={(e) => handleLinkClick(e, "#about")}>
              {t.nav.about}
            </a>
            <a href={homeHref("#projects")} onClick={(e) => handleLinkClick(e, "#projects")}>
              {t.nav.projects}
            </a>
            <a href={homeHref("#experience")} onClick={(e) => handleLinkClick(e, "#experience")}>
              {t.nav.experience}
            </a>
            <a href={homeHref("#architecture")} onClick={(e) => handleLinkClick(e, "#architecture")}>
              {t.nav.architecture}
            </a>
            <Link href="/engineering">
              {t.nav.engineering || "Engineering Notes"}
            </Link>
            <Link href="/hire-me" className={styles.hireMeFooterLink}>
              ⚡ {t.nav.hireMe || "Hire Me"}
            </Link>
            <a href={homeHref("#contact")} onClick={(e) => handleLinkClick(e, "#contact")}>
              {t.nav.contact}
            </a>
          </nav>

          <div className={styles.socialIcons}>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkedInClick}
              aria-label="LinkedIn Profile"
              className={styles.iconBtn}
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.368 4.266 5.452v6.289zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.919-2.064 2.063-2.064 1.14 0 2.064.926 2.064 2.064 0 1.139-.925 2.065-2.064 2.065zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>

            <a
              href={social.resumeUrl || "/Noe-Gonzalez-Mendoza-Resume.pdf"}
              download="Noe-Gonzalez-Mendoza-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              aria-label="Download Resume PDF"
              className={styles.iconBtn}
              title="Download Resume (PDF)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
            </a>

            <button
              onClick={handleScrollToTop}
              aria-label={t.footer.backToTop}
              className={styles.backToTopBtn}
              title={t.footer.backToTop}
            >
              ↑
            </button>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {currentYear} Noé González Mendoza. {t.footer.rights}
          </p>
          <p className={styles.builtWith}>
            Senior Frontend Engineer · React 19 · Next.js 16 App Router · Turbopack · Clean Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
