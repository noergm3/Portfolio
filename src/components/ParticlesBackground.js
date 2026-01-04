"use client";

import dynamic from "next/dynamic";
import { loadFull } from "tsparticles";

const Particles = dynamic(() => import("react-tsparticles"), {
  ssr: false,
});

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#F7CD00" },
          links: {
            enable: true,
            color: "#F7CD00",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1.5,
            random: true,
            outModes: "out",
          },
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.7 },
          size: { value: { min: 2, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
