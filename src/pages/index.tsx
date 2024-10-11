import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { DATA } from "../data/resume";
import { WorkCard } from "../components/work-card";
import { Badge } from "../components/badge";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section
        id="presentation"
        className="flex flex-col items-center justify-center text-center container px-4 py-10 bg-gradient-to-b from-slate-400 to-slate-100"
      >
        <h1 className="flex flex-row items-center text-5xl text-white mb-8 font-bold tracking-tighter sm:text-6xl xl:text-6xl/none">
          Hi, I'm {DATA.name}
          <StaticImage
            className="relative flex overflow-hidden rounded-full ml-4"
            src="../images/me.jpg"
            alt={"Bryan"}
            width={150}
            height={150}
            quality={90}
            placeholder="blurred"
          />
        </h1>
        <p className="text-lg font-bold text-gray-700 italic max-w-3xl">
          {DATA.presentation}
        </p>
        <div className="flex flex-row justify-center gap-4 mt-8">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none rounded-full size-12"
            href={DATA.contact.social.LinkedIn.url}
          >
            <DATA.contact.social.LinkedIn.icon />
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none rounded-full size-12"
            href={DATA.contact.social.GitHub.url}
          >
            <DATA.contact.social.GitHub.icon />
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none rounded-full size-12"
            href={DATA.contact.social.Resume.url}
          >
            <DATA.contact.social.Resume.icon />
          </a>
        </div>
      </section>

      <section id="skills">
        <div className="mt-10">
          <div className="space-y-2">
            <h2 className="text-3xl text-gray-700 font-bold tracking-tighter sm:text-4xl">
              skills
            </h2>
          </div>
        </div>
        <div className="space-y-12 w-full py-2">
          <div className="mt-2 flex flex-row flex-wrap justify-start gap-2">
            {DATA.skills.map((skill, idx) => (
              <Badge key={idx} title={skill}>
                {skill}
              </Badge>
            ))}
          </div>
          <ul className="mt-2 flex flex-row flex-wrap justify-start gap-2">
            {DATA.keySkills.map((skill, idx) => (
              <li
                className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                key={idx}
                title={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work">
        <div className="mt-10">
          <div className="space-y-2">
            <h2 className="text-3xl text-gray-700 font-bold tracking-tighter sm:text-4xl">
              latest work experience
            </h2>
          </div>
        </div>
        <div className="space-y-12 w-full py-2">
          <ul className="mb-4 divide-y divide-dashed border-l">
            {DATA.work.map((project) => (
              <WorkCard
                title={project.title}
                description={project.description}
                location={project.location}
                dates={project.dates}
                skills={project.skills}
              />
            ))}
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-start gap-4 px-4 md:px-6 w-full py-12">
          <div className="space-y-3">
            <h2 className="text-3xl text-gray-700 font-bold tracking-tighter sm:text-4xl">
              get in touch
            </h2>
            <p className="mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just send me an{" "}
              <a
                className="font-bold text-gray-800 hover:underline"
                href={`mailto:${DATA.contact.email}?subject=${encodeURIComponent("Contact from portfolio")}`}
              >
                email
              </a>{" "}
              and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <body className="min-h-screen bg-background font-sans antialiased max-w-6xl mx-auto py-12 sm:py-24 px-6" />
      <title>My portfolio</title>
      <meta name="description" content="Bryan's portfolio" />
    </>
  );
};
