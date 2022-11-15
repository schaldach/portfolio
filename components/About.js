import Image from "next/image";
import Pfp from '../public/fotoperfil.jpg'

function About() {
    return (
    <div className="pagesection">
      <a id='about'></a>
      <div className="about">
        <div>
          <div className="description">&#128073; Me chamo Gabriel Schaldach Morgado, tenho 18 anos e estou no terceiro ano do Ensino Médio. </div>
          <div className="description">&#128073; A linguagem que eu sou mais experiente e confortável é JavaScript, principalmente no <span>Frontend</span> de sites, usando Next/React como frameworks.</div>
          <div className="description">&#128073; Tenho um pouco de experiência em databases Postgres, no <span>Backend</span>, e Python, no <span>processamento de dados e imagens</span>.</div>
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