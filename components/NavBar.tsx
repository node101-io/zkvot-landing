import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import GitHub from "@/assets/github.svg";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full py-2 space-x-12 whitespace-nowrap pt-4 px-4 xl:px-24">
      <Image
        src={Logo}
        alt="ZKvot Logo"
        width={80}
        height={20}
        className="md:w-24 md:h-6"
      />

      <Link
        href="https://github.com/node101-io"
        target="_blank"
        className=""
      >
        <Image
          src={GitHub}
          alt="Github"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
};

export default NavBar;
