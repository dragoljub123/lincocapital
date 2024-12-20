// components/PopupImages.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PopupImages = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* Desktop Version */}
      <div
        className="hidden sm:hidden md:block lg:flex lg:justify-center lg:items-center"
        onClick={handleImageClick}
      >
        <Image
          src="/Strategygetintouch.png"
          alt="webinars1"
          width={1200}
          height={400}
          className="object-contain cursor-pointer"
        />
      </div>

      {/* Mobile Version */}
      <div
        className="bg-[#F4F4F4] flex justify-center items-center md:hidden lg:hidden"
        onClick={handleImageClick}
      >
        <Image
          src="/TradeOngo.png"
          alt="webinars"
          width={380}
          height={672}
          className="object-contain cursor-pointer"
        />
      </div>

      {/* Popup */}
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

export default PopupImages;
