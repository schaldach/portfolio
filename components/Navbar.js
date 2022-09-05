import React from "react";
import Link from "next/link";
import Image from "next/image";
import VercelLogo from '../public/vercellogo.png'

function Navbar({changePage, currentPage}) {
    return (
        <div className="navbar">
            <div className="vercel">Portfolio powered by<Image src={VercelLogo} layout='fixed' width='100' height='25'/></div>
            <Link href="/"><div onClick={() => changePage('home')} className={currentPage==='home'?'selectednav':''}>HOME</div></Link>
            <Link href="/about"><div onClick={() => changePage('about')} className={currentPage==='about'?'selectednav':''}>ABOUT</div></Link>
            <Link href="/projetos"><div onClick={() => changePage('projetos')} className={currentPage==='projetos'?'selectednav':''}>PROJECTS</div></Link>
            <Link href="/contato"><div onClick={() => changePage('contato')} className={currentPage==='contato'?'selectednav':''}>CONTACT</div></Link>
            <div></div>
        </div>
    );
}

export default Navbar;