"use client";
import React from "react";
import Link from "next/link";
import { contactIcons } from "../shared/IconsData";
function Icon() {
  return (
    <>
      <ul className="flex text-white  justify-between items-center text-xl mt-3  w-40 mx-auto">
        {contactIcons &&
          contactIcons.map((item, i) => (
            <li key={i}>
              <Link href={item.link} target="_blank">
                {item.icon}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Icon;
