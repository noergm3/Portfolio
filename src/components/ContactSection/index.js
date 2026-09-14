"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";
import { useLanguage } from "@/context/LanguageContext";
import * as gtag from "@/lib/gtag";

export default function ContactSection() {
  const { t, social } = useLanguage();
  const { contact } = t;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(social.email);
    setCopied(true);
    gtag.event({
      action: "copy_email",
      category: "engagement",
      label: "contact_section",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmailClick = () => {
    gtag.event({
      action: "click_email_mailto",
      category: "engagement",
      label: "contact_section",
    });
  };

  const handleLinkedInClick = () => {
    gtag.event({
      action: "click_linkedin",
      category: "engagement",
      label: "contact_section",
    });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>{contact.badge}</span>
          <h2 className={styles.sectionTitle}>{contact.title}</h2>
          <div className={styles.divider}></div>
          <p className={styles.sectionDescription}>{contact.subtitle}</p>
        </div>

        {/* Recruiter Callout Banner */}
        <div className={styles.recruiterBox}>
          <div className={styles.recruiterHeader}>
            <span className={styles.recruiterBadge}>{contact.recruiterBadge}</span>
            <h3 className={styles.recruiterHeading}>{contact.recruiterHeading}</h3>
          </div>
          <p className={styles.recruiterPitch}>{contact.recruiterPitch}</p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card: Email */}
          <div className={styles.contactCard}>
            <div className={styles.iconCircle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{contact.emailLabel}</h3>
            <p className={styles.cardDetail}>{social.email}</p>
            <div className={styles.cardButtons}>
              <button
                onClick={handleCopyEmail}
                className={`${styles.copyBtn} ${copied ? styles.copied : ""}`}
                type="button"
                aria-label="Copy email address"
              >
                {copied ? contact.btnCopied : contact.btnCopyEmail}
              </button>
              <a
                href={`mailto:${social.email}`}
                onClick={handleSendEmailClick}
                className={styles.actionBtn}
              >
                {contact.btnSendEmail}
              </a>
            </div>
          </div>

          {/* Card: LinkedIn */}
          <div className={styles.contactCard}>
            <div className={styles.iconCircle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.368 4.266 5.452v6.289zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.919-2.064 2.063-2.064 1.14 0 2.064.926 2.064 2.064 0 1.139-.925 2.065-2.064 2.065zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{contact.linkedinLabel}</h3>
            <p className={styles.cardDetail}>{contact.linkedinValue}</p>
            <div className={styles.cardButtons}>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkedInClick}
                className={styles.linkedinBtn}
              >
                {contact.btnLinkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
