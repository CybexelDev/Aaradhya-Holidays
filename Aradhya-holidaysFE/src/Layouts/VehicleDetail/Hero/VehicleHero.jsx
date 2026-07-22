import { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import car1 from "../../../assets/VehicleDetail/car1.png";
import car2 from "../../../assets/VehicleDetail/car2.png";
import car3 from "../../../assets/VehicleDetail/car3.png";

const slides = [
  {
    id: 1,
    image: car1,
    alt: "Luxury convertible driving along coastal cliff road at sunset",
  },
  {
    id: 2,
    image: car2,
    alt: "Coastal highway winding along the cliffs",
  },
  {
    id: 3,
    image: car3,
    alt: "Convertible parked with ocean sunset backdrop",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  const goPrev = () =>
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goNext = () =>
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[255px] sm:h-screen overflow-hidden bg-slate-900">
      {/* Background — normal flow on mobile so it sets its own height, absolute-fill from sm: up */}
      <img
        key={slides[active].id}
        src={slides[active].image}
        alt={slides[active].alt}
className="absolute inset-0 w-full h-full object-cover object-center sm:object-cover transition-opacity duration-500"      />

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-4">
        <Navbar />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />

      {/* Bottom Slider */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:gap-6 md:gap-7 lg:gap-[45px]">
        {/* Prev arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="flex cursor-pointer h-8 w-7 sm:h-10 sm:w-10 lg:h-14 lg:w-15 shrink-0 items-center justify-center rounded-[10px] sm:rounded-[12px] border border-white bg-white/90 text-orange-500 shadow-lg transition"
        >
          <svg
            className="w-[8px] h-[14px] sm:w-[9px] sm:h-[16px] md:w-[11px] md:h-[19px]"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.725 9.48837L10.075 16.8384C10.325 17.0884 10.446 17.38 10.438 17.7134C10.43 18.0467 10.3007 18.3384 10.05 18.5884C9.79933 18.8384 9.50767 18.9634 9.175 18.9634C8.84233 18.9634 8.55067 18.8384 8.3 18.5884L0.6 10.9134C0.4 10.7134 0.25 10.4884 0.15 10.2384C0.05 9.98837 0 9.73837 0 9.48837C0 9.23837 0.05 8.98837 0.15 8.73837C0.25 8.48837 0.4 8.26337 0.6 8.06337L8.3 0.363372C8.55 0.113372 8.846 -0.00762791 9.188 0.000372093C9.53 0.00837209 9.82567 0.137705 10.075 0.388372C10.3243 0.639039 10.4493 0.930705 10.45 1.26337C10.4507 1.59604 10.3257 1.88771 10.075 2.13837L2.725 9.48837Z"
              fill="#FF5F1F"
            />
          </svg>
        </button>

        {/* Thumbnails */}
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-12 w-17 sm:w-[145px] sm:h-[85px] md:w-[165px] md:h-[95px]  lg:w-[225px] lg:h-[135px] cursor-pointer overflow-hidden rounded-[14px] sm:rounded-[22px] border border-[#FFFFFF] transition ${
              active === index
                ? "border-orange-500 scale-105"
                : "border-white/70 opacity-80 hover:opacity-100"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}

        {/* Next arrow */}
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="flex cursor-pointer h-8 w-7 sm:h-10 sm:w-10 lg:h-14 lg:w-15 shrink-0 items-center justify-center rounded-[10px] sm:rounded-[12px] border border-white bg-white/90 text-orange-500 shadow-lg transition"
        >
          <svg
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[8px] h-[14px] sm:w-[9px] sm:h-[16px] md:w-[11px] md:h-[19px]"
          >
            <path
              d="M7.72422 9.48837L0.374219 16.8384C0.124219 17.0884 0.00321865 17.38 0.011219 17.7134C0.0192194 18.0467 0.148552 18.3384 0.399219 18.5884C0.649885 18.8384 0.941552 18.9634 1.27422 18.9634C1.60688 18.9634 1.89855 18.8384 2.14922 18.5884L9.84922 10.9134C10.0492 10.7134 10.1992 10.4884 10.2992 10.2384C10.3992 9.98837 10.4492 9.73837 10.4492 9.48837C10.4492 9.23837 10.3992 8.98837 10.2992 8.73837C10.1992 8.48837 10.0492 8.26337 9.84922 8.06337L2.14922 0.363372C1.89922 0.113372 1.60322 -0.00762791 1.26122 0.000372093C0.919219 0.00837209 0.623552 0.137705 0.374219 0.388372C0.124886 0.639039 -0.000114441 0.930705 -0.000781059 1.26337C-0.00144768 1.59604 0.123552 1.88771 0.374219 2.13837L7.72422 9.48837Z"
              fill="#FF5F1F"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}