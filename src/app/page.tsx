import Navbar from "@/components/Navbar";
import Image from "next/image";
import heroImg from "../../public/images/image-hero-desktop.png";
import heroImgMobile from "../../public/images/image-hero-mobile.png";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <div className="md:px-14">
      <Navbar />
      <div className="hidden md:flex mt-10 pl-28 relative pr-16 justify-between items-center">
        <HeroContent />
        <div>
          <span className="w-full h-full">
            <Image src={heroImg} className="object-cover h-auto " alt="" />
          </span>
        </div>
      </div>
      <div className="md:hidden">
        <div>
          <span className="w-full bg-[red] h-full">
            <Image
              src={heroImgMobile}
              className="object-cover w-full h-auto "
              alt=""
            />
          </span>
        </div>
        <HeroContent />
      </div>
    </div>
  );
}
