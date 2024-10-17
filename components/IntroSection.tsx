import React from "react";
import { useTranslations } from "next-intl";
import Button from "./Common/Button";
import Link from "next/link";

const IntroSection = () => {
  const t = useTranslations("IntroSection");

  return (
    <div className="h-[95vh] w-full flex flex-col justify-center items-center text-white">
      <h1 className="pb-4 text-[24px] text-highlight">Available Soon</h1>
      <div className="max-w-[850px] text-left sm:text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-2 leading-tight">
          EMPOWERING <span className="italic">PRIVACY</span> &{" "}
          <span className="italic">DECENTRALIZATION</span> IN{" "}
          <span className="text-primary">VOTING</span> ONCE AND FOR ALL
        </h1>
        <p className="text-green italic text-start sm:text-end pb-5">
          developed and designed by{" "}
          <Link
            target="_blank"
            href="https://node101.io/"
            className="text-white underline"
          >
            node101
          </Link>
        </p>
        <p className="text-sm sm:text-base md:text-lg font-normal mb-8">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
          <Button href="/article.pdf">
            Read First Version of
            <span className="text-primary group-hover:text-black ml-1">
              Article
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
