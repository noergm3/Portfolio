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
          {/* <button className="coming-button">
            Próximamente
          </button> */}

          <a
            href="https://www.linkedin.com/in/ingnoegonzalez/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
            onClick={() =>
              gtag.event({
                action: "linkedin_click",
                category: "social",
                label: "linkedin_profile",
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.368 4.266 5.452v6.289zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.919-2.064 2.063-2.064 1.14 0 2.064.926 2.064 2.064 0 1.139-.925 2.065-2.064 2.065zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
            </svg>

            <span>Contacto | LinkedIn</span>
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

        .linkedin-button {
  margin-top: 30px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 34px;
  font-size: 1rem;
  font-weight: 600;
  color: #0a66c2;
  background: rgba(10, 102, 194, 0.12);
  border: 1px solid rgba(10, 102, 194, 0.4);
  border-radius: 14px;
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition: all 0.35s ease;
}

.linkedin-button:hover {
  background: #0a66c2;
  color: #ffffff;
  box-shadow: 0 12px 30px rgba(10, 102, 194, 0.45);
  transform: translateY(-3px) scale(1.03);
}

.linkedin-button svg {
  transition: transform 0.35s ease;
}

.linkedin-button:hover svg {
  transform: scale(1.15);
}

@media (max-width: 480px) {
  .linkedin-button {
    padding: 12px 26px;
    font-size: 0.95rem;
  }
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

/* 🔹 Estilo base compartido */
.buttons button,
.buttons a {
  padding: 14px 34px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.35s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  backdrop-filter: blur(6px);
}

/* 🔸 Botón secundario — Próximamente */
.coming-button {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffffaa;
  border: 1px solid rgba(255, 255, 255, 0.25);
  cursor: not-allowed;
}

.coming-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.35);
}

/* ⭐ Botón primario — LinkedIn */
.linkedin-button {
  background: rgba(247, 205, 0, 0.15);
  color: #F7CD00;
  border: 1px solid rgba(247, 205, 0, 0.45);
}

.linkedin-button:hover {
  background: #F7CD00;
  color: #1e1e2f;
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 15px 35px rgba(247, 205, 0, 0.45);
}

.linkedin-button svg {
  transition: transform 0.35s ease;
}

.linkedin-button:hover svg {
  transform: scale(1.15);
}

/* 📱 Mobile */
@media (max-width: 480px) {
  .buttons {
    flex-direction: column;
  }

  .buttons button,
  .buttons a {
    width: 100%;
    padding: 14px 28px;
  }
}

      `}</style>
    </div>
  );
}
