import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const SignUpButton2: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Link href="https://platform.capitalrevo.com/register?demo=false">
      <button
        className="md:text-[12px] xl:text-[14px] flex justify-center items-center py-2.5 px-2 gap-3 w-full lg:w-16 xl:w-24 h-9 bg-[#2c2937] rounded text-white    hover:bg-red-900 transition duration-300 "
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default SignUpButton2;
