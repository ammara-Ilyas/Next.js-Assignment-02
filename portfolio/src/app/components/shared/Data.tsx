import { StaticImageData } from "next/image";
import design from "../../assets/Images/Vectors.svg";
import brand from "../../assets/Images/branding.png";
import UX from "../../assets/Images/UX.png";
import usability from "../../assets/Images/usability.png";
////portfolio
// import card1 from "../../assets/portfolio/card-01.png";
import card2 from "../../assets/portfolio/card-02.png";
import card3 from "../../assets/portfolio/card-03.png";
import card4 from "../../assets/portfolio/card-04.png";
import card5 from "../../assets/portfolio/card-05.png";
import card6 from "../../assets/portfolio/card-06.png";
import card1 from "../../assets/portfolio/card-01.png";
///////images for blog
import Typography from "../../assets/portfolio/Typography.png";
import psycology from "../../assets/portfolio/psycology.png";
import bootsing from "../../assets/portfolio/bootsing.png";
type about = {
  heading: string;
  num: number;
};
/////about data
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
interface service {
  img: StaticImageData;
  heading: string;
  des: string;
}
///////Services data
export const servicesData: service[] = [
  {
    img: design,
    heading: "Design",
    des: "I specialize in web development and design, creating visually appealing, user-friendly digital experiences",
  },
  {
    img: brand,
    heading: "Branding",
    des: "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
  },
  {
    img: UX,
    heading: "UX Research",
    des: "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
  },
  {
    img: usability,
    heading: "Usability Testing",
    des: "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
  },
];
/////////portfolio data
export const portfolioData: service[] = [
  {
    img: card1,
    heading: "Educational Platform",
    des: "Web Design / Usability Testing",
  },
  {
    img: card2,
    heading: "Travel App Design",
    des: "UX Research / App Design ",
  },
  {
    img: card3,
    heading: "Personal Page ",
    des: "Web Design ",
  },
  {
    img: card4,
    heading: "Furniture Mobile App",
    des: "App Design",
  },
  {
    img: card5,
    heading: "Coffee House Landing Page",
    des: "Web Design / UI research",
  },
  {
    img: card6,
    heading: "Home Services Page",
    des: "Web Design / Marketing",
  },
];

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
///////blog
interface blog {
  img: StaticImageData;
  date: string;
  heading: string;
  description: string;
}
export const blogData: blog[] = [
  {
    img: Typography,
    date: "August 15, 2023 / UX",
    heading: "Typography Tips for Design Success",
    description:
      "Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs.",
  },
  {
    img: psycology,
    date: "August 15, 2023 / UX",
    heading: "Color Psychology in UX Physocology",
    description:
      "Explore how color choices impact user emotions and decision-making in UX design.",
  },
  {
    img: bootsing,
    date: "August 15, 2023 / UX",
    heading: "Boosting UX with Microinteractions",
    description:
      "Discover the power of microinteractions in enhancing user experience and engagement.",
  },
];
