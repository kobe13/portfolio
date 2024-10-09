import React from "react";
import { Badge } from "./badge";

interface Props {
  title: string;
  description: string[];
  dates: string;
  location: string;
  skills: string[];
}

export function WorkCard({
  title,
  description,
  dates,
  location,
  skills,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        <ul className="my-2">
          {description &&
            description.map((desc, idx) => (
              <li
                key={idx}
                className="prose dark:prose-invert text-sm text-muted-foreground"
              >
                {desc}
              </li>
            ))}
        </ul>
      </div>
      {skills && (
        <div className="mt-2 flex flex-row flex-wrap justify-start gap-2">
          {skills?.map((skill, idx) => (
            <Badge key={idx} title={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </li>
  );
}
