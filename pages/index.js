import Link from "next/link";

function LandingPage({changePage}) {
  return (
      <div className="pagesection homesection">
        <div className="custom-shape-divider-top-1662411529">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="home">
        <div className="title">Olá, eu sou <span>Gabriel Schaldach</span><br/> e este é o meu portfólio<br/> como <span>desenvolvedor web.</span></div>
        <Link href='/about'>
        <div className="homebutton" onClick={() => changePage('about')}>CONTINUAR
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
        </Link>
        </div>
      </div>
  );
}

export default LandingPage;