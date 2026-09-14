"use client";

import { createContext, useContext, useState, useCallback, useSyncExternalStore } from "react";
import { portfolioData } from "@/data/portfolioData";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: portfolioData.en,
  social: portfolioData.social,
});

let currentLang = "en";
const listeners = new Set();

function subscribe(listener) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot() {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem("preferred_lang");
      if (saved === "es" || saved === "en") return saved;
    } catch {
      // ignore read error
    }
  }
  return currentLang;
}

function getServerSnapshot() {
  return "en";
}

export function LanguageProvider({ children }) {
  const storeLang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [lang, setInternalLang] = useState(storeLang);

  const setLang = useCallback((newLang) => {
    if (newLang === "en" || newLang === "es") {
      currentLang = newLang;
      setInternalLang(newLang);
      try {
        localStorage.setItem("preferred_lang", newLang);
      } catch {
        // ignore write error
      }
      listeners.forEach((l) => l());
    }
  }, []);

  const activeLang = lang || storeLang || "en";
  const t = portfolioData[activeLang] || portfolioData.en;

  return (
    <LanguageContext.Provider value={{ lang: activeLang, setLang, t, social: portfolioData.social }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
