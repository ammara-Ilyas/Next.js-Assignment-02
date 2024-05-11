"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../widgets/Button";
import Image from "next/image";
import Logo from "../../Logo.png";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isSmall, setIsSmall] = useState(false);
  return (
    <header className="bg-rose-200  font-bold grid grid-cols-9 items-center py-3 duration-75 sticky top-0 z-40">
      <div className="rounded-full hidden bg-red-500 absolute left-1/3 w-28 h-28 -top-3/4 z-100"></div>
      <div className="w-40 col-start-1 pl-10">
        <Image src={Logo} alt="logo" className="w-full" />
      </div>
      <nav
        className={`navLink col-start-4 col-end-10 row-start-0 md:block md:z-0 bg-red-400 bg-opacity-90 md:bg-transparent md:row-start-1  md:w-1/2  w-full md:col-start-4 md:gap-5  md:row-end-1 md:relative  absolute top-0 right-100 md:h-auto h-screen  ${
          isSmall ? "block right-0" : "hidden"
        }`}
      >
        <div className="pl-5 pt-5 text-3xl md:hidden">
          <RxCross2 onClick={() => setIsSmall(false)} />
        </div>
        <ul className="flex  md:justify-between  flex-col text-2xl md:text-lg w-full mt-24 md:m-0 gap-5 items-center h-full md:flex-row md:gap-2">
          <li className="w-full text-left md:w-auto">
            <Link href="#about">About</Link>
          </li>
          <li className="w-full text-left md:w-auto">
            <Link href="#services">Services</Link>
          </li>
          <li className="w-full text-left md:w-auto">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="w-full text-left md:w-auto">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="col-start-9 row-start-1 md:col-start-8 md:col-end-10 flex justify-center">
        <div className="hidden md:block">
          <Button heading="Hire me" />
        </div>
        <div className="block text-2xl md:hidden col-start-10 ml-8">
          <VscThreeBars onClick={() => setIsSmall(!isSmall)} />
        </div>
      </div>
    </header>
  );
}

export default Header;
