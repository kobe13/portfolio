import { Icons } from "../components";

export const DATA = {
  lastName: "Nelson",
  firstName: "Bryan",
  url: "https://portfolio-phi-umber-56.vercel.app/",
  presentation:
    "With 15 years of experience building scalable, high-performance web applications, I specialize in React, TypeScript, and frontend architecture. Based in France, working remotely with US East Coast overlap. Currently building fintech tools at Qonto (Series D unicorn, €5B). Early adopter of agentic coding workflows, focused on AI-native development.",
  skills: [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "GraphQL",
        "REST APIs",
        "Tailwind CSS",
        "MUI",
      ],
    },
    {
      title: "AI-Assisted Engineering",
      skills: [
        "Claude Code",
        "Cursor",
        "Spec-first agentic workflows",
        "Custom review skills",
        "AI-assisted refactoring",
      ],
    },
    {
      title: "Backend & Architecture",
      skills: [
        "Node.js",
        "Express (SSR host, runtime config)",
        "Micro-frontends (Module Federation)",
        "Design Systems",
        "CI/CD (GitHub Actions)",
      ],
    },
    {
      title: "Data & State",
      skills: [
        "TanStack Query",
        "Apollo Client",
        "nuqs (URL state management)",
      ],
    },
    {
      title: "Testing & Quality",
      skills: [
        "Playwright",
        "Cypress",
        "Vitest",
        "Jest",
        "React Testing Library",
        "Storybook",
        "Core Web Vitals",
      ],
    },
    {
      title: "Tooling & Infra",
      skills: ["Webpack 5", "Vite", "Docker", "Sentry"],
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
        "➾ Own accounting features for SME finance workflows, from spec to production. I work directly with product and design on the roadmap instead of waiting for tickets.",
        "➾ Set up a spec-first agentic workflow: specs and a TDD plan sliced into day-sized tasks, Claude Code drafting the tests and implementing against them, and review skills I built that check whether tests can fail (edge cases, error states, assertions on states already true). Critical financial calculation logic is covered by tests.",
        "➾ Raised frontend performance and Core Web Vitals through AI-assisted refactoring, while keeping feature delivery fast in a mission-critical codebase.",
        "➾ Contribute to company-wide frontend initiatives: shared Storybook libraries and engineering practices standardized across several teams.",
      ],
      skills: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS",
        "Vitest",
        "Cypress",
        "Playwright",
        "Storybook",
        "GitHub Actions",
        "Core Web Vitals",
      ],
    },
    {
      id: "parental-leave-2024",
      title: "Parental leave",
      dates: "July 2024 – November 2024",
      location: "France",
    },
    {
      id: "stuart-2019",
      title: "Lead Frontend Engineer at Stuart",
      companyDescription:
        "Logistics & Last-mile Delivery Platform (Series B, acquired by DPDgroup 2023).",
      dates: "May 2019 – June 2024",
      location: "Remote, France",
      description: [
        {
          text: "Architected a micro-frontend platform adopted by 5 teams: Module Federation host on a Node/Express SSR server for runtime config injection, plus GitHub Actions CI/CD pipelines. Releases went from biweekly to several per day.",
          links: [
            {
              label: "View case study",
              url: "https://drive.google.com/file/d/16EgN10jZ4Lo2HarY-wr0zo8Gv0yNM61Y/view",
            },
            {
              label: "Read the ADR: Why Module Federation?",
              url: "https://drive.google.com/file/d/1JAcSFKJJlbkJc4Tk1mKonxqH0af6N8M4/view",
            },
          ],
        },
        "➾ Built a live courier-tracking tool as an isolated micro-frontend for support ops during a growth spike: WebSocket telemetry, instant filtering.",
        "➾ Defined global frontend standards and designed a unified design system layered over MUI, documented in Storybook and shared across all micro-frontends.",
        "➾ Mentored engineers and ran frontend hiring for the department.",
      ],
      skills: [
        "React",
        "TypeScript",
        "GraphQL",
        "Apollo Client",
        "Node.js",
        "Express",
        "Jest",
        "Cypress",
        "GitHub Actions",
        "MUI",
        "Storybook",
        "Module Federation",
        "Webpack 5",
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
        "➾ Won Tech HackWeek 2018 with a blockchain and peer-to-peer prototype.",
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
        "➾ Built the responsive frontend of the price comparison platform.",
        "➾ Developed a custom JavaScript framework for pixel-perfect cross-browser rendering.",
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
        "Software roles at IQVIA, Dell, Pixmania and tech agencies.",
      description: [
        "➾ Responsive, cross-browser web applications with international stakeholders. Several corporate awards for technical excellence.",
      ],
    },
  ],
  education: [
    {
      degree: "Professional Degree",
      field: "Web/Multimedia Management & Webmaster",
      school: "Centre Image Formation",
      location: "France",
      dates: "2011",
    },
    {
      degree: "Associate Degree",
      field: "Audiovisual Technologies",
      school: "EICAR",
      location: "Paris",
      dates: "2002 – 2004",
    },
  ],
  caseStudies: [
    {
      id: "micro-frontends-stuart",
      title: "Scalable micro-frontend platform at Stuart",
      image: "micro-frontend-diagram",
      summary:
        "Architecture and rollout of a micro-frontend platform adopted by 5 teams: independent deployments, release cycles transformed from biweekly to multiple times per day. Covers context, technical choices (e.g. Module Federation), and outcomes.",
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
