import Image from "next/image";
import { DATA } from "../data/resume";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
            <Image
              className="relative rounded-full border-4 border-white shadow-2xl"
              src="/me.jpg"
              alt={`${DATA.firstName} ${DATA.lastName}, Lead Front End Engineer`}
              width={200}
              height={200}
              sizes="200px"
              quality={85}
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {DATA.firstName}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
          Lead Front End Engineer
        </p>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          {DATA.presentation}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${DATA.contact.email}?subject=${encodeURIComponent("Let's work together")}`}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href={DATA.contact.social.Resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            View Resume
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-sm text-gray-500">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">14+</div>
            <div>Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">8+</div>
            <div>Years React/TS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">Remote</div>
            <div>Based in France</div>
          </div>
        </div>
      </div>
    </section>
  );
};
