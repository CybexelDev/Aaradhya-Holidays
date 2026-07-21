import React from "react";
import { Leaf, Star, Infinity as InfinityIcon, Flag } from "lucide-react";
import img1 from "../../../../src/assets/About/PhilosophySection/1.jpg"
const philosophyCards = [
  {
    key: "earth",
    variant: "image",
    image:
      img1,
    icon: Leaf,
    iconColor: "#43B0FF",
    title: "Rooted in Earth",
    description:
      "Our itineraries are built around natural rhythms, favoring the organic over the artificial.",
    span: "md:col-span-2",
  },
  {
    key: "luxury",
    variant: "cream",
    icon: Star,
    iconColor: "#00263F",
    title: "Quiet Luxury",
    description:
      "Elegance that doesn't shout. Premium comfort that honors its natural surroundings.",
    span: "md:col-span-1",
  },
  {
    key: "connection",
    variant: "dark",
    icon: InfinityIcon,
    iconColor: "#43B0FF",
    title: "Endless Connection",
    description:
      "Connecting people to places, and places to the future of conservation.",
    span: "md:col-span-1",
  },
  {
    key: "legacy",
    variant: "image",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200&auto=format&fit=crop",
    icon: Flag,
    iconColor: "#1D9E75",
    title: "Intentional Legacy",
    description:
      "We believe in travel that enriches both the visitor and the host community sustainably.",
    span: "md:col-span-2",
  },
];

function PhilosophyCard({ card }) {
  const Icon = card.icon;

  if (card.variant === "image") {
    return (
      <div
        className={`relative rounded-[24px] overflow-hidden min-h-[220px] sm:min-h-[230px] ${card.span}`}
     
      >
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 " />
        <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
          <Icon
            className="w-6 h-6 mb-3"
            style={{ color: card.iconColor }}
            strokeWidth={1.75}
          />
          <h3 className="text-[#00263F] text-xl sm:text-2xl font-semibold poppins mb-2">
            {card.title}
          </h3>
          <p className="text-[#00263F]/80 text-sm leading-relaxed max-w-md">
            {card.description}
          </p>
        </div>
      </div>
    );
  }

  if (card.variant === "cream") {
    return (
      <div
        className={`rounded-[24px] bg-[#EFE1C8] p-6 sm:p-8 flex flex-col justify-center min-h-[220px] sm:min-h-[230px] ${card.span}`}
      >
        <Icon
          className="w-6 h-6 mb-4"
          style={{ color: card.iconColor }}
          strokeWidth={1.75}
        />
        <h3 className="text-[#00263F] text-xl sm:text-2xl font-semibold poppins mb-2">
          {card.title}
        </h3>
        <p className="text-[#00263F]/70 text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
    );
  }

  // dark variant
  return (
    <div
      className={`rounded-[24px] bg-[#0A2540] p-6 sm:p-8 flex flex-col justify-end min-h-[220px] sm:min-h-[230px] ${card.span}`}
    >
      <Icon
        className="w-6 h-6 mb-4"
        style={{ color: card.iconColor }}
        strokeWidth={1.75}
      />
      <h3 className="text-white text-xl sm:text-2xl font-semibold poppins mb-2">
        {card.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">
        {card.description}
      </p>
    </div>
  );
}

export default function CorePhilosophySection() {
  return (
    <section className="w-full bg-[#F7F8FA] py-16 sm:py-20 inter ">
      <div className="   text-center mb-10 sm:mb-14">
        <p className="text-[#FF7A00] text-xs font-[500] tracking-widest mb-3">
          TRUST
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#00263F] mb-3 poppins">
          Our Core Philosophy
        </h2>
        <p className="text-[#848484] font-[400] text-sm max-w-md mx-auto alexandria">
          Our purpose is clear, our vision is broad, and our values are the
          compass that guides us.
        </p>
      </div>

      <div className="px-[40px] w-full ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {philosophyCards.map((card) => (
            <PhilosophyCard key={card.key} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}