import React from "react";
import Project from "./Project";

const content = {
    'pt-BR': [
        'O Nolt é um site com o objetivo de organizar todas as anotações e lembretes pessoais em somente um lugar. Ele foi feito com Next.js, e possui um sistema de autenticação e database feito com Supabase.',
        'O Pong do Morgs é uma releitura do jogo “Pong”, com a mecânica principal sendo os powerups (18 ao total). Eles são coletados pelos jogadores durante a partida e fazem cada rodada da partida única.',
        'Uma ferramenta de visualização de diferentes tipos de algoritmos usados na Ciência da Computação, para Sorting, Path Finding e Geração de Ruídos.',
        <>Confira outros repositórios <br className="responsivebr" />no <a href="https://github.com/schaldach" target='_blank' rel="noreferrer">meu Github</a>!</>,
    ],
    'en-US': [
        'Nolt is a website with the goal of organizing all your personal annotations in one place. He was made with Next.js, and has a authentication and database system made in Supabase.',
        'Pong do Morgs is a remake of the game “Pong”, with the main feature being the powerups (18 total). They are collected by the players during the match, and make each round unique on its own.',
        'A tool to visualize different types of algorithms used in Computer Science, including Sorting, Path Finding and Noise Generation.',
        <>Check out other repositories <br className="responsivebr" />on <a href="https://github.com/schaldach" target='_blank' rel="noreferrer">my Github</a>!</>,
    ]
}

function Projects({lang}) {
    return (
        <div className="pagesection">
            <a id='projects'></a>
            <div className="showprojects">
                <Project title='Nolt' description={content[lang][0]} tech={['JavaScript', 'Next', 'Supabase', 'React', 'CSS']} github='https://github.com/schaldach/nolt' url='https://nolt-opal.vercel.app/'
                    images={['/nolt1.png', '/nolt2.png', '/nolt3.png', '/nolt4.png', '/nolt5.png', '/nolt6.png']} />
                <Project title='Pong do Morgs' description={content[lang][1]} tech={['JavaScript', 'p5', 'CSS']} github='https://github.com/schaldach/pong-do-morgs' url='https://schaldach.github.io/pong-do-morgs'
                    images={['/pong1.png', '/pong2.png', '/pong3.png', '/pong4.png']} />
                <Project title='AlgoVoyager' description={content[lang][2]} tech={['JavaScript', 'Next', 'React', 'CSS']} github='https://github.com/schaldach/algorithmsvisualized' url='https://algorithmsvisualized.vercel.app/'
                    images={['/algo1.png', '/algo2.png', '/algo3.png', '/algo4.png']} />
                <div className="otherprojects last">&#128681; {content[lang][3]}</div>
            </div>
        </div>
    );
}

export default Projects;