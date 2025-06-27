import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import { TracingBeam } from "./components/ui/tracing-beam";

function App() {
  return (
    <main className="relative overflow-hidden ">
      <Navbar />
      <TracingBeam className="px-6">
        <section id="home" className="flex justify-center">
          <Home />
        </section>
        <section id="about" className="flex justify-center">
          <About />
        </section>
        <section id="projects" className="flex justify-center">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </TracingBeam>
      <Footer />
    </main>
  );
}

export default App;
