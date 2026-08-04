import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import expeditionBg from "../../../assets/TourDetail/header/headerimage.jpg";

export default function PackageDetailHeader({ packageData }) {
    return (
    <div className="relative overflow-hidden pt-4">
      {/* Background Image */}
      <img
  src={packageData?.Image?.[0]}
  alt={packageData?.packageName}
  className="absolute inset-0 w-full h-full object-cover"
/>

      {/* Dark Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-[#00263F99] via-[#00263F66] via-85% to-white"></div>
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col gap-[40px] md:gap-[80px] pb-16 md:pb-20">
        {/* Navbar */}
        <Navbar />

        {/* Hero Text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          {/* Badge */}
          <span className="inline-block bg-gradient-to-r from-[#0056CD] to-[#00E5FF] border border-[#43B0FF]/50 text-white text-[10px] font-[400] tracking-[3px] px-4 py-1 rounded-full mb-5 leading-[15px]">
            LIMITED EXPEDITION
          </span>

          <h1 className="poppins text-white text-[36px] sm:text-[48px] md:text-[64px] font-[600] leading-[42px] sm:leading-[56px] md:leading-[72px] mb-4 md:mb-5 text-center tracking-[-1.28px]">
              {packageData?.packageName}

          </h1>

          <p className="inter text-white max-w-[952px] mx-auto text-[14px] sm:text-[16px] md:text-[20px] leading-[22px] sm:leading-[26px] md:leading-[28px] font-[400] mb-10 px-4 md:px-0 text-center">
             "Every journey is thoughtfully curated to blend iconic destinations,
  authentic local experiences, and exceptional comfort into memories that
  last a lifetime."

          </p>

          {/* Glass Info Card */}
          <div className="w-full max-w-[720px] mx-auto px-4 md:px-0">
            <div className="rounded-[24px] bg-[#A7A7A7]/50 border border-white/20 backdrop-blur-[24px] px-6 py-8 md:px-10 md:py-9">
              <p className="inter text-white text-[16px] sm:text-[24px] leading-[32px] font-[400] mb-7 text-center max-w-[675px] mx-auto tracking-[0.6px]">
                            {packageData?.subTitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20 inter">
                <div className="flex flex-col items-center gap-1 sm:px-4 pt-6 sm:pt-0 first:pt-0">
                  <p className="text-white text-[10px] sm:text-[12px] tracking-[1px]  font-[300] ">
                    DURATION
                  </p>
                  <p className="text-white text-[16px] sm:text-[24px] font-[500]">
                    {packageData?.Duration}
                  </p>
                </div>

                {/* <div className="flex flex-col items-center gap-1 sm:px-4 pt-6 sm:pt-0">
                  <p className="text-white text-[10px] sm:text-[12px] tracking-[1px]  font-[300] inter">
                    {packageData?.Location}
                  </p>
                  <p className="text-white text-[16px] sm:text-[24px] font-[500]">
                    Immersive
                  </p>
                </div> */}

                <div className="flex flex-col items-center gap-1 sm:px-4 pt-6 sm:pt-0">
                  <p className="text-white text-[10px] sm:text-[12px] tracking-[1px]  font-[300] inter">
                    GROUP
                  </p>
                  <p className="text-white text-[16px] sm:text-[24px] font-[500]">
                    Max 52
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}