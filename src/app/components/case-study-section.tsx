import { DATA } from "../data/resume";
import { Badge } from "./badge";

type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  link: { label: string; url: string };
  tags: string[];
};

export const CaseStudySection = () => {
  const caseStudies = DATA.caseStudies as CaseStudy[];

  if (!caseStudies?.length) return null;

  return (
    <section
      id="case-studies"
      className="py-24 px-6 bg-[var(--muted-background)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep dives into architecture and delivery: slides and write-ups from
            real projects.
          </p>
        </div>

        <ul className="space-y-8">
          {caseStudies.map(({ id, title, summary, link, tags }) => (
            <li
              key={id}
              className="bg-background rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {summary}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  {link.label}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                {tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} title={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
