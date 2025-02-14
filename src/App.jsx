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
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <About />
      <Offerings />
      <Accordion />
      <Process />
      <Industries />

      <Services />
      <KnowMore />
      <Footer />
    </>
  );
};

export default App;
