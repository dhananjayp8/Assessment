// import { Accordion } from "react-bootstrap";
import "./App.css";
import About from "./components/About";
import Industries from "./components/Industries";
import KnowMore from "./components/KnowMore";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Offerings from "./components/Offerings";
import Services from "./components/Services";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import Process from "./components/Process";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Vision from "./components/Vision";

const App = () => {
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const offeringsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const knowMoreRef = useRef(null);
  const visionRef = useRef(null);
  const scrollToSection = (section) => {
    if (section === "about")
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "mission")
      missionRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "offerings")
      offeringsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "services")
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "contact")
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToKnowMore = () => {
    if (knowMoreRef.current) {
      knowMoreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <Navbar />
      <About />
      <Offerings />
      <Accordion />
      <Process />
      <Industries />
      <Mission />
      <Vision />
      <Services />
      <KnowMore />
      <Footer /> */}
      {/* <Navbar scrollToSection={scrollToSection} />
      <About scrollToKnowMore={scrollToKnowMore} />

      <div ref={aboutRef}>
        <About />
      </div>
      

      <div ref={offeringsRef}>
        <Offerings />
      </div>
      <div ref={missionRef}>
        <Mission />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={knowMoreRef}>
        <KnowMore />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div> */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Attach ref directly to the About component */}
      <div ref={aboutRef}>
        <About scrollToKnowMore={scrollToKnowMore} />
      </div>

      <div ref={offeringsRef}>
        <Offerings />
      </div>
      <div ref={missionRef}>
        <Mission />
      </div>
      <div ref={visionRef}>
        <Vision />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={knowMoreRef}>
        <KnowMore />
      </div>
      <Process />
      <div ref={contactRef}>
        <Footer />
      </div>
    </>
  );
};

export default App;
