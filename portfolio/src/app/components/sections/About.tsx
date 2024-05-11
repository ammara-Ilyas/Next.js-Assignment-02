import React from "react";
import { aboutData } from "../shared/Data";
import Image from "next/image";
import half from "../../../../public/Background.png";
import Wrapper from "../layout/Wrapper";
function About() {
  return (
    <Wrapper>
      <div className=" h-[40vh] text-center items-center font-thin w-full mx-auto  text-white relative ">
        <div className=" absolute   -bottom-10  right-1/2 z-0">
          <Image src={half} alt="background" />
        </div>
        <h1 className="font-semibold text-3xl ">About Me</h1>
        <p className=" p-4 text-center w-11/12 md:w-8/12  mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          maiores soluta! Non quis consequuntur magnam dignissimos dolores qui
          assumenda, sunt quae dolorum tempora earum dolor reiciendis sapiente
          quasi vero, veritatis ducimus quidem. Facere ipsum alias quos delectus
          laboriosam sequi.
        </p>
        <div className="flex  my-4 flex-wrap justify-between sm:justify-center sm:gap-6  px-4 w-full text-center z-30">
          {aboutData &&
            aboutData.map((item, i) => (
              <div className="  w-1/4 sm:1/3 " key={i}>
                <h2 className="text-6xl font-bold text-rose-200">
                  {item.num}+
                </h2>
                <p className="text-2xl mt-3 font-semibold">{item.heading}</p>
              </div>
            ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
