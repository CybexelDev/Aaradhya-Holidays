import React, { useState } from "react";
import { MapPin, CalendarDays, Wallet } from "lucide-react";
import Navbar from "../../../Components/Navbar/Navbar";
import heroVideo from "../../../assets/Home/hero.mp4";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./hero.css";

export default function Hero() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="relative  overflow-hidden pt-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00263F99] via-[#00263F66] to-[#F7F9FB]"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col gap-[40px] md:gap-[150px]">
        {/* Navbar */}
        <Navbar />

        {/* Hero Text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
         <h1 className="poppins text-white text-[32px] sm:text-[42px] md:text-[64px] font-[500] leading-[40px] sm:leading-[52px] md:leading-[72px] mb-4 md:mb-5 text-center">
  Chase Sunsets Around the World
</h1>

<p className="inter text-white/90 max-w-[670px] mx-auto text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] font-[300] mb-6 px-4 md:px-0 text-center">
  Discover nature, explore beauty, and travel beyond limits with
  curated premium experiences designed for the soul.
</p>

          <div className="w-full max-w-[900px] mx-auto px-4 md:px-0">
  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-[16px] rounded-[24px] md:rounded-[32px] bg-[#FFFFFF99] backdrop-blur-[12px] border border-[#FFFFFF33] p-4 md:p-6">

    {/* Where */}
    <div className="flex items-center gap-3 w-full md:flex-1 px-2 md:px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-[#191C1E1A]">
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
          fill="#00263F"
        />
      </svg>

      <input
        type="text"
        placeholder="Where to?"
        className="w-full inter bg-transparent outline-none text-[#0A3552] placeholder:text-[#00263FCC] text-[16px] font-[500]"
      />
    </div>

    {/* When */}
    <div className="flex items-center gap-3 w-full md:flex-1 px-2 md:px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-[#191C1E1A]">
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z"
          fill="#00263F"
        />
      </svg>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="When?"
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        className="w-full inter bg-transparent border-none outline-none text-[#0A3552] placeholder:text-[#00263FCC] text-[16px] font-[500]"
      />
    </div>

    {/* Budget */}
    <div className="flex items-center gap-3 w-full md:flex-1 px-2 md:px-4 py-3 md:py-2">
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 9C12.1667 9 11.4583 8.70833 10.875 8.125C10.2917 7.54167 10 6.83333 10 6C10 5.16667 10.2917 4.45833 10.875 3.875C11.4583 3.29167 12.1667 3 13 3C13.8333 3 14.5417 3.29167 15.125 3.875C15.7083 4.45833 16 5.16667 16 6C16 6.83333 15.7083 7.54167 15.125 8.125C14.5417 8.70833 13.8333 9 13 9ZM6 12C5.45 12 4.97917 11.8042 4.5875 11.4125C4.19583 11.0208 4 10.55 4 10V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H20C20.55 0 21.0208 0.195833 21.4125 0.5875C21.8042 0.979167 22 1.45 22 2V10C22 10.55 21.8042 11.0208 21.4125 11.4125C21.0208 11.8042 20.55 12 20 12H6ZM8 10H18C18 9.45 18.1958 8.97917 18.5875 8.5875C18.9792 8.19583 19.45 8 20 8V4C19.45 4 18.9792 3.80417 18.5875 3.4125C18.1958 3.02083 18 2.55 18 2H8C8 2.55 7.80417 3.02083 7.4125 3.4125C7.02083 3.80417 6.55 4 6 4V8C6.55 8 7.02083 8.19583 7.4125 8.5875C7.80417 8.97917 8 9.45 8 10ZM19 16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V3H2V14H19V16Z"
          fill="#00263F"
        />
      </svg>

      <input
        type="text"
        placeholder="Budget"
        inputMode="numeric"
        pattern="[0-9]*"
        onChange={(e) => {
          e.target.value = e.target.value.replace(/\D/g, "");
        }}
        className="w-full inter bg-transparent outline-none text-[#0A3552] placeholder:text-[#00263FCC] text-[16px] font-[500]"
      />
    </div>

    {/* Button */}
    <button className="w-full md:w-auto cursor-pointer px-8 py-4 md:py-3 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4E7A] text-white leading-[24px] text-[16px] font-[700] whitespace-nowrap">
      Explore Now
    </button>
  </div>
</div>

          {/* Popular tags */}
          <div className="flex items-center gap-1 sm:gap-2 mt-5 font-[300] text-white text-sm inter">
            <span className="text-white/80 inter  text-[16px] leading-[24px]">Popular:</span>
            {["Goa", "Coorg", "Kerala", "Leh Ladakh"].map((place) => (
              <button
                key={place}
                className="bg-[#FFFFFF40] border border-[#FFFFFF33] hover:bg-white/30 transition  px-3 md:px-4
        py-2 md:py-1.5
        rounded-full
        text-[11px] md:text-[12px]
        leading-none
        whitespace-nowrap">
                {place}
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar */}
<div className="inter mx-6 lg:mx-26 mb-8 bg-[#FFFFFF33] backdrop-blur-[12px] rounded-2xl shadow-xl px-4 md:px-12 py-6 md:py-8 grid grid-cols-2 md:flex md:flex-nowrap md:justify-between items-center text-center gap-6">

  <div className="flex flex-col items-center">
    <h3 className="text-[20px] md:text-[25px]  lg:text-[32px] leading-[32px] md:leading-[40px] font-[700] text-[#00263F]">
      10+ Years
    </h3>
    <p className="text-[#42474E] text-[12px] sm:text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-[400]">
      Curating Memories
    </p>
  </div>

  <div className="flex flex-col items-center">
    <h3 className="text-[20px] md:text-[25px]  lg:text-[32px] leading-[32px] md:leading-[40px] font-[700] text-[#00263F]">
      5000+
    </h3>
    <p className="text-[#42474E] text-[12px] sm:text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-[400]">
      Happy Travelers
    </p>
  </div>

  <div className="flex flex-col items-center">
    <h3 className="text-[20px] md:text-[25px]  lg:text-[32px] leading-[32px] md:leading-[40px] font-[700] text-[#00263F]">
      120+
    </h3>
    <p className="text-[#42474E] text-[12px] sm:text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-[400]">
      Destinations
    </p>
  </div>

  <div className="flex flex-col items-center">
    <h3 className="text-[20px] md:text-[25px]  lg:text-[32px] leading-[32px] md:leading-[40px] font-[700] text-[#00263F]">
      24/7
    </h3>
    <p className="text-[#42474E] text-[12px] sm:text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-[400]">
      Concierge Support
    </p>
  </div>

</div>
      </div>
    </div>
  );
}
