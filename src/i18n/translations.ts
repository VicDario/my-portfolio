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
  description: string[];
  tags: string[];
}

export interface Translation {
  meta: { title: string; description: string; switchTo: string };
  nav: { home: string; work: string; about: string };
  hero: { role: string; contact: string; viewProjects: string };
  work: { title: string; prev: string; next: string; select: string; projects: Project[] };
  about: { title: string; paragraphs: string[]; download: string };
  skills: {
    title: string;
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
    hero: { role: "Full Stack Developer", contact: "Hablemos", viewProjects: "Ver proyectos" },
    work: {
      title: "Mi trabajo",
      prev: "Proyecto anterior",
      next: "Proyecto siguiente",
      select: "Seleccionar proyecto",
      projects: [
        {
          title: "Efleet",
          company: "VistaTI",
          period: "2025 - Actualidad",
          image: "/work/efleet.png",
          description: [
            "Diseñé desde cero la arquitectura de Efleet 2 (Angular 21 + .NET 10) para resolver la deuda técnica del sistema anterior.",
            "Modernicé la plataforma de gestión de flota, migrando el frontend de Angular 9 a 20 y un backend en Visual Basic a .NET 8.",
            "Diseñé el flujo de autenticación y autorización, y creé paquetes compartidos para estandarizar los proyectos a nivel empresa.",
          ],
          tags: ["Angular", ".NET", "TypeScript", "C#"],
        },
        {
          title: "Marketplace",
          company: "Apprecio · Dcanje",
          period: "2021 - 2024",
          image: "/work/marketplace.png",
          description: [
            "Desarrollé un marketplace habilitado para 4 países, participando en la definición de funcionalidades.",
            "Construí el backend con Node.js bajo arquitectura de microservicios y el portal de gestión para vendedores con Angular.",
            "Integré el operador externo Multivende y mejoré los tiempos de respuesta de las APIs hasta un 15%.",
          ],
          tags: ["Node.js", "Angular", "Microservicios", "TypeScript"],
        },
        {
          title: "Plataforma RRHH",
          company: "Base Dos",
          period: "2024",
          image: "/work/base-dos.svg",
          description: [
            "Participé en el desarrollo de una plataforma de recursos humanos basada en microservicios con .NET y arquitectura limpia.",
            "Implementé pruebas unitarias, de mutación y funcionales dentro de un modelo de QA compartido para asegurar la calidad del código.",
            "Trabajé con Entity Framework para el acceso y modelado de datos.",
          ],
          tags: [".NET", "C#", "Entity Framework", "Testing"],
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
      personalTitle: "Personales",
      languagesTitle: "Lenguajes",
      technologiesTitle: "Tecnologías",
      personal: ["Organización", "Proactividad", "Responsabilidad", "Trabajo en equipo"],
      languages: ["C#", "JavaScript", "TypeScript"],
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
    hero: { role: "Full Stack Developer", contact: "Say Hello", viewProjects: "View projects" },
    work: {
      title: "My work",
      prev: "Previous project",
      next: "Next project",
      select: "Select project",
      projects: [
        {
          title: "Efleet",
          company: "VistaTI",
          period: "2025 - Present",
          image: "/work/efleet.png",
          description: [
            "Designed the Efleet 2 architecture from scratch (Angular 21 + .NET 10) to pay down the legacy system's technical debt.",
            "Modernized the fleet-management platform, migrating the frontend from Angular 9 to 20 and a Visual Basic backend to .NET 8.",
            "Designed the platform's authentication and authorization flow, and built shared packages to standardize projects company-wide.",
          ],
          tags: ["Angular", ".NET", "TypeScript", "C#"],
        },
        {
          title: "Marketplace",
          company: "Apprecio · Dcanje",
          period: "2021 - 2024",
          image: "/work/marketplace.png",
          description: [
            "Built a marketplace enabled for 4 countries, helping the team define product features.",
            "Developed the backend with Node.js under a microservices architecture and the seller management portal with Angular.",
            "Integrated the external Multivende operator and improved API response times by up to 15%.",
          ],
          tags: ["Node.js", "Angular", "Microservices", "TypeScript"],
        },
        {
          title: "HR Platform",
          company: "Base Dos",
          period: "2024",
          image: "/work/base-dos.svg",
          description: [
            "Helped build an HR platform based on microservices with .NET and clean architecture.",
            "Implemented unit, mutation and functional tests within a shared-QA model to safeguard code quality.",
            "Worked with Entity Framework for data access and modeling.",
          ],
          tags: [".NET", "C#", "Entity Framework", "Testing"],
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
      personalTitle: "Personal",
      languagesTitle: "Languages",
      technologiesTitle: "Technologies",
      personal: ["Organization", "Proactivity", "Responsibility", "Teamwork"],
      languages: ["C#", "JavaScript", "TypeScript"],
      technologies: [".NET", "Node.js", "Angular", "NestJS", "React", "Entity Framework"],
    },
    footer: { cta: "Let's build something together" },
  },
};
