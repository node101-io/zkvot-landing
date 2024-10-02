"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SequencingAnimation.module.scss";

const SequencingSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px 0px" });
  const [dots, setDots] = useState<
    {
      isTallest?: any;
      color: string;
      height: number;
    }[]
  >([]);

  const colors = [
    "#AFEEEE",
    "#D5A6C4",
    "#9BCA9C",
    "#F6C1A6",
    "#FFFFFF",
    "#9BCA9C",
  ];

  const generateHeights = () => {
    const heights = colors.map(() => {
      if (window.innerWidth < 768) {
        return Math.floor(Math.random() * 100) + 50;
      }
      return Math.floor(Math.random() * 150) + 100;
    });

    const maxHeight = Math.max(...heights);
    const tallestIndex = heights.indexOf(maxHeight);

    heights[tallestIndex] = heights[tallestIndex] * 1.4;

    return heights.map((height, index) => ({
      color: colors[index],
      height: height,
      isTallest: index === tallestIndex,
    }));
  };

  useEffect(() => {
    setDots(generateHeights());
  }, []);

  return (
    <div className="h-full sm:h-screen w-full py-24">
      <div className="max-w-[1220px]">
        <h1 className="text-white font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 sm:mt-6 lg:mt-8 ">
          ZKvot decentralized sequencing layer{" "}
        </h1>
        <h1 className="text-[#AFAFAF] font-normal italic text-md sm:text-lg  mt-2">
          100% provable settlement
        </h1>
      </div>
      <div
        ref={sectionRef}
        className="flex justify-center items-end mt-24 sm:mt-44 w-full"
      >
        <div className={`${styles.timeline}`}>
          {dots.map((dot, index) => (
            <div
              className={styles.lineContainer}
              key={index}
            >
              <motion.div
                className={`${styles.line} ${
                  dot.isTallest ? "" : "grayscale-[40%]"
                }`}
                style={{
                  height: dot.height,
                  backgroundColor: dot.color,
                  opacity: dot.isTallest ? 1 : 0.5,
                  boxShadow: dot.isTallest
                    ? `0 0 2px ${dot.color}, 0 0 0px ${dot.color}`
                    : "none",
                }}
                initial={{ scaleY: 0 }}
                animate={
                  isInView
                    ? { scaleY: 1, translateY: dot.isTallest ? "-4px" : "0px" }
                    : { scaleY: 0, translateY: "0px" }
                }
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className={`${styles.dot} ${
                  dot.isTallest ? "" : "grayscale-[40%]"
                }`}
                style={{
                  backgroundColor: dot.color,
                  opacity: dot.isTallest ? 1 : 0.5,
                  boxShadow: dot.isTallest
                    ? `0 0 2px ${dot.color}, 0 0 3px ${dot.color}`
                    : "none",
                }}
                initial={{ y: dot.height, scale: 0 }}
                animate={
                  isInView ? { y: 0, scale: 1 } : { y: dot.height, scale: 0 }
                }
                transition={{
                  delay: index * 0.2 + 0.3,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 300,
                  damping: 40,
                }}
              />
            </div>
          ))}
          <div className={`${styles.baseLine}`} />
        </div>
      </div>
    </div>
  );
};

export default SequencingSection;
