import {
  Navigation,
  Hero,
  SkillsSection,
  ExperienceSection,
  CaseStudySection,
  ContactSection,
} from "./components";

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SkillsSection />
        <ExperienceSection />
        <CaseStudySection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
