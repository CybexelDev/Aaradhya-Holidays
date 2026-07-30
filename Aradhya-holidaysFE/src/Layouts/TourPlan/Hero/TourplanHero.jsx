import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroBg from "../../../assets/TourPlan/tourplan.jpg";
import Navbar from "../../../Components/Navbar/Navbar";
import { getSearchData } from "../../../Api/userapi";
import { useNavigate, useSearchParams } from "react-router-dom";

// const destinations = [
//   "All Destinations",
//   "Bali, Indonesia",
//   "Paris, France",
//   "Santorini, Greece",
//   "Tokyo, Japan",
// ];

// const durations = [
//   "Any Length",
//   "Weekend (1–3 days)",
//   "Short Trip (4–6 days)",
//   "1 Week",
//   "2 Weeks",
//   "1 Month+",
// ];



export default function TourplanHero() {
    const [openField, setOpenField] = useState(null); // "destination" | "duration" | "budget" | null
 const [states, setStates] = useState([]);
const [durations, setDurations] = useState([]);
const [categories, setCategories] = useState([]);

const [selectedState, setSelectedState] = useState("");
const [selectedDuration, setSelectedDuration] = useState("");
const [selectedCategory, setSelectedCategory] = useState("");


const navigate = useNavigate();
const [searchParams] = useSearchParams();

const handleSearch = () => {
  const params = new URLSearchParams();

  if (selectedState) params.append("state", selectedState);
  if (selectedDuration) params.append("duration", selectedDuration);
  if (selectedCategory) params.append("packageType", selectedCategory);

  navigate(`/tour-plan?${params.toString()}`);
};

useEffect(() => {
  const fetchSearchData = async () => {
    try {
      const data = await getSearchData();

      setStates(data.State);

      const uniqueDurations = Array.from(
        new Map(data.duration.map(item => [item.Duration, item])).values()
      );

      const uniqueCategories = Array.from(
        new Map(data.packageType.map(item => [item.packageType, item])).values()
      );

      setDurations(uniqueDurations);
      setCategories(uniqueCategories);
    } catch (error) {
      console.log(error);
    }
  };

  fetchSearchData();
}, []);


useEffect(() => {
    setSelectedState(searchParams.get("state") || "");
    setSelectedDuration(searchParams.get("duration") || "");
    setSelectedCategory(searchParams.get("packageType") || "");
  }, [searchParams]);

  
  return (
<section className="relative  pt-4">      {/* Background image */}
      <img
        src={heroBg}
        alt="Mountains above the clouds"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,38,63,0.60)_0%,rgba(0,38,63,0.40)_85%,#F7F9FB_100%)]"/>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col gap-4 items-center px-4 pt-20 sm:pt-28 md:pt-32 text-center">
        <p className="inter text-[11px] sm:text-[16px]  font-[400] uppercase tracking-[3px] sm:tracking-[4.8px] text-[#CDE5FF]">
          Experience The Unseen
        </p>

        <h1 className="poppins text-[35px] sm:text-[45px] md:text-[64px] font-[600] leading-[72px] leading-[-1.28px] text-white">
          Curated Journeys
        </h1>

        <p className="inter mt-2 max-w-[672px] text-[15px] sm:text-[17px] md:text-[18px] leading-6 sm:leading-7 font-[300] text-white opacity-[90%]">
          Rare expeditions designed for the refined soul, blending absolute
          luxury with raw natural wonder.
        </p>
      </div>

      {/* Search bar card */}
      <div className="relative z-10 mt-14 sm:mt-16 md:mt-20 px-4 sm:px-6 pb-10 sm:pb-0 top-8">
  <div className="mx-auto flex w-full max-w-[1025px] flex-col gap-2 md:gap-4 lg:gap-6 rounded-[32px] sm:rounded-[32px] bg-white/50 backdrop-blur-md border border-[#FFFFFF33] py-4 px-7 sm:py-5 sm:px-10 shadow-sm md:flex-row md:flex-wrap lg:flex-nowrap md:items-center md:justify-between">
    
    {/* Destination */}
    <div className="relative flex-1 min-w-[45%] md:min-w-[45%] lg:min-w-[100px]">
      <label className="inter block text-[16px] font-[400] text-[#42474E] mb-2">
        Destination
      </label>
      <button
        type="button"
        onClick={() => setOpenField(openField === "destination" ? null : "destination")}
        className="flex w-full items-center justify-between gap-2 rounded-full border border-[#C2C7CE] bg-[#FFFFFF66] px-4 py-3"
      >
        <span className="inter text-[15px] sm:text-[16px] font-[400] text-[#191C1E] truncate">
          {selectedState || "All Destinations"}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#8A94A0] transition-transform ${
            openField === "destination" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openField === "destination" && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-64 overflow-y-auto rounded-2xl bg-white p-2 shadow-xl origin-top animate-in fade-in zoom-in-95 duration-200">
          {states.map((item) => (
            <button
              key={item.State}
              type="button"
              onClick={() => {
                setSelectedState(item.State);
                setOpenField(null);
              }}
              className={`inter block w-full rounded-xl px-4 py-2 text-left text-[15px] hover:bg-[#F1F5F9] ${
                item.State === selectedState ? "text-[#0B4F8A] font-[600]" : "text-[#00263F]"
              }`}
            >
              {item.State}
            </button>
          ))}
        </div>
      )}
    </div>

    {/* Duration */}
    <div className="relative flex-1 min-w-[45%] md:min-w-[45%] lg:min-w-[200px]">
      <label className="inter block text-[16px] font-[400] text-[#42474E] mb-2">
        Duration
      </label>
      <button
        type="button"
        onClick={() => setOpenField(openField === "duration" ? null : "duration")}
        className="flex w-full items-center justify-between gap-2 rounded-full border border-[#C2C7CE] bg-[#FFFFFF66] px-4 py-3"
      >
        <span className="inter text-[15px] sm:text-[16px] font-[400] text-[#191C1E] truncate">
          {selectedDuration || "Any Length"}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#8A94A0] transition-transform ${
            openField === "duration" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openField === "duration" && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-64 overflow-y-auto rounded-2xl bg-white p-2 shadow-xl origin-top animate-in fade-in zoom-in-95 duration-200">
          {durations.map((item) => (
            <button
              key={item.Duration}
              type="button"
              onClick={() => {
                setSelectedDuration(item.Duration);
               setOpenField(null);
              }}
              className={`inter block w-full rounded-xl px-4 py-2 text-left text-[15px] hover:bg-[#F1F5F9] ${
                item.Duration === selectedDuration? "text-[#0B4F8A] font-[600]" : "text-[#00263F]"
              }`}
            >
              {item.Duration
              }
            </button>
          ))}
        </div>
      )}
    </div>


    <div className="relative flex-1 min-w-[45%] md:min-w-[45%] lg:min-w-[200px]">
      <label className="inter block text-[16px] font-[400] text-[#42474E] mb-2">
        PackageType
      </label>
      <button
        type="button"
        onClick={() =>   setOpenField(openField === "category" ? null : "category")}
        className="flex w-full items-center justify-between gap-2 rounded-full border border-[#C2C7CE] bg-[#FFFFFF66] px-4 py-3"
      >
        <span className="inter text-[15px] sm:text-[16px] font-[400] text-[#191C1E] truncate">
          {selectedCategory || "Any Package"}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#8A94A0] transition-transform ${
            openField === "category" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openField === "category" && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-64 overflow-y-auto rounded-2xl bg-white p-2 shadow-xl origin-top animate-in fade-in zoom-in-95 duration-200">
          {categories.map((item) => (
            <button
              key={item.packageType}
              type="button"
              onClick={() => {
                setSelectedCategory(item.packageType);
               setOpenField(null);
              }}
              className={`inter block w-full rounded-xl px-4 py-2 text-left text-[15px] hover:bg-[#F1F5F9] ${
                item.packageType === selectedCategory ? "text-[#0B4F8A] font-[600]" : "text-[#00263F]"
              }`}
            >
              {item.packageType}
            </button>
          ))}
        </div>
      )}
    </div>

 

    <button onClick={handleSearch}
     className="inter cursor-pointer mt-2 md:mt-4 lg:mt-0 flex w-full md:w-full lg:w-auto items-center justify-center border border-white rounded-full bg-gradient-to-r from-[#0056CD] to-[#00E5FF] px-10 py-4 text-[18px] font-[600] text-white whitespace-nowrap">
      Search
    </button>
  </div>
</div>
    </section>
  );
}