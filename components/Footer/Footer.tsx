import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="w-full h-full flex justify-end">
        <div className="w-full lg:w-1/2 flex flex-col text-start md:text-end">
          <h2 className="text-5xl md:text-6xl"> CONTACT US TO</h2>
          <h2 className="text-5xl md:text-6xl text-primary italic">
            CONTRIBUTE
          </h2>

          <div className="text-gray-400 mt-4">
            <a
              className="w-fit"
              href="mailto:hello@node101.io"
            >
              hello@node101.io
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-28 mb-4">
        <a
          href="https://github.com/node101-io"
          target="_blank"
          className="text-gray-400 hover:text-white transition"
        >
          GitHub
        </a>
        <div className="flex flex-col items-end">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
          />
          <p className="text-[#B7B7B7] pt-2">
            developed and designed by node101
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
