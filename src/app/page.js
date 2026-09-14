"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { LanguageProvider } from "@/context/LanguageContext";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import SecuritySection from "@/components/SecuritySection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <ParallaxProvider>
        <ParticlesBackground />
        <Navbar />
        <main>
          <HomeSection />
          <About />
          <SkillsSection />
          <WhatIBuildSection />
          <ProjectsSection />
          <ExperienceSection />
          <ArchitectureSection />
          <SecuritySection />
          <TechStackSection />
          <ContactSection />
        </main>
        <Footer />
      </ParallaxProvider>
    </LanguageProvider>
  );
}
