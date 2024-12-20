// components/PopupImages.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DownladImageApkHi = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="flex justify-center mt-10" onClick={handleImageClick}>
        <Image
          src="/hindiTradeonMob.png"
          alt="trade"
          width={1200}
          height={599}
          style={{ objectFit: "cover" }}
        />
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

export default DownladImageApkHi;
