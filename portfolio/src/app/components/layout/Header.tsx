"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../widgets/Button";
import Image from "next/image";
import Logo from "../../Logo.png";
import { VscThreeBars } from "react-icons/vsc";

function Header() {
  const [isSmall, setIsSmall] = useState(false);
  return (
    <div className="  ">
      <header className="bg-rose-300 relative  font-bold  grid grid-cols-9 px-10 items-center  py-3 duration-75		">
        <div className="rounded-full hidden bg-red-500 absolute left-1/3 w-28 h-28 -top-3/4 z-100"></div>
        <div className="w-32	col-start-1 ">
          <Image src={Logo} alt="logo" width={400} height={400} />
        </div>
        <nav
          style={{ display: isSmall ? "block" : "none" }}
          className=" col-start-3 col-end-9 row-start-2   md:row-start-1"
        >
          <ul className="flex flex-col justify-center gap-5 items-center  text-lg	md:flex-row md:gap-2">
            <li className="w-1/5  text-left">
              <Link href="#about">About</Link>
            </li>
            <li className="w-1/5  text-left">
              <Link href="#services">Services</Link>
            </li>
            <li className="w-1/5  text-left">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="w-1/5  text-left">
              <Link href="#testimonial">Testimonial</Link>
            </li>
            <li className="w-1/5  text-left">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="col-start-9 row-start-1   ">
          <div className=" hidden md:block">
            <Button />
          </div>
          <div className=" block text-2xl md:hidden">
            <VscThreeBars onClick={() => setIsSmall(!isSmall)} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
