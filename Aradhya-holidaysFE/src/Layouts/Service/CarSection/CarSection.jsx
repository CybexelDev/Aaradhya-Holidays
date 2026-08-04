import React, { useEffect, useState } from "react";
import PremiumCard from "../../../Components/PremiumCard/PremiumCard";
import { getVehicles,getCategoryUser } from "../../../Api/userapi";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
export default function CarSection() {
    const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("all");

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;

 useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);

      const [vehicleRes, categoryRes] = await Promise.all([
        getVehicles(),
        getCategoryUser(),
      ]);

      setVehicles(vehicleRes);
      setCategories(categoryRes.categoryData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

 if (loading) {
  return (
    <section className="w-full bg-[#F7F8FA] flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-[#3700ff] animate-spin" />
        <p className="text-[#5B6B79] text-sm font-medium">
          Loading vehicles...
        </p>
      </div>
    </section>
  );
}
const filteredVehicles =
  selectedCategory === "all"
    ? vehicles
    : vehicles.filter(
        (vehicle) => vehicle.CategoryId === selectedCategory
      );

const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const currentVehicles = filteredVehicles.slice(
  indexOfFirstItem,
  indexOfLastItem
);

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
<select
  value={selectedCategory}
  onChange={(e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  }}
  className="h-[40px] rounded-full border border-[#D9DDE3] bg-white px-3 pr-16 text-[14px] text-[#00263F] outline-none"
>
  <option value="all">All Categories</option>

  {categories.map((category) => (
    <option key={category._id} value={category._id}>
      {category.categoryName}
    </option>
  ))}
</select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {currentVehicles.map((vehicle) => (
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
      <div className="flex justify-center items-center gap-2 mt-14 flex-wrap">

  {/* First Page */}
  <button
    onClick={() => handlePageChange(1)}
    disabled={currentPage === 1}
    className="w-8 h-8 rounded-full border border-[#E4E7EC] disabled:opacity-40"
  >
    ⏮
  </button>

  {/* Previous */}
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="w-8 h-8 rounded-full border border-[#E4E7EC] disabled:opacity-40"
  >
    &#8249;
  </button>

  {/* Page Numbers */}
  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      className={`w-8 h-8 rounded-full text-sm transition ${
        currentPage === page
          ? "bg-[#FF7A00] text-white"
          : "border border-[#E4E7EC] hover:bg-white"
      }`}
    >
      {page}
    </button>
  ))}

  {/* Next */}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="w-8 h-8 rounded-full border border-[#E4E7EC] disabled:opacity-40"
  >
    &#8250;
  </button>

  {/* Last Page */}
  <button
    onClick={() => handlePageChange(totalPages)}
    disabled={currentPage === totalPages}
    className="w-8 h-8 rounded-full border border-[#E4E7EC] disabled:opacity-40"
  >
    ⏭
  </button>

</div>
      </div>
    </section>
  );
}