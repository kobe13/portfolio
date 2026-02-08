"use client";

import { useEffect, useState } from "react";
import { DATA } from "../data/resume";
import { Icons } from "./icons";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "case-studies", label: "Case studies" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Single scroll handler: update background and compute the nearest section
    const sectionIds = navItems.map((i) => i.id);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const viewportTop = 0;
      const viewportBottom = window.innerHeight;

      // Active section = the one with the most visible height in the viewport
      let activeId = sectionIds[0];
      let maxVisible = 0;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        const visibleTop = Math.max(top, viewportTop);
        const visibleBottom = Math.min(bottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisible) {
          maxVisible = visibleHeight;
          activeId = id;
        }
      }

      setActiveSection(activeId);
    };

    window.addEventListener("scroll", handleScroll);
    // run once on mount to initialize state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:bg-slate-900/80 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-foreground hover:text-foreground/80 transition-colors max-w-[40%] truncate"
          >
            {DATA.firstName} {DATA.lastName}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-gray-600 dark:text-gray-400 hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme toggle sits with social icons to avoid overlap on small screens */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>

            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Icons.linkedin className="w-5 h-5" />
            </a>
            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="GitHub"
            >
              <Icons.github className="w-5 h-5" />
            </a>
            <a
              href={DATA.contact.social.Resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Resume"
            >
              <Icons.resume className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
