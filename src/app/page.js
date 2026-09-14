"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ParallaxProvider>
      <ParticlesBackground />
      <Navbar />
      <main>
        <HomeSection />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </ParallaxProvider>
  );
}
