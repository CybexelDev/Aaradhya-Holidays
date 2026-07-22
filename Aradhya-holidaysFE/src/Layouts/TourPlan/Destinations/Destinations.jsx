import aegeanImg from "../../../assets/Home/destinationcards/11.png";
import keralaImg from "../../../assets/Home/destinationcards/12.png";
import alpineImg from "../../../assets/Home/destinationcards/13.png";
import DestinationCard from "../../../Components/DestinationCard/DestinationCard";

const journeys = [
  {
    id: 1,
    title: "Aegean Luxury Escape",
    duration: "7 Days / 6 Nights",
    price: "₹2,450",
    image: aegeanImg,
  },
  {
    id: 2,
    title: "Kerala Backwater Serenity",
    duration: "5 Days / 4 Nights",
    price: "₹1,200",
    image: keralaImg,
  },
  {
    id: 3,
    title: "Alpine Adventure Peaks",
    duration: "10 Days / 9 Nights",
    price: "₹3,800",
    image: alpineImg,
  },
  {
    id: 4,
    title: "Aegean Luxury Escape",
    duration: "7 Days / 6 Nights",
    price: "₹2,450",
    image: aegeanImg,
  },
  {
    id: 5,
    title: "Kerala Backwater Serenity",
    duration: "5 Days / 4 Nights",
    price: "₹1,200",
    image: keralaImg,
  },
  {
    id: 6,
    title: "Alpine Adventure Peaks",
    duration: "10 Days / 9 Nights",
    price: "₹3,800",
    image: alpineImg,
  },
];

export default function Destinations() {
  return (
    <section className="px-4 py-10 md:px-[60px] sm:pt-32 sm:pb-20">
      <div className="mx-auto grid  grid-cols-1 gap-x-5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
        {journeys.map((journey) => (
          <DestinationCard
            key={journey.id}
            image={journey.image}
            duration={journey.duration}
            title={journey.title}
            price={journey.price}
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