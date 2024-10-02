"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const HexLogo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1087 1.05273C16.0018 1.05273 16.8272 1.52923 17.2737 2.30273L21.0417 8.82901C21.4883 9.60252 21.4883 10.5555 21.0417 11.329L17.2737 17.8553C16.8272 18.6288 16.0018 19.1053 15.1087 19.1053H7.57278C6.67962 19.1053 5.8543 18.6288 5.40772 17.8553L1.63977 11.329C1.19319 10.5555 1.19319 9.60252 1.63977 8.82901L5.40772 2.30273C5.8543 1.52923 6.67962 1.05273 7.57278 1.05273H15.1087Z"
        stroke="#AFEEEE"
      />
    </svg>
  );
};

interface Hexagon {
  id: number;
  x: number;
  y: number;
  appearDelay: number;
  initialX?: number;
  initialY?: number;
}

const HexagonAnimation = () => {
  const [hexagons, setHexagons] = useState<Hexagon[]>([]);
  const [layers, setLayers] = useState(0);
  const [maxLayers, setMaxLayers] = useState(0);

  const MAX_ALLOWED_LAYERS = 10;

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
  });

  useEffect(() => {
    const calculateMaxLayers = () => {
      if (typeof window !== "undefined") {
        const hexagonWidth = 44;
        const totalWidth = window.innerWidth;
        const possibleColumns = Math.floor(totalWidth / hexagonWidth);
        const possibleLayers = Math.floor((possibleColumns - 1) / 2);
        const limitedLayers = Math.min(possibleLayers, MAX_ALLOWED_LAYERS);
        setMaxLayers(limitedLayers);
      }
    };

    calculateMaxLayers();
    window.addEventListener("resize", calculateMaxLayers);

    return () => {
      window.removeEventListener("resize", calculateMaxLayers);
    };
  }, []);

  useEffect(() => {
    if (maxLayers > 0 && isInView) {
      const interval = setInterval(() => {
        setLayers((prevLayers) => {
          const newLayers = prevLayers + 1;
          if (newLayers > maxLayers) {
            clearInterval(interval);
            return prevLayers;
          } else {
            setHexagons(generateHexagons(newLayers));
            return newLayers;
          }
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [maxLayers, isInView]);

  const minX = -layers;
  const minY = -1;

  const totalColumns = 2 * layers + 1;
  const totalRows = 3;

  const itemVariants = {
    hidden: (custom: any) => ({
      opacity: 0,
      scale: 0,
      x: custom.initialX || 0,
      y: custom.initialY || 0,
    }),
    visible: (custom: any) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        delay: custom.appearDelay,
        duration: 0.2,
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    }),
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  return (
    <div className="w-full max-w-full overflow-hidden py-8">
      <motion.div
        ref={containerRef}
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${totalColumns}, 24px)`,
          gridTemplateRows: `repeat(${totalRows}, 24px)`,
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {hexagons.map((hex) => {
          const gridColumn = hex.x - minX + 1;
          const gridRow = hex.y - minY + 1;
          return (
            <motion.div
              key={hex.id}
              variants={itemVariants}
              custom={hex}
              style={{
                gridColumn,
                gridRow,
              }}
            >
              <HexLogo />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const generateHexagons = (layers: any) => {
  const hexagons = [];
  let id = 1;

  hexagons.push({ id: id++, x: 0, y: -1, appearDelay: 0, initialY: 0 });

  hexagons.push({ id: id++, x: 0, y: 0, appearDelay: 0.1, initialY: -50 });
  hexagons.push({ id: id++, x: 0, y: 1, appearDelay: 0.2, initialY: -50 });

  for (let i = 1; i <= layers; i++) {
    for (let y = -1; y <= 1; y++) {
      const index = y + 1;
      const delay = 0.3 + i * 0.1 + index * 0.025;
      hexagons.push({
        id: id++,
        x: i,
        y: y,
        appearDelay: delay,
        initialX: 50,
      });
      hexagons.push({
        id: id++,
        x: -i,
        y: y,
        appearDelay: delay,
        initialX: -50,
      });
    }
  }
  return hexagons;
};

export default HexagonAnimation;
