import AboutMe from "../../components/AboutMe/AboutMe";
import TechStack from "../../components/TechStack/TechStack";

export default function About() {
  return (
    <section
      id="about-me"
      className="flex flex-col gap-[5rem] items-center justify-center py-[7rem]"
    >
      <AboutMe />
      <TechStack />
    </section>
  );
}
