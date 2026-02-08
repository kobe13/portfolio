import { DATA } from "../data/resume";
import { Icons } from "./icons";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground/90 dark:text-white mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Looking for a Staff Frontend Engineer to architect scalable systems,
          lead technical initiatives across teams, or build high performance
          React applications?
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href={`mailto:${DATA.contact.email}?subject=${encodeURIComponent("Contact from portfolio")}`}
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send me an email
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Icons.linkedin className="w-6 h-6" />
          </a>
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Icons.github className="w-6 h-6" />
          </a>
          <a
            href={DATA.contact.social.Resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
            aria-label="Resume"
          >
            <Icons.resume className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
