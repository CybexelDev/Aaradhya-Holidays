import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PremiumCard from "../../../Components/PremiumCard/PremiumCard";

import "swiper/css";
import "swiper/css/navigation";
import { getVehicles } from "../../../Api/userapi";
import { useNavigate } from "react-router-dom";

export default function RelatedCars({ cars, allCars, currentId }) {
  const navigate = useNavigate()
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const displayCars =
  cars.length > 0
    ? cars
    : allCars.filter((car) => car._id !== currentId);
  return (
    <section className="bg-[#F7F8FA] py-16 lg:py-20 px-4 sm:px-6 lg:px-15">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[28px] sm:text-[36px] font-[600] text-[#00263F] poppins">
            Related Cars
          </h2>

          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-xl bg-white border border-[#ECECEC] shadow-sm flex items-center justify-center transition hover:bg-[#FFF5EF]"
            >
              <ChevronLeft
                size={20}
                className="text-[#FF6B35]"
              />
            </button>

            <button
              ref={nextRef}
              className="w-11 h-11 rounded-xl bg-white border border-[#ECECEC] shadow-sm flex items-center justify-center transition hover:bg-[#FFF5EF]"
            >
              <ChevronRight
                size={20}
                className="text-[#FF6B35]"
              />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {displayCars.map((car) => (
  <SwiperSlide key={car._id}>
     <PremiumCard
            key={car._id}
            image={car.Image?.[0]}
            category={car.Location}
            title={car.vehicleName}
            favorited={car.Premium}
            features={[
              {
                icon: "seater",
                label: `${car.SeatCapacity} Seater`,
              },
              {
                icon: "ac",
                label: car.AC ? "A/C Available" : "No A/C",
              },
              {
                icon: "tv",
                label: car.TV ? "TV Available" : "No TV",
              },
              {
                icon: "music",
                label: car.MusicSystem
                  ? "Music System / Bluetooth"
                  : "No Music System",
              },
            ]}
            onClick={() => navigate(`/vehicle/${car._id}`)}
          />
  </SwiperSlide>
))}
        </Swiper>
      </div>
    </section>
  );
}