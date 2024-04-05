import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

type Service = {
  icon: JSX.Element;
  heading: string;
  des: string;
};

export const servicesData: Service[] = [
  {
    icon: <RiJavascriptFill />,
    heading: "Design",
    des: "I specialize in web development and design, creating visually appealing, user-friendly digital experiences",
  },
  {
    icon: <RiReactjsLine />,
    heading: "Branding",
    des: "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
  },
  {
    icon: <TbBrandNextjs />,
    heading: "UX Research",
    des: "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
  },
  {
    icon: <FaNodeJs />,
    heading: "Usability Testing",
    des: "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
  },
];
