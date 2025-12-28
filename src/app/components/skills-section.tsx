import parse from "html-react-parser";
import { DATA } from "../data/resume";
import { Badge } from "./badge";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {parse(DATA.keySkills)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {DATA.skills.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} title={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
