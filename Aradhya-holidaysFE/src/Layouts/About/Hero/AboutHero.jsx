import React from "react";
import { Mountain, ChevronDown } from "lucide-react";
import heroVideo from "../../../assets/About/abouthero2.mp4";
import mountain from "../../../assets/About/mount.png";
import Navbar from "../../../Components/Navbar/Navbar";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen pt-4 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,38,63,0.60)_0%,rgba(0,38,63,0.40)_55%,#F7F9FB_100%)]"
      />

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-5 py-16 sm:py-20 md:py-[90px] text-center">
        {/* Small Text */}
        <p className="text-[11px] sm:text-[12px] font-[600] inter uppercase leading-4 tracking-[1.8px] sm:tracking-[2.4px] text-[#CDE5FF]">
          EST. 2012 — THE ARCHIPELAGO COLLECTIVE
        </p>

        {/* Heading */}
        <h1 className="poppins max-w-[790px] text-center font-[600] tracking-[-1.28px] leading-tight lg:leading-[72px] text-white text-[32px] sm:text-[48px] lg:text-[64px]">
          Crafting the World's Most
          <span className="block text-[#CDE5FF]">
            Unforgettable Sunsets.
          </span>
        </h1>

        {/* Description */}
        <p className="inter max-w-[672px] font-[400] text-[16px] sm:text-[17px] md:text-[18px] leading-6 sm:leading-7 text-white/80">
          Travel isn't about destinations—it's about the feeling of being
          profoundly connected to nature's vast, quiet beauty.
        </p>

        {/* Scroll */}
        <div className="flex flex-col items-center">
          <p className="text-[11px] sm:text-[12px] font-[600] inter uppercase tracking-[1px] sm:tracking-[1.2px] leading-4 text-white/70">
            THE STORY BEGINS
          </p>

          <div className="mt-3 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-[#FFFFFF80]">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.65382 6.70764L0 1.05382L1.05382 0L5.65382 4.6L10.2538 0L11.3076 1.05382L5.65382 6.70764Z" fill="white" fillOpacity="0.7"/>
            </svg>
          </div>
        </div>

        {/* Glass Card */}
        <div className="mt-3 md:mt-10  w-full max-w-[840px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#00000066] px-6 py-10 sm:px-14 sm:py-16 md:px-20 md:py-20 lg:px-[84px] lg:py-[90px] shadow-2xl">
          {/* Logo */}
          <div className="flex items-center justify-center mx-auto">
            <img
              src={mountain}
              alt="Mountain"
              className="w-[140px] h-[50px] sm:w-[144px] sm:h-[40px] md:w-[164px] md:h-[50px] object-contain"
            />
          </div>

          {/* Orange Text */}
          <p className="mt-5 text-[11px] sm:text-[12px] font-[500] uppercase tracking-[0.7px] text-[#FF7A00]">
            WELCOME TO AARADHYA HOLIDAYS
          </p>

          {/* Card Heading */}
          <h2 className="mt-4 sora text-[24px] sm:text-[27px] md:text-[30px] leading-8 sm:leading-9 md:leading-10 font-[500] text-white">
            Where Journeys
            <br />
            Become Extraordinary
          </h2>

          <p className="mt-6 inter text-[12px] font-[350] text-white">
            Dear Valued Traveler,
          </p>

          {/* Paragraphs */}
          <div className="inter font-[400] mt-9 space-y-7 text-[13px] sm:text-[14px] leading-5 text-white text-left sm:text-center">
            <p>
              Welcome to Voyara, your gateway to curated experiences across
              the world's most breathtaking destinations. We believe travel is
              more than a getaway—it's a collection of moments that shape
              memories for a lifetime.
            </p>

            <p>
              From serene beachfront escapes to vibrant cultural adventures,
              every itinerary we design is crafted with precision, care, and a
              deep understanding of what makes a journey truly exceptional.
            </p>

            <p>
              Our commitment to personalized service and seamless planning
              ensures that your only focus is to explore, indulge, and immerse
              yourself in the beauty of the world around you.
            </p>

            <p>
              Thank you for choosing Voyara. We look forward to crafting your
              next unforgettable adventure.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-16">
            <p className="inter text-[12px] text-white font-[400]">
              Warmest regards,
            </p>

            <h3
              className="mt-3 text-[26px] sm:text-[29px] md:text-[32px] font-[400] italic text-[#FF7A00]"
              style={{ fontFamily: "Arizonia" }}
            >
              John Doe
            </h3>

            <h4 className="inter mt-3 text-[16px] sm:text-[17px] md:text-[18px] font-[400] text-white">
              John Doe
            </h4>

            <p className="inter font-[400] mt-1 text-[12px] text-white">
              Founder & Travel Curator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}