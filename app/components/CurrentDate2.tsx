// components/CurrentDate.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CurrentDate2: React.FC = () => {
  // Dobijanje današnjeg datuma u željenom formatu
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex-row justify-center items-center   ">
      <div className=" bg-[#b22028] text-white flex-row justify-center items-center">
        <h2 className=" text-center text-2xl lg:text-4xl  px-5 md:mt-6 md:px-0">
          <span className="underline underline-offset-[7px]  md:underline-offset-[10px]">
            Daily News
          </span>{" "}
          covering the biggest trends in finance!
        </h2>
      </div>
      <div className="flex-row justify-center pt-10">
        <Link href="/news">
          <Image
            src="/DailyNewsEN.png"
            alt="trade"
            width={1200}
            height={599}
            className=""
            style={{ objectFit: "cover" }}
          />

          <h2 className="text-[#2c2937] mx-5 md:mx-10 xl:mx-0 md:text-lg font-black ">
            CapitalRevo Daily News
          </h2>
          <p className="mx-5 md:mx-10 xl:mx-0 text-gray-500 text-sm">
            {formattedDate}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CurrentDate2;
