import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="p-4 bg-[#1E1E25]">
        <Image src="/logo.svg" height={30} width={30} />
      </div>
    </>
  );
};

export default Navbar;
