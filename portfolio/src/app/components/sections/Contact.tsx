import React from "react";
import { addressIcon } from "../shared/IconsData";
import { contactIcons } from "../shared/IconsData";
import Link from "next/link";
import Wrapper from "../layout/Wrapper";
function Contact() {
  return (
    <Wrapper>
      <div className="relative text-center">
        <div className="rounded-full bg-red-500 absolute top-2/4 -left-14 w-28 h-28  z-0"></div>
        <div className="flex gap-10  flex-col md:flex-row justify-center w-11/12  ">
          <div className=" w-10/12 md:w-2/5 flex flex-col gap-4 text-left z-50">
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
          <form className="  flex flex-col gap-5  w-10/12   md:w-1/2 lg:w-5/12 z-50">
            <input
              type="text"
              name=""
              id=""
              className=" w-full px-5 py-3 border-none outline-none rounded-sm"
              placeholder="First Name"
            />
            <input
              type="email"
              name=""
              id=""
              className=" w-full px-5 py-3 rounded-sm border-none outline-none"
              placeholder="Email"
            />
            <input
              type="p"
              name=""
              id=""
              className=" w-full px-5 py-3 border-none outline-none rounded-sm"
              placeholder="Phone Number"
            />
            <textarea
              name=""
              id=""
              placeholder="Enter Message"
              cols={5}
              rows={5}
              className="px-5 py-3 border-none outline-none rounded-sm"
            ></textarea>
            <button className="bg-slate-950 text-white py-2 w-2/5 ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
