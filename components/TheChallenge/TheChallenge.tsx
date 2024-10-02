import React from "react";
import SquiggleAnimation from "./SquiggleAnimation";

const TheChallenge: React.FC = () => {
  return (
    <div className=" relative h-full w-full overflow-hidden">
      <div className="px-4  relative z-10 p-4 xl:px-24 ">
        <span className="inline-block text-highlight font-bold text-[18px] sm:text-[20px] leading-[24px] tracking-[2%] rounded-md">
          The Challenge
        </span>
        <h1 className="text-highlight font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[30px] sm:leading-[81px] mt-4 sm:mt-8">
          ACHIEVING ANONYMOUS,
          <br />
          CENSORSHIP-RESISTANT VOTING
        </h1>
      </div>
      <SquiggleAnimation />

      <div className="xl:px-24 absolute top-[50%] right-4 text-[#AFAFAF] text-right font-sans sm:text-[20px] text-[12px]  italic font-normal leading-[24px] tracking-[-0.2px] sm:max-w-[512px] max-w-xs">
        zkVot’s flexible, modular design can be adapted to different domains and
        use cases. You’re one step closer to the future of the internet and true
        decentralization.
      </div>
    </div>
  );
};

export default TheChallenge;
