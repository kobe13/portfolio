import {
  Navigation,
  Hero,
  SkillsSection,
  ExperienceSection,
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
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
