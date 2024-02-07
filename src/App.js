import React from "react";
import './App.css';
import { ThemeContext } from "./context/theme";
import { About } from "./components/about/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Header } from "./components/header/Header";
import { Github } from "./components/about/Github";
import { Projects } from "./components/project/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        <Github />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
