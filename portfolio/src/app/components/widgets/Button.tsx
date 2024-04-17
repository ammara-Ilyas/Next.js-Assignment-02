import React from "react";
interface buttonProp {
  heading: string;
}
const Button: React.FC<buttonProp> = ({ heading }) => {
  return (
    <div>
      <button className=" py-2 px-7 bg-black text-white ">{heading}</button>
    </div>
  );
};

export default Button;
