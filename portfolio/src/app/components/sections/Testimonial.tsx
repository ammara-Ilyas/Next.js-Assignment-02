import React from "react";
import Image from "next/image";
import background from "../../assets/portfolio/Background.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import profile from "../../assets/portfolio/testimonial.png";
import Wrapper from "../layout/Wrapper";
function Testimonial() {
  return (
    <Wrapper>
      <div className="flex justify-center items-center gap-8 flex-col relative ">
        <Image
          src={background}
          alt="red circle"
          className="absolute -top-10 left-1/2"
        />
        <h1 className="text-4xl font-bold z-0 pt-10 ">Testimonials</h1>
        <div className="grid grid-cols-12 place-items-center">
          <MdArrowBackIos className="text-3xl col-span-1 text-gray-800 lg:col-start-2" />
          <p className="col-start-3 col-end-11 text-center text-xl font-light lg:col-start-4 lg:col-end-10">
            Sara Jones's designs are both visually captivating and highly
            effective. She transformed our website, enhancing user engagement
            and conversions. Her attention to detail and creative approach are
            top-notch. Highly recommended!
          </p>
          <MdArrowForwardIos className="text-3xl col-start-12 lg:col-start-11  text-gray-800" />
        </div>
        <div>
          <figcaption className="flex items-center justify-center ">
            <Image
              className="rounded-full w-16 h-16"
              src={profile}
              alt="profile picture"
            />
            <div className=" font-medium dark:text-white  rtl:text-right ms-3">
              <h4 className="font-bold">
                John Smith /{" "}
                <span className="font-normal">CEO of XYZ Company</span>
              </h4>
            </div>
          </figcaption>
        </div>
      </div>
    </Wrapper>
  );
}

export default Testimonial;
