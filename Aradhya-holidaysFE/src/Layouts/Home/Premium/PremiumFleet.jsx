import React, { useEffect, useState } from "react";
import PremiumCard from "../../../Components/PremiumCard/PremiumCard";
import { getVehicles } from "../../../Api/userapi";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";


export default function PremiumFleet() {


  const [fleetData, setFleetData] = useState([]);
const [loading, setLoading] = useState(true);
const navigate = useNavigate()
const handleNavigate = (path) => {
  navigate(path);
  window.scrollTo({
    top: 0,
    behavior: "smooth", // or "auto"
  });
};
useEffect(() => {
  const fetchVehicles = async () => {
    try {
      const vehicles = await getVehicles();

      // Shuffle randomly
      const randomVehicles = [...vehicles]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setFleetData(randomVehicles);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchVehicles();
}, []);


if (loading) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2
          size={50}
          className="animate-spin text-[#00639A]"
        />
        <p className="inter text-[16px] text-[#42474E]">
          Loading...
        </p>
      </div>
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
              Our Vehicles
            </h2>

            <p className="text-[#42474E] text-[15px] sm:text-[16px] max-w-[520px]">
              Choose from our curated selection of vehicles for your
              journey.
            </p>
          </div>

          <a
            onClick={() => navigate("/service")}
            className="inline-flex items-center gap-2 cursor-pointer text-[#00639A] text-[15px] sm:text-[16px] font-bold hover:gap-3 transition-all"
          >
            View All Vehicles

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
          {fleetData.map((vehicle) => (
  <PremiumCard
    key={vehicle._id}
    image={vehicle.Image?.[0]}
    category={vehicle.Location}
    title={vehicle.vehicleName}
    favorited={vehicle.Premium}
    features={[
      {
        icon: "seater",
        label: `${vehicle.SeatCapacity} Seater`,
      },
      {
        icon: "ac",
        label: vehicle.AC ? "A/C Available" : "No A/C",
      },
      {
        icon: "tv",
        label: vehicle.TV ? "TV Available" : "No TV",
      },
      {
        icon: "music",
        label: vehicle.MusicSystem
          ? "Music System / Bluetooth"
          : "No Music System",
      },
    ]}
        onClick={() => navigate(`/vehicle/${vehicle._id}`)}
  />
))}
        </div>
      </div>
    </section>
  );
}