import Image from "next/image";
import Pfp from '../public/fotoperfil.jpg'

const content = {
  'pt-BR': [
    'Me chamo Gabriel Schaldach Morgado, tenho 18 anos e atualmente estou cursando bacharelado em Ciência da Computação na UNIVALI Itajaí, e trabalhando como desenvolvedor Web Full Stack.',
    <> A linguagem que eu sou mais experiente e confortável é JavaScript, principalmente no <span>Frontend</span>, usando Next e React como frameworks para fazer sites interativos e responsivos.</>,
    <> Tenho experiência também no <span>Backend</span>, onde já aprendi alguns conceitos fundamentais sobre databases, utilizando a plataforma Supabase para bases de dados PostgreSQL, e já utilizei Firebase, e estou aprendendo MongoDB com Prisma, para bases de dados NoSQL.</>
  ],
  'en-US': [
    "My name is Gabriel Schaldach Morgado, I am 18 years old and currently I am pursuing a Bachelor's degree in Computer Science at UNIVALI Itajaí, and working as a Full Stack Web developer.",
    <> The language I am most experienced and comfortable in is Javascript, especially in the <span>Frontend</span>, using Next and React as frameworks to make interactive and responsive websites.</>,
    <> I also have experience on the <span>Backend</span>, where I learned fundamental concepts about databases, using the Supabase platform to work with PostgreSQL databases, and I have already used Firebase, and I am learning MongoDB with Prisma, to work with NoSQL databases.</>
  ]
}

function About({lang}) {
    return (
    <div className="pagesection">
      <a id='about'></a>
      <div className="about">
        <div>
          <div className="description">&#128073; {content[lang][0]} </div>
          <div className="description">&#128073; {content[lang][1]} </div>
          <div className="description">&#128073; {content[lang][2]}</div>
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