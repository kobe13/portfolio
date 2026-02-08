import React from "react";
import { Badge } from "./badge";

type DescriptionItem =
  | string
  | { text: string; link: { label: string; url: string } };

type Props = {
  title: string;
  companyDescription?: string;
  description?: DescriptionItem[];
  dates?: string;
  location?: string;
  skills?: string[];
};

export const WorkCard = ({
  title,
  companyDescription,
  description,
  dates,
  location,
  skills,
}: Props) => {
  return (
    <div className="flex flex-1 flex-col justify-start gap-3">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
          {companyDescription}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          {dates && (
            <time className="flex items-center gap-1">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {dates}
            </time>
          )}
          {location && (
            <span className="flex items-center gap-1">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </span>
          )}
        </div>
      </div>

      {description && description.length > 0 && (
        <ul className="space-y-2 mb-4">
          {description.map((desc, idx) => {
            const text =
              typeof desc === "string"
                ? desc.replace("➾", "").trim()
                : desc.text;
            const link = typeof desc === "string" ? null : desc.link;
            return (
              <li
                key={idx}
                className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-3"
              >
                <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                  ▸
                </span>
                <span className="flex-1">
                  {text}
                  {link && (
                    <>
                      {" — "}
                      <a
                        href={link.url}
                        {...(link.url.startsWith("#")
                          ? {}
                          : {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            })}
                        className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg
                          className="w-3.5 h-3.5"
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
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      {skills && skills.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
            Technologies:
          </p>
          <div className="flex flex-row flex-wrap justify-start gap-2">
            {skills.map((skill, idx) => (
              <Badge key={idx} title={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
