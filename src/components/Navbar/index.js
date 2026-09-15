"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useLanguage } from "@/context/LanguageContext";
import * as gtag from "@/lib/gtag";

export default function Navbar() {
  const { lang, setLang, t, social } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => setShowNavbar(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    setMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If not on homepage, default browser behavior handles navigating to /#targetId
  };

  const handleLinkedInClick = () => {
    gtag.trackLinkedInClick("navbar");
  };

  const handleGitHubClick = () => {
    gtag.trackGitHubClick("navbar");
  };

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "es" : "en";
    setLang(nextLang);
    gtag.trackLanguageChange(nextLang);
  };

  const homeHref = (hash) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <nav
      className={`${styles.navbar} ${showNavbar ? styles.navbarShow : ""} ${
        scrolled ? styles.navbarScrolled : ""
      }`}
    >
      <div className={styles.navbarContainer}>
        <a
          href={homeHref("#home")}
          onClick={(e) => handleLinkClick(e, "#home")}
          className={styles.logo}
          aria-label="Noé González - Home"
        >
          <span className={styles.logoBracket}>&lt;</span>
          NoéGonzález
          <span className={styles.logoDot}>.dev</span>
          <span className={styles.logoBracket}> /&gt;</span>
        </a>

        <div className={styles.navRightGroup}>
          <Link
            href="/hire-me"
            className={styles.hireMeMobileBadge}
            onClick={() => {
              setMenuOpen(false);
              gtag.trackContactCTA("navbar_mobile_hire_me");
            }}
          >
            ⚡ {t.nav.hireMe || "Hire Me"}
          </Link>

          <button
            onClick={toggleLanguage}
            className={styles.langToggleBtn}
            type="button"
            aria-label="Switch language English / Español"
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <span className={lang === "en" ? styles.langActive : ""}>EN</span>
            <span className={styles.langDivider}>/</span>
            <span className={lang === "es" ? styles.langActive : ""}>ES</span>
          </button>

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? lang === "en"
                  ? "Close menu"
                  : "Cerrar menú"
                : lang === "en"
                ? "Open menu"
                : "Abrir menú"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li>
            <a href={homeHref("#home")} onClick={(e) => handleLinkClick(e, "#home")}>
              {t.nav.home}
            </a>
          </li>
          <li>
            <a href={homeHref("#about")} onClick={(e) => handleLinkClick(e, "#about")}>
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href={homeHref("#specialties")} onClick={(e) => handleLinkClick(e, "#specialties")}>
              {t.nav.specialties}
            </a>
          </li>
          <li>
            <a href={homeHref("#projects")} onClick={(e) => handleLinkClick(e, "#projects")}>
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a href={homeHref("#architecture")} onClick={(e) => handleLinkClick(e, "#architecture")}>
              {t.nav.architecture}
            </a>
          </li>
          <li>
            <Link
              href="/engineering"
              onClick={() => setMenuOpen(false)}
              className={pathname.startsWith("/engineering") ? styles.activeNavLink : ""}
            >
              {t.nav.engineering || "Engineering"}
            </Link>
          </li>
          <li>
            <Link
              href="/hire-me"
              onClick={() => {
                setMenuOpen(false);
                gtag.trackContactCTA("navbar_hire_me");
              }}
              className={styles.hireMePill}
            >
              ⚡ {t.nav.hireMe || "Hire Me"}
            </Link>
          </li>
          <li>
            <a href={homeHref("#contact")} onClick={(e) => handleLinkClick(e, "#contact")}>
              {t.nav.contact}
            </a>
          </li>

          <li className={styles.socialNav}>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleGitHubClick}
                aria-label="GitHub Profile"
                title="GitHub"
                className={styles.iconLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkedInClick}
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className={styles.iconLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.368 4.266 5.452v6.289zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.919-2.064 2.063-2.064 1.14 0 2.064.926 2.064 2.064 0 1.139-.925 2.065-2.064 2.065zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
