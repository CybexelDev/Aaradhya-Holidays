import React, { useEffect, useState } from "react";
import { MapPin, CalendarDays, Wallet } from "lucide-react";
import Navbar from "../../../Components/Navbar/Navbar";
import heroVideo from "../../../assets/vidhome.mp4";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./hero.css";
import { getCategoryUser, getSearchData,getVehcileName } from "../../../Api/userapi";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../../Components/CustomSelect/CustomSelect";

export default function Hero() {
  const [states, setStates] = useState([]);
const [durations, setDurations] = useState([]);
const [categories, setCategories] = useState([]);
const [locations, setLocations] = useState([]);
const [vehicles, setVehicles] = useState([]);
const [selectedStates, setSelectedStates] = useState("");
const [selectedDuration, setSelectedDuration] = useState("");
const [selectedCategory, setSelectedCategory] = useState("");


// const [isLocationOpen, setIsLocationOpen] = useState(false);
const navigate = useNavigate();
const handleExplore = () => {
  console.log("selectedStates:", selectedStates);
  console.log("selectedDuration:", selectedDuration);
  console.log("selectedCategory:", selectedCategory);

  const params = new URLSearchParams();

  if (selectedStates) params.append("state", selectedStates);
  if (selectedDuration) params.append("duration", selectedDuration);
  if (selectedCategory) params.append("packageType", selectedCategory);

  console.log(params.toString());

  navigate(`/tour-plan?${params.toString()}`);
};



useEffect(() => {
  const fetchSearchData = async () => {
    try {
      const data = await getSearchData();

      setLocations(data.location);
      setStates(data.State);

      const uniqueDurations = Array.from(
        new Map(data.duration.map(item => [item.Duration, item])).values()
      );

      const uniquePackageTypes = Array.from(
        new Map(data.packageType.map(item => [item.packageType, item])).values()
      );

      setDurations(uniqueDurations);
      setCategories(uniquePackageTypes);

      // Fetch vehicle names
      const categoryData = await getCategoryUser();

if (categoryData?.categoryData) {
  setVehicles(categoryData.categoryData);
}

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
    <svg   className="shrink-0"
 width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#00263F"/>
</svg>


    <CustomSelect
  placeholder="Where to?"
  options={states}
  value={selectedStates}
  onChange={setSelectedStates}
  getLabel={(item) => item.State}
  getValue={(item) => item.State}
/>
  </div>
</div>

<div className="w-full md:flex-1 px-2 md:px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-[#191C1E1A] flex justify-center">
  <div className="flex items-center gap-2 w-full">
    <svg   className="shrink-0"
   width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM2 6V4V6Z" fill="#00263F"/>
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

{/* Category */}
<div className="w-full md:flex-1 px-2 md:px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-[#191C1E1A] flex justify-center">
  <div className="flex items-center gap-2 w-full">

    {/* Replace with your category SVG/icon */}
    <svg
      width="18"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="#00263F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>

    <CustomSelect
      placeholder="Category"
      options={categories}
      value={selectedCategory}
      onChange={setSelectedCategory}
      getLabel={(item) => item.packageType}
      getValue={(item) => item.packageType}
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
          {/* Vehicle Categories */}
<div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5 font-[300] text-white inter">
  
  <span className="text-white/80 text-[14px] sm:text-[16px] leading-[24px] shrink-0">
    Vehicles:
  </span>

  {vehicles.map((vehicle) => (
    <button
      key={vehicle._id}
      onClick={() => navigate(`/vehicle/${vehicle._id}`)}
      className="
        bg-[#FFFFFF40]
        border border-[#FFFFFF33]
        hover:bg-white/30
        transition-all duration-300
        px-3 sm:px-4
        py-2 sm:py-2
        rounded-full
        text-[11px] sm:text-[12px]
        leading-none
        whitespace-nowrap
      "
    >
      {vehicle.categoryName?.trim()}
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
