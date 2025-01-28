import Image from "next/image";
import React from "react";
import logo1 from "../../public/images/client-databiz.svg";
import logo2 from "../../public/images/client-audiophile.svg";
import logo3 from "../../public/images/client-meet.svg";
import logo4 from "../../public/images/client-maker.svg";

const HeroContent = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col gap-4 md:gap-y-12 ">
        <div>
          <h2 className="font-epilogueBold md:block hidden text-4xl lg:text-6xl">
            Make
          </h2>
          <h2 className="font-epilogueBold md:block hidden  text-4xl lg:text-6xl">
            remote work
          </h2>
          <h2 className="font-epilogueBold md:hidden text-4xl mt-8 text-center">
            Make remote work
          </h2>
        </div>
        <span className="text-mediumGray text-base font-epilogueSemiBold">
          <p className="text-center md:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.{" "}
          </p>
        </span>
        <div className="flex justify-center md:block">
          <span className="bg-almostBlack text-center w-[40%] border border-black rounded-xl py-3 px-5 text-white font-epilogueSemiBold hover:bg-white hover:text-black">
            Learn more
          </span>
        </div>

        <div className="flex absolute bottom-0  gap-5">
          <span>
            <Image src={logo1} alt="client" />
          </span>
          <span>
            <Image src={logo2} alt="client" />
          </span>
          <span>
            <Image src={logo3} alt="client" />
          </span>
          <span>
            <Image src={logo4} alt="client" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
