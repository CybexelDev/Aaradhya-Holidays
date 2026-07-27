import React from "react";
import DestinationCard from "../../../Components/DestinationCard/DestinationCard";
import img1 from "../../../assets/Home/destinationcards/11.png";
import img2 from "../../../assets/Home/destinationcards/12.png";
import img3 from "../../../assets/Home/destinationcards/13.png";
import { useNavigate } from "react-router-dom";



export default function DiscoverMore({packages}) {
  const navigate = useNavigate()
  return (
    <section className="w-full bg-slate-50 px-4 sm:px-6 lg:px-15 py-10 sm:py-12 lg:py-14 inter">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <p className="text-[#D11115] text-[11px] sm:text-xs font-medium tracking-[0.25em] mb-2 poppins">
Recommended EXperiences
            </p>

            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#00263F] tracking-[-0.32px] mb-3">
Discover More Journey
            </h2>

            <p className="text-[#42474E] text-[15px] sm:text-[16px] max-w-[500px]">
Driven by curiosity and a passion for service, our team is the heartbeat of every journey we curate            </p>
          </div>

          <a
                  onClick={() => navigate("/tour-plan")}
            className="inline-flex cursor-pointer items-center gap-2 text-[#00639A] text-[15px] sm:text-[16px] font-bold hover:gap-3 transition-all"
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
          {packages.map((item) => (
            <DestinationCard
              key={item._id}
              id={item._id}
              image={item.Image?.[0]}
              duration={item.Duration}
              title={item.packageName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}