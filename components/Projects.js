import Image from "next/image";
import React, {useState} from "react";
import NoltLogo from '../public/noltlogo.png'
import PongLogo from '../public/ponglogo.png'
import NewtonLogo from '../public/newtonlogo.png'

function Projects() {
    return (
    <div className="pagesection">
        <a id='projects'></a>
        <div className="showprojects">
            <div>
                <div className="imgwrapper">
                    <Image layout="fixed" height='240' width='320' src={NoltLogo}></Image>
                </div>
                <div className="showtext">
                    <div className="showtitle">Nolt
                        <div className="showicons">
                            <a href="https://github.com/schaldach/nolt" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            <a href="https://nolt-opal.vercel.app/" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg></a>
                        </div>
                    </div>
                    <div className="showdescription">O Nolt é um site com o objetivo de organizar todas as anotações e lembretes pessoais em somente um lugar. Ele possui um sistema de autenticação e armazenamento de dados com Supabase, e o Frontend com Next.js.</div>
                    <div className="techused">JavaScript | Next.js | Supabase | React.js | CSS</div>
                </div>
            </div>
            <div>
                <div className="imgwrapper">
                    <Image layout="fixed" height='240' width='320' src={PongLogo}></Image>
                </div>
                <div className="showtext">
                    <div className="showtitle">Pong do Morgs
                        <div className="showicons">
                            <a href="https://github.com/schaldach/schaldach.github.io" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            <a href="https://schaldach.github.io/" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg></a>
                        </div>
                    </div>
                    <div className="showdescription">O Pong do Morgs é uma releitura do jogo Pong, com a principal mecânica única de powerups &#40;18 ao total&#41;. Eles são coletados pelos jogadores durante a partida e fazem cada rodada da partida única.</div>
                    <div className="techused">JavaScript | p5.js | CSS</div>
                </div>
            </div>
            <div className="last">
                <div className="imgwrapper">
                    <Image layout="fixed" height='240' width='320' src={NewtonLogo}></Image>
                </div>
                <div className="showtext">
                    <div className="showtitle">Visualização de Algoritmos
                        <div className="showicons">
                            <a href="https://github.com/schaldach/algorithmsvisualized" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            <a href="https://algorithmsvisualized.vercel.app/" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg></a>
                        </div>
                    </div>
                    <div className="showdescription">Uma ferramenta de visualização de diferentes tipos de algoritmos usados na Ciência da Computação, tanto para Sorting como para Path Finding.</div>
                    <div className="techused">JavaScript | Next.js | React.js | CSS</div>
                </div>
            </div>
            <div className="otherprojects last centeralign">
                <div>&#128681; Confira outros repositórios no <a href="https://github.com/schaldach" target='_blank' rel="noreferrer">meu Github</a>!</div>
            </div>
        </div>
        <div className="sectionbreak">
          <div>CONTATO</div>
        </div>
    </div>
    );
}

export default Projects;