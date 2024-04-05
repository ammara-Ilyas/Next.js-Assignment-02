import React from "react";
import Link from "next/link";
import Button from "../widgets/Button";
import Image from "next/image";
import Logo from "../../Logo.png";
function Header() {
  return (
    <>
      <header className="bg-rose-300 relative font-semibold flex justify-between px-28 items-center border-red-950 py-3 duration-75		">
        <div className="rounded-full bg-red-500 absolute left-1/3 w-28 h-28 -top-3/4 z-100"></div>

        <div className="text-xl	">
          <Image src={Logo} alt="logo" />
        </div>
        <nav className="w-1/2 z-0">
          <ul className="flex  justify-evenly text-base	">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="">
          <Button />
        </div>
      </header>
    </>
  );
}

export default Header;
