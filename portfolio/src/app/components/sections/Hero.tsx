import React from "react";
import Image from "next/image";
import heroImg from "/public/hero-poster.png";
import Button from "../widgets/Button";
function Hero() {
  return (
    <section className="grid grid-cols-8 w-full bg-rose-300 gap-3 pt-7 ">
      <div className="  font-serif col-start-2 col-end-5 flex justify-evenly flex-col px-14">
        <p className="mt-5">UX Designer</p>
        <div className="text-3xl font-bold ">
          <h1 className="text-black mb-5">Hi There, I'm</h1>
          <h1 className="text-red-500">Sarah Jones</h1>
        </div>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse,
          maiores sed iure impedit numquam?
        </p>
        <div className="flex  items-center pb-6">
          <Button />
          <button className="mx-4 text-blacks py-2 px-7 border-black	 bg-white">
            Portfolio
          </button>
        </div>
      </div>
      <div className=" col-start-5 col-end-8">
        <Image src={heroImg} alt="hero section" height={487} width={687} />
      </div>
    </section>
  );
}

export default Hero;
