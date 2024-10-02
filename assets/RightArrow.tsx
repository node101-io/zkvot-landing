import React from "react";

interface RightArrowProps {
  fill?: string;
  stroke?: string;
}

const RightArrow: React.FC<RightArrowProps> = ({
  fill = "#141414",
  stroke = "#141414",
}) => {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.900097 4L12.1001 4L0.900097 4Z"
        fill={fill}
      />
      <path
        d="M0.900097 4L12.1001 4"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.83343 7.26673L12.1001 4.00006L8.83343 0.733398"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
