import Link from "next/link";

function LandingPage({changePage}) {
  return (
    <div>
      <div className="pagesection">
        <div className="home">
        <div className="title">Olá, eu sou <span>Gabriel Schaldach</span><br/> e este é o meu portfólio.</div>
        <Link href='/about'>
        <div className="homebutton" onClick={() => changePage('about')}>CONTINUAR
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;