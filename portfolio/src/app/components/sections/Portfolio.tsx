"use client";
import React from "react";
import img from "../../assets/portfolio/card-02.png";
import { portfolioData } from "../shared/Data";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Wrapper from "../layout/Wrapper";
function Portfolio() {
  return (
    <Wrapper>
      <div className="  flex flex-col justify-center items-center  ">
        <div>
          <div className="absolute bg-rose-200 flex pt-10 items-center w-full  flex-col  h-[350px]">
            <h1 className="text-4xl font-bold">My Portfolio</h1>
            <p className="pt-4 w-3/4 mx-auto text-center md:w-3/5">
              Explore my design services, from user interface and experience to
              prototyping and testing. Let's craft exceptional digital
              experiences together.
            </p>
          </div>
          <div className="relative mt-40 flex flex-wrap gap-16 justify-center pt-10 w-full mb-10">
            {portfolioData &&
              portfolioData.map((item, i) => (
                <div
                  className=" sm:basis-1/3 lg:basis-1/4  overflow-hidden"
                  key={i}
                >
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
    </Wrapper>
  );
}

export default Portfolio;
