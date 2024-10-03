"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo.svg";
import RightArrow from "@/assets/RightArrow";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <footer className="pt-44 py-12">
      <div className=" flex flex-col lg:flex-row justify-between items-center w-full h-full">
        <div className="max-w-[410px] mb-6 lg:mb-0 ">
          <h2 className="text-3xl  mb-2">Be notified when it's ready. </h2>
          <p className="text-[#B7B7B7] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start"
          >
            <input
              type="email"
              placeholder="hello@node101.io"
              className="text-black mb-5 py-2 px-2 rounded-full focus:outline-none w-full bg-transparent  border-[1px] border-whtie"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="group relative inline-flex items-center px-4 py-2 rounded-full bg-transparent  text-primary font-medium overflow-hidden transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
                Subscribe
              </span>
              <span className="ml-4 w-6 h-6 bg-primary rounded-full flex justify-center items-center transition-all duration-300 ease-in-out group-hover:bg-transparent z-[1]">
                <RightArrow />
              </span>
              <span className="absolute top-1/2 right-7 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-primary rounded-full transition-all duration-300 ease-in-out group-hover:w-[200%] group-hover:h-[200%] z-[0]" />
            </button>
          </form>
        </div>

        <div className="max-w-[450px] ">
          <h2 className="text-3xl sm:text-5xl md:text-6xl   ">
            LOREM IPSUM DOLOR
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl    text-primary italic">
            IPSUM DOLOR
          </h2>
          <p className="text-gray-400 mt-4">hello@node101.io</p>
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