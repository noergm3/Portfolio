"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // Animación de entrada inicial
  useEffect(() => {
    const timeout = setTimeout(() => setShowNavbar(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Detección de scroll para ajustar el blur y fondo del navbar
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

  // Scroll suave para enlaces internos
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
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
        >
          <span className={styles.logoBracket}>&lt;</span>
          NoeGonzalez
          <span className={styles.logoDot}>.dev</span>
          <span className={styles.logoBracket}> /&gt;</span>
        </a>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "#skills")}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
              Contacto
            </a>
          </li>
          <li className={styles.socialNav}>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Noé González"
              title="LinkedIn"
              className={styles.iconLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
