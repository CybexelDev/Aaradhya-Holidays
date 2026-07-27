import React, { useState, useEffect } from "react";
import bgImage from "../../../assets/Home/testimonial/bgimage.jpg"
import { getTestimonials } from "../../../Api/userapi";


function TestimonialCard({ testimonial, variant, setIsPaused }) {
  const isCenter = variant === "center";

  if (!testimonial) return null;

  return (
    <div
      className={`shrink-0 border inter border-white/20 backdrop-blur-[12px] rounded-[20px] md:rounded-[28px] transition-all duration-300 ${
        isCenter
          ? "w-full max-w-2xl px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] bg-white z-10 scale-100 opacity-100"
          : "hidden md:block w-full max-w-lg px-10 py-12 bg-[#ffffff8b] scale-95"
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex justify-center items-center mb-3 md:mb-4">
        <svg
          width="30"
          height="21"
          className="md:w-[43px] md:h-[30px]"
          viewBox="0 0 43 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.25 30L10 20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25ZM26.75 30L32.5 20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75ZM10 13.75C11.0417 13.75 11.9271 13.3854 12.6562 12.6562C13.3854 11.9271 13.75 11.0417 13.75 10C13.75 8.95833 13.3854 8.07292 12.6562 7.34375C11.9271 6.61458 11.0417 6.25 10 6.25C8.95833 6.25 8.07292 6.61458 7.34375 7.34375C6.61458 8.07292 6.25 8.95833 6.25 10C6.25 11.0417 6.61458 11.9271 7.34375 12.6562C8.07292 13.3854 8.95833 13.75 10 13.75ZM32.5 13.75C33.5417 13.75 34.4271 13.3854 35.1562 12.6562C35.8854 11.9271 36.25 11.0417 36.25 10C36.25 8.95833 35.8854 8.07292 35.1562 7.34375C34.4271 6.61458 33.5417 6.25 32.5 6.25C31.4583 6.25 30.5729 6.61458 29.8438 7.34375C29.1146 8.07292 28.75 8.95833 28.75 10C28.75 11.0417 29.1146 11.9271 29.8438 12.6562C30.5729 13.3854 31.4583 13.75 32.5 13.75Z"
            fill="#43B0FF"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      <p
        className={`text-center leading-relaxed mb-5 md:mb-6 ${
          isCenter
            ? "text-[#00263F] text-sm sm:text-base md:text-[18px]"
            : "text-[#00263F] text-[13.5px] italic"
        }`}
      >
        {testimonial.content}
      </p>

      <div className="flex items-center justify-center gap-3">
        <img
          src={testimonial.Image}
          alt={testimonial.name}
          className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="text-slate-900 font-semibold text-xs sm:text-sm">
            {testimonial.name}
          </p>
          <p className="text-slate-500 text-[11px] sm:text-xs">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const count = testimonials.length;
  const prevIndex = count ? (index - 1 + count) % count : 0;
  const nextIndex = count ? (index + 1) % count : 0;

  useEffect(() => {
    if (isPaused || count === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, count]);

  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden inter">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[12px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#FF7A00] text-xs font-[500] tracking-widest mb-3">
          TESTIMONIAL
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-3 poppins">
          Voice of Travelers
        </h2>
        <p className="text-[#848484] font-[400] text-xs sm:text-sm mb-8 md:mb-14 alexandria max-w-md mx-auto">
          Our purpose is clear, our vision is broad, and our values are the
          compass that guides us.
        </p>

        {loading ? (
          <p className="text-slate-500 text-sm">Loading...</p>
        ) : count === 0 ? (
          <p className="text-slate-500 text-sm">No testimonials available.</p>
        ) : (
          <>
            {/* Carousel */}
            <div className="relative flex items-center justify-center">
              <div
                className="hidden md:block absolute left-0 -translate-x-1/4 cursor-pointer"
                onClick={() => setIndex(prevIndex)}
              >
                <TestimonialCard
                  testimonial={testimonials[prevIndex]}
                  variant="side"
                  setIsPaused={setIsPaused}
                />
              </div>

              <TestimonialCard
                testimonial={testimonials[index]}
                variant="center"
                setIsPaused={setIsPaused}
              />

              <div
                className="hidden md:block absolute right-0 translate-x-1/4 cursor-pointer"
                onClick={() => setIndex(nextIndex)}
              >
                <TestimonialCard
                  testimonial={testimonials[nextIndex]}
                  variant="side"
                  setIsPaused={setIsPaused}
                />
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
              {testimonials.map((t, i) => (
                <button
                  key={t.id ?? i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-orange-500" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}