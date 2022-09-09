import React from "react";
import Image from "next/image";
import VercelLogo from '../public/vercellogo.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="vercel">Portfolio powered by<Image src={VercelLogo} layout='fixed' width='100' height='25'/></div>
            <a href="#"><div>HOME</div></a>
            <a href="#about"><div>SOBRE MIM</div></a>
            <a href="#projects"><div>PROJETOS</div></a>
            <a href="#contact"><div>CONTATO</div></a>
        </div>
    );
}

export default Navbar;