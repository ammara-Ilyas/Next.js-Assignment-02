"use client";
import React from "react";
import { skill } from "../shared/Data";
import Wrapper from "../layout/Wrapper";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
function Skillbar() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Wrapper>
      <div className="py-16 text-center">
        <h1 className="font-bold text-4xl ">Core Design Skills</h1>
        <p className="text-center w-10/12 mx-auto py-5 md:w-8/12">
          I excel in essential design skills, creating visually stunning and
          functional digital experiences. From UI design to UX research, my
          passion is to craft effective and memorable digital solutions.
        </p>
        <div className="flex gap-7 justify-center text-left  w-3/4 sm:w-full md:w-11/12 lg:w-3/4 mx-auto flex-wrap  items-center">
          {skill &&
            skill.map((item, i) => (
              <div className=" basis-full mx-auto sm:basis-5/12 " key={i}>
                <p>{item.name}</p>
                <div className="flex">
                  <div className="bg-slate-300 overflow-hidden	 h-3 rounded-md mt-2 w-11/12 justify-between items-center ">
                    <div
                      data-aos="fade-right"
                      data-aos-delay=""
                      style={{ width: `${item.range}` }}
                      className="bg-black  h-3 text-white text-sm rounded-md"
                    ></div>{" "}
                  </div>
                  <span className="ml-2">{item.range}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Skillbar;
