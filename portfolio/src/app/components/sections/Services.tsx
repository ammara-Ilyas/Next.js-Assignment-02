"use client";
import React from "react";
import Image from "next/image";
import { servicesData } from "../shared/ServicesData";
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
      <div className="flex flex-wrap gap-3 justify-center border-2  w-5/6 border-red-600">
        {servicesData &&
          servicesData.map((item, i) => (
            <div key={i} className="basis-1/5 border-2 flex gap-5 flex-col ">
              <div className="text-red-400 text-7xl font-sarif">
                {item.icon}
              </div>
              <div className="text-left">
                <h2 className=" text-xl font-semibold py-2">{item.heading}</h2>
                <p>{item.des}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Services;
