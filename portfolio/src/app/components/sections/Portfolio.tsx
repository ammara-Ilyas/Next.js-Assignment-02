"use client";
import React from "react";
import img from "../../assets/portfolio/card-02.png";
import { portfolioData } from "../shared/Data";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center h-full mb-96 ">
      <div className="bg-rose-300 flex pt-10 items-center w-full h-72 flex-col  ">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="pt-4 w-1/2 mx-auto text-center">
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </p>
        <div className="flex flex-wrap gap-16 justify-center pt-10 w-full ">
          {portfolioData &&
            portfolioData.map((item, i) => (
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image className="w-full" src={item.img} alt={item.heading} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl my-2">{item.heading}</div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-700 text-base">{item.des}</p>
                    <span className=" rounded-full bg-red-600 p-2 text-xl text-white">
                      <MdArrowOutward />
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
