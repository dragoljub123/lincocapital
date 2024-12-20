// components/PopupImages.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import trustpilotlogo from "@/app/images/trustpilotcrni.svg";

const DownladImageApk2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="hidden md:block">
      <div
        className="flex justify-center mt-10 pr-6 md:pr-10 xl:pr-24"
        onClick={handleImageClick}
      >
        <div className="max-w-[1200px] mx-auto flex justify-between  ">
          {/* Prvi div */}
          <div className="flex flex-col w-1/3 gap-1 mt-5 md:mt-0 md:gap-4 md:justify-center items-center">
            <p className="text-[#2c2937] text-xs md:text-lg  w-1/2 text-center">
              Sign in with mobile
              <span className="font-semibold"> CapitalRevo</span> Trading App
            </p>
            <img
              src="/gpAppstore.png"
              alt="Slika"
              className="w-[100%] md:w-[55%] h-auto object-cover"
            />
            <img
              src="/barkod.png"
              alt="Slika"
              className="w-[65%] md:w-1/3 h-auto object-cover"
            />
          </div>

          {/* Drugi div */}
          <div className="w-1/3 ">
            <img
              src="/2telefona.png"
              alt="Velika slika"
              className="w-full h-auto object-cover "
            />
          </div>

          {/* Treći div */}
          <div className="flex flex-col lg:mt-12 w-1/3 gap-1 pt-5 md:pt-0 md:gap-4 lg:gap-6  xl:pt-9">
            <h2 className="text-[#2c2937] text-lg md:text-4xl font-semibold ">
              Trade on Mobile
            </h2>
            <p className="text-[#2c2937] text-xs pt-1 md:pt-0 md:text-lg lg:p-2">
              Access the CFD market anytime, anywhere with our mobile app and
              enjoy lightning-fast trading infrastructure, top-tier order
              execution, and deep liquidity.
            </p>
            <p className="text-[#2c2937] text-xs pt-1 md:pt-0 md:text-lg lg:p-2">
              Available on iOS and Android devices.
            </p>
            <Image
              src={trustpilotlogo}
              alt="slika"
              className="w-[70px] mt-1 md:mt-0 md:w-[100px] lg:w-[130px] xl:w-[140px] h-auto lg:p-2 "
            />
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <p className="text-lg mb-4 text-gray-700">
              Currently, only the Android version is available.
            </p>
            <Link href="/Capital Revo.apk" download>
              <button className="bg-[#41b5c7] hover:bg-[#308390] text-white font-bold py-2 px-4 rounded">
                Download APK
              </button>
            </Link>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700 pl-5"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownladImageApk2;
