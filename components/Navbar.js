import React from "react";
import Image from "next/image";
import VercelLogo from '../public/vercellogo.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="vercel"><Image src={VercelLogo} layout='fixed' width='100' height='25'/></div>
            <a href="#"><div>0. HOME</div></a>
            <a href="#about"><div>1. SOBRE MIM</div></a>
            <a href="#projects"><div>2. PROJETOS</div></a>
            <a href="#contact"><div>3. CONTATO</div></a>
        </div>
    );
}

export default Navbar;