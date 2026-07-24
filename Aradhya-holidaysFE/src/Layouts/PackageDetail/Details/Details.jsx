import { Leaf, Star, ArrowRight } from "lucide-react";
import expimg from "../../../assets/Package/p11.png";
import p1 from "../../../assets/Package/p12.jpg";
import p2 from "../../../assets/Package/p13.jpg";
import p3 from "../../../assets/Package/p14.jpg";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";



export default function Details({ packageData }) {

  const timelineData = packageData?.Days || [];
  const galleryImages = packageData?.Image || [];
  const [open, setOpen] = useState(false);

const slides = galleryImages.map((img) => ({
  src: img,
}));

//   const galleryImages = [
//   {
//     id: 1,
//     image: p1,
//   },
//   {
//     id: 2,
//     image: p2,
//   },
//   {
//     id: 3,
//     image: p3,
//   },
// ];

  return (
    <div className="bg-white">
      {/* ============ SECTION 1: The Experience ============ */}
      <section className="px-4 sm:px-[110px] py-10 sm:py-20 md:py-24">
      <div className="mx-auto grid  grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        {/* Left: Text */}
        <div className="max-w-[510px]">
          <span className="inter inline-flex items-center gap-2 rounded-full bg-[#CDE5FF4D] border border-[#CDE5FF80] leading-[16px] px-4 py-1.5 text-[12px] font-[600] uppercase tracking-[0.6px] text-[#0B4F8A]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#00639A]" />
            The Experience
          </span>

          <h2 className="poppins mt-6 text-[28px] sm:text-[34px] md:text-[48px] font-[400] leading-[36px] sm:leading-[42px] md:leading-[52px] text-[#00263F]">
            Untamed Beauty,
            <br />
            Refined Comfort.
          </h2>

          <p className="inter mt-6 text-[14px] sm:text-[18px] leading-6 sm:leading-7 text-[#42474E]">
            {packageData?.Description}
          </p>

        </div>

        {/* Right: Layered image card */}
        <div>
          <div className="relative mx-auto max-w-[380px] lg:max-w-none">
            {/* Back card (offset top-right) */}
            <div className="absolute -top-5 -left-5 sm:-top-10 sm:-left-10 h-full w-full rounded-[28px] bg-[#CDE5FF4D]" />

            {/* Front card */}
            <div className="relative h-[320px] sm:h-[400px] md:h-[440px] lg:h-[550px] w-full overflow-hidden rounded-[28px] shadow-[0px_23.12px_46.24px_-11.1px_rgba(0,0,0,0.25)]">
              <img
                src={packageData?.Image?.[1]}
                alt="Patagonia glacier dinner"
                className="h-full w-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <span className="inter absolute leading-[29px] bottom-5 sm:bottom-6 left-5 sm:left-6 text-[16px] sm:text-[22px] font-[300] text-white">
                Wild Gastronomy
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ============ SECTION 2: The Journey Timeline ============ */}
      <section className="px-4 sm:px-10 py-10 sm:py-20 md:py-6 lg:py-24">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="inter text-[16px] font-[400] uppercase tracking-[3.2px] text-[#FF7A00]">
            The Journey
          </p>
          <h2 className="poppins mt-2 text-[28px] sm:text-[36px] md:text-[48px] font-[600] text-[#00263F]">
            Your {packageData.Location} Timeline
          </h2>
        </div>

        {/* Mobile: single-side stacked timeline. Desktop: alternating sides */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-[#D8DEE4] sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-10 sm:gap-14">
           {timelineData.map((item, idx) => {
  const isRight = idx % 2 === 0;

  return (
    <div
      key={item._id}
      className={`relative flex items-start gap-5 sm:gap-0 ${
        isRight ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <span className="absolute left-4 top-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-[4px] border-[#00639A] bg-white sm:left-1/2" />

      <div
        className={`w-full pl-10 sm:w-1/2 sm:pl-0 ${
          isRight ? "sm:pl-14 sm:text-left" : "sm:pr-14 sm:text-right"
        }`}
      >
        <p className="inter text-[17px] font-[400] uppercase tracking-[1.73px] text-[#00639A]">
          DAY {item.day}
        </p>

        <h3 className="inter mt-2 text-[20px] sm:text-[29px] font-[400] text-[#00263F]">
          {item.title}
        </h3>

        <p className="inter mt-2 text-[15px] sm:text-[19px] font-[300] leading-8 text-[#42474E]">
          {item.description}
        </p>
      </div>

      <div className="hidden sm:block sm:w-1/2" />
    </div>
  );
})}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: Visual Journey Gallery ============ */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-6 sm:py-20 md:py-24">
        <div className="mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inter text-[12px] font-[500] uppercase text-[#FF7A00]">
                Visual Journey
              </p>
              <h2 className="poppins mt-3 text-[26px] sm:text-[32px] md:text-[35px] font-[600] text-[#00263F]">
                Glimpses of the Destination
              </h2>
              <p className="inter mt-0 max-w-[350px] text-[12px] font-[400]  text-[#848484]">
                Driven by curiosity and a passion for service, our team is
                the heartbeat of every journey we curate.
              </p>
            </div>

            <a
              onClick={() => setOpen(true)}
            className="inline-flex cursor-pointer items-center gap-2 text-[#00639A] text-[15px] sm:text-[16px] font-bold hover:gap-3 transition-all"
          >
            Explore Gallery

            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M0 6V8H16V6H0ZM12 8V10H14V8H12ZM10 10V12H12V10H10ZM8 12V14H10V12H8ZM12 6V4H14V6H12Z"
                fill="#FF7A00"
              />
              <path
                d="M10 10V2H12V10H10ZM8 12V0H10V12H8Z"
                fill="#FF7A00"
              />
            </svg>
          </a>

           
          </div>

          <div className="mt-5 sm:mt-8 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-3 md:gap-10">
  {galleryImages.slice(0, 3).map((img, index) => (
    <div
      key={index}
      className={`overflow-hidden rounded-[16px] ${
        index === 0
          ? "h-[260px] md:h-[400px]"
          : "h-[260px] md:h-[400px]"
      }`}
    >
      <img
        src={img}
        alt="Gallery"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      
    </div>
  ))}
  
</div>
        </div>
      </section>
      <Lightbox
  open={open}
  close={() => setOpen(false)}
  slides={slides}
  plugins={[Thumbnails]}
  thumbnails={{
    position: "bottom",
    width: 80,
    height: 60,
    border: 2,
    borderRadius: 8,
    gap: 10,
  }}
/>
    </div>
  );
}