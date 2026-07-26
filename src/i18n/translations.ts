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
      lede: "Más de cuatro años llevando plataformas desde la deuda técnica hacia sistemas modernos, con TypeScript, Angular, Node.js y .NET bajo arquitecturas limpias y de microservicios.",
      stats: [
        { value: "4+", label: "Años de experiencia" },
        { value: "4", label: "Países en producción" },
        { value: "+15%", label: "Mejora en tiempos de API" },
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
          lede: "Construí un marketplace que opera en 4 países, del backend al portal de vendedores, participando en la definición del producto.",
          description: [
            "Desarrollé el backend con Node.js bajo una arquitectura de microservicios.",
            "Levanté el portal de gestión para vendedores con Angular.",
            "Integré el operador externo Multivende y mejoré los tiempos de respuesta de las APIs hasta un 15%.",
          ],
          tags: ["Node.js", "Angular", "Microservicios", "TypeScript"],
        },
        {
          title: "Plataforma RR.HH.",
          company: "Base Dos",
          period: "2024",
          image: "/work/base-dos.svg",
          lede: "Aporté a una plataforma de recursos humanos donde la calidad del código no era negociable.",
          description: [
            "Participé en una plataforma basada en microservicios con .NET y arquitectura limpia.",
            "Implementé pruebas unitarias, de mutación y funcionales dentro de un modelo de QA compartido.",
            "Modelé y accedí a los datos con Entity Framework.",
          ],
          tags: [".NET", "C#", "Entity Framework", "Testing"],
        },
        {
          title: "Efleet",
          company: "VistaTI",
          period: "2025 - Actualidad",
          image: "/work/efleet.png",
          lede: "Rediseñé desde cero una plataforma de gestión de flota que arrastraba años de deuda técnica, tomando las decisiones de arquitectura de forma autónoma.",
          description: [
            "Diseñé la arquitectura de Efleet 2 (Angular 21 + .NET 10) para resolver la deuda del sistema anterior.",
            "Modernicé la plataforma migrando el frontend de Angular 9 a 20 y un backend en Visual Basic a .NET 8.",
            "Diseñé el flujo de autenticación y creé paquetes compartidos para estandarizar los proyectos a nivel empresa.",
          ],
          tags: ["Angular", ".NET", "TypeScript", "C#"],
        },
      ],
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy desarrollador Full-Stack con más de 4 años de experiencia construyendo aplicaciones web y APIs con TypeScript, Angular, Node.js y .NET, bajo arquitecturas limpias y de microservicios.",
        "Combino ejecución técnica con visión de producto: participo en la definición de funcionalidades, tomo decisiones de arquitectura de forma autónoma y comunico avances a equipos técnicos y no técnicos.",
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
      languages: ["TypeScript", "JavaScript", "C#"],
      technologies: [".NET", "Node.js", "Angular", "NestJS", "React", "Entity Framework"],
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
      lede: "Over four years taking platforms from technical debt to modern systems, with TypeScript, Angular, Node.js and .NET under clean and microservices architectures.",
      stats: [
        { value: "4+", label: "Years of experience" },
        { value: "4", label: "Countries in production" },
        { value: "+15%", label: "Faster API responses" },
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
          lede: "I built a marketplace running in 4 countries, from the backend to the seller portal, helping define the product.",
          description: [
            "Developed the backend with Node.js under a microservices architecture.",
            "Built the seller management portal with Angular.",
            "Integrated the external Multivende operator and improved API response times by up to 15%.",
          ],
          tags: ["Node.js", "Angular", "Microservices", "TypeScript"],
        },
        {
          title: "HR Platform",
          company: "Base Dos",
          period: "2024",
          image: "/work/base-dos.svg",
          lede: "I contributed to an HR platform where code quality was non-negotiable.",
          description: [
            "Helped build a platform based on microservices with .NET and clean architecture.",
            "Implemented unit, mutation and functional tests within a shared-QA model.",
            "Modeled and accessed data with Entity Framework.",
          ],
          tags: [".NET", "C#", "Entity Framework", "Testing"],
        },
        {
          title: "Efleet",
          company: "VistaTI",
          period: "2025 - Present",
          image: "/work/efleet.png",
          lede: "I redesigned a fleet-management platform from scratch after years of accumulated technical debt, owning the architecture decisions.",
          description: [
            "Designed the Efleet 2 architecture (Angular 21 + .NET 10) to pay down the legacy system's technical debt.",
            "Modernized the platform, migrating the frontend from Angular 9 to 20 and a Visual Basic backend to .NET 8.",
            "Designed the authentication flow and built shared packages to standardize projects company-wide.",
          ],
          tags: ["Angular", ".NET", "TypeScript", "C#"],
        },
      ],
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a Full-Stack developer with 4+ years of experience building web applications and APIs with TypeScript, Angular, Node.js and .NET, under clean and microservices architectures.",
        "I pair technical execution with product vision: I help define features, make architecture decisions autonomously, and communicate progress to both technical and non-technical teams.",
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
      languages: ["TypeScript", "JavaScript", "C#"],
      technologies: [".NET", "Node.js", "Angular", "NestJS", "React", "Entity Framework"],
    },
    footer: { cta: "Let's build something together" },
  },
};
