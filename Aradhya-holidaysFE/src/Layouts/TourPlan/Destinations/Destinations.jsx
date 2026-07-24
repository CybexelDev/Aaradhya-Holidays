import { useEffect, useState } from "react";
import { getPackages } from "../../../Api/userapi";
import DestinationCard from "../../../Components/DestinationCard/DestinationCard";




export default function Destinations() {
    const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchPackages = async () => {
    try {
      const data = await getPackages();
      console.log("Packages:", data);
      setDestinations(data);
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
    <section className="px-4 py-10 md:px-[60px] sm:pt-32 sm:pb-20">
      <div className="mx-auto grid  grid-cols-1 gap-x-5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Load more */}
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
    </section>
  );
}