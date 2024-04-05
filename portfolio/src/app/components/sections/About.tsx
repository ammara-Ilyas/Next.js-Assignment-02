import React from "react";
import { aboutData } from "../shared/Data";
import Image from "next/image";
import Wrapper from "../layout/Wrapper";
import half from "../../../../public/Images/Background.png";
function About() {
  return (
    <div className="  text-center items-center font-thin w-3/4 mx-auto  text-white relative ">
      <div className=" absolute   -bottom-10  right-1/2 ">
        <Image src={half} alt="background" />
      </div>
      <h1 className="font-semibold text-3xl ">About Me</h1>
      <p className=" p-4 text-center w-5/6 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        maiores soluta! Non quis consequuntur magnam dignissimos dolores qui
        assumenda, sunt quae dolorum tempora earum dolor reiciendis sapiente
        quasi vero, veritatis ducimus quidem. Facere ipsum alias quos delectus
        laboriosam sequi.
      </p>
      <div className="flex   mt-4 flex-wrap justify-between px-4 w-full mx-auto text-center z-0">
        {aboutData &&
          aboutData.map((item, i) => (
            <div className=" px-4 basis-1/46" key={i}>
              <p className="text-4xl font-bold text-rose-200">{item.num}+</p>
              <p className="mt-3 font-semibold">{item.heading}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default About;
