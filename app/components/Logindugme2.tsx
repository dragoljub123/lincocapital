import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Logindugme2: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Link href="https://platform.capitalrevo.com/login">
      <button
        className="text-black md:text-[12px] xl:text-[14px] box-border flex flex-row justify-center items-center w-full py-2.5 px-2 lg:px-5 gap-3  xl:w-24 h-9 border border-gray-800 rounded hover:bg-red-900 transition duration-300 "
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Logindugme2;
