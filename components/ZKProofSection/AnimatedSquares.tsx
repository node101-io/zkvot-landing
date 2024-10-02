"use client";
import Image from "next/image";
import MinaLogo from "@/assets/mina.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSquares: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const squareVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="w-full h-full flex justify-center items-center mt-12"
    >
      <motion.div
        initial={false}
        animate="visible"
        className="h-[220px] w-[450px] flex flex-col justify-center items-center border rounded-[40px]"
      >
        <span className="text-secondary font-bold text-[24px]">22 kb</span>
        <span className="text-secondary text-[16px]">
          constant size thanks to
        </span>
        <Image
          src={MinaLogo}
          alt="MINA Logo"
          className="w-24 h-auto mt-4"
        />
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={squareVariants}
        className="absolute h-[293px] w-[600px] hidden sm:flex flex-col justify-center items-center border rounded-[40px]"
      ></motion.div>

      <motion.div
        custom={2}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={squareVariants}
        className="absolute h-[367px] w-[754px] hidden md:flex flex-col justify-center items-center border rounded-[40px]"
      ></motion.div>

      <motion.div
        custom={3}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={squareVariants}
        className="absolute h-[441px] w-[908px] hidden lg:flex flex-col justify-center items-center border rounded-[40px]"
      ></motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={squareVariants}
        className=" absolute h-[515px] w-[1062px] hidden xl:flex flex-col justify-center items-center border rounded-[40px]"
      ></motion.div>
    </div>
  );
};

export default AnimatedSquares;
