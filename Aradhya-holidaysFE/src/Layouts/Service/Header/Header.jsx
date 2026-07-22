import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import heroBg from "../../../assets/Service/servicebg.jpg";

export default function ServiceHeader() {
  return (
    <section className="relative overflow-hidden pt-4 h-[520px] sm:h-[580px] lg:h-[675px]">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Premium Fleet"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00263F99] via-[#00263F66] via-85% to-white" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl w-full px-5 sm:px-8 lg:px-15 mt-8 sm:mt-12 lg:mt-[60px]">
            <div className="max-w-[672px]">
              {/* Small Label */}
              <span className="inline-block mb-4 sm:mb-5 lg:mb-6 text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] uppercase text-white/90 inter">
                OUR PREMIUM FLEET
              </span>

              {/* Heading */}
              <h1 className="poppins text-white text-[34px] leading-[40px] sm:text-[48px] sm:leading-[52px] lg:text-[64px] lg:leading-[1.05] font-[500] tracking-[-1px] lg:tracking-[-2px] mb-4 sm:mb-5 lg:mb-6">
                Travel in <br />
                Unmatched Comfort
              </h1>

              {/* Description */}
              <p className="inter text-white/90 text-[15px] leading-[24px] sm:text-[16px] sm:leading-[28px] lg:text-[18px] lg:leading-[29px] font-semibold max-w-full sm:max-w-[480px] lg:max-w-[522px]">
                Experience the pinnacle of luxury mobility. Our curated
                collection of world-class vehicles is designed to transform
                every journey into an immersive expedition through nature's
                most breathtaking landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}