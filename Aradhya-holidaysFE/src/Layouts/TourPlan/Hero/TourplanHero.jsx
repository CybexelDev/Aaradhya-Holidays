import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import heroBg from "../../../assets/TourPlan/tourplan.jpg";
import Navbar from "../../../Components/Navbar/Navbar";

const destinations = [
  "All Destinations",
  "Bali, Indonesia",
  "Paris, France",
  "Santorini, Greece",
  "Tokyo, Japan",
];

const durations = [
  "Any Length",
  "Weekend (1–3 days)",
  "Short Trip (4–6 days)",
  "1 Week",
  "2 Weeks",
  "1 Month+",
];

const budgets = [
  "Any Budget",
  "Budget (Under $1,000)",
  "Mid-range ($1,000–$3,000)",
  "Premium ($3,000–$7,000)",
  "Luxury ($7,000+)",
];

export default function TourplanHero() {
    const [openField, setOpenField] = useState(null); // "destination" | "duration" | "budget" | null
  const [destination, setDestination] = useState("All Destinations");
  const [duration, setDuration] = useState("Any Length");
  const [budget, setBudget] = useState("Any Budget");
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
  <div className="mx-auto flex w-full max-w-[1025px] flex-col gap-2 md:gap-4 lg:gap-6 rounded-[32px] sm:rounded-[32px] bg-white/50 backdrop-blur-md border border-[#FFFFFF33] py-4 px-7 sm:py-5 sm:px-10 shadow-2xl md:flex-row md:flex-wrap lg:flex-nowrap md:items-center md:justify-between">
    
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
        <span className="inter text-[15px] sm:text-[16px] font-[500] text-[#00263F] truncate">
          {destination}
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
          {destinations.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setDestination(opt);
                setOpenField(null);
              }}
              className={`inter block w-full rounded-xl px-4 py-2 text-left text-[15px] hover:bg-[#F1F5F9] ${
                opt === destination ? "text-[#0B4F8A] font-[600]" : "text-[#00263F]"
              }`}
            >
              {opt}
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
        <span className="inter text-[15px] sm:text-[16px] font-[500] text-[#00263F] truncate">
          {duration}
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
          {durations.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setDuration(opt);
                setOpenField(null);
              }}
              className={`inter block w-full rounded-xl px-4 py-2 text-left text-[15px] hover:bg-[#F1F5F9] ${
                opt === duration ? "text-[#0B4F8A] font-[600]" : "text-[#00263F]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>

    {/* Budget */}
    <div className="relative flex-1 min-w-[45%] md:min-w-[45%] lg:min-w-[200px]">
      <label className="inter block text-[16px] font-[400] text-[#42474E] mb-2">
        Budget
      </label>
      <button
        type="button"
        onClick={() => setOpenField(openField === "budget" ? null : "budget")}
        className="flex w-full items-center justify-between rounded-full border border-[#C2C7CE] bg-[#FFFFFF66] px-4 py-3"
      >
        <span className="inter text-[15px] sm:text-[16px] font-[500] text-[#00263F] truncate">
          {budget}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#8A94A0] transition-transform ${
            openField === "budget" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openField === "budget" && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-2xl bg-white p-2 shadow-xl transition-all duration-200 ease-out">
          {budgets.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setBudget(opt);
                setOpenField(null);
              }}
              className={`inter block w-full rounded-xl px-4 py-2 text-left text-[15px] hover:bg-[#F1F5F9] ${
                opt === budget ? "text-[#0B4F8A] font-[600]" : "text-[#00263F]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>

    <button className="inter cursor-pointer mt-2 md:mt-4 lg:mt-0 flex w-full md:w-full lg:w-auto items-center justify-center border border-white rounded-full bg-gradient-to-r from-[#0056CD] to-[#00E5FF] px-10 py-4 text-[18px] font-[600] text-white whitespace-nowrap">
      Search
    </button>
  </div>
</div>
    </section>
  );
}