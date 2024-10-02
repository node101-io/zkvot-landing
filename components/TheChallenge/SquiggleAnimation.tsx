"use client";
import React, { useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./SquiggleAnimation.module.css";

const SquiggleAnimation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDashoffset = `${length * (1 + latest)}`;
    }
  });

  return (
    <div
      ref={sectionRef}
      className="relative -top-10 left-0 w-full h-full"
    >
      <svg
        width="1280"
        height="403"
        viewBox="0 0 1280 399"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.squiggle}
      >
        <path
          ref={pathRef}
          d="M1417.08 162.385C1186.98 453.979 982.941 434.327 737.386 316.86C696.028 297.076 661.637 259.714 637.359 255.405C607.011 250.018 603.902 263.732 575.621 312.621C547.339 361.51 503.334 318.388 496.451 291.738C489.568 265.087 504.642 203.322 574.002 279.377C629.489 340.221 684.343 301.295 682.207 258.296C680.323 220.367 617.416 208.999 595.052 215.162C574.911 219.831 531.333 222.223 518.152 194.435C504.97 166.648 513.242 154.471 529.226 142.164C547.969 127.733 600.224 149.94 586.464 206.25C572.705 262.56 524.242 278.771 501.731 279.837C479.22 280.904 406.045 218.596 352.682 169.705C149.417 -16.5271 -177.394 2.50012 -177.394 2.50012"
          stroke="#F6F6F6"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default SquiggleAnimation;
