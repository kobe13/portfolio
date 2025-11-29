import { DATA } from "../data/resume";
import { WorkCard } from "./work-card";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A track record of leading frontend development at innovative
            companies
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 hidden md:block" />

          <ul className="space-y-12">
            {DATA.work.map((work) => (
              <li key={work.id} className="relative">
                <div className="md:flex md:items-start gap-8">
                  <div className="hidden md:block absolute left-6 w-4 h-4 bg-white border-4 border-blue-600 rounded-full -mt-1" />
                  <div className="md:ml-16 bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
                    <WorkCard
                      title={work.title}
                      companyDescription={work.companyDescription}
                      description={work.description}
                      location={work.location}
                      dates={work.dates}
                      skills={work.skills}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
