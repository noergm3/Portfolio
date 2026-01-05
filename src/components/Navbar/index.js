"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // Animación de entrada
  useEffect(() => {
    const timeout = setTimeout(() => setShowNavbar(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Detecta scroll para cambiar fondo/sombra
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll suave para links internos
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // cierra menú mobile
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${showNavbar ? styles.navbarShow : ""} ${scrolled ? styles.navbarScrolled : ""
        }`}
    >
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          NoeGonzalez.dev
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>Inicio</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>Proyectos</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>Contacto</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ingnoegonzalez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
