import React from "react";
import { skill } from "../shared/Data";
function Skillbar() {
  return (
    <div className="py-16 text-center pt-60">
      <h1 className="font-bold text-4xl ">Core Design Skills</h1>
      <p className="text-center w-2/3 mx-auto py-5">
        I excel in essential design skills, creating visually stunning and
        functional digital experiences. From UI design to UX research, my
        passion is to craft effective and memorable digital solutions.
      </p>
      <div className="flex gap-7 justify-center text-left  w-3/4 flex-wrap  mx-auto">
        {skill &&
          skill.map((item, i) => (
            <div className=" basis-2/5 " key={i}>
              <p>{item.name}</p>
              <div className="flex">
                <div className="bg-slate-300 h-3 rounded-md mt-2 w-5/6 justify-between items-center ">
                  <div
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
  );
}

export default Skillbar;
