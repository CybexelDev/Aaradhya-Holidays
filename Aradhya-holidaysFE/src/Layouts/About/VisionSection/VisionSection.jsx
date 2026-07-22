import React from "react";
import image from "../../../assets/About/ArchitectureSection/img2.png";

export default function VisionSection() {
  return (
    <section className="w-full bg-[#F7F8FA] py-16 sm:py-20 inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 sm:px-6 lg:px-8 gap-12 lg:gap-8">
          {/* Left Column */}
          <div className="max-w-[526px] mx-auto lg:mx-0 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#CDE5FF80]/30 text-xs text-[#00263F] font-semibold tracking-wide px-4 py-2 rounded-full mb-6 inter border border-[#CDE5FF80]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FE0]" />
              OUR VISION
            </div>

            {/* Heading */}
            <h2 className="text-[30px] sm:text-[38px] lg:text-[46px] font-[400] text-[#00263F] leading-[38px] sm:leading-[46px] lg:leading-[52px] mb-6 poppins">
              Dissolving the borders between Traveler &amp; Nature.
            </h2>

            {/* Description */}
            <p className="text-[#5B6B79] text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 inter">
              At Oceania Travels, we don't just book trips; we curate moments
              of profound connection with the wild. Our vision is to create
              experiences that leave only footprints and take only memories,
              fostering a lifelong stewardship of the world's most fragile
              wonders.
            </p>

            {/* Divider */}
            <div className="border-t border-[#E0E3E5] mb-8" />

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-8 sm:gap-14 lg:gap-20 text-center lg:text-left">
              <div>
                <h3 className="text-[42px] sm:text-[48px] font-normal leading-none text-[#00263F] poppins">
                  150<span className="text-[#00639A]">+</span>
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[2px] text-[#5B6B79] inter">
                  ECO-DESTINATIONS
                </p>
              </div>

              <div>
                <h3 className="text-[42px] sm:text-[48px] font-normal leading-none text-[#00263F] poppins">
                  12<span className="text-[#00639A]">k</span>
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[2px] text-[#5B6B79] inter">
                  GLOBAL TRAVELERS
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:block">
            <div className="rounded-[28px] overflow-hidden aspect-square w-full ">
              <img
                src={image}
                alt="Dew-covered leaves in a sunlit forest"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Quote Card */}
            <div className="absolute bottom-[-35px] md:bottom-4 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-bottom-6 lg:left-0 lg:-left-6 bg-white/65 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-4 sm:py-6 w-[90%] max-w-[310px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <p className="text-[#00263F] text-sm italic leading-relaxed text-center lg:text-left">
                "The silence of the mountains speaks louder than any city
                street, if only we listen."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}