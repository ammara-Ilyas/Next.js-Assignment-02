"use client";
import React from "react";
import Image from "next/image";
import { servicesData } from "../shared/Data";
import Wrapper from "../layout/Wrapper";
function Services() {
  return (
    <Wrapper>
      <div className=" flex flex-col justify-evenly items-center text-center  mx-auto">
        <h1 className="text-4xl font-semibold">Services</h1>
        <p className="text-black py-5 w-10/12 mx-auto md:w-8/12">
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </p>
        <div className="flex  lg:gap-3 justify-between items-center  w-5/6 lg:11/12 sm:w-11/12 ">
          {servicesData &&
            servicesData.map((item, i) => (
              <div
                key={i}
                className="  flex gap-4 flex-col basis-4/5 lg:basis-56  justify-center items-center "
              >
                <Image src={item.img} alt="work" />
                <div className="">
                  <h2 className=" text-xl font-semibold py-2">
                    {item.heading}
                  </h2>
                  <p className="text-black pt-3 w-10/12 mx-auto ">{item.des}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
