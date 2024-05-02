"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaStaylinked } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="relative border-2 border-blue-600">
      <nav className="flex items-center justify-between flex-wrap p-6 px-9">
        <div className="flex text-2xl justify-center items-center font-bold ">
          Xplore
          <FaStaylinked className="text-5xl" />
          kill
        </div>
        <div className="border-4 border-white">
          <div className="hover:bg-gray-300 hover:text-red-700 p-1 rounded-full md:hidden">
            <IoReorderThree
              className="cursor-pointer  text-3xl md:hidden"
              onClick={toggleMenu}
            />
          </div>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:block h-screen w-3/4 mr-auto md:h-full md:w-full bg-aqua   bg-opacity-50 absolute top-0 right-0`}
          >
            {/* Responsive bar open and close */}
            <RxCross1
              className="cursor-pointer text-2xl md:hidden absolute top-4 right-4"
              onClick={toggleMenu}
            />
            <ul className="flex flex-col md:flex-row md:h-full items-center justify-end  h-screen uppercase text-center border-2 border-black md:text-left">
              <li>
                <Link href="/home" className="block px-4 py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/course" className="block px-4 py-2">
                  Course
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block px-4 py-2">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="block px-4 py-2">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block px-4 py-2">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
