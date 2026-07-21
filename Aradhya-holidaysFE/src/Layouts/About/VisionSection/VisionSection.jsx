import React from "react";

export default function VisionSection() {
  return (
    <section className="w-full bg-[#F7F8FA] py-16 sm:py-20 inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-center px-8">
          {/* Left Column: Text Content */}
          <div className="max-w-[526px]"> 
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#CDE5FF80]/30  text-xs text-[#00263F] font-semibold tracking-wide px-4 py-2 rounded-full mb-6 inter border border-[#CDE5FF80]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F8FE0] text-[#00263F]" />
              OUR VISION
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-[46px] font-[400] text-[#00263F] leading-[52px] mb-6 poppins">
              Dissolving the borders between Traveler &amp; Nature.
            </h2>

            {/* Description */}
            <p className="text-[#5B6B79] text-sm sm:text-base leading-relaxed mb-8 max-w-lg inter ">
              At Oceania Travels, we don't just book trips; we curate moments
              of profound connection with the wild. Our vision is to create
              experiences that leave only footprints and take only memories,
              fostering a lifelong stewardship of the world's most fragile
              wonders.
            </p>

            {/* Divider */}
            <div className="border-t border-[#DADFE3] mb-8" />

            {/* Stats Row */}
          {/* Stats Row */}
<div className="flex justify-between items-center gap-14 sm:gap-20">
  <div>
    <h3 className="text-[42px] sm:text-[48px] font-normal leading-none text-[#00263F] poppins">
      150+
    </h3>
    <p className="mt-2 text-[11px] uppercase tracking-[2px] text-[#5B6B79] inter">
      ECO-DESTINATIONS
    </p>
  </div>

  <div>
    <h3 className="text-[42px] sm:text-[48px] font-normal leading-none text-[#00263F] poppins">
      12k
    </h3>
    <p className="mt-2 text-[11px] uppercase tracking-[2px] text-[#5B6B79] inter">
      GLOBAL TRAVELERS
    </p>
  </div>
</div>
          </div>

          {/* Right Column: Image with floating quote card */}
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden aspect-[4/4] ">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop"
                alt="Dew-covered leaves in a sunlit forest"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 left-0 sm:-left-6 bg-white/50 backdrop-blur-md rounded-2xl  px-6 py-5 max-w-[310px]  shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <p className="text-[#00263F] text-sm italic leading-relaxed">
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