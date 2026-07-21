import React from "react";
import DestinationCard from "../../../Components/DestinationCard/DestinationCard";
import img1 from "../../../assets/Home/destinationcards/11.png";
import img2 from "../../../assets/Home/destinationcards/12.png";
import img3 from "../../../assets/Home/destinationcards/13.png";

const destinations = [
  {
    id: 1,
    image: img1,
    duration: "7 Days / 6 Nights",
    title: (
      <>
        Aegean Luxury
        <br />
        Escape
      </>
    ),
    price: "₹2,450",
  },
  {
    id: 2,
    image: img2,
    duration: "5 Days / 4 Nights",
    title: (
      <>
        Kerala Backwater
        <br />
        Serenity
      </>
    ),
    price: "₹1,200",
  },
  {
    id: 3,
    image: img3,
    duration: "10 Days / 9 Nights",
    title: (
      <>
        Alpine Adventure
        <br />
        Peaks
      </>
    ),
    price: "₹3,800",
  },
];

export default function Trending() {
  return (
    <section className="w-full bg-slate-50 px-4 sm:px-6 lg:px-15 py-10 sm:py-12 lg:py-14 inter">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <p className="text-[#FF7A00] text-[11px] sm:text-xs font-medium tracking-[0.25em] mb-2 poppins">
              VOYARA TEAM
            </p>

            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#00263F] tracking-[-0.32px] mb-3">
              Trending Getaways
            </h2>

            <p className="text-[#42474E] text-[15px] sm:text-[16px] max-w-[500px]">
              Our most sought-after seasonal experiences curated just for you.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#00639A] text-[15px] sm:text-[16px] font-bold hover:gap-3 transition-all"
          >
            View All Destinations

            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M0 6V8H16V6H0ZM12 8V10H14V8H12ZM10 10V12H12V10H10ZM8 12V14H10V12H8ZM12 6V4H14V6H12Z"
                fill="#FF7A00"
              />
              <path
                d="M10 10V2H12V10H10ZM8 12V0H10V12H8Z"
                fill="#FF7A00"
              />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <DestinationCard key={d.id} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}