export const GA_TRACKING_ID = "G-13P4TBDEJH";

export const event = ({ action, category, label, value }) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackProjectView = (projectSlug) => {
  event({
    action: "project_view",
    category: "engagement",
    label: projectSlug,
  });
};

export const trackLinkedInClick = (sourceLocation = "general") => {
  event({
    action: "linkedin_click",
    category: "conversion",
    label: sourceLocation,
  });
};

export const trackGitHubClick = (sourceLocation = "general") => {
  event({
    action: "github_click",
    category: "conversion",
    label: sourceLocation,
  });
};

export const trackEmailClick = (sourceLocation = "general") => {
  event({
    action: "email_click",
    category: "conversion",
    label: sourceLocation,
  });
};

export const trackResumeDownload = (sourceLocation = "general") => {
  event({
    action: "resume_download",
    category: "conversion",
    label: sourceLocation,
  });
};

export const trackLanguageChange = (nextLang) => {
  event({
    action: "language_change",
    category: "preferences",
    label: nextLang,
  });
};

export const trackContactCTA = (ctaType) => {
  event({
    action: "contact_cta",
    category: "conversion",
    label: ctaType,
  });
};
