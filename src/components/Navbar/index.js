"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useLanguage } from "@/context/LanguageContext";
import * as gtag from "@/lib/gtag";

export default function Navbar() {
  const { lang, setLang, t, social } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

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
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleLinkedInClick = () => {
    gtag.event({
      action: "click_linkedin",
      category: "engagement",
      label: "navbar",
    });
  };

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "es" : "en";
    setLang(nextLang);
    gtag.event({
      action: "toggle_language",
      category: "preferences",
      label: nextLang,
    });
  };

  return (
    <nav
      className={`${styles.navbar} ${showNavbar ? styles.navbarShow : ""} ${
        scrolled ? styles.navbarScrolled : ""
      }`}
    >
      <div className={styles.navbarContainer}>
        <a
          href="#home"
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
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
              {t.nav.home}
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#specialties" onClick={(e) => handleLinkClick(e, "#specialties")}>
              {t.nav.specialties}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleLinkClick(e, "#experience")}>
              {t.nav.experience}
            </a>
          </li>
          <li>
            <a href="#architecture" onClick={(e) => handleLinkClick(e, "#architecture")}>
              {t.nav.architecture}
            </a>
          </li>
          <li>
            <a href="#security" onClick={(e) => handleLinkClick(e, "#security")}>
              {t.nav.security}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
              {t.nav.contact}
            </a>
          </li>

          <li className={styles.socialNav}>
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
