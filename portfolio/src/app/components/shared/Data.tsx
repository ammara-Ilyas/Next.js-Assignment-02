// import Design from "/public/Images/Vector.png";
import Design from "../../assets/Images/Vectors.svg";

type about = {
  heading: string;
  num: number;
};
export const aboutData: about[] = [
  {
    heading: "Projects Done",
    num: 502,
  },
  {
    heading: "Years of Experience",
    num: 10,
  },
  {
    heading: "Clients Served",
    num: 273,
  },
];
type service = {};
export const servicesData = [
  {
    img: "../../assets/Images/Vectors.svg",
    heading: "Design",
    des: "I specialize in web development and design, creating visually appealing, user-friendly digital experiences",
  },
  {
    img: `${Design}`,
    heading: "Branding",
    des: "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
  },
  {
    img: "../../../../public/Images/Vector.png",
    heading: "UX Research",
    des: "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
  },
  {
    img: "../../../../public/Images/Vector.png",
    heading: "Usability Testing",
    des: "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
  },
];
export const contactData = [{}];

interface skill {
  name: string;
  range: string;
}
export const skill = [
  {
    name: "HTML",
    range: "90%",
  },
  {
    name: "CSS",
    range: "92%",
  },
  {
    name: "Javascript",
    range: "85%",
  },
  {
    name: "Typescript",
    range: "70%",
  },
  {
    name: "Java",
    range: "65%",
  },
  {
    name: "Php",
    range: "60%",
  },
];
