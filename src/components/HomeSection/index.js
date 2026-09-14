"use client";

import { useEffect, useState } from "react";
import styles from "./HomeSection.module.css";
import { Parallax } from "react-scroll-parallax";
import { portfolioData } from "@/data/portfolioData";

const ROLES = [
  portfolioData.personal.role,
  "+10 Años Desarrollando Soluciones Robustas",
  "Especialista en React, Next.js, Node.js & SQL Server",
  "Arquitectura de Software & Bases de Datos",
];

export default function HomeSection() {
  const [typedName, setTypedName] = useState("");
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullName = portfolioData.personal.name;

  // Efecto máquina de escribir para el nombre principal
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 110);
    return () => clearInterval(interval);
  }, [fullName]);

  // Efecto dinámico rotativo para los roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.slice(0, roleText.length + 1));
        if (roleText.length + 1 === currentRole.length) {
          // Pausa antes de borrar
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setRoleText(currentRole.slice(0, roleText.length - 1));
        if (roleText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.contentContainer}>
        <div className={styles.availabilityBadge}>
          <span className={styles.pulseDot}></span>
          <span>Disponible para proyectos y consultoría</span>
        </div>

        <Parallax speed={-4}>
          <h1 className={styles.neon}>
            <span className={styles.titlePrefix}>
              {portfolioData.personal.titlePrefix}{" "}
            </span>
            {typedName}
            <span className={styles.blinkingCursor}>&lt;/&gt;</span>
          </h1>
        </Parallax>

        <p className={styles.subtitle}>
          <span className={styles.subtitlePrompt}>&gt;</span> {roleText}
          <span className={styles.cursorBar}>|</span>
        </p>

        <p className={styles.tagline}>
          Construyendo aplicaciones web escalables, bases de datos optimizadas y
          sistemas empresariales de alta disponibilidad.
        </p>

        <div className={styles.buttons}>
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "#projects")}
            className={styles.primaryButton}
          >
            <span>Ver Proyectos</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className={styles.secondaryButton}
          >
            <span>Contactar</span>
          </a>

          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinButton}
            aria-label="Perfil de LinkedIn de Noé González"
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
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
