import Image from "next/image";
import { Badge, WorkCard } from "./components";
import { socialIcons } from "./constants";
import { DATA } from "./data/resume";

const Home = () => {
  return (
    <main>
      <section
        id="presentation"
        className="flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-b from-slate-400 to-slate-100"
      >
        <h1 className="flex flex-row items-center text-5xl text-white mb-8 font-bold tracking-tighter sm:text-6xl xl:text-6xl/none">
          Hi, I&apos;m {DATA.name}
          <Image
            className="relative flex overflow-hidden rounded-full ml-4"
            src="/me.jpg"
            alt="Bryan Nelson, Lead Front End Engineer"
            width={150}
            height={150}
            priority
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
            {socialIcons.LinkedIn}
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none rounded-full size-12"
            href={DATA.contact.social.GitHub.url}
          >
            {socialIcons.GitHub}
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none rounded-full size-12"
            href={DATA.contact.social.Resume.url}
          >
            {socialIcons.Resume}
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
            {DATA.work.map(
              ({ id, title, description, location, dates, skills }) => (
                <WorkCard
                  key={id}
                  title={title}
                  description={description}
                  location={location}
                  dates={dates}
                  skills={skills}
                />
              ),
            )}
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
                href={`mailto:${
                  DATA.contact.email
                }?subject=${encodeURIComponent("Contact from portfolio")}`}
              >
                email
              </a>{" "}
              and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
