import React from "react";
import SquiggleAnimation from "./SquiggleAnimation";

const TheChallenge: React.FC = () => {
  return (
    <div className=" relative h-full w-full overflow-hidden">
      <div className="px-4 md:px-24 relative z-10 p-4 sm:p-0">
        <span className="inline-block text-highlight font-bold text-[18px] sm:text-[20px] leading-[24px] tracking-[2%] rounded-md">
          The Challenge
        </span>
        <h1 className="text-highlight font-normal text-2xl sm:text-6xl leading-[30px] sm:leading-[81px] mt-4 sm:mt-8">
          ACHIEVING ANONYMOUS,
          <br />
          CENSORSHIP-RESISTANT VOTING
        </h1>
      </div>
      <SquiggleAnimation />
    </div>
  );
};

export default TheChallenge;
