import React from "react";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { blogData } from "../shared/Data";
function Blog() {
  return (
    <div className=" bg-white text-center  py-20">
      <h1 className="text-3xl font-bold ">Design Insights and Inspiration</h1>
      <p className="py-10 w-3/5 mx-auto">
        Discover industry insights, expert tips, and design inspiration. Stay
        updated with the latest trends in web design and user experience.
      </p>
      <div>
        <div className="px-6 py-4 flex flex-wrap justify-center items-center gap-14 ">
          {blogData &&
            blogData.map((item, i) => (
              <div
                style={{ width: "27%" }}
                className="flex flex-col gap-3 shadow-lg  h-full"
                key={i}
              >
                <Image src={item.img} alt="des" className="w-full" />
                <div className="font-sans  text-left p-5 h-56 flex flex-col gap-2">
                  <p>{item.date}</p>
                  <h1 className="font-bold text-xl my-2 ">{item.heading}</h1>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
                <div className="flex text-sm items-center p-4 font-extrabold">
                  <button>Read More</button>
                  <span className="pl-1 text-xl">
                    <MdArrowForwardIos />
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
