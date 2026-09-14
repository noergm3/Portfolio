"use client";

import { useEffect, useState } from "react";
import styles from "./HomeSection.module.css";
import { Parallax } from "react-scroll-parallax";
import { useLanguage } from "@/context/LanguageContext";
import * as gtag from "@/lib/gtag";

export default function HomeSection() {
  const { t, social } = useLanguage();
  const [typedName, setTypedName] = useState("");
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullName = t.hero.name;
  const roles = t.hero.roles;

  // Typewriter para el nombre
  useEffect(() => {
    let index = 0;
    setTypedName("");
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [fullName]);

  // Rotador dinámico de roles
  useEffect(() => {
    const currentRole = roles[roleIndex] || roles[0];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.slice(0, roleText.length + 1));
        if (roleText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setRoleText(currentRole.slice(0, roleText.length - 1));
        if (roleText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex, roles]);

  const handleScrollTo = (e, targetId, trackingLabel) => {
    e.preventDefault();
    gtag.event({
      action: "hero_cta_click",
      category: "navigation",
      label: trackingLabel,
    });
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkedInClick = () => {
    gtag.event({
      action: "click_linkedin",
      category: "engagement",
      label: "hero",
    });
  };

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.contentContainer}>
        {/* Recruiter & Availability Pill */}
        <div className={styles.availabilityBadge}>
          <span className={styles.pulseDot}></span>
          <span>{t.hero.availability}</span>
        </div>

        <Parallax speed={-3}>
          <h1 className={styles.neon}>
            <span className={styles.titlePrefix}>{t.hero.titlePrefix} </span>
            {typedName}
            <span className={styles.blinkingCursor}>&lt;/&gt;</span>
          </h1>
        </Parallax>

        <div className={styles.titleRole}>{t.hero.mainRole}</div>

        <p className={styles.subtitle}>
          <span className={styles.subtitlePrompt}>&gt;</span> {roleText}
          <span className={styles.cursorBar}>|</span>
        </p>

        <p className={styles.tagline}>{t.hero.description}</p>

        {/* Recruiter Callout Bar */}
        <div className={styles.recruiterCallout}>
          <span className={styles.recruiterIcon}>💼</span>
          <span className={styles.recruiterText}>{t.hero.recruiterCta}</span>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact", "recruiter_cta")}
            className={styles.recruiterLink}
          >
            {t.hero.btnContact} →
          </a>
        </div>

        {/* Action Buttons */}
        <div className={styles.buttons}>
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "#projects", "hero_projects")}
            className={styles.primaryButton}
          >
            <span>{t.hero.btnProjects}</span>
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
            onClick={(e) => handleScrollTo(e, "#contact", "hero_contact")}
            className={styles.secondaryButton}
          >
            <span>{t.hero.btnContact}</span>
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkedInClick}
            className={styles.linkedinButton}
            aria-label="LinkedIn Profile"
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
            <span>{t.hero.btnLinkedin}</span>
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className={styles.statsBar}>
          {t.hero.stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.value}</span>
              <span className={styles.statTitle}>{stat.label}</span>
              <span className={styles.statDetail}>{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
