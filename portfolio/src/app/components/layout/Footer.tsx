import Link from "next/link";
import Image from "next/image";
import Icon from "../widgets/Icon";
import Logo from "../../assets/portfolio/Logo.png";

function Footer() {
  return (
    <div className="bg-slate-900 w-full py-16  text-center">
      <div className="flex  justify-between w-1/2 mx-auto pb-8  text-white items-center ">
        <ul className="flex font-semibold justify-evenly basis-1/4 text-base text-white">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
        </ul>
        <div>
          <div className="text-xl text-white	">
            <Image src={Logo} alt="logo" />
          </div>
        </div>
        <ul className="flex basis-1/4 font-semibold justify-evenly text-base">
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
