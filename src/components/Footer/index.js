"use client";

import styles from "./Footer.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <a href="#home" onClick={handleScrollToTop} className={styles.logo}>
              <span className={styles.bracket}>&lt;</span>
              Noé González
              <span className={styles.bracket}> /&gt;</span>
            </a>
            <p className={styles.brandRole}>
              {portfolioData.personal.role}
            </p>
          </div>

          <nav className={styles.footerNav} aria-label="Navegación del pie de página">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
              Inicio
            </a>
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
              Sobre mí
            </a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "#skills")}>
              Habilidades
            </a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>
              Proyectos
            </a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
              Contacto
            </a>
          </nav>

          <div className={styles.socialIcons}>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Noé González"
              className={styles.iconBtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Noé González"
              className={styles.iconBtn}
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

            <button
              onClick={handleScrollToTop}
              aria-label="Volver al inicio"
              className={styles.backToTopBtn}
              title="Volver arriba"
            >
              ↑
            </button>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {currentYear} Noé González. Todos los derechos reservados.
          </p>
          <p className={styles.builtWith}>
            Desarrollado con Next.js, React 19 & Turbopack.
          </p>
        </div>
      </div>
    </footer>
  );
}
