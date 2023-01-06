import React, { useState } from "react";
import Project from "./Project";

function Projects() {
    return (
        <div className="pagesection">
            <a id='projects'></a>
            <div className="showprojects">
                <Project title='Nolt' description='O Nolt é um site com o objetivo de organizar todas as anotações e lembretes pessoais em somente um lugar. Ele possui um sistema de autenticação e armazenamento de dados com Supabase, e o Frontend com Next.js.' tech={['JavaScript', 'Next', 'Supabase', 'React', 'CSS']} github='https://github.com/schaldach/nolt' url='https://nolt-opal.vercel.app/'
                    images={['/nolt1.png', '/nolt2.png', '/nolt3.png', '/nolt4.png', '/nolt5.png', '/nolt6.png']} />
                <Project title='Pong do Morgs' description='O Pong do Morgs é uma releitura do jogo Pong, com a principal mecânica única de powerups &#40;18 ao total&#41;. Eles são coletados pelos jogadores durante a partida e fazem cada rodada da partida única.' tech={['JavaScript', 'p5', 'CSS']} github='https://github.com/schaldach/schaldach.github.io' url='https://schaldach.github.io/'
                    images={['/pong1.png', '/pong2.png', '/pong3.png', '/pong4.png']} />
                <Project title='Visualização de Algoritmos' description='Uma ferramenta de visualização de diferentes tipos de algoritmos usados na Ciência da Computação, para Sorting, Path Finding e Geração de Ruídos.' tech={['JavaScript', 'Next', 'React', 'CSS']} github='https://github.com/schaldach/algorithmsvisualized' url='https://algorithmsvisualized.vercel.app/'
                    images={['/algoritmo1.png', '/algoritmo2.png', '/algoritmo3.png', '/algoritmo4.png', '/algoritmo5.png', '/algoritmo6.png', '/algoritmo7.png']} />
                <Project title='Escala do Universo' description='Um site para a visualização da escala do universo, comparando lado a lado corpos de tamanhos próximos, começando com o planeta Terra até o Universo Observável.' tech={['JavaScript', 'Next', 'React', 'CSS']} github='https://github.com/schaldach/universescale' url='https://universescale.vercel.app/'
                    images={['/universo1.png', '/universo2.png', '/universo3.png', '/universo4.png', '/universo5.png']} />
                <div className="otherprojects last">
                    <div>&#128681; Confira outros repositórios no <a href="https://github.com/schaldach" target='_blank' rel="noreferrer">meu Github</a>!</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;