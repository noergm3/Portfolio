# Portafolio Profesional — Ing. Noé González

Sitio web personal y portafolio profesional desarrollado con **Next.js 16 (App Router)**, **React 19** y **Turbopack**.

🌐 **Sitio en vivo**: [https://noegonzalez.dev](https://noegonzalez.dev)  
💼 **LinkedIn**: [https://www.linkedin.com/in/ingnoegonzalez/](https://www.linkedin.com/in/ingnoegonzalez/)  
🐙 **GitHub**: [https://github.com/noergm3](https://github.com/noergm3)

---

## 🚀 Características Principales

- **Diseño Moderno & Responsivo**: Estética oscura con detalles dorados neón (`#F7CD00`), optimizada para móviles, tablets y monitores de escritorio.
- **Efectos Interactivos**: Fondo de partículas reactivas (`tsparticles`) y efectos de scroll parallax (`react-scroll-parallax`).
- **Máquina de Escribir Dinámica**: Animación en tiempo real que alterna roles profesionales y áreas de especialidad en la sección de inicio.
- **Datos Centralizados**: Toda la información de perfil, habilidades, proyectos y redes sociales se gestiona desde un único archivo (`src/data/portfolioData.js`), permitiendo actualizar contenidos sin modificar componentes ni estilos.
- **Sección de Contacto Interactiva**: Incluye botón directo para copiar la dirección de correo al portapapeles con confirmación visual en tiempo real.
- **SEO & Rendimiento**: Metadatos completos (Open Graph, Twitter Cards), generación automática de sitemap y robots.txt (`next-sitemap`).

---

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Biblioteca UI**: [React 19](https://react.dev/)
- **Estilos**: CSS Modules con variables personalizadas y soporte de scroll suave
- **Animaciones**: `react-tsparticles`, `tsparticles`, `react-scroll-parallax`
- **SEO**: `next-sitemap`
- **Despliegue Continuo**: Integrado con Netlify a través de GitHub

---

## 📁 Estructura del Proyecto

```text
src/
├── app/
│   ├── globals.css          # Variables de tema, scrollbar y reset
│   ├── layout.js            # Metadatos SEO, Open Graph y Google Analytics
│   └── page.js              # Composición semántica de las secciones
├── components/
│   ├── Navbar/              # Barra de navegación fija con efecto blur y menú móvil
│   ├── HomeSection/         # Hero con typewriter de roles y llamados a la acción
│   ├── About/               # Perfil profesional, métricas y trayectoria (+10 años)
│   ├── SkillsSection/       # Habilidades categorizadas (Frontend, Backend, DB, Cloud)
│   ├── ProjectsSection/     # Tarjetas de proyectos con tags y enlaces a GitHub/Demo
│   ├── ContactSection/      # Métodos de contacto y copiado rápido de correo
│   ├── Footer/              # Pie de página con copyright y volver arriba
│   └── ParticlesBackground/ # Configuración de partículas doradas interactivas
└── data/
    └── portfolioData.js     # Fuente única de verdad para datos y proyectos
```

---

## 💻 Desarrollo Local

1. Clona el repositorio e instala las dependencias:
   ```bash
   git clone https://github.com/noergm3/Portfolio.git
   cd Portfolio
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. Compilar para producción y generar el sitemap:
   ```bash
   npm run build
   ```

4. Ejecutar el linter:
   ```bash
   npm run lint
   ```

---

## 📝 Cómo personalizar tus proyectos y datos

Para agregar o modificar tus proyectos, habilidades o información de contacto, solo edita el archivo:
👉 `src/data/portfolioData.js`

Al guardar y hacer push a GitHub, Netlify desplegará automáticamente la nueva versión.
