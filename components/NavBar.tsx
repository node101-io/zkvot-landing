import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Plus from "@/assets/plus.svg";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center w-full py-2 space-x-12 whitespace-nowrap pt-4">
      <Link
        href="#"
        className="font-normal text-background hover:text-gray-200 flex items-center gap-x-2 text-sm md:text-base"
      >
        <Image
          src={Plus}
          alt="Create Icon"
          width={14}
          height={14}
        />
        <span>
          Create <span className="text-highlight">ZKvot</span>
        </span>
      </Link>

      <Image
        src={Logo}
        alt="ZKvot Logo"
        width={80}
        height={20}
        className="md:w-24 md:h-6"
      />

      <Link
        href="#"
        className="font-normal text-green-400 hover:text-green-200 text-sm md:text-base"
      >
        Join <span className="text-green">ZKvot</span>
      </Link>
    </div>
  );
};

export default NavBar;
