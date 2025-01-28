import Navbar from "@/components/Navbar";
import { Col, Row } from "antd";
import Image from "next/image";
import logo1 from "../../public/images/client-databiz.svg";
import logo2 from "../../public/images/client-audiophile.svg";
import logo3 from "../../public/images/client-meet.svg";
import logo4 from "../../public/images/client-maker.svg";
import heroImg from "../../public/images/image-hero-desktop.png";

export default function Home() {
  return (
    <div className="px-14">
      <Navbar />
      <div className="mt-10 flex pl-28 relative pr-16 justify-between items-center">
        <div className="w-full h-full">
          <div className="flex flex-col gap-y-12">
            <div>
              <h2 className="font-epilogueBold text-4xl lg:text-6xl">Make</h2>
              <h2 className="font-epilogueBold text-4xl lg:text-6xl">
                remote work
              </h2>
            </div>
            <span className="text-mediumGray text-base font-epilogueSemiBold">
              <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.{" "}
              </p>
            </span>
            <span className="bg-almostBlack text-center w-[40%] border border-black rounded-xl py-3 px-5 text-white font-epilogueSemiBold hover:bg-white hover:text-black">
              Learn more
            </span>
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
        <div>
          <span className="w-full h-full">
            <Image src={heroImg} className="object-cover h-auto " alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}
