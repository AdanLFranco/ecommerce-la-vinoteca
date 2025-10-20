import React from "react";
import Image from "next/image";
import VInoLogo from "./assets/VInoLogo.jpg";

const Logo = () => {
  return (
    <div className=" flex items-center gap-4">
      <Image
        src={VInoLogo}
        alt="logo"
        width={100}
        height={0}
        className="h-28 w-auto"
      />
      <div className="flex flex-col text-rose-200 font-jost-sans text-left">
        <h3 className="text-2xl">LA VINOTECA</h3>
        <p className="text-md">WINES & SPIRITS</p>
      </div>
    </div>
  );
};

export default Logo;
