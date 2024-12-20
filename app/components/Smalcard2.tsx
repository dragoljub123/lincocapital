import React from "react";

interface props {
  imageSrc1: string;
  title: string;
  text: string;
}
const Smalcard2: React.FC<props> = (props) => {
  return (
    <div className=" ">
      <div className="flex justify-center md:justify-start items-center   ">
        <img
          src={props.imageSrc1}
          alt="like"
          className="pr-2 hidden md:block"
        />
        <h2 className="text-2xl  text-[#2c2937] font-semibold text-center   ">
          {props.title}
        </h2>
      </div>
      <div className=" p-4  text-gray-700">
        <p className="text-sm text-center md:text-base md:text-start lg:text-lg">
          {props.text}
        </p>
      </div>
    </div>
  );
};
export default Smalcard2;
