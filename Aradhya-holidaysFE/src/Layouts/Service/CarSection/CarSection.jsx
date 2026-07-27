import React, { useEffect, useState } from "react";
import PremiumCard from "../../../Components/PremiumCard/PremiumCard";
import { getVehicles } from "../../../Api/userapi";
import { useNavigate } from "react-router-dom";

export default function CarSection() {
    const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const vehicle = await getVehicles();

        setVehicles(vehicle);
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
    <section className="py-20 text-center">
      Loading...
    </section>
  );
}

  return (
    <section className="w-full bg-[#F7F8FA] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-15 inter">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-[535px]">
            <h2 className="text-[28px] sm:text-[32px] font-[500] text-[#00263F] poppins">
              Curated Perfection on Wheels
            </h2>

            <p className="mt-3 text-[15px] sm:text-[16px] leading-[28px] text-[#5B6B79]">
              Each vehicle in our fleet is meticulously selected for its
              performance, comfort, and ability to navigate the world's most
              scenic routes with effortless grace.
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <span className="text-[14px] text-[#5B6B79] ">
              Sort by:
            </span>

            <select className="h-[40px] rounded-full border border-[#D9DDE3] bg-white pr-16 px-3 text-[14px] text-[#00263F] outline-none">
              <option>Luxury</option>
              <option>SUV</option>
              <option>Traveller</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {vehicles.map((vehicle) => (
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

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-14">
             <button className="w-8 h-8 rounded-full border border-[#E4E7EC] text-[#FF7A00] hover:bg-white">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.657 15L15.832 13.825L12.0154 10L15.832 6.175L14.657 5L9.65703 10L14.657 15Z" fill="#FF7A00"/>
<path d="M9.16484 15L10.3398 13.825L6.52318 10L10.3398 6.175L9.16484 5L4.16484 10L9.16484 15Z" fill="#FF7A00"/>
</svg>
          </button>
          <button className="w-8 h-8 rounded-full border border-[#E4E7EC] text-[#98A2B3] hover:bg-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.575 15L13.75 13.825L9.93333 10L13.75 6.175L12.575 5L7.575 10L12.575 15Z" fill="black"/>
</svg>

          </button>

          <button className="w-8 h-8 rounded-full bg-[#FF7A00] text-white text-sm">
            1
          </button>

          <button className="w-8 h-8 rounded-full border border-[#E4E7EC] text-[#333333] hover:bg-white">
            2
          </button>

          <button className="w-8 h-8 rounded-full border border-[#E4E7EC] text-[#667085] hover:bg-white">
            3
          </button>

          <span className="px-1 text-[#98A2B3]">...</span>

          <button className="w-8 h-8 rounded-full border border-[#E4E7EC] text-[#667085] hover:bg-white">
            10
          </button>

          <button className="w-8 h-8 rounded-full border border-[#E4E7EC] text-[#98A2B3] hover:bg-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.675 5L7.5 6.175L11.3167 10L7.5 13.825L8.675 15L13.675 10L8.675 5Z" fill="black"/>
</svg>

          </button>
          
          <button className="w-8 h-8 rounded-full border border-[#E4E7EC] text-[#98A2B3] hover:bg-white">
 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.34297 5L4.16797 6.175L7.98464 10L4.16797 13.825L5.34297 15L10.343 10L5.34297 5Z" fill="#FF7A00"/>
<path d="M10.8352 5L9.66016 6.175L13.4768 10L9.66016 13.825L10.8352 15L15.8352 10L10.8352 5Z" fill="#FF7A00"/>
</svg>          </button>
         

        </div>
      </div>
    </section>
  );
}