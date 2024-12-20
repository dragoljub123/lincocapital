import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  listItems: string[];
}
const Paketi2: React.FC<CardProps> = ({
  title,
  imageSrc,
  description,
  listItems,
}) => {
  return (
    <div className="flex flex-col justify-between pt-5 pakets2  mb-10  ">
      <div className="flex justify-center items-center  plan-name">
        <img
          src={imageSrc}
          alt="Card"
          style={{ width: "auto", height: "auto", padding: "3px" }}
        />
        <h4 className="rounded-lg plan-name-name text-lg font-semibold text-[#2c2937]  ">
          {title}
        </h4>
      </div>

      <div className="paketsdesc flex-grow ">
        <p className=" pb-2 text-center text-[#2c2937] text-lg  font-bold border-b-[1px] border-gray-600 ">
          {description}
        </p>
        <ul className=" border-b-[1px] border-gray-600 mb-7 text-gray-700 text-xs md:text-sm">
          {listItems.map((item, index) => (
            <li
              className="pakets-list-item p-1 flex items-center bg-no-repeat bg-left custom-li2"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footerb3 mt-auto">
        <Link
          className="bg-[#b22028]  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] w-[320px] h-[48px] p-[8px_18px] rounded text-white flex items-center justify-center transition-colors duration-300 hover:bg-red-900"
          href="https://platform.capitalrevo.com/login"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};
export default Paketi2;
