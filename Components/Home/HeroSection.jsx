import Link from "next/link";
import Image from "next/image";
import NewSlider from "../Slider/MovingSlider";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 main-heroSection">
      <div className="w-[90%] flex flex-col items-center py-5">
        <Image
          src="/Ticks_Hero.svg"
          alt="Designticks"
          className="-mb-60 z-10 self-center hero-main-tick-img"
          width={661}
          height={543}
        />
        <h1 className="hero-section-main-title regular-105 z-20 self-start">Expert Graphic Design &</h1>
        <h1 className="regular-105 pl-28 main-hero-heading">Web Development Under One Roof.</h1>
        <div className="flex flex-col items-end gap-12">
          <p className="w-1/2 regular-28 text-black-80 poppins-font main-hero-para">
            Many brands are out there, but only special ones get noticed. At
            Design Ticks, we make sure your brand shines and gets the love it
            deserves.
          </p>
          <div className="flexBetween w-full">
            <Image src="/Clutch Review.png" width={231} height={78} className="Clutch-Review-Img"/>
            <Link href="/contact" className="btn_orange">
              Scroll to know us better
            </Link>
          </div>
        </div>
      </div>
      <NewSlider />
    </div>
  );
};

export default HeroSection;
