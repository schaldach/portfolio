import React from "react";
import Link from "next/link";
import Image from "next/image";
import jsLogo from '../public/jslogo.png'

function Navbar({changePage, currentPage}) {
    return (
        <div className="navbar">
            <Link href="/"><div onClick={() => changePage('portfolio')} className={currentPage==='portfolio'?'selectednav':''}><div><Image src={jsLogo} layout='fixed' width='20' height='20'/>portfolio.js</div></div></Link>
            <Link href="/about"><div onClick={() => changePage('about')} className={currentPage==='about'?'selectednav':''}><div><Image src={jsLogo} layout='fixed' width='20' height='20'/>about.js</div></div></Link>
            <Link href="/projetos"><div onClick={() => changePage('projetos')} className={currentPage==='projetos'?'selectednav':''}><div><Image src={jsLogo} layout='fixed' width='20' height='20'/>projects.js</div></div></Link>
            <Link href="/contato"><div onClick={() => changePage('contato')} className={currentPage==='contato'?'selectednav':''}><div><Image src={jsLogo} layout='fixed' width='20' height='20'/>contact.js</div></div></Link>
        </div>
    );
}

export default Navbar;