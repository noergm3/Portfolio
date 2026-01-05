"use client";

import { useEffect, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import * as gtag from "../lib/gtag";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";



export default function Home() {
  const [typedName, setTypedName] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");

  const nameText = "Noe Gonzalez";
  const subtitleText = "Sitio en construcción";

  // Máquina de escribir para el nombre
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(nameText.slice(0, index + 1));
      index++;
      if (index === nameText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Máquina de escribir para el subtitle
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedSubtitle(subtitleText.slice(0, index + 1));
      index++;
      if (index === subtitleText.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <ParticlesBackground />
      <Navbar />
      <HomeSection />
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
}
