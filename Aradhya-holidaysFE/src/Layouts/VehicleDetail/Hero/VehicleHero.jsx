import { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";

export default function HeroSection({ vehicle }) {
  const [active, setActive] = useState(0);

  const slides =
    vehicle?.Image?.map((img, index) => ({
      id: index,
      image: img,
      alt: vehicle.vehicleName || `Vehicle image ${index + 1}`,
    })) || [];

  if (!slides.length) return null;

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[255px] sm:h-[60vh] md:h-[75vh] lg:h-screen bg-slate-900 overflow-hidden">
      {/* ================= Main Image ================= */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          key={slides[active].id}
          src={slides[active].image}
          alt={slides[active].alt}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            object-bottom
            sm:object-center
            transition-opacity duration-500
          "
        />
      </div>

      {/* ================= Navbar ================= */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-3 sm:pt-4">
        <Navbar />
      </div>

      {/* ================= Overlay ================= */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />

      {/* ================= Bottom Slider ================= */}
     <div
  className="
    absolute
    bottom-3 sm:bottom-5 md:bottom-6
    left-1/2
    -translate-x-1/2
    z-20
    w-full
    px-2 sm:px-4
  "
>
  <div
    className="
      mx-auto
      flex
      w-fit
      max-w-full
      items-center
      justify-center
      gap-2
      sm:gap-3
      md:gap-4
    "
  >
    {/* ================= Previous Button ================= */}
    <button
      type="button"
      onClick={goPrev}
      aria-label="Previous slide"
      className="
        flex
        h-8 w-8
        sm:h-10 sm:w-10
        md:h-11 md:w-11
        lg:h-12 lg:w-12
        shrink-0
        cursor-pointer
        items-center
        justify-center
        rounded-lg
        sm:rounded-xl
        border border-white
        bg-white/90
        shadow-lg
        transition-all
        duration-200
        hover:bg-white
        active:scale-95
      "
    >
      <svg
        className="
          h-3.5 w-2
          sm:h-4 sm:w-2.5
          md:h-5 md:w-3
        "
        viewBox="0 0 11 19"
        fill="none"
      >
        <path
          d="M2.725 9.48837L10.075 16.8384C10.325 17.0884 10.446 17.38 10.438 17.7134C10.43 18.0467 10.3007 18.3384 10.05 18.5884C9.79933 18.8384 9.50767 18.9634 9.175 18.9634C8.84233 18.9634 8.55067 18.8384 8.3 18.5884L0.6 10.9134C0.4 10.7134 0.25 10.4884 0.15 10.2384C0.05 9.98837 0 9.73837 0 9.48837C0 9.23837 0.05 8.98837 0.15 8.73837C0.25 8.48837 0.4 8.26337 0.6 8.06337L8.3 0.363372C8.55 0.113372 8.846 -0.00762791 9.188 0.000372093C9.53 0.00837209 9.82567 0.137705 10.075 0.388372C10.3243 0.639039 10.4493 0.930705 10.45 1.26337C10.4507 1.59604 10.3257 1.88771 10.075 2.13837L2.725 9.48837Z"
          fill="#FF5F1F"
        />
      </svg>
    </button>

    {/* ================= Thumbnail Container ================= */}
    <div
      className="
        flex-none
        max-w-[calc(100vw-100px)]
        sm:max-w-[calc(100vw-130px)]
        md:max-w-[calc(100vw-150px)]
        lg:max-w-[1300px]
        overflow-x-auto
        overflow-y-hidden
        scrollbar-hide
      "
    >
      <div
        className="
          flex
          w-max
          items-center
          justify-start
          gap-2
          sm:gap-3
          md:gap-4
          lg:gap-5
          p-2
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              shrink-0
              overflow-hidden
              cursor-pointer
              rounded-lg
              sm:rounded-xl

              h-12 w-16
              sm:h-[70px] sm:w-[110px]
              md:h-[85px] md:w-[140px]
              lg:h-[110px] lg:w-[180px]
              xl:h-[110px] xl:w-[190px]

              transition-all duration-300

              ${
                active === index
                  ? "border-2 border-orange-500 scale-105 opacity-100"
                  : "border border-white/70 opacity-80 hover:opacity-100"
              }
            `}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>

    {/* ================= Next Button ================= */}
    <button
      type="button"
      onClick={goNext}
      aria-label="Next slide"
      className="
        flex
        h-8 w-8
        sm:h-10 sm:w-10
        md:h-11 md:w-11
        lg:h-12 lg:w-12
        shrink-0
        cursor-pointer
        items-center
        justify-center
        rounded-lg
        sm:rounded-xl
        border border-white
        bg-white/90
        shadow-lg
        transition-all
        duration-200
        hover:bg-white
        active:scale-95
      "
    >
      <svg
        className="
          h-3.5 w-2
          sm:h-4 sm:w-2.5
          md:h-5 md:w-3
        "
        viewBox="0 0 11 19"
        fill="none"
      >
        <path
          d="M7.72422 9.48837L0.374219 16.8384C0.124219 17.0884 0.00321865 17.38 0.011219 17.7134C0.019219 18.0467 0.148552 18.3384 0.399219 18.5884C0.649885 18.8384 0.941552 18.9634 1.27422 18.9634C1.60688 18.9634 1.89855 18.8384 2.14922 18.5884L9.84922 10.9134C10.0492 10.7134 10.1992 10.4884 10.2992 10.2384C10.3992 9.98837 10.4492 9.73837 10.4492 9.48837C10.4492 9.23837 10.3992 8.98837 10.2992 8.73837C10.1992 8.48837 10.0492 8.26337 9.84922 8.06337L2.14922 0.363372C1.89922 0.113372 1.60322 -0.00762791 1.26122 0.000372093C0.919219 0.00837209 0.623552 0.137705 0.374219 0.388372C0.124886 0.639039 -0.000114441 0.930705 -0.000781059 1.26337C-0.00144768 1.59604 0.123552 1.88771 0.374219 2.13837L7.72422 9.48837Z"
          fill="#FF5F1F"
        />
      </svg>
    </button>
  </div>
</div>
      {/* </div> */}
    </section>
  );
}
