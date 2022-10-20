import About from "../components/About";
import Contact from '../components/Contact'
import Projects from "../components/Projects";
import Landing from "../components/Landing";
import SectionBreak from "../components/SectionBreak";

function LandingPage() {
  return (
  <>
    <Landing/>
    <SectionBreak section='Sobre mim'/>
    <About/>
    <SectionBreak section='Projetos'/>
    <Projects/>
    <SectionBreak section='Contato'/>
    <Contact/>
  </>
  );
}

export default LandingPage;