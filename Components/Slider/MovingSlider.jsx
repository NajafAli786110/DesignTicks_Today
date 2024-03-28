import React from "react";
import "./slider.css";
import Image from "next/image";

const NewSlider = () => {
  const features = [
    "Best-Rated digital design",
    "2023 anthem awards winner",
    "aGILE process",
    "Digital design agency of the year",
    "User-centered design for your business",
    "m-WBE/certified",
  ];
  return (
    <div class="slider py-4 bg-sectionBg-10 flex flex-col justify-center">
      <div class="slide-track flex gap-8">
        {features.map((features, index) => (
          <div key={index} className="slide flex gap-8 items-center">
            <Image src="/tick-yellow.png" width={27} height={17} alt="design ticks yellow ticks build trust with you"/>
            <p className="regular-18 poppins-font text-gray-50 capitalize">
              {features}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSlider;
