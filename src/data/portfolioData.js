export const portfolioData = {
  personal: {
    name: "Noé González",
    titlePrefix: "Ing.",
    role: "Ingeniero de Software & Full Stack Developer",
    experienceYears: "10+",
    bio: [
      "¡Hola! Soy Noé González, Ingeniero y apasionado por el desarrollo de software, la creación de sistemas robustos y experiencias digitales de alto impacto.",
      "Cuento con más de 10 años de experiencia diseñando y construyendo soluciones tecnológicas escalables, desde plataformas empresariales y bases de datos transaccionales de alto rendimiento, hasta aplicaciones web modernas y reactivas.",
      "Mi enfoque combina una sólida disciplina de ingeniería de software con las mejores prácticas del ecosistema moderno de desarrollo: código limpio, arquitecturas desacopladas y foco constante en la experiencia de usuario.",
    ],
    stats: [
      { label: "Años de Experiencia", value: "+10" },
      { label: "Proyectos & Sistemas", value: "+25" },
      { label: "Especialidad", value: "Full Stack & Bases de Datos" },
      { label: "Disponibilidad", value: "Consultoría / Proyectos" },
    ],
  },

  social: {
    email: "noergm3@gmail.com",
    linkedin: "https://www.linkedin.com/in/ingnoegonzalez/",
    siteUrl: "https://noegonzalez.dev",
  },

  skillsCategories: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Design", "CSS Modules"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "C# / .NET", "RESTful APIs", "Microservicios", "Arquitectura MVC"],
    },
    {
      category: "Bases de Datos",
      skills: ["SQL Server", "T-SQL & Stored Procedures", "PostgreSQL", "Optimización de Consultas", "Modelado Relacional"],
    },
    {
      category: "Herramientas & Cloud",
      skills: ["Git & Control de Versiones", "Netlify & Vercel", "Docker", "CI/CD", "Metodologías Ágiles / Scrum", "Turbopack"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial & ERP",
      description:
        "Plataforma integral para control de inventarios, facturación, cuentas por cobrar y reportes analíticos transaccionales en tiempo real.",
      technologies: ["React", "Node.js", "SQL Server", "Express", "REST API"],
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Portafolio Web Profesional",
      description:
        "Sitio web personal desarrollado con Next.js (App Router), animaciones interactivas de partículas, scroll parallax y optimización avanzada de SEO.",
      technologies: ["Next.js", "React 19", "CSS Modules", "Turbopack"],
      demo: "https://noegonzalez.dev",
      featured: true,
    },
    {
      id: 3,
      title: "API de Autenticación & Servicios Seguros",
      description:
        "Microservicio backend robusto con autenticación basada en JWT, control de acceso por roles (RBAC) y conexión a base de datos de alta concurrencia.",
      technologies: ["Node.js", "Express", "SQL Server", "Docker", "JWT"],
      demo: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Dashboard de Analítica & Reportes",
      description:
        "Panel de control interactivo y visualización de indicadores clave (KPIs) con exportación dinámica de datos y gráficos en tiempo real.",
      technologies: ["React", "Next.js", "Chart.js", "REST API", "CSS Modules"],
      demo: "#",
      featured: false,
    },
  ],
};
