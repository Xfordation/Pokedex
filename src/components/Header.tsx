import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <header className="dark dark:bg-slate-800 py-4">
      <nav className="container mx-auto flex justify-center items-center">
        <Image src={Logo} width={250} height={250} alt="Logo" priority />
      </nav>
    </header>
  );
};

export default Header;
