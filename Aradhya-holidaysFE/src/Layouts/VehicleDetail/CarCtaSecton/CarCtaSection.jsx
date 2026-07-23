import React from "react";
import { ArrowRight, Phone } from "lucide-react";

import carsImage from "../../../assets/About/CarDetail/ca.png"; 

export default function CarCtaSection() {
  return (
    <section className="bg-[#F8F9FB] pb-10 lg:py-12  overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-15">
        {/* Content */}
        <div className=" mx-auto text-center">
          <h2 className="poppins text-[#000000] text-[36px] sm:text-[48px] lg:text-[72px] leading-[1.05] font-[700] uppercase tracking-[-1.8px]">
            STAND OUT FROM THE
            <br />
            <span className="font-[400]">
              CROWD WITH ROLLS-ROYCE
            </span>
          </h2>

          <p className="mt-6 max-w-[620px] mx-auto text-[#667085] text-[15px] sm:text-[16px] leading-7 inter">
            Free delivery anywhere in India, 24/7 concierge,
            transparent pricing. Reach out and we'll have the keys
            waiting.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Enquiry */}
            <button className="py-4 px-8 rounded-full border  bg-white flex items-center gap-3 hover:bg-gray-50 transition">
              <span className="text-[16px] font-semibold text-[#101828] inter">
                Send enquiry
              </span>
<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9987 0.833252L15.832 6.66658M15.832 6.66658L9.9987 12.4999M15.832 6.66658H0.832031" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>

            {/* WhatsApp */}
            <button className="py-4 px-8  rounded-full bg-[#FF6B35] text-white flex items-center gap-3 hover:bg-[#ef5d2d] transition inter font-semibold">
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5125 11.985C14.265 11.8609 13.0475 11.2625 12.8208 11.1792C12.5933 11.0967 12.4283 11.0559 12.2625 11.3042C12.0983 11.5517 11.6233 12.1092 11.4792 12.2742C11.335 12.44 11.19 12.46 10.9425 12.3367C10.695 12.2117 9.89667 11.9509 8.95083 11.1075C8.215 10.4509 7.7175 9.64003 7.57333 9.3917C7.42917 9.1442 7.55833 9.01003 7.68167 8.8867C7.79333 8.77587 7.93 8.59753 8.05333 8.45337C8.1775 8.30837 8.21833 8.20503 8.30167 8.0392C8.38417 7.8742 8.34333 7.73003 8.28083 7.60587C8.21833 7.4817 7.72333 6.26253 7.5175 5.7667C7.31583 5.2842 7.11167 5.35003 6.96 5.3417C6.81583 5.33503 6.65083 5.33337 6.485 5.33337C6.32 5.33337 6.05167 5.39503 5.825 5.64337C5.59833 5.89087 4.95833 6.49003 4.95833 7.7092C4.95833 8.92753 5.84583 10.105 5.96917 10.2709C6.09333 10.4359 7.71583 12.9375 10.2 14.01C10.7908 14.265 11.2517 14.4175 11.6117 14.5309C12.205 14.72 12.745 14.6934 13.1708 14.6292C13.6467 14.5584 14.6358 14.03 14.8425 13.4517C15.0492 12.8734 15.0492 12.3775 14.9867 12.2742C14.925 12.1709 14.76 12.1092 14.5117 11.985H14.5125ZM9.99417 18.1542H9.99083C8.51564 18.1543 7.06757 17.7577 5.79833 17.0059L5.4975 16.8275L2.38 17.6459L3.21167 14.6059L3.01583 14.2942C2.1912 12.9811 1.75495 11.4614 1.7575 9.91087C1.75833 5.3692 5.45417 1.6742 9.9975 1.6742C12.1975 1.6742 14.2658 2.53253 15.8208 4.0892C17.3705 5.63207 18.2386 7.73076 18.2317 9.91753C18.2292 14.4592 14.5342 18.1542 9.99417 18.1542ZM17.005 2.9067C15.1504 1.03985 12.6256 -0.0068961 9.99417 3.41949e-05C4.53167 3.41949e-05 0.0858333 4.44587 0.0833333 9.91003C0.0833333 11.6567 0.539167 13.3617 1.40667 14.8642L0 20L5.25417 18.6217C6.70716 19.4133 8.33536 19.8282 9.99 19.8284H9.99417C15.4558 19.8284 19.9025 15.3825 19.905 9.91753C19.9131 7.28713 18.8689 4.76273 17.005 2.9067Z" fill="white"/>
</svg>


              WhatsApp Us
            </button>

            {/* Call */}
            <button className="py-4 px-8 rounded-full border border-[#D0D5DD] bg-white flex items-center gap-3 hover:bg-gray-50 transition">
             

              <span className="text-[16px] font-semibold text-black inter">
                Call +971 56 526 6295
              </span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-2 flex justify-center">
          <img
            src={carsImage}
            alt="Rolls Royce Fleet"
            className="w-full  object-contain"
          />
        </div>
      </div>
    </section>
  );
}