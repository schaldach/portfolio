function Landing() {
  return (
    <div className="pagesection homesection">
      <div className="navbar">
        <div className="menuitem"><a href="#">Home</a></div>
        <div><a href="#about">Sobre Mim</a></div>
        <div><a href="#projects">Projetos</a></div>
        <div><a href="#contact">Contato</a></div>
        <a className="resume" href="./curriculo.pdf" download>Meu currículo
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </a>
        <img src="./cool-background.png" className="background-img"/>
      </div>
      <div className="title">Olá, eu sou <br className="responsivebr" /><span>Gabriel Morgado</span><br /> e este é o meu<br className="responsivebr" /> portfólio<br className="pcbr" /> como  <br className="responsivebr" /><span>desenvolvedor web</span>.</div>
    </div>
  );
}

export default Landing;