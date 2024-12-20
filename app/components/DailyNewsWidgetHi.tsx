"use client";

import React, { useEffect } from "react";

const DailyNewsWidgetHindi = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.dyntube.com/v1.0/dyntube.js";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="pt-5 pb-5 flex-row justify-center items-center">
        <h2 className="text-[#00dbfe] text-center text-2xl lg:text-4xl font-black px-5 md:mt-6 md:px-0">
          <span className="underline underline-offset-[7px] md:underline-offset-[10px]">
            दैनिक समाचार
          </span>{" "}
          वित्त के सबसे बड़े ट्रेंड्स को कवर करते हुए!
        </h2>
      </div>
      <div className="flex justify-center pb-10">
        <div
          className="w-full md:max-w-[1200px] border-[#00dbfe] border-[6px] rounded-xl"
          data-dyntube-key="pu9SNuAXEmJyohdrOMQXQ"
        ></div>
      </div>
    </div>
  );
};

export default DailyNewsWidgetHindi;
