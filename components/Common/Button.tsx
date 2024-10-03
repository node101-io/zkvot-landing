import React, { ReactNode } from "react";
import RightArrow from "@/assets/RightArrow";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  href = "#",
  children,
  target = "_blank",
}) => {
  return (
    <a
      href={href}
      target={target}
      className="group relative inline-flex items-center px-4 py-2 rounded-full bg-transparent  text-white font-medium overflow-hidden transition-all duration-300 ease-in-out"
    >
      <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
        {children}
      </span>
      <span className="ml-4 w-6 h-6 bg-white rounded-full flex justify-center items-center transition-all duration-300 ease-in-out group-hover:bg-transparent z-[1]">
        <RightArrow />
      </span>
      <span className="absolute top-1/2 right-7 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out group-hover:w-[200%] group-hover:h-[200%] z-[0]" />
    </a>
  );
};

export default Button;
