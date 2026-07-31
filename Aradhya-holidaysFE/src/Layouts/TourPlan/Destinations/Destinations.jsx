import { useEffect, useState } from "react";
import { getPackages, getSearchResults } from "../../../Api/userapi";
import DestinationCard from "../../../Components/DestinationCard/DestinationCard";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();

const state = searchParams.get("state");
const duration = searchParams.get("duration");
const packageType = searchParams.get("packageType");
const navigate = useNavigate()

// console.log(window.location.href);
console.log({
  state,
  duration,
  packageType,
});

useEffect(() => {
  let isCancelled = false;

  const fetchPackages = async () => {
    try {
      setLoading(true);

      let data;

      if (state || duration || packageType) {
        data = await getSearchResults({ state, duration, packageType });
      } else {
        data = await getPackages();
      }

      if (!isCancelled) {
        setDestinations(data || []);
      }
    } catch (error) {
      console.error(error);
      if (!isCancelled) {
        setDestinations([]);
      }
    } finally {
      if (!isCancelled) {
        setLoading(false);
      }
    }
  };

  fetchPackages();

  return () => {
    isCancelled = true; // any in-flight request from this run is now stale
  };
}, [state, duration, packageType]);


  if (loading) {
    return (
      <section className="py-20 text-center">
        Loading...
      </section>
    );
  }

  return (
    <section className="px-4 py-10 md:px-[60px] sm:pt-32 sm:pb-20">
      <div className="mx-auto grid grid-cols-1 gap-x-5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.length > 0 ? (
  destinations.map((item) => (
            <DestinationCard
              key={item._id}
              id={item._id}
              image={item.Image?.[0]}
              duration={item.Duration}
              title={item.packageName}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-4 px-6 text-center">
  {/* Icon */}
  <div className="w-20 h-20 rounded-full bg-[#EAF6FF] flex items-center justify-center mb-6">
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L15.8 15.8M17 10.5C17 14.09 14.09 17 10.5 17C6.91 17 4 14.09 4 10.5C4 6.91 6.91 4 10.5 4C14.09 4 17 6.91 17 10.5Z"
        stroke="#00639A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>

  <h3 className="text-[30px] font-bold text-[#00263F] mb-3 poppins">
    No Perfect Journey Found
  </h3>

  <p className="max-w-md text-[#6B7280] text-[16px] leading-7 inter">
 We couldn't find any packages matching your selected filters.
    Please try different options.
  </p>

  <button
    onClick={() => navigate('/tour-plan')}
    className="mt-8 px-8 py-3 rounded-full cursor-pointer bg-[#D11115] text-white font-semibold hover:bg-[#b50e12] transition-all duration-300"
  >
    Explore All Packages
  </button>
</div>
        )}
      </div>

      {destinations.length > 0 && (
        <div className="mx-auto mt-10 sm:mt-20 flex max-w-[1200px] items-center justify-center gap-4">
          <span className="h-[1px] w-12 bg-[#72777E]" />
          <button
            type="button"
            className="inter text-[16px] font-[400] uppercase tracking-[1.6px] text-[#42474E] hover:text-[#00263F]"
          >
            Load More Journeys
          </button>
          <span className="h-[1px] w-12 bg-[#72777E]" />
        </div>
      )}
    </section>
  );
}