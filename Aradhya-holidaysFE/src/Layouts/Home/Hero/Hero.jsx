import React, { useEffect, useState } from "react";
import { MapPin, CalendarDays, Wallet } from "lucide-react";
import Navbar from "../../../Components/Navbar/Navbar";
import heroVideo from "../../../assets/Home/hero.mp4";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./hero.css";
import { getSearchData } from "../../../Api/userapi";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../../Components/CustomSelect/CustomSelect";

export default function Hero() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [locations, setLocations] = useState([]);
const [durations, setDurations] = useState([]);

const [selectedLocation, setSelectedLocation] = useState("");
const [selectedDuration, setSelectedDuration] = useState("");

const [isLocationOpen, setIsLocationOpen] = useState(false);
const navigate = useNavigate();
const handleExplore = () => {
  const params = new URLSearchParams();

  if (selectedLocation) {
    params.append("location", selectedLocation);
  }

  if (selectedDuration) {
    params.append("duration", selectedDuration);
  }

  navigate(`/tour-plan?${params.toString()}`);
};



useEffect(() => {
  const fetchSearchData = async () => {
    try {
      const data = await getSearchData();

      setLocations(data.location);
      setDurations(data.duration);
    } catch (error) {
      console.log(error);
    }
  };

  fetchSearchData();
}, []);
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


   <div className="relative z-10">
  {/* Navbar */}
  <Navbar />


      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col gap-[40px] md:gap-[150px]">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Hero Text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
         <h1 className="poppins mt-10 text-white text-[32px] sm:text-[42px] md:text-[64px] font-[500] leading-[40px] sm:leading-[52px] md:leading-[72px] mb-4 md:mb-5 text-center">
  Chase Sunsets Around the World
</h1>

<p className="inter text-white/90 max-w-[670px] mx-auto text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] font-[300] mb-6 px-4 md:px-0 text-center">
  Discover nature, explore beauty, and travel beyond limits with
  curated premium experiences designed for the soul.
</p>

         
<div className="w-full max-w-[900px] mx-auto px-4 md:px-0">
  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-[16px] rounded-[24px] md:rounded-[32px] bg-[#FFFFFF99] backdrop-blur-[12px] border border-[#FFFFFF33] p-4 md:p-[22px]">

    {/* Location */}
    <div className="w-full md:flex-1 px-2 md:px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-[#191C1E1A] flex justify-center">
  <div className="flex items-center gap-2 w-full">
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="shrink-0">
      <path d="M8 10C8.55 10 9.02083..." fill="#00263F" />
    </svg>

    <CustomSelect
      placeholder="Where to?"
      options={locations}
      value={selectedLocation}
      onChange={setSelectedLocation}
      getLabel={(item) => item.destination}
      getValue={(item) => item.destination}
    />
  </div>
</div>

<div className="w-full md:flex-1 px-2 md:px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-[#191C1E1A] flex justify-center">
  <div className="flex items-center gap-2 w-full">
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" className="shrink-0">
      <path d="M2 20C1.45 20 0.979167..." fill="#00263F" />
    </svg>

    <CustomSelect
      placeholder="Duration"
      options={durations}
      value={selectedDuration}
      onChange={setSelectedDuration}
      getLabel={(item) => item.Duration}
      getValue={(item) => item.Duration}
    />
  </div>
</div>

    {/* Search Button stays the same */}
    <button
      onClick={handleExplore}
      className="w-full md:w-auto cursor-pointer px-8 py-4 md:py-3 rounded-full bg-[#D11115] text-white leading-[24px] text-[16px] font-[700] whitespace-nowrap"
    >
      Explore Now
    </button>
  </div>
</div>

{/* Popular Places */}


          {/* Popular tags */}
          <div className="flex items-center gap-1 sm:gap-2 mt-5 font-[300] text-white text-sm inter">
            <span className="text-white/80 inter  text-[16px] leading-[24px]">Places:</span>
             {locations.slice(0, 4).map((item, index) => (
    <button
      key={index}
      onClick={() => setSelectedLocation(item.destination)}
                className="bg-[#FFFFFF40] border border-[#FFFFFF33] hover:bg-white/30 transition  px-3 md:px-4
        py-2 md:py-1.5
        rounded-full
        text-[11px] md:text-[12px]
        leading-none
        whitespace-nowrap">
                      {item.destination}
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar */}
<div className="inter mx-6 lg:mx-26 mb-8 bg-[#FFFFFF33] backdrop-blur-[12px] rounded-2xl shadow-xl px-4 md:px-12 py-6 md:py-8 grid grid-cols-2 md:flex md:flex-nowrap md:justify-between items-center text-center gap-6">

  <div className="flex flex-col items-center">
    <h3 className="text-[20px] md:text-[25px]  lg:text-[32px] leading-[32px] md:leading-[40px] font-[700] text-[#00263F]">
      3+ Years
    </h3>
    <p className="text-[#42474E] text-[12px] sm:text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-[400]">
      Curating Memories
    </p>
  </div>

  <div className="flex flex-col items-center">
    <h3 className="text-[20px] md:text-[25px]  lg:text-[32px] leading-[32px] md:leading-[40px] font-[700] text-[#00263F]">
      2000+
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
    </div>
  );
}
