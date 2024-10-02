"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CelestiaIcon from "@/assets/celestia.svg";
import AvailIcon from "@/assets/avail.svg";
import EigenIcon from "@/assets/eigen.svg";
import Image from "next/image";

const TheSolution: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.7 });

  const ballVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.7, duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="h-[40vh] sm:h-[60vh] w-full mb-52">
      <div className="relative z-10 p-4 sm:p-0">
        <span className="inline-block text-green font-bold text-[18px] sm:text-[20px] leading-[24px] tracking-[2%] rounded-md">
          The Solution
        </span>
        <span className=" w-full flex flex-row justify-between">
          <h1 className="text-white font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 sm:mt-8">
            Multiple DA layers
          </h1>
          <h1 className="text-[#AFAFAF] font-normal italic text-xs sm:text-md  md:text-lg mt-2 text-nowrap">
            100% live communication
          </h1>
        </span>
        <h1 className="pt-5 text-[#AFAFAF] text-start font-sans text-xs sm:text-md  md:text-lg  italic font-normal leading-[24px] tracking-[-0.2px] sm:max-w-[512px] max-w-xs">
          zkVot’s modular design allows it to operate smoothly on a wide range
          of data layers, providing ultimate flexibility and enabling
          cross-chain compatibility without any need for modifications.
        </h1>
      </div>

      <div
        ref={sectionRef}
        className="relative mt-12 grid grid-cols-4 gap-y-8 h-full pr-4"
      >
        <div className="col-start-3 col-end-5 flex items-center justify-start">
          <motion.div
            className="w-6 h-6"
            variants={ballVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Image
              src={CelestiaIcon}
              alt="Celestia"
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            className="h-[1px] bg-[#D9D9D9]"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          ></motion.div>
          <motion.div
            className="text-white -ml-[65px] sm:-ml-[88px] -mt-7 sm:-mt-14 text-lg sm:text-2xl"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Celestia
          </motion.div>
        </div>

        <div className="col-start-1 col-end-3 flex items-center justify-end">
          <motion.div
            className="text-white -mr-10 sm:-mr-12 -mt-7 sm:-mt-14 text-lg sm:text-2xl"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Avail
          </motion.div>
          <motion.div
            className="h-[1px] bg-[#D9D9D9]"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          ></motion.div>
          <motion.div
            className="w-6 h-6"
            variants={ballVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Image
              src={AvailIcon}
              alt="Avail"
              className="w-full h-full"
            />
          </motion.div>
        </div>

        <div className="col-start-2 col-end-4 flex items-center justify-start">
          <motion.div
            className="w-6 h-6"
            variants={ballVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Image
              src={EigenIcon}
              alt="Eigen"
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            className="h-[1px] bg-[#D9D9D9]"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          ></motion.div>
          <motion.div
            className="text-white -ml-12 sm:-ml-16 -mt-7 sm:-mt-14 text-lg sm:text-2xl"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Eigen
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TheSolution;
