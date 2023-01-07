import Image from "next/image";
import Pfp from '../public/fotoperfil.jpg'

function About() {
    return (
    <div className="pagesection">
      <a id='about'></a>
      <div className="about">
        <div>
          <div className="description">&#128073; Me chamo Gabriel Schaldach Morgado, tenho 18 anos e atualmente sou formado no Ensino Médio e estou cursando Ciência da Computação na Univali em Itajaí. </div>
          <div className="description">&#128073; A linguagem que eu sou mais experiente e confortável é JavaScript, principalmente no <span>Frontend</span> de sites, usando Next e React como frameworks. </div>
          <div className="description">&#128073; Tenho um pouco de experiência também no <span>Backend</span>, onde já utilizei a plataforma Supabase e aprendi alguns conceitos fundamentais sobre databases, e Python, no processamento de dados e imagens.</div>
        </div>
        <div className="pfpwrapper">
          <div className="pfpborder"></div>
          <Image src={Pfp} width='300' height='300' layout="fixed"></Image>
        </div>
      </div>
    </div>
    );
}

export default About;