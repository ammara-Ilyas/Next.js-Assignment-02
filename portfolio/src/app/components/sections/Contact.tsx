import React from "react";
import { addressIcon } from "../shared/IconsData";
import { contactIcons } from "../shared/IconsData";
import Link from "next/link";
import Wrapper from "../layout/Wrapper";
import Form from "../widgets/Form";
function Contact() {
  return (
    <Wrapper>
      <div className="relative text-center ">
        <div className="rounded-full bg-red-500 absolute top-2/4 -left-14 w-28 h-28  z-0"></div>
        <div className="flex gap-10  flex-col md:flex-row justify-center w-11/12  ml-3 ">
          <div className=" w-10/12 md:w-2/5 flex flex-col gap-4 text-left z-0">
            <div>
              <h1 className="text-4xl font-bold ">Get in Touch</h1>
              <p className="py-4">
                Have a question or a project in mind? I'd love to hear from you.
                Let's chat and make something amazing together.
              </p>
            </div>
            <ul className="flex  flex-col ">
              {addressIcon.map((item, i) => (
                <li
                  key={i}
                  className="flex text-xl items-center text-left py-2"
                >
                  {item.icon}{" "}
                  <address className="pl-2 text-base">{item.link}</address>
                </li>
              ))}
            </ul>
            <ul className="flex  w-1/3 justify-between  items-center text-base mt-3 ">
              {contactIcons &&
                contactIcons.map((item, i) => (
                  <li key={i} className=" bg-slate-50 p-1 rounded-full">
                    <Link href={item.link} target="_blank">
                      {item.icon}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <Form />
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
