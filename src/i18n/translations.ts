export type Lang = "es" | "en";

export const defaultLang: Lang = "es";
export const locales: Lang[] = ["es", "en"];

/** Short labels shown in the language toggle. */
export const langLabels: Record<Lang, string> = { es: "ES", en: "EN" };

/** Root path for each locale (Spanish is the un-prefixed default). */
export const langHome: Record<Lang, string> = { es: "/", en: "/en/" };

export interface Project {
  title: string;
  company: string;
  period: string;
  image: string;
  /** One-line, plain-language impact — the recruiter-facing hook. */
  lede: string;
  /** Technical detail bullets, shown beneath the lede. */
  description: string[];
  tags: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Translation {
  meta: { title: string; description: string; switchTo: string };
  nav: { home: string; work: string; about: string };
  hero: {
    role: string;
    contact: string;
    viewProjects: string;
    title: { pre: string; em: string; post: string };
    lede: string;
    photoAlt: string;
    stats: Stat[];
  };
  work: {
    title: string;
    eyebrow: string;
    head: string;
    railLabel: string;
    projects: Project[];
  };
  about: { title: string; paragraphs: string[]; download: string };
  skills: {
    title: string;
    eyebrow: string;
    personalTitle: string;
    languagesTitle: string;
    technologiesTitle: string;
    personal: string[];
    languages: string[];
    technologies: string[];
  };
  footer: { cta: string };
}

export const translations: Record<Lang, Translation> = {
  es: {
    meta: {
      title: "Víctor Fernández - Full-Stack Developer",
      description: "Portafolio de Víctor Fernández — Desarrollador Full-Stack",
      switchTo: "Ver en inglés",
    },
    nav: { home: "Inicio", work: "Proyectos", about: "Sobre mí" },
    hero: {
      role: "Full Stack Developer",
      contact: "Hablemos",
      viewProjects: "Ver proyectos",
      title: {
        pre: "Construyo software que resuelve ",
        em: "problemas reales",
        post: " — de la arquitectura al detalle.",
      },
      photoAlt: "Retrato de Víctor Fernández",
      lede: "Más de cuatro años llevando plataformas desde la deuda técnica hacia sistemas modernos, con TypeScript, Angular, Node.js y .NET bajo arquitecturas limpias y de microservicios.",
      stats: [
        { value: "4+", label: "Años de experiencia" },
        { value: "4", label: "Países en producción" },
        { value: "20%", label: "APIs más rápidas" },
      ],
    },
    work: {
      title: "Mi trabajo",
      eyebrow: "La trayectoria",
      head: "Cada proyecto, un problema que aprendí a resolver mejor.",
      railLabel: "Estás en",
      projects: [
        {
          title: "Marketplace",
          company: "Apprecio · Dcanje",
          period: "2021 - 2024",
          image: "/work/marketplace.png",
          lede: "Diseñé y desarrollé desde su inicio un marketplace habilitado para 4 países, del backend al portal de vendedores, participando junto al equipo en la definición de funcionalidades.",
          description: [
            "Creé la estructura base de microservicios del backend con Node.js.",
            "Desarrollé con Angular el portal de administración donde los vendedores gestionan inventarios, órdenes de compra y reportes.",
            "Estuve a cargo de la integración con Multivende (centralizador de inventario), que permitió incorporar una gran cantidad de vendedores de múltiples países.",
            "Mantuve y mejoré las APIs existentes, logrando respuestas hasta un 20% más rápidas.",
          ],
          tags: ["Node.js", "Angular", "Microservicios", "TypeScript"],
        },
        {
          title: "Plataforma RR.HH.",
          company: "Base Dos",
          period: "2024",
          image: "/work/base-dos.svg",
          lede: "Diseñé e implementé microservicios en .NET para distintos módulos de Innovasoft, una plataforma de recursos humanos donde la calidad del código no era negociable.",
          description: [
            "Construí cada módulo bajo arquitectura limpia, con acceso a datos mediante Entity Framework.",
            "Implementé pruebas unitarias, de mutación y funcionales para asegurar la calidad del código.",
            "Colaboré con los equipos de frontend y QA en un entorno ágil con integración continua.",
          ],
          tags: [".NET", "C#", "Entity Framework", "Testing"],
        },
        {
          title: "Efleet",
          company: "VistaTI",
          period: "2025 - Actualidad",
          image: "/work/efleet.png",
          lede: "Modernicé Efleet, una plataforma de gestión de flota con años de deuda técnica, y luego diseñé desde cero la arquitectura de su nueva versión, tomando las decisiones de forma autónoma.",
          description: [
            "Migré el sistema heredado (Visual Basic y Angular 9) a .NET 8 y Angular 20, y diseñé la arquitectura de la nueva versión con Angular 22 y .NET 10.",
            "Construí un sistema de notificaciones multicanal: email, WhatsApp, push y WebSockets.",
            "Diseñé el flujo de autenticación y autorización, y participé en la definición de los procesos de negocio junto al equipo.",
            "Creé paquetes compartidos para estandarizar los proyectos a nivel empresa, reduciendo la duplicación y acelerando el desarrollo de nuevos módulos.",
          ],
          tags: ["Angular", ".NET", "TypeScript", "C#"],
        },
      ],
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy desarrollador Full-Stack con más de 4 años de experiencia construyendo aplicaciones web y APIs con TypeScript, Angular, Node.js y .NET, bajo arquitecturas limpias y de microservicios.",
        "Combino ejecución técnica con visión de producto: participo en la definición de funcionalidades y procesos, tomo decisiones de arquitectura de forma autónoma y comunico avances a equipos técnicos y no técnicos.",
        "Integro la IA en mi trabajo diario para acelerar el desarrollo, automatizar tareas repetitivas y evaluar mejoras — siempre con la motivación de entregar productos de calidad.",
      ],
      download: "Descargar CV",
    },
    skills: {
      title: "Habilidades",
      eyebrow: "Lo que domino",
      personalTitle: "Cómo trabajo",
      languagesTitle: "Lenguajes",
      technologiesTitle: "Tecnologías",
      personal: ["Arquitectura limpia", "Visión de producto", "Autonomía y decisión", "Trabajo en equipo"],
      languages: ["TypeScript", "JavaScript", "C#", "Python", "SQL"],
      technologies: [".NET", "Node.js", "Angular", "NestJS", "Express", "React", "Entity Framework", "WebSockets"],
    },
    footer: { cta: "Construyamos algo juntos" },
  },
  en: {
    meta: {
      title: "Víctor Fernández - Full-Stack Developer",
      description: "Víctor Fernández's portfolio — Full-Stack Developer",
      switchTo: "View in Spanish",
    },
    nav: { home: "Home", work: "Projects", about: "About Me" },
    hero: {
      role: "Full Stack Developer",
      contact: "Say Hello",
      viewProjects: "View projects",
      title: {
        pre: "I build software that solves ",
        em: "real problems",
        post: " — from the architecture to the detail.",
      },
      photoAlt: "Portrait of Víctor Fernández",
      lede: "Over four years taking platforms from technical debt to modern systems, with TypeScript, Angular, Node.js and .NET under clean and microservices architectures.",
      stats: [
        { value: "4+", label: "Years of experience" },
        { value: "4", label: "Countries in production" },
        { value: "20%", label: "Faster API responses" },
      ],
    },
    work: {
      title: "My work",
      eyebrow: "The journey",
      head: "Each project, a problem I learned to solve better.",
      railLabel: "You are at",
      projects: [
        {
          title: "Marketplace",
          company: "Apprecio · Dcanje",
          period: "2021 - 2024",
          image: "/work/marketplace.png",
          lede: "I designed and built a marketplace from day one, live in 4 countries, from the backend to the seller portal, helping the team define its features.",
          description: [
            "Laid down the backend's base microservices structure with Node.js.",
            "Built the Angular admin portal where sellers manage inventory, purchase orders and reports.",
            "Owned the integration with Multivende (an inventory hub), which let us onboard a large number of sellers across multiple countries.",
            "Maintained and improved the existing APIs, making responses up to 20% faster.",
          ],
          tags: ["Node.js", "Angular", "Microservices", "TypeScript"],
        },
        {
          title: "HR Platform",
          company: "Base Dos",
          period: "2024",
          image: "/work/base-dos.svg",
          lede: "I designed and implemented .NET microservices for several modules of Innovasoft, an HR platform where code quality was non-negotiable.",
          description: [
            "Built each module under clean architecture, with data access through Entity Framework.",
            "Implemented unit, mutation and functional tests to safeguard code quality.",
            "Worked alongside the frontend and QA teams in an agile setup with continuous integration.",
          ],
          tags: [".NET", "C#", "Entity Framework", "Testing"],
        },
        {
          title: "Efleet",
          company: "VistaTI",
          period: "2025 - Present",
          image: "/work/efleet.png",
          lede: "I modernized Efleet, a fleet-management platform carrying years of technical debt, then designed the architecture of its new version from scratch, owning the decisions.",
          description: [
            "Migrated the legacy system (Visual Basic and Angular 9) to .NET 8 and Angular 20, then designed the new version's architecture on Angular 22 and .NET 10.",
            "Built a multichannel notification system: email, WhatsApp, push and WebSockets.",
            "Designed the authentication and authorization flow, and helped define the business processes with the team.",
            "Created shared packages to standardize projects company-wide, cutting duplication and speeding up new module development.",
          ],
          tags: ["Angular", ".NET", "TypeScript", "C#"],
        },
      ],
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a Full-Stack developer with 4+ years of experience building web applications and APIs with TypeScript, Angular, Node.js and .NET, under clean and microservices architectures.",
        "I pair technical execution with product vision: I help define features and processes, make architecture decisions autonomously, and communicate progress to both technical and non-technical teams.",
        "I bring AI into my daily workflow to speed up development, automate repetitive tasks and evaluate improvements — always with the goal of shipping quality products.",
      ],
      download: "Download my resume",
    },
    skills: {
      title: "Skills",
      eyebrow: "What I master",
      personalTitle: "How I work",
      languagesTitle: "Languages",
      technologiesTitle: "Technologies",
      personal: ["Clean architecture", "Product vision", "Autonomy & ownership", "Teamwork"],
      languages: ["TypeScript", "JavaScript", "C#", "Python", "SQL"],
      technologies: [".NET", "Node.js", "Angular", "NestJS", "Express", "React", "Entity Framework", "WebSockets"],
    },
    footer: { cta: "Let's build something together" },
  },
};
