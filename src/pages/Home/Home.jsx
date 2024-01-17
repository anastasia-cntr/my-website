import Intro from "../../components/Intro/Intro";

export default function Home() {
  return (
    <section
      id="home"
      className="flex justify-center items-center xl:justify-start w-full h-[100vh] bg-cover bg-no-repeat bg-gradient-to-b from-[#6943ff51]"
    >
      <Intro />
    </section>
  );
}
