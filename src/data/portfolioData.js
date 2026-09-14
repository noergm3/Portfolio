export const portfolioData = {
  en: {
    meta: {
      title: "Noé González Mendoza | Senior Frontend Engineer",
      description:
        "Senior Frontend Engineer with 10+ years of experience specialized in React, Next.js, and enterprise SaaS architectures. Building robust, scalable, and intuitive software systems.",
    },
    nav: {
      home: "Home",
      about: "About",
      specialties: "Specialties",
      whatIBuild: "What I Build",
      projects: "Projects",
      experience: "Experience",
      architecture: "Architecture",
      security: "Security",
      contact: "Contact",
    },
    hero: {
      availability: "Available for Senior Frontend & Full Stack roles · Remote",
      titlePrefix: "Ing.",
      name: "Noé González Mendoza",
      mainRole: "Senior Frontend Engineer",
      roles: [
        "Senior Frontend Engineer",
        "React · Next.js · JavaScript · Node.js",
        "Enterprise Systems & SaaS Architectures",
        "10+ Years Building Robust Software",
      ],
      description:
        "Software engineer with 10+ years of experience building modern web applications, enterprise systems, and scalable SaaS platforms.",
      recruiterCta: "Looking for a Senior Frontend Engineer? Let's talk.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
      btnLinkedin: "LinkedIn Profile",
      stats: [
        { value: "10+", label: "Years Experience", detail: "Software Engineering" },
        { value: "5+", label: "Years React / Next.js", detail: "Specialized Modern Frontend" },
        { value: "Enterprise", label: "Systems & SaaS", detail: "Multi-tenant Architecture" },
        { value: "End-to-End", label: "Full-Cycle Delivery", detail: "UI to Database" },
      ],
    },
    about: {
      badge: "Core Engineering Profile",
      title: "About Me",
      lead: "Turning complex business operations into modern, intuitive, and maintainable software systems.",
      paragraphs: [
        "I am a Senior Software Engineer with over a decade of hands-on experience designing and delivering software solutions. While my deepest expertise and day-to-day focus is on creating fast, reactive, and modular web interfaces using React and Next.js, my background spans the entire application lifecycle.",
        "I do not merely build user interfaces; I design and engineer systems. My experience encompasses RESTful APIs, multi-tenant databases (SQL Server, PostgreSQL), access-control mechanisms (RBAC), and transactional business workflows for enterprise and education institutions.",
        "Whether architecting a multi-tenant SaaS platform from scratch or optimizing mission-critical national management systems, I prioritize clean architecture, strict security boundaries, high performance, and exceptional developer and user experience.",
      ],
      e2eTitle: "End-to-End Full Lifecycle Delivery",
      e2eSteps: [
        { layer: "Frontend UI", tech: "React · Next.js · MUI · Responsive UI" },
        { layer: "API & Services", tech: "Node.js · Express · REST APIs · JWT Auth" },
        { layer: "Enterprise Data", tech: "SQL Server · PostgreSQL · Prisma · MySQL" },
      ],
    },
    specialties: {
      badge: "Areas of Expertise",
      title: "Core Specialties",
      subtitle:
        "A disciplined engineering stack focused on enterprise robustness, clean code, and intuitive user experiences.",
      categories: [
        {
          id: "frontend",
          title: "Frontend",
          description: "High-performance, modular, and accessible user interfaces.",
          skills: [
            "React",
            "Next.js",
            "JavaScript (ES6+)",
            "Material UI (MUI)",
            "Responsive UI",
            "Complex Dashboards",
            "State Management",
            "Performance Optimization",
          ],
        },
        {
          id: "backend",
          title: "Backend",
          description: "Resilient APIs, decoupled business logic, and security.",
          skills: [
            "Node.js",
            "Express.js",
            "RESTful APIs",
            "Authentication (JWT)",
            "Authorization (RBAC)",
            "API Security & Middleware",
            "Microservices Integration",
          ],
        },
        {
          id: "data",
          title: "Data & Storage",
          description: "Transactional integrity, complex queries, and relational design.",
          skills: [
            "SQL Server",
            "PostgreSQL",
            "MySQL",
            "Prisma ORM",
            "Advanced SQL & T-SQL",
            "Stored Procedures",
            "Relational Data Modeling",
          ],
        },
        {
          id: "architecture",
          title: "Architecture & SaaS",
          description: "Designing systems built to scale securely across organizations.",
          skills: [
            "SaaS Architecture",
            "Multi-Tenancy",
            "Tenant Isolation",
            "Role-Based Access Control",
            "Enterprise Applications",
            "Audit Logging",
            "CI/CD & Cloud Deployment",
          ],
        },
      ],
    },
    whatIBuild: {
      badge: "Capabilities & Value",
      title: "What I Build",
      subtitle:
        "Bridging domain requirements with production-ready software architecture.",
      items: [
        {
          title: "Enterprise Applications",
          description:
            "Robust management software, administrative platforms, and high-concurrency systems tailored to demanding organizational workflows.",
        },
        {
          title: "SaaS Platforms",
          description:
            "Multi-tenant architectures featuring complete tenant data isolation, user subscriptions, dynamic role permissions, and scalable modularity.",
        },
        {
          title: "Modern Frontends",
          description:
            "Lightning-fast, accessible, and maintainable React & Next.js web applications with responsive design and elegant component architecture.",
        },
        {
          title: "Business Systems",
          description:
            "Mission-critical Point of Sale (POS), inventory tracking, credit and financial amortization engines, restaurant management, and education systems.",
        },
        {
          title: "API & Backend Integration",
          description:
            "Seamless, typed, and secure connections between web frontends, resilient REST services, and transactional databases.",
        },
      ],
    },
    projects: {
      badge: "Selected Portfolio & Case Studies",
      title: "Featured Systems & Projects",
      subtitle:
        "Real-world business systems engineered with a focus on problem-solving, architectural design, and business value.",
      labels: {
        problem: "The Challenge / Problem",
        solution: "Engineered Solution",
        features: "Key Capabilities",
        tech: "Technologies",
        contribution: "My Role & Contribution",
        badgeEnterprise: "Real Enterprise Experience",
        badgeSaaS: "Multi-Tenant SaaS",
        badgeBusiness: "Business Critical",
        badgeMobile: "Mobile Extension",
        diagramFlow: "Commercial Operational Flow:",
        diagramTree: "Multi-Branch Hierarchical Structure:",
      },
      list: [
        {
          id: "education-saas",
          title: "Education SaaS Platform",
          type: "Multi-Tenant SaaS",
          highlight: "Comprehensive Multi-Tenant School & Academy Management",
          problem:
            "Educational institutions often struggle with fragmented management tools for academic rosters, grading, tuition billing, and parent communication, lacking scalable data isolation between campuses.",
          solution:
            "Engineered a scalable multi-tenant SaaS platform allowing independent academies and schools to manage their entire academic and administrative lifecycle with strict data security.",
          features: [
            "Tenant Isolation per Institution",
            "Student Admissions & Enrollments",
            "Grading & Report Card Generation",
            "Tuition & Fee Payment Tracking",
            "Configurable Modules & Catalogs",
            "Role-Based Access Control (RBAC)",
            "Comprehensive Audit Logs & Subscriptions",
          ],
          technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "MUI",
            "JWT",
          ],
          contribution:
            "Architected the full frontend with Next.js/React and Material UI, implemented the JWT-based RBAC authorization layer, designed relational schemas in Prisma/PostgreSQL, and built core grading and enrollment modules.",
        },
        {
          id: "national-education",
          title: "National Education Management Systems",
          type: "Real Enterprise Experience",
          highlight: "Mission-Critical Institutional Administrative & Academic Ecosystem",
          problem:
            "Large-scale national educational infrastructure required modernized, highly reliable systems to process academic records, teacher allocations, and student tracking across numerous centers with strict regulatory compliance.",
          solution:
            "Developed and evolved core institutional administrative systems handling sensitive academic registries with center-based permission barriers and high-concurrency database operations.",
          features: [
            "Institutional Administration & School Cycles",
            "Official Academic Registry & Certifications",
            "User & Role Management with Center Assignment Restrictions",
            "High-Security Standards & Regulatory Compliance",
            "Seamless Frontend to Backend Enterprise Integration",
            "Optimized Relational Queries for Heavy Workloads",
          ],
          technologies: [
            "React",
            "Next.js",
            "JavaScript",
            "Node.js",
            "REST APIs",
            "SQL Server (T-SQL)",
            "Stored Procedures",
            "Enterprise Security",
          ],
          contribution:
            "Contributed to frontend development and backend API integration, engineered center-level security restrictions, and optimized critical SQL Server stored procedures for report generation without compromising sensitive national data.",
        },
        {
          id: "multi-tenant-erp",
          title: "Multi-Tenant ERP & POS",
          type: "Multi-Tenant SaaS",
          highlight: "Commercial Operations & Tenant Data Isolation",
          tenantIsolationNotice: "Strict Tenant Isolation Architecture",
          problem:
            "Managing multiple independent companies or holding subsidiaries under a unified platform usually leads to data leakage risks, complex configuration overhead, and disparate operational flows.",
          solution:
            "Constructed a multi-tenant ERP & POS platform designed with architectural tenant isolation, enabling businesses to manage inventory, catalog, sales, and analytics under secure boundaries.",
          features: [
            "Architectural Tenant Data Isolation",
            "Multi-Company & Branch Configuration",
            "Centralized Product Catalog & Barcode Tracking",
            "Point of Sale (POS) with Fast Checkout",
            "Real-Time Executive Dashboards & Analytics",
            "Full Operational Audit Trail",
          ],
          technologies: [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "SQL Server",
            "PostgreSQL",
            "REST APIs",
            "JWT",
          ],
          contribution:
            "Designed the tenant resolution middleware, implemented reactive dashboard UI components with Next.js, and formulated safe SQL partitioning ensuring absolute data privacy between client companies.",
        },
        {
          id: "sales-inventory",
          title: "Sales & Inventory Management",
          type: "Business Critical",
          highlight: "Commercial Flow with Integrated Credit & Expiration Tracking",
          flowDiagram: [
            "Product Catalog",
            "Inventory & Batches",
            "POS Sale",
            "Customer Account",
            "Credit & Amortization",
          ],
          problem:
            "Small and medium enterprises suffer revenue leakage and inventory loss due to untracked batch expirations, lack of credit line control, and uncoordinated cash registers.",
          solution:
            "Created an integrated commercial system linking physical inventory, expiration monitoring, fast invoicing, and customer credit ledger tracking in a single coherent flow.",
          features: [
            "Inventory Management with Expiration Alerts",
            "Cashier POS Register & Receipt Printing",
            "Customer Account Ledgers & Credit Limits",
            "Installment Payments & Balance Deductions",
            "Automated Profit & Loss Analytics",
          ],
          technologies: [
            "React",
            "JavaScript",
            "Node.js",
            "Express",
            "SQL Server",
            "CSS Modules",
            "REST API",
          ],
          contribution:
            "Developed the end-to-end user experience, built the transactional credit ledger engine, and implemented batch-level stock depletion algorithms.",
        },
        {
          id: "restaurant-pos",
          title: "Restaurant POS SaaS",
          type: "Multi-Tenant SaaS",
          highlight: "Branches, Table Management, Kitchen KDS & Bar Operations",
          treeArchitecture: {
            root: "Restaurant Brand",
            branches: "Multi-Branch Locations",
            components: ["Table & Floor Management", "Waiter & Staff Roles", "Point of Sale (POS)"],
            stations: ["Kitchen Display (KDS)", "Bar & Drinks Station", "Inventory Depletion"],
          },
          problem:
            "Food and beverage businesses struggle with delays between order placement, kitchen preparation, and billing, especially when managing multiple branches or dining areas.",
          solution:
            "Developed a modern SaaS POS specifically crafted for restaurants, synchronizing dining room tables, mobile order entry, kitchen display screens (KDS), and cash settlement.",
          features: [
            "Visual Table & Floor Plan Mapping",
            "Real-Time Kitchen Display System (KDS)",
            "Waitstaff Order Taking & Split Billing",
            "Automated Recipe-Based Inventory Deductions",
            "Multi-Branch Administration & Daily Cash Closing",
          ],
          technologies: [
            "React",
            "Next.js",
            "Node.js",
            "WebSockets / Real-Time Events",
            "PostgreSQL",
            "MUI",
          ],
          contribution:
            "Implemented the real-time order dispatch board, dynamic table mapping UI, and multi-branch role configuration.",
        },
        {
          id: "personal-loans",
          title: "Personal Loans & Amortization Engine",
          type: "Business Critical",
          highlight: "Financial Business Rules & Diminishing Balance Amortization",
          problem:
            "Custom lending and credit businesses require strict, verifiable mathematical computations for diminishing balance interest, irregular payments, and default penalties.",
          solution:
            "Built a specialized financial calculation engine that generates transparent amortization schedules, automates interest recalculation on unpaid balances, and tracks client repayment records.",
          features: [
            "Diminishing Balance Interest Calculation",
            "Bi-Weekly and Monthly Payment Schedules",
            "Dynamic Amortization Table Generation",
            "Early Principal Payments & Penalty Adjustments",
            "Overdue Accounts Alerting & Statements",
          ],
          technologies: [
            "React",
            "Next.js",
            "JavaScript Financial Logic",
            "SQL Server",
            "Node.js",
          ],
          contribution:
            "Engineered the core financial logic and formulas, built interactive simulation tables with real-time recalculations, and designed database audit constraints.",
        },
        {
          id: "mobile-sales",
          title: "Mobile Sales & Inventory (Mobile Extension)",
          type: "Mobile Extension",
          highlight: "Extending Enterprise Sales & Stock Operations to Android",
          problem:
            "Field sales reps and warehouse staff needed on-the-go access to inventory availability, client balances, and mobile invoice generation without carrying bulky hardware.",
          solution:
            "Built a mobile companion application that connects directly to the core sales platform backend, facilitating field sales, on-site order capture, and remote barcode scanning.",
          features: [
            "On-the-Go Product Catalog & Stock Check",
            "Mobile Order Capture & Direct Invoicing",
            "Customer Credit Ledger Lookup in the Field",
            "Lightweight Offline-Tolerant Architecture",
            "Bluetooth Receipt Printing & Barcode Capture",
          ],
          technologies: [
            "Android Integration",
            "React / Mobile Hybrid",
            "RESTful API Sync",
            "Node.js",
            "SQL Server",
          ],
          contribution:
            "Designed the responsive mobile interfaces, architected synchronization endpoints in the backend, and integrated field barcode scanning workflows.",
        },
      ],
    },
    experience: {
      badge: "Proven Track Record",
      title: "Experience & Timeline",
      subtitle: "Over a decade of continuous evolution in software engineering.",
      headline: "10+ Years Building Production Software",
      timeline: [
        {
          period: "2012 — 2016",
          role: "Software Development & Systems Engineering",
          focus:
            "Designing enterprise systems, desktop applications, transactional client-server architectures, and relational database schemas with high operational reliability.",
        },
        {
          period: "2016 — 2020",
          role: "Enterprise Systems & Database Optimization",
          focus:
            "Leading core institutional administrative systems and national registries. Mastering complex SQL Server stored procedures, T-SQL performance tuning, and secure data access.",
        },
        {
          period: "2020 — 2023",
          role: "Modern Frontend & Full Stack Specialization",
          focus:
            "Transitioning enterprise applications to modern web ecosystems using React, Next.js, and Node.js. Building intuitive user experiences and high-throughput REST APIs.",
        },
        {
          period: "2023 — Present",
          role: "Senior Frontend Engineer & SaaS Architecture",
          focus:
            "Architecting multi-tenant SaaS platforms, modernizing legacy enterprise systems, implementing strict RBAC security frameworks, and building scalable remote-first web solutions.",
        },
      ],
    },
    architecture: {
      badge: "System Design",
      title: "Enterprise Architecture",
      subtitle:
        "How I structure scalable, decoupled, and secure full-stack software systems.",
      tiers: [
        {
          title: "Client & Presentation Tier",
          tech: "Next.js / React · Material UI · State Management",
          points: [
            "Server-side rendering & static generation with Next.js",
            "Accessible, responsive, and component-driven UI architecture",
            "Client-side caching and optimistic UI updates",
          ],
        },
        {
          title: "Application & API Tier",
          tech: "Node.js / Express · RESTful APIs · Middleware",
          points: [
            "Stateless authentication via cryptographic JWT",
            "Role-Based Access Control (RBAC) middleware checks",
            "Multi-tenant resolver and request isolation layer",
          ],
        },
        {
          title: "Data & Persistence Tier",
          tech: "PostgreSQL / SQL Server · Prisma · Transact-SQL",
          points: [
            "Strict tenant-separated data schema strategies",
            "ACID-compliant transactions and optimized query plans",
            "Comprehensive, immutable audit logs for compliance",
          ],
        },
      ],
    },
    security: {
      badge: "Enterprise Standards",
      title: "Security & Governance",
      subtitle:
        "Enterprise applications demand robust security beyond the visual interface.",
      pillars: [
        {
          title: "Authentication & JWT",
          description:
            "Stateless, cryptographically signed token workflows with secure token refresh and rotation.",
        },
        {
          title: "Role-Based Access Control (RBAC)",
          description:
            "Fine-grained permissions mapped to user roles, ensuring users only access authorized resources.",
        },
        {
          title: "Tenant Isolation",
          description:
            "Architectural boundaries preventing data cross-contamination between multi-tenant clients.",
        },
        {
          title: "API Protection & Sanitization",
          description:
            "Input validation, SQL injection prevention, rate limiting, and defensive request handling.",
        },
        {
          title: "Audit Logging",
          description:
            "Immutable audit trails recording user actions, state changes, and security events for compliance.",
        },
        {
          title: "Center & Scope Restrictions",
          description:
            "Context-aware authorization limiting user access based on their assigned organizational unit or center.",
        },
      ],
    },
    techStack: {
      badge: "Skills Matrix",
      title: "Technologies & Tools",
      subtitle:
        "Categorized tools without artificial percentage bars—practical, production-tested technologies.",
      groups: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "JavaScript (ES6+)", "Material UI (MUI)", "HTML5 / CSS3", "Responsive UI", "Turbopack"],
        },
        {
          category: "Backend",
          items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware Design", "Microservices"],
        },
        {
          category: "Database & Data",
          items: ["SQL Server (T-SQL)", "PostgreSQL", "MySQL", "Prisma ORM", "Stored Procedures", "Relational Modeling"],
        },
        {
          category: "Architecture & DevOps",
          items: ["SaaS Multi-Tenancy", "Tenant Isolation", "RBAC Security", "Git & Version Control", "Docker Basics", "Netlify / Vercel"],
        },
      ],
    },
    contact: {
      badge: "Get in Touch",
      title: "Have a project, opportunity, or challenge?",
      subtitle: "Let's build something useful and high-performing.",
      recruiterHeading: "Looking for a Senior Frontend Engineer?",
      recruiterPitch:
        "I bring a rare blend of deep modern React/Next.js craftsmanship and full-cycle enterprise software engineering experience. Available for high-impact remote positions and strategic projects.",
      emailLabel: "Email Address",
      emailValue: "noergm3@gmail.com",
      btnCopyEmail: "Copy Email",
      btnCopied: "✓ Copied to Clipboard!",
      btnSendEmail: "Send Email",
      linkedinLabel: "Professional Network",
      linkedinValue: "in/ingnoegonzalez",
      btnLinkedin: "Connect on LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Senior Frontend Engineer · React · Next.js · Node.js · SaaS Architectures",
      backToTop: "Back to top",
    },
  },

  es: {
    meta: {
      title: "Noé González Mendoza | Senior Frontend Engineer",
      description:
        "Ingeniero de Software Senior especializado en React, Next.js y arquitecturas SaaS empresariales con más de 10 años de experiencia.",
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      specialties: "Especialidades",
      whatIBuild: "Lo que construyo",
      projects: "Proyectos",
      experience: "Experiencia",
      architecture: "Arquitectura",
      security: "Seguridad",
      contact: "Contacto",
    },
    hero: {
      availability: "Disponible para posiciones Senior Frontend & Full Stack · Remoto",
      titlePrefix: "Ing.",
      name: "Noé González Mendoza",
      mainRole: "Senior Frontend Engineer",
      roles: [
        "Senior Frontend Engineer",
        "React · Next.js · JavaScript · Node.js",
        "Sistemas Empresariales & Arquitectura SaaS",
        "+10 Años Desarrollando Software Robusto",
      ],
      description:
        "Ingeniero de software con más de 10 años de experiencia construyendo aplicaciones web modernas, sistemas empresariales y plataformas SaaS.",
      recruiterCta: "¿Buscas un Senior Frontend Engineer? Hablemos.",
      btnProjects: "Ver Proyectos",
      btnContact: "Contáctame",
      btnLinkedin: "Perfil de LinkedIn",
      stats: [
        { value: "10+", label: "Años Experiencia", detail: "Ingeniería de Software" },
        { value: "5+", label: "Años React / Next.js", detail: "Frontend Moderno Especializado" },
        { value: "Enterprise", label: "Sistemas & SaaS", detail: "Arquitectura Multi-tenant" },
        { value: "End-to-End", label: "Ciclo Completo", detail: "Desde UI hasta Base de Datos" },
      ],
    },
    about: {
      badge: "Perfil Profesional",
      title: "Sobre mí",
      lead: "Mi especialidad está en convertir procesos de negocio complejos en aplicaciones web modernas, intuitivas y mantenibles.",
      paragraphs: [
        "Soy Ingeniero de Software con más de una década de experiencia práctica diseñando y desplegando soluciones tecnológicas. Aunque mi especialización principal y trabajo diario se centran en crear interfaces web rápidas, reactivas y modulares con React y Next.js, mi trayectoria abarca el ciclo de vida completo de las aplicaciones.",
        "No solamente construyo interfaces de usuario; construyo sistemas. Mi experiencia integra el diseño de APIs RESTful, bases de datos transaccionales (SQL Server, PostgreSQL), mecanismos de seguridad por roles (RBAC) y flujos operativos críticos para empresas e instituciones educativas.",
        "Ya sea arquitectando una plataforma SaaS multiempresa desde cero o manteniendo sistemas nacionales de alta disponibilidad, mi prioridad es la arquitectura limpia, la seguridad estricta de datos, el alto rendimiento y una experiencia de usuario sobresaliente.",
      ],
      e2eTitle: "Entrega de Extremo a Extremo (Full-Cycle)",
      e2eSteps: [
        { layer: "Frontend UI", tech: "React · Next.js · MUI · Responsive UI" },
        { layer: "APIs & Servicios", tech: "Node.js · Express · REST APIs · Auth JWT" },
        { layer: "Bases de Datos", tech: "SQL Server · PostgreSQL · Prisma · MySQL" },
      ],
    },
    specialties: {
      badge: "Áreas de Dominio",
      title: "Especialidades Técnicas",
      subtitle:
        "Un stack tecnológico enfocado en la robustez empresarial, código limpio y experiencias intuitivas.",
      categories: [
        {
          id: "frontend",
          title: "Frontend",
          description: "Interfaces modulares, veloces, responsivas y accesibles.",
          skills: [
            "React",
            "Next.js",
            "JavaScript (ES6+)",
            "Material UI (MUI)",
            "Responsive UI",
            "Dashboards de Alto Rendimiento",
            "Gestión de Estado",
            "Optimización de Rendimiento",
          ],
        },
        {
          id: "backend",
          title: "Backend",
          description: "APIs resilientes, lógica desacoplada y autenticación segura.",
          skills: [
            "Node.js",
            "Express.js",
            "APIs RESTful",
            "Autenticación (JWT)",
            "Autorización (RBAC)",
            "Seguridad de Endpoints",
            "Integración de Microservicios",
          ],
        },
        {
          id: "data",
          title: "Bases de Datos",
          description: "Integridad transaccional, optimización de consultas y modelado.",
          skills: [
            "SQL Server",
            "PostgreSQL",
            "MySQL",
            "Prisma ORM",
            "SQL Avanzado & T-SQL",
            "Stored Procedures",
            "Modelado Relacional",
          ],
        },
        {
          id: "architecture",
          title: "Arquitectura & SaaS",
          description: "Diseño de sistemas preparados para escalar entre organizaciones.",
          skills: [
            "Arquitectura SaaS",
            "Multi-Tenancy",
            "Aislamiento de Datos (Tenant Isolation)",
            "Control de Acceso Basado en Roles (RBAC)",
            "Sistemas Empresariales",
            "Auditoría de Actividad",
            "CI/CD & Despliegue en Nube",
          ],
        },
      ],
    },
    whatIBuild: {
      badge: "Capacidades de Entrega",
      title: "Lo que puedo construir",
      subtitle:
        "Conectando los requerimientos de negocio con una arquitectura de software lista para producción.",
      items: [
        {
          title: "Enterprise Applications",
          description:
            "Sistemas administrativos y plataformas empresariales de alta concurrencia adaptadas a procesos operativos complejos.",
        },
        {
          title: "SaaS Platforms",
          description:
            "Aplicaciones multiempresa con estricto aislamiento de datos entre clientes, suscripciones, roles y arquitectura modular.",
        },
        {
          title: "Modern Frontends",
          description:
            "Interfaces React y Next.js ultra-rápidas, reactivas y accesibles, con diseño responsivo y arquitectura modular de componentes.",
        },
        {
          title: "Business Systems",
          description:
            "Puntos de venta (POS), inventarios, control de créditos y amortizaciones, restaurantes y gestión educativa institucional.",
        },
        {
          title: "API & Backend Integration",
          description:
            "Conexión fluida, tipada y segura entre el frontend, servicios REST desacoplados y bases de datos transaccionales.",
        },
      ],
    },
    projects: {
      badge: "Portafolio & Casos de Éxito",
      title: "Proyectos y Sistemas Destacados",
      subtitle:
        "Sistemas reales construidos con enfoque en resolución de problemas de negocio, arquitectura técnica y valor tangible.",
      labels: {
        problem: "El Problema / Desafío",
        solution: "Solución Implementada",
        features: "Funcionalidades Clave",
        tech: "Tecnologías",
        contribution: "Mi Aporte",
        badgeEnterprise: "Experiencia Institucional Real",
        badgeSaaS: "SaaS Multi-Tenant",
        badgeBusiness: "Crítico de Negocio",
        badgeMobile: "Extensión Móvil",
        diagramFlow: "Flujo Operativo Comercial:",
        diagramTree: "Estructura Jerárquica Multi-Sucursal:",
      },
      list: [
        {
          id: "education-saas",
          title: "Plataforma Educativa SaaS",
          type: "Multi-Tenant SaaS",
          highlight: "Plataforma SaaS Multiempresa para Colegios y Centros de Formación",
          problem:
            "Las instituciones educativas suelen lidiar con herramientas fragmentadas para matrículas, calificaciones, cobros y comunicación, sin contar con un aislamiento seguro entre campus o sedes.",
          solution:
            "Diseñé e implementé una plataforma SaaS multi-tenant que permite a colegios y academias gestionar todo su ciclo educativo y administrativo con estricta seguridad de datos.",
          features: [
            "Multi-Tenancy con Aislamiento por Institución",
            "Admisiones y Matrícula de Estudiantes",
            "Registro de Calificaciones y Boletas Académicas",
            "Control de Pagos, Mensualidades y Cobranza",
            "Módulos Configurables y Catálogos Académicos",
            "Control de Acceso por Roles (RBAC)",
            "Auditoría Completa de Transacciones y Suscripciones",
          ],
          technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "MUI",
            "JWT",
          ],
          contribution:
            "Arquitecté el frontend completo con Next.js y MUI, implementé el middleware de autorización RBAC con JWT, estructuré esquemas de datos con Prisma/PostgreSQL y construí los módulos de calificaciones y pagos.",
        },
        {
          id: "national-education",
          title: "Sistema Nacional de Gestión Educativa",
          type: "Real Enterprise Experience",
          highlight: "Ecosistema Institucional de Gestión Educativa a Escala Nacional",
          problem:
            "La infraestructura educativa a nivel nacional requería modernizar sistemas administrativos y de registro académico con alta confiabilidad, trazabilidad y restricciones de acceso estrictas por sede.",
          solution:
            "Participé en el desarrollo y evolución de sistemas institucionales para procesos académicos masivos, implementando permisos asignados por centro educativo y consultas de alto rendimiento.",
          features: [
            "Sistemas Administrativos de Ciclos Escolares",
            "Registro Académico Oficial y Emisión de Documentos",
            "Gestión de Usuarios con Restricciones por Centro Asignado",
            "Cumplimiento de Estándares de Seguridad Institucional",
            "Integración Sólida entre Frontend y Servicios Backend",
            "Consultas Optimizadas para Grandes Volúmenes de Datos",
          ],
          technologies: [
            "React",
            "Next.js",
            "JavaScript",
            "Node.js",
            "APIs REST",
            "SQL Server (T-SQL)",
            "Stored Procedures",
            "Seguridad Empresarial",
          ],
          contribution:
            "Desarrollo frontend e integración de APIs, implementación de reglas de negocio para permisos por centro escolar asignado y optimización de stored procedures en SQL Server sin exponer información confidencial.",
        },
        {
          id: "multi-tenant-erp",
          title: "ERP & POS Multiempresa",
          type: "Multi-Tenant SaaS",
          highlight: "Operaciones Comerciales con Aislamiento Estricto de Datos",
          tenantIsolationNotice: "Aislamiento Estricto de Datos (Tenant Isolation)",
          problem:
            "Gestionar varias empresas filiales o clientes comerciales en una sola aplicación tradicionalmente genera riesgos de fuga de información y sobrecostos de mantenimiento.",
          solution:
            "Construí una plataforma ERP y Punto de Venta multiempresa con aislamiento a nivel de arquitectura, asegurando que cada empresa opere en un entorno cerrado e independiente.",
          features: [
            "Aislamiento de Datos por Tenant (Tenant Isolation)",
            "Configuración de Múltiples Empresas y Sucursales",
            "Catálogo Unificado de Productos y Códigos de Barras",
            "Punto de Venta (POS) con Cobro Ágil",
            "Dashboards Analíticos Ejecutivos en Tiempo Real",
            "Registro Exhaustivo de Auditoría de Operaciones",
          ],
          technologies: [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "SQL Server",
            "PostgreSQL",
            "APIs REST",
            "JWT",
          ],
          contribution:
            "Diseño de la lógica de resolución de tenant por petición, desarrollo de la interfaz de usuario con Next.js y modelado de partición de datos para garantizar confidencialidad entre empresas.",
        },
        {
          id: "sales-inventory",
          title: "Sistema de Ventas e Inventario",
          type: "Business Critical",
          highlight: "Flujo Comercial con Control de Vencimientos y Créditos",
          flowDiagram: [
            "Producto",
            "Inventario y Lotes",
            "Venta / Facturación",
            "Cliente",
            "Crédito / Abono",
          ],
          problem:
            "Los negocios medianos pierden rentabilidad por falta de control en fechas de caducidad de mercancía, falta de seguimiento en cuentas por cobrar y cajas desfasadas.",
          solution:
            "Implementé una solución comercial integral que conecta existencias, alertas de vencimiento, ventas rápidas y créditos a clientes en un solo flujo continuo.",
          features: [
            "Control de Inventario con Alertas de Vencimiento",
            "Facturación Rápida en Punto de Venta",
            "Expediente de Clientes y Líneas de Crédito",
            "Registro de Abonos y Control de Saldos",
            "Dashboards de Ganancias y Métricas de Rotación",
          ],
          technologies: [
            "React",
            "JavaScript",
            "Node.js",
            "Express",
            "SQL Server",
            "CSS Modules",
            "REST API",
          ],
          contribution:
            "Creación de la experiencia de usuario interactiva, desarrollo del motor de estados de cuenta de clientes y algoritmos para deducción automática de existencias por lote.",
        },
        {
          id: "restaurant-pos",
          title: "POS SaaS para Restaurantes",
          type: "Multi-Tenant SaaS",
          highlight: "Gestión de Sucursales, Mesas, Comandas, Pantalla de Cocina (KDS) y Caja",
          treeArchitecture: {
            root: "Restaurante",
            branches: "Múltiples Sucursales",
            components: ["Mesas y Salones", "Meseros y Roles", "Punto de Venta (POS)"],
            stations: ["Pantalla de Cocina (KDS)", "Barra y Bebidas", "Control de Insumos"],
          },
          problem:
            "Los restaurantes experimentan demoras y errores de comunicación entre la comanda en mesa, la preparación en cocina y el cobro en caja.",
          solution:
            "Desarrollé una plataforma SaaS especializada en hostelería que sincroniza el salón de mesas, comandas digitales, pantalla de cocina (KDS) y cierre de caja.",
          features: [
            "Mapa Visual Interactivo de Mesas y Salones",
            "Pantalla de Cocina en Tiempo Real (KDS)",
            "Comandas por Mesero con División de Cuentas",
            "Deducción Automática de Recetas e Insumos",
            "Administración Multi-Sucursal y Cortes de Caja",
          ],
          technologies: [
            "React",
            "Next.js",
            "Node.js",
            "Eventos en Tiempo Real",
            "PostgreSQL",
            "MUI",
          ],
          contribution:
            "Implementé el tablero de pedidos en cocina, la vista de asignación interactiva de mesas y la configuración modular de roles de restaurante.",
        },
        {
          id: "personal-loans",
          title: "Préstamos Personales y Amortización",
          type: "Business Critical",
          highlight: "Reglas de Negocio Financieras y Amortización sobre Saldo Insoluto",
          problem:
            "Las empresas de préstamos y crédito necesitan cálculos matemáticos confiables y transparentes para intereses sobre saldo insoluto, cuotas y abonos anticipados.",
          solution:
            "Diseñé un motor de cálculo financiero para originar préstamos, generar cronogramas de amortización dinámicos y registrar abonos con recálculo automático de intereses.",
          features: [
            "Cálculo de Intereses sobre Saldo Insoluto",
            "Modalidades Quincenales, Mensuales y Personalizadas",
            "Generación Dinámica de Tablas de Amortización",
            "Gestión de Abonos a Capital y Control de Mora",
            "Estado de Cuenta y Liquidación de Préstamos",
          ],
          technologies: [
            "React",
            "Next.js",
            "Lógica Financiera JS",
            "SQL Server",
            "Node.js",
          ],
          contribution:
            "Programación de las fórmulas financieras y tablas de amortización interactivas, interfaces de simulación para clientes y consistencia en base de datos.",
        },
        {
          id: "mobile-sales",
          title: "Ventas e Inventario Móvil (Extensión Android)",
          type: "Mobile Extension",
          highlight: "Operaciones de Venta e Inventario en Campo para Android",
          problem:
            "Agentes de ventas en ruta y personal de almacén requerían consultar disponibilidad de productos y emitir pedidos sin depender de una computadora de escritorio.",
          solution:
            "Construí una extensión móvil conectada a la plataforma principal de ventas que permite operar inventarios, registrar ventas y verificar saldos directamente desde dispositivos Android.",
          features: [
            "Consulta Móvil de Inventario en Tiempo Real",
            "Levantamiento de Pedidos y Facturación en Ruta",
            "Verificación de Saldo de Clientes en Campo",
            "Sincronización Eficiente con la API Principal",
            "Integración de Lectura de Códigos e Impresión de Tickets",
          ],
          technologies: [
            "Android Integration",
            "React / Híbrido Móvil",
            "Sincronización API REST",
            "Node.js",
            "SQL Server",
          ],
          contribution:
            "Diseño de pantallas móviles orientadas a la agilidad operativa, creación de endpoints optimizados para conexiones móviles y flujo de captura rápida de códigos.",
        },
      ],
    },
    experience: {
      badge: "Trayectoria Profesional",
      title: "Experiencia & Timeline",
      subtitle: "Más de una década de evolución continua en ingeniería de software.",
      headline: "+10 Años Construyendo Software de Producción",
      timeline: [
        {
          period: "2012 — 2016",
          role: "Desarrollo de Software & Ingeniería de Sistemas",
          focus:
            "Diseño de sistemas empresariales, aplicaciones cliente-servidor, bases de datos relacionales y arquitectura de software con alta estabilidad.",
        },
        {
          period: "2016 — 2020",
          role: "Sistemas Empresariales & Optimización de Datos",
          focus:
            "Participación en sistemas institucionales masivos y registros académicos nacionales. Dominio de procedimientos almacenados complejos en SQL Server y seguridad.",
        },
        {
          period: "2020 — 2023",
          role: "Especialización en Frontend Moderno & Full Stack",
          focus:
            "Evolución de sistemas hacia el ecosistema web moderno con React, Next.js y Node.js. Creación de interfaces intuitivas y servicios REST desacoplados.",
        },
        {
          period: "2023 — Presente",
          role: "Senior Frontend Engineer & Arquitectura SaaS",
          focus:
            "Arquitectura de plataformas SaaS multiempresa, modernización de sistemas empresariales, aplicación de estándares de seguridad RBAC y soluciones web remotas.",
        },
      ],
    },
    architecture: {
      badge: "Diseño de Sistemas",
      title: "Arquitectura de Software",
      subtitle:
        "Cómo estructuro sistemas desacoplados, escalables y seguros de extremo a extremo.",
      tiers: [
        {
          title: "Capa de Cliente & Presentación",
          tech: "Next.js / React · Material UI · Gestión de Estado",
          points: [
            "Renderizado en servidor (SSR) y generación estática (SSG) con Next.js",
            "Arquitectura modular orientada a componentes limpios y accesibles",
            "Optimización de carga y estados de carga optimistas en cliente",
          ],
        },
        {
          title: "Capa de Aplicación & APIs",
          tech: "Node.js / Express · APIs RESTful · Middleware",
          points: [
            "Autenticación sin estado con tokens JWT criptográficos",
            "Validación de permisos por roles (RBAC) en cada endpoint",
            "Motor de resolución de tenant y aislamiento de peticiones",
          ],
        },
        {
          title: "Capa de Datos & Persistencia",
          tech: "PostgreSQL / SQL Server · Prisma · Transact-SQL",
          points: [
            "Particionado y esquemas de datos seguros por empresa cliente",
            "Transacciones ACID y planes de ejecución optimizados",
            "Tablas de auditoría inmutables para trazabilidad de eventos",
          ],
        },
      ],
    },
    security: {
      badge: "Estándares Empresariales",
      title: "Seguridad & Gobernanza",
      subtitle:
        "Las plataformas empresariales demandan seguridad estricta más allá de la interfaz visual.",
      pillars: [
        {
          title: "Autenticación & JWT",
          description:
            "Tokens firmados criptográficamente con flujos seguros de renovación e invalidación.",
        },
        {
          title: "Control de Acceso por Roles (RBAC)",
          description:
            "Permisos granulares asociados a roles de usuario, asegurando acceso exclusivo a recursos autorizados.",
        },
        {
          title: "Aislamiento de Tenant",
          description:
            "Fronteras arquitectónicas que impiden la contaminación o fuga de datos entre empresas cliente.",
        },
        {
          title: "Protección y Sanitización de APIs",
          description:
            "Validación de entradas, prevención de inyecciones SQL, limitación de tasa y diseño defensivo.",
        },
        {
          title: "Auditoría de Actividad",
          description:
            "Registros inmutables de transacciones críticas, cambios de estado y accesos para cumplimiento normativo.",
        },
        {
          title: "Restricción por Centro Asignado",
          description:
            "Reglas de negocio contextuales que limitan el alcance del usuario a su centro educativo u operativo correspondiente.",
        },
      ],
    },
    techStack: {
      badge: "Matriz Tecnológica",
      title: "Tecnologías & Herramientas",
      subtitle:
        "Herramientas categorizadas sin porcentajes artificiales: tecnología probada en entornos de producción reales.",
      groups: [
        {
          category: "Frontend",
          items: ["React", "Next.js", "JavaScript (ES6+)", "Material UI (MUI)", "HTML5 / CSS3", "Responsive UI", "Turbopack"],
        },
        {
          category: "Backend",
          items: ["Node.js", "Express.js", "APIs RESTful", "Autenticación JWT", "Diseño de Middleware", "Microservicios"],
        },
        {
          category: "Bases de Datos",
          items: ["SQL Server (T-SQL)", "PostgreSQL", "MySQL", "Prisma ORM", "Stored Procedures", "Modelado Relacional"],
        },
        {
          category: "Arquitectura & DevOps",
          items: ["SaaS Multi-Tenancy", "Tenant Isolation", "Seguridad RBAC", "Git & Control de Versiones", "Docker Basics", "Netlify / Vercel"],
        },
      ],
    },
    contact: {
      badge: "Contacto Directo",
      title: "¿Tienes un proyecto, oportunidad o desafío?",
      subtitle: "Construyamos algo útil, sólido y de alto rendimiento.",
      recruiterHeading: "¿Buscas un Senior Frontend Engineer?",
      recruiterPitch:
        "Aporto una combinación poco común: destreza avanzada en React/Next.js moderno y sólida disciplina de ingeniería de sistemas empresariales. Disponible para puestos remotos y proyectos estratégicos.",
      emailLabel: "Correo Electrónico",
      emailValue: "noergm3@gmail.com",
      btnCopyEmail: "Copiar correo",
      btnCopied: "✓ ¡Copiado al portapapeles!",
      btnSendEmail: "Enviar email",
      linkedinLabel: "Red Profesional",
      linkedinValue: "in/ingnoegonzalez",
      btnLinkedin: "Conectar en LinkedIn",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Senior Frontend Engineer · React · Next.js · Node.js · Arquitectura SaaS",
      backToTop: "Volver arriba",
    },
  },

  social: {
    email: "noergm3@gmail.com",
    linkedin: "https://www.linkedin.com/in/ingnoegonzalez/",
    siteUrl: "https://noegonzalez.dev",
  },
};
