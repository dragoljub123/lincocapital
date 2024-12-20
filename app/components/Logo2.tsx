import React from "react";
import Link from "next/link";
import Image from "next/image";
import glogo2 from "@/public/LC Rounded.svg";

interface Props {
  title?: string;
  className: string;
}

export const Logo2 = ({ title, className }: Props) => {
  return (
    <Link href={"/"}>
      <Image
        src={glogo2}
        alt="licocapital"
        className=" object-contain w-[250px] "
        priority
      />
    </Link>
  );
};
