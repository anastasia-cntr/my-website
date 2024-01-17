import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";
import About from "../pages/About/About";
import sceneImage from "../assets/imgs/scene.png";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Footer from "../pages/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="relative z-[1] flex justify-center items-center flex-col bg-gray-900">
        <img
          className="hidden xl:block absolute z-[2] top-0 left-0"
          src={sceneImage}
        ></img>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
