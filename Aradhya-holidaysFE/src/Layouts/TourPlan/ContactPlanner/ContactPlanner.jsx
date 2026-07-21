import { Phone } from "lucide-react";
import bgimg from "../../../assets/TourPlan/bgimg.jpg";

export default function ContactPlanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src={bgimg}
        alt="Santorini coastline"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00263F]/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[672px] flex-col items-center gap-5 px-4 py-24 text-center sm:py-28 md:py-32">
  <h2 className="poppins text-[32px] sm:text-[40px] md:text-[48px] font-[400] leading-tight text-white">
    Can't find your ideal path?
  </h2>

  <p className="inter text-[15px] sm:text-[16px] leading-6 sm:leading-7 font-[300] text-white/80">
    Our master planners specialize in Bespoke Itineraries. We will design a
    singular journey tailored specifically to your curiosities.
  </p>

  <button
    type="button"
    className="inter mt-3 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0056CD] to-[#00E5FF] px-8 py-4 text-[14px] sm:text-[15px] font-[700] uppercase tracking-wide text-white"
  >
    <Phone size={16} className="shrink-0" />
    Contact a Planner
  </button>
</div>
    </section>
  );
}