"use client";
import React from "react";
import Image from "next/image";
import { servicesData } from "../shared/Data";
import des from "../../assets/Images/Vector.png";
function Services() {
  // console.log(servicesData);

  return (
    <div className=" flex flex-col justify-evenly items-center text-center  font-thin  mx-auto border-4 ">
      <h1 className="text-4xl font-semibold">Services</h1>
      <p className="text-black py-5 w-2/3 mx-auto">
        Explore my design services, from user interface and experience to
        prototyping and testing. Let's craft exceptional digital experiences
        together.
      </p>
      <div className="flex flex-wrap gap-5 justify-center w-5/6 ">
        {servicesData &&
          servicesData.map((item, i) => (
            <div key={i} className="basis-1/5  flex gap-5 flex-col ">
              <Image src={item.img} alt="work" />
              <div className="text-left">
                <h2 className=" text-xl font-semibold py-2">{item.heading}</h2>
                <p className="text-black pt-3 w-11/12 ">{item.des}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Services;
