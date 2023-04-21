const content = {
  'pt-BR': [
    'Home',
    'Sobre Mim',
    'Experiência profissional',
    'Projetos pessoais', 
    'Contato',
    'Meu currículo',
    <>Olá!<br/> Eu sou <br className="responsivebr" /><span>Gabriel Morgado</span><br /> e este é o meu<br className="responsivebr" /> portfólio<br className="pcbr" /> como  <br className="responsivebr" /><span>desenvolvedor web</span>.</>
  ],
  'en-US': [
    'Home',
    'About me',
    'Professional experience',
    'Side projects', 
    'Contact',
    'My resume',
    <>Hello!<br/> I am <br className="responsivebr" /><span>Gabriel Morgado</span><br /> and this is my<br className="responsivebr" /> portfolio<br className="pcbr" /> as a <br className="responsivebr" /><span>web developer</span>.</>
  ]
}

function Landing({lang}) {
  return (
    <div className="pagesection homesection">
      <div className="navbar">
        <div className="menuitem"><a href="#">{content[lang][0]}</a></div>
        <div><a href="#about">{content[lang][1]}</a></div>
        <div><a href="#professional">{content[lang][2]}</a></div>
        <div><a href="#projects">{content[lang][3]}</a></div>
        <div><a href="#contact">{content[lang][4]}</a></div>
        <a className="resume" href="./curriculo.pdf" download>{content[lang][5]}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </a>
        <img src="./cool-background.png" className="background-img"/>
      </div>
      <div className="title">{content[lang][6]}</div>
    </div>
  );
}

export default Landing;