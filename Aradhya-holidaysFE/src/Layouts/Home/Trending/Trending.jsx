import React, { useEffect, useState } from "react";
import DestinationCard from "../../../Components/DestinationCard/DestinationCard";
import { useNavigate } from "react-router-dom";
import { getPackages } from "../../../Api/userapi";



export default function Trending() {
  const [destinations, setDestinations] = useState([]);
const [loading, setLoading] = useState(true);
  const navigate = useNavigate();



  useEffect(() => {
  const fetchPackages = async () => {
  try {
    const data = await getPackages();
    console.log("Packages:", data);
    setDestinations(data.slice(0, 3));
  } catch (error) {
    console.error("Error fetching packages:", error);
  } finally {
    setLoading(false);
  }
};
  fetchPackages();
}, []);

 if (loading) {
    return (
      <section className="py-20 text-center">
        Loading...
      </section>
    );
  }
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
              Packages
            </h2>

            <p className="text-[#42474E] text-[15px] sm:text-[16px] max-w-[500px]">
              Our most sought-after seasonal experiences curated just for you.
            </p>
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
          {destinations.map((item) => (
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