import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import PremiumCard from "../../../Components/PremiumCard/PremiumCard";
import { fleetData } from "../../Service/CarSection/CarSection";

export default function RelatedCars() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
          {fleetData.map((car) => (
            <SwiperSlide key={car.id}>
              <PremiumCard {...car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}