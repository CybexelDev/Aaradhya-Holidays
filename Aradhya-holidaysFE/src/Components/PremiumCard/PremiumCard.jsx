import React from "react";
import { Star, Car, Users, Snowflake, Tv, Music2 } from "lucide-react";

const iconMap = {
  seater: Users,
  ac: Snowflake,
  tv: Tv,
  music: Music2,
};

function FeaturePill({ icon, label }) {
  const Icon = iconMap[icon];

  return (
    <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1.5 rounded-full">
      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" strokeWidth={2} />
      <span>{label}</span>
    </div>
  );
}

export default function PremiumCard({
  image = "",
  category = "Convertible",
  title = "Rolls-Royce Ghost",
  features = [
    { icon: "seater", label: "4 seater" },
    { icon: "ac", label: "A/C Available" },
    { icon: "tv", label: "TV Available" },
    { icon: "music", label: "Music System / Bluetooth" },
  ],
  favorited = true,
  onBookNow = () => {},
}) {
  return (
    <div className="relative w-full h-[430px] sm:h-[537px] rounded-[24px] sm:rounded-[32px] overflow-hidden shrink-0 shadow-[0_10px_40px_-10px_rgba(11,60,93,0.10)]">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Favorite */}
      <button
        type="button"
        aria-label="Toggle favorite"
        className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
      >
        <Star
          className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
          fill={favorited ? "currentColor" : "none"}
          strokeWidth={2}
        />
      </button>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 sm:pt-10">
        {/* Category */}
        <div className="flex items-center gap-1.5 text-white/90 text-xs sm:text-sm font-medium mb-2">
          <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
          {category}
        </div>

        {/* Title */}
        <h3 className="text-white text-[24px] leading-[30px] sm:text-3xl font-bold mb-4">
          {title}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {features.map((f, i) => (
            <FeaturePill key={i} icon={f.icon} label={f.label} />
          ))}
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={onBookNow}
          className="w-full bg-white text-[#0056CD] text-[15px] sm:text-base font-semibold py-3 sm:py-3.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}