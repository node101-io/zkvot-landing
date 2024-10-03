import React from "react";
import SquiggleAnimation from "./SquiggleAnimation";

const TheChallenge: React.FC = () => {
  return (
    <div className="relative h-full pb-36 sm:pb-20 w-full overflow-hidden">
      <div className="relative items-center flex flex-col z-10 w-full px-4">
        <div className="max-w-[1440px] w-full">
          <span className="inline-block text-highlight  text-[18px] sm:text-[20px] leading-[24px] tracking-[2%] rounded-md">
            The Challenge
          </span>
          <h1 className="text-highlight font-normal text-3xl sm:text-5xl md:text-6xl  leading-[30px] mt-4 sm:mt-8">
            ACHIEVING ANONYMOUS,
            <br />
            CENSORSHIP-RESISTANT VOTING
          </h1>
        </div>
      </div>

      <SquiggleAnimation />

      <div className="2xl:mx-[300px] absolute top-[70%] sm:top-[50%] right-16 sm:right-4 text-[#AFAFAF] text-left sm:text-right font-sans sm:text-[20px] text-[12px] italic font-normal leading-[24px] tracking-[-0.2px] sm:max-w-[512px] max-w-xs">
        zkVot’s flexible, modular design can be adapted to different domains and
        use cases. You’re one step closer to the future of the internet and true
        decentralization.
      </div>
    </div>
  );
};

export default TheChallenge;
