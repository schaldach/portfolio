import { useState } from "react";
import ThreeCanvas from "./ThreeCanvas";

const content = {
  'pt-BR': [
    'Home',
    'Sobre Mim',
    'Experiência profissional',
    'Projetos pessoais',
    'Contato',
    'Meu currículo',
    <>Olá!<br /> Eu sou <br className="responsivebr" /><span>Gabriel Morgado</span><br /> e este é o meu<br className="responsivebr" /> portfólio<br className="pcbr" /> como  <br className="responsivebr" /><span>desenvolvedor web</span>.</>,
    './curriculo.pdf'
  ],
  'en-US': [
    'Home',
    'About me',
    'Professional experience',
    'Side projects',
    'Contact',
    'My resume',
    <>Hello!<br /> I am <br className="responsivebr" /><span>Gabriel Morgado</span><br /> and this is my<br className="responsivebr" /> portfolio<br className="pcbr" /> as a <br className="responsivebr" /><span>web developer</span>.</>,
    './resume.pdf'
  ]
}

function Landing({ lang }) {
  const [animationEnabled, setAnimation] = useState(true)

  return (
    <div className="pagesection homesection">
      <div className="navbar">
        <div className="menuitem"><a href="#">{content[lang][0]}</a></div>
        <div><a href="#about">{content[lang][1]}</a></div>
        <div><a href="#professional">{content[lang][2]}</a></div>
        <div><a href="#projects">{content[lang][3]}</a></div>
        <div><a href="#contact">{content[lang][4]}</a></div>
        <a className="resume" href={content[lang][7]} download>{content[lang][5]}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </a>
      </div>
      <div className="title">{content[lang][6]}</div>
      <div className='scene-wrapper'>
        <ThreeCanvas animationEnabled={animationEnabled} />
        <div className="landing-buttons">
          <button onClick={() => { setAnimation(!animationEnabled) }}>
            {
              animationEnabled ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;