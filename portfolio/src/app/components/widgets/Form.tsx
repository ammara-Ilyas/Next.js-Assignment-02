import React from "react";
import Button from "./Button";
const Form = () => {
  return (
    <form className="  flex flex-col gap-5  w-10/12   md:w-1/2 lg:w-5/12 z-0">
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

      <div className="bg-slate-950 w-2/5 ">
        <Button heading="Send Message" />
      </div>
    </form>
  );
};

export default Form;
