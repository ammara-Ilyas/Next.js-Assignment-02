"use client";
import React from "react";
import { portfolioData } from "../shared/Data";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center border-2 h-full border-blue-800">
      <div className="bg-rose-300 flex pt-10 items-center w-full h-72 flex-col  ">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="pt-4 w-1/2 mx-auto text-center">
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </p>
        <div className="flex flex-wrap w-full border-2 border-red-800 bg-blue-300">
          {portfolioData &&
            portfolioData.map((item, i) => (
              // <div
              //   key={i}
              //   className="w-1/4 px-10 border-4 border-yellow-400  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              // >
              //   <Image className=" w-full" src={item.img} alt={item.heading} />
              //   <div className="">
              //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              //       Noteworthy technology acquisitions 2021
              //     </h5>
              //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              //       Here are the biggest enterprise technology acquisitions of
              //       2021 so far, in reverse chronological order.
              //     </p>
              //   </div>
              // </div>
              <div className="w-1/4 border-2 border-x-green-500 px-10 flex flex-col gap-6">
                <Image src={item.img} alt={item.heading} className="w-full" />
                <h2 className="text-xl font-bold">{item.heading}</h2>

                <div className="flex justify-between  w-full items-center">
                  <p className="text-sm font-sans">{item.des}</p>{" "}
                  <span className=" rounded-full bg-red-600 p-2 text-white">
                    <MdArrowOutward />
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
