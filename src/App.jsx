import Hero from "./layouts/Hero/Hero";
import Projects from "./layouts/Projects/Projects";
import Events from "./layouts/Events/Events";
import Contact from "./layouts/Contact/Contact";
import Footer from "./layouts/Footer/Footer";
import './App.css'

export default function App(){
  return (
    <>
      <Hero />
      <Projects />
      <Events />
      <Contact />
      <Footer />
    </>
  )
}