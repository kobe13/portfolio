import { Icons } from "../components";

export const DATA = {
  lastName: "Nelson",
  firstName: "Bryan",
  url: "https://portfolio-phi-umber-56.vercel.app/",
  presentation:
    "Staff Frontend Engineer with 14+ years of experience building scalable web applications. I specialize in React, TypeScript, frontend architecture and design systems. Based in France, working remotely with US East Coast overlap. Currently building fintech tools at Qonto (Series D unicorn, €5B).",
  skills: [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "JavaScript",
        "GraphQL",
        "Apollo Client",
        "TanStack Query",
      ],
    },
    {
      title: "Architecture",
      skills: [
        "Micro-frontends (Module Federation)",
        "Design Systems",
        "Frontend Architecture",
        "Performance Optimization",
        "API Integration Patterns",
      ],
    },
    {
      title: "Testing & Quality",
      skills: [
        "Cypress",
        "Playwright",
        "Vitest",
        "Jest",
        "E2E and unit testing strategies",
      ],
    },
    {
      title: "Tooling & Infra",
      skills: [
        "CI/CD (GitHub Actions)",
        "Webpack",
        "Vite",
        "Node.js",
        "pnpm",
        "Docker (basics)",
        "Monitoring (Sentry)",
      ],
    },
    {
      title: "Engineering Practices",
      skills: [
        "Technical leadership",
        "Architectural decision records (ADRs)",
        "Code reviews",
        "Documentation",
        "Mentoring",
        "Cross-team collaboration",
      ],
    },
  ],
  languages: [
    { language: "English", level: "Fluent" },
    { language: "French", level: "Native" },
  ],
  contact: {
    email: "bnelson.profi@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kobe13",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nelsonbryan/",
        icon: Icons.linkedin,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1RKc0WrpjHFFpU-lnoV2dLOc_NNUdMhDU/view?usp=sharing",
        icon: Icons.resume,
      },
    },
  },
  work: [
    {
      id: "qonto-2024",
      title: "Staff Frontend Engineer at Qonto",
      companyDescription:
        "Fintech SaaS (B2B banking, Series D unicorn, €5B valuation).",
      dates: "December 2024 – Present",
      location: "Remote, France",
      description: [
        "➾ Engineered complex pre-accounting tools automating SME finance workflows, reducing manual reconciliation effort for business users.",
        "➾ Shaped product roadmap and technical specifications with product and design teams to align with business KPIs.",
        "➾ Optimized frontend performance through code-splitting, rendering optimizations, and comprehensive E2E and unit testing.",
        "➾ Contributed to company-wide frontend initiatives, improving shared frameworks and engineering best practices.",
      ],
      skills: [
        "React JS",
        "TypeScript",
        "React Hook Form",
        "TanStack Query",
        "Tailwind CSS",
        "Zod",
        "Vitest",
        "Cypress",
        "Playwright",
        "Git",
        "Github",
        "GitHub Actions",
        "HTML 5",
        "Web performance",
      ],
    },
    {
      id: "stuart-2019",
      title: "Lead Frontend Engineer at Stuart",
      companyDescription:
        "Logistics & Last-mile Delivery Platform (Series B, acquired by DPDgroup 2023).",
      dates: "June 2019 – June 2024",
      location: "Remote, France",
      description: [
        "➾ Led development of mission-critical frontend applications and provided technical leadership to the frontend team.",
        "➾ Architected a scalable micro-frontend platform adopted across multiple product teams, enabling independent deployments and faster feature delivery.",
        "➾ Defined frontend standards, documentation, and engineering practices across the organization.",
        "➾ Mentored engineers and led hiring and recruitment for the frontend department.",
      ],
      skills: [
        "JavaScript",
        "React JS",
        "TypeScript",
        "GraphQL",
        "Apollo Client",
        "Redux",
        "Node.js",
        "Jest",
        "Cypress",
        "Git",
        "Github",
        "GitHub Actions",
        "HTML 5",
        "SCSS/SASS",
        "Material UI",
        "Web performance",
        "Responsive design",
        "Micro-frontends",
        "Webpack",
      ],
    },
    {
      id: "data-soluce-2018",
      title: "Lead Frontend Engineer at Data Soluce",
      companyDescription:
        "PropTech / Collaborative Building Data Platform (Early-stage).",
      dates: "December 2018 – May 2019",
      location: "Remote, France",
      description: [
        "➾ Defined frontend architecture and selected core technology stack, testing, and tooling.",
        "➾ Mentored junior engineers and produced technical documentation.",
      ],
      skills: [
        "React",
        "Typescript",
        "Redux",
        "Jest",
        "Git",
        "Github",
        "HTML 5",
        "SCSS/SASS",
        "CSS 3",
        "Styled-components",
        "Pixel-perfect",
        "Responsive design",
        "Webpack",
      ],
    },
    {
      id: "scout24-2017",
      title: "Senior Frontend Engineer at Scout24 Group",
      companyDescription:
        "Digital Marketplace (Public company, 1000+ employees).",
      dates: "September 2017 – November 2018",
      location: "Munich, Germany",
      description: [
        "➾ Delivered high-performance React applications for AutoScout24.",
        "➾ Winner of Tech HackWeek 2018 for blockchain and peer-to-peer prototype.",
      ],
      skills: [
        "React JS",
        "TypeScript",
        "Redux",
        "Jest",
        "Git",
        "Github",
        "HTML 5",
        "SCSS/SASS",
        "Responsive design",
        "Web performance",
      ],
    },
    {
      id: "chip-2016",
      title: "Senior Frontend Engineer at CHIP",
      companyDescription:
        "Digital Media & Price Comparison (Established media company).",
      dates: "November 2016 – September 2017",
      location: "Munich, Germany",
      description: [
        "➾ Engineered a high performing and responsive frontend for a price comparison site.",
        "➾ Developed a custom JavaScript framework to ensure pixel perfect, cross-browser compatibility.",
      ],
      skills: [
        "JavaScript",
        "HTML 5",
        "SCSS/SASS",
        "CSS 3",
        "pixel-perfect",
        "responsive design",
        "Git",
        "Github",
        "Web performance",
      ],
    },
    {
      id: "early-career",
      title:
        "Early Career — Frontend Engineer (France, Slovakia, Czech Republic)",
      dates: "2011 – 2016",
      companyDescription:
        "Roles at Dell, Pixmania, and tech agencies. Focused on responsive design, cross-browser compatibility, and stakeholder collaboration. Recognized with multiple corporate awards for technical excellence.",
    },
  ],
  caseStudies: [
    {
      id: "micro-frontends-stuart",
      title: "Scalable micro-frontend platform at Stuart",
      summary:
        "Architecture and rollout of a micro-frontend platform adopted across multiple product teams: independent deployments, shared design system, and faster feature delivery. Covers context, technical choices (e.g. Module Federation), and outcomes.",
      link: {
        label: "View presentation",
        url: "https://drive.google.com/file/d/16EgN10jZ4Lo2HarY-wr0zo8Gv0yNM61Y/view",
      },
      tags: [
        "Micro-frontends",
        "Webpack",
        "Architecture",
        "Technical leadership",
      ],
    },
  ],
};
