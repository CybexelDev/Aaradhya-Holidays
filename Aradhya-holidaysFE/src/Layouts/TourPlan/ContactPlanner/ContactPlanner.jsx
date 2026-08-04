import { Phone } from "lucide-react";
import bgimg from "../../../assets/TourPlan/bgimg.jpg";
import { Navigate, useNavigate } from "react-router-dom";
export default function ContactPlanner() {
const navigate = useNavigate()
const handleNavigate = (path) => {
  navigate(path);
  window.scrollTo({
    top: 0,
    behavior: "smooth", // or "auto"
  });
};  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src={bgimg}
        alt="Santorini coastline"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00263F]/92" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[672px] flex-col items-center gap-4 sm:gap-6 px-4 py-16 text-center sm:py-28 md:py-32">
        <h2 className="poppins text-[26px] sm:text-[40px] md:text-[48px] font-[400] leading-[34px] sm:leading-[48px] md:leading-[48px] text-white">
          Can't find your ideal path?
        </h2>

        <p className="inter text-[14px] sm:text-[18px] leading-6 sm:leading-7 font-[300] text-white/60">
          Our master planners specialize in Bespoke Itineraries. We will design a
          singular journey tailored specifically to your curiosities.
        </p>

        <button
          type="button"
          onClick={()=>handleNavigate("/contact")}
          className="inter cursor-pointer mt-2 sm:mt-4 flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-[#0254AD] to-[#01B3CE] backdrop-blur-lg px-6 py-3 sm:px-10 sm:py-4 text-[12px] sm:text-[14px] md:text-[16px] font-[600] uppercase text-white whitespace-nowrap"
        >
          <svg
            className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 13V17C14.242 17 11.93 16.505 10 15.675C6.159 14.023 3.824 11.045 2.5 8C1.4 5.472 1 2.898 1 1H5L6 5L2.5 8C3.824 11.045 6.159 14.023 10 15.675L13 12L17 13Z"
              fill="white"
            />
            <path
              d="M10 15.675C11.93 16.505 14.242 17 17 17V13L13 12L10 15.675ZM10 15.675C6.159 14.023 3.824 11.045 2.5 8M2.5 8C1.4 5.472 1 2.898 1 1H5L6 5L2.5 8Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Contact a Planner
        </button>
      </div>
    </section>
  );
}