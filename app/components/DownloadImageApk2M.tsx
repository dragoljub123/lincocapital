// components/PopupImages.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import trustpilotlogo from "@/app/images/trustpilotcrni.svg";

const DownladImageApk2M = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className=" md:hidden">
      <div
        className="flex-col justify-center mt-5 px-5"
        onClick={handleImageClick}
      >
        <div className=" mx-auto  ">
          <h2 className="text-[#2c2937] text-2xl font-semibold text-center">
            Trade on Mobile
          </h2>
          <p className=" text-sm pt-3 text-center text-gray-600">
            Access the CFD market anytime, anywhere with our mobile app and
            enjoy lightning-fast trading infrastructure, top-tier order
            execution, and deep liquidity.
          </p>
          <p className="text-gray-600 text-sm pt-1 text-center">
            Available on iOS and Android devices.
          </p>
          <div className="flex justify-center p-2 ">
            <Image src={trustpilotlogo} alt="slika" className="w-[70px]  " />
          </div>
        </div>

        <div className=" px-5">
          <img
            src="/2telefona.png"
            alt="Velika slika"
            className="w-full h-auto object-cover "
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 text-sm text-center">
            Sign in with mobile
            <span className="font-semibold"> CapitalRevo</span> Trading App
          </p>

          <img src="/gpAppstore.png" alt="Slika" className="w-[55%] h-auto" />
          <img src="/barkod.png" alt="Slika" className="w-1/3 h-auto" />
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

export default DownladImageApk2M;
