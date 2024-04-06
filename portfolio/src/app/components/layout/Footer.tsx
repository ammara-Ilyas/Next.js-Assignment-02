import Link from "next/link";
import Image from "next/image";
import Icon from "../widgets/Icon";
import Logo from "../../assets/portfolio/Logo.png";
import Wrapper from "./Wrapper";
function Footer() {
  return (
    <div className="bg-slate-900 w-full py-16  text-center">
      <div className="flex flex-col sm:flex-row justify-between  sm:w-10/12 w-1/2 mx-auto pb-8 gap-4  text-white items-center ">
        <ul className="flex  font-semibold justify-evenly w-3/4 sm:1/3  text-xl text-white">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
        </ul>
        <div className="text-xl text-white sm:w-1/3 w-32">
          <Image src={Logo} alt="logo" />
        </div>
        <ul className="flex  font-semibold justify-evenly w-3/4 sm:1/3  text-xl text-white">
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <p className=" text-white ">Follow me on social media:</p>
      <Icon />
    </div>
  );
}

export default Footer;
