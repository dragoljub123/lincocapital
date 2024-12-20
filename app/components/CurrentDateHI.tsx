// components/CurrentDate.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CurrentDateHi: React.FC = () => {
  // Dobijanje današnjeg datuma u željenom formatu
  const today = new Date();
  const formattedDate = today.toLocaleDateString("hi-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex-row justify-center items-center">
      <div className="pt-5 pb-5 flex-row justify-center items-center">
        <h2 className="text-[#00dbfe] text-center text-2xl lg:text-4xl font-black px-5 md:mt-6 md:px-0">
          <span className="underline underline-offset-[7px] md:underline-offset-[10px]">
            दैनिक समाचार
          </span>{" "}
          जो वित्त में सबसे बड़े रुझानों को कवर करता है!
        </h2>
      </div>

      <div className="flex-row justify-center pb-10">
        <Link href="/hi/news">
          <Image
            src="/DailyNewsHI.png"
            alt="trade"
            width={1200}
            height={599}
            className="border-[#00dbfe] border-[6px] rounded-xl"
            style={{ objectFit: "cover" }}
          />

          <h2 className="mx-5 md:mx-10 xl:mx-0 text-lg font-black text-[#00dbfe]">
            कैपिटलरेवो दैनिक समाचार
          </h2>
          <p className="mx-5 md:mx-10 xl:mx-0 text-gray-500 text-sm">
            {formattedDate}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CurrentDateHi;
