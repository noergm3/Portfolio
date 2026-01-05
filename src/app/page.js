"use client";

import { useEffect, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import * as gtag from "../lib/gtag";


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

      <div className="content">
        <h1 className="neon">
          <span className="title-prefix">Ing. </span>
          {typedName}
          <span className="blinking-cursor">|</span>
        </h1>

        <p className="subtitle">
          ⚙️ {typedSubtitle}
          <span className="blinking-cursor">|</span>
        </p>

        <p className="description">
          Pronto podrás ver mis proyectos y novedades.
        </p>

        <div className="buttons">
          <button className="coming-button">
            Próximamente
          </button>

          <a
            href="https://www.linkedin.com/in/ingnoegonzalez/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
            onClick={() =>
              gtag.event({
                action: "linkedin_click",
                category: "social",
                label: "linkedin_profile",
              })
            }
          >
            Contacto / LinkedIn
          </a>

        </div>
      </div>

      <style jsx>{`
        .container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(135deg, #0f0f1a, #1e1e2f);
          font-family: 'Poppins', sans-serif;
          animation: gradientShift 20s ease infinite;
        }

        @keyframes gradientShift {
          0%,100% { background: linear-gradient(135deg, #0f0f1a, #1e1e2f); }
          50% { background: linear-gradient(135deg, #2c1f3a, #1e1e2f); }
        }

        .content {
          position: relative;
          z-index: 10;
          padding: 20px;
        }

        .neon {
          font-size: 4rem;
          font-weight: 800;
          color: #F7CD00;
          text-shadow: 0 0 5px #F7CD00, 0 0 10px #F7CD00, 0 0 20px #F7CD00;
          animation: fadeIn 2s ease forwards;
        }

        .title-prefix { font-weight: 600; opacity: 0.9; }

        .blinking-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: #F7CD00;
          margin-left: 4px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,50%,100% { opacity: 1; }
          25%,75% { opacity: 0; }
        }

        .subtitle {
          margin-top: 20px;
          font-size: 1.5rem;
          color: #ffffffcc;
          animation: fadeIn 2s ease forwards;
        }

        .description {
          margin-top: 12px;
          font-size: 1.1rem;
          color: #ffffff99;
          animation: fadeIn 2s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .buttons {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .coming-button, .linkedin-button {
          padding: 12px 30px;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .coming-button {
          background-color: #F7CD00;
          color: #1e1e2f;
        }

        .coming-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
          background-color: #ffd700;
        }

        .linkedin-button {
          background-color: #0A66C2;
          color: #fff;
        }

        .linkedin-button:hover {
          background-color: #004182;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
        }

        @media (max-width: 768px) {
          .neon { font-size: 3rem; }
          .subtitle { font-size: 1.2rem; }
          .description { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
}
