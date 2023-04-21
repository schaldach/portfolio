import About from "../components/About";
import Contact from '../components/Contact'
import Projects from "../components/Projects";
import Landing from "../components/Landing";
import SectionBreak from "../components/SectionBreak";
import LangChange from "../components/LangChange";
import { useEffect, useState } from "react";
import Professional from "../components/Professional";
import { useRouter } from "next/router";
const titles = {
  'pt-BR': [
    'Sobre mim',
    'Experiência profissional',
    'Projetos pessoais',
    'Contato'
  ],
  'en-US': [
    'About me',
    'Professional Experience',
    'Side projects',
    'Contact'
  ]
}

function LandingPage() {
  const { locale } = useRouter();
  const [lang, setLang] = useState('pt-BR')
  useEffect(() => {
    setLang(locale)
  }, [])
  
  return (
    <>
      <LangChange lang={lang} setLang={setLang} />
      <Landing lang={lang} />
      <SectionBreak section={titles[lang][0]} />
      <About lang={lang} />
      <SectionBreak section={titles[lang][1]} />
      <Professional lang={lang}/>
      <SectionBreak section={titles[lang][2]} />
      <Projects lang={lang} />
      <SectionBreak section={titles[lang][3]} />
      <Contact lang={lang} />
    </>
  );
}

export default LandingPage;