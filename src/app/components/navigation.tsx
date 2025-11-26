"use client";

import { useEffect, useState } from "react";
import { DATA } from "../data/resume";
import { Icons } from "./icons";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
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

      const offset = 80; // same offset used for scrollToSection
      let closestId: string | null = null;
      let minDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const elTop =
          el.getBoundingClientRect().top + window.pageYOffset - offset;
        const distance = Math.abs(elTop - window.pageYOffset);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      });

      if (closestId) {
        setActiveSection(closestId);
      }
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
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            {DATA.name}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item.id
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Icons.linkedin className="w-5 h-5" />
            </a>
            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Icons.github className="w-5 h-5" />
            </a>
            <a
              href={DATA.contact.social.Resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
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
