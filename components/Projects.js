import Image from "next/image";
import React, {useState} from "react";
import Project from "./Project";
import NoltLogo from '../public/noltlogo.png'
import PongLogo from '../public/ponglogo.png'
import NewtonLogo from '../public/newtonlogo.png'

function Projects() {
    return (
    <div className="pagesection">
        <a id='projects'></a>
        <div className="showprojects">
            <Project title='Nolt' description='O Nolt é um site com o objetivo de organizar todas as anotações e lembretes pessoais em somente um lugar. Ele possui um sistema de autenticação e armazenamento de dados com Supabase, e o Frontend com Next.js.' tech='JavaScript | Next.js | Supabase | React.js | CSS' github='https://github.com/schaldach/nolt' url='https://nolt-opal.vercel.app/' 
            images={['/noltlogo.png','/ponglogo.png','/newtonlogo.png']}/>
            <Project title='Pong do Morgs' description='O Pong do Morgs é uma releitura do jogo Pong, com a principal mecânica única de powerups &#40;18 ao total&#41;. Eles são coletados pelos jogadores durante a partida e fazem cada rodada da partida única.' tech='JavaScript | p5.js | CSS' github='https://github.com/schaldach/schaldach.github.io' url='https://schaldach.github.io/' 
            images={['/noltlogo.png','/ponglogo.png','/newtonlogo.png']}/>
            <Project title='Visualização de Algoritmos' description='Uma ferramenta de visualização de diferentes tipos de algoritmos usados na Ciência da Computação, para Sorting, Path Finding e Geração de Ruídos.' tech='JavaScript | Next.js | React.js | CSS' github='https://github.com/schaldach/algorithmsvisualized' url='https://algorithmsvisualized.vercel.app/' 
            images={['/noltlogo.png','/ponglogo.png','/newtonlogo.png']}/>
            
            <div className="otherprojects last centeralign">
                <div>&#128681; Confira outros repositórios no <a href="https://github.com/schaldach" target='_blank' rel="noreferrer">meu Github</a>!</div>
            </div>
        </div>
    </div>
    );
}

export default Projects;