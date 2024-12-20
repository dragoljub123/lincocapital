import React from "react";
import Image from "next/image";

interface Props {
  // make sure the interface is capitalized by convention
  imageSrc1: string;
  title: string;
  text: string;
  imageSrc2: string;
}

const AboutUsCard: React.FC<Props> = ({
  imageSrc1,
  title,
  text,
  imageSrc2,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
      {/* Leva strana - Slika, Naslov i Tekst */}
      <div className="lg:w-1/2 w-full p-4 space-y-4">
        <Image src={imageSrc1} alt="like" width={40} height={40} />
        <div className="text-center lg:text-left">
          <h2 className="text-xl lg:text-2xl font-black">{title}</h2>
        </div>
        <div className="pt-2 text-[#475467]  text-sm">
          <p>{text}</p>
        </div>
      </div>

      {/* Desna strana - Slika */}
      <div className="px-2 lg:px-4 xl:px-0 sm:w-3/5 lg:w-1/2  w-full  flex justify-center lg:justify-end">
        <Image
          src={imageSrc2}
          alt="slika"
          className="w-full lg:w-3/4 object-cover"
          width={720}
          height={560}
        />
      </div>
    </div>
  );
};

export default AboutUsCard;
