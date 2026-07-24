import React, { useState } from "react";
import { Star, Calendar, Check, Music, Snowflake } from "lucide-react";


function QuickSpec({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 sm:gap-[24px] lg:min-w-[150px]">
      {/* Icon */}
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] bg-[#FDECEC] flex items-center justify-center shrink-0">
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <p className="text-sm sm:text-[18px] leading-[16px] font-[400] text-[#6B7280] inter mb-[5px]">
          {label}
        </p>

        <p className="mt-1 text-base sm:text-[20px] leading-[22px] font-[600] text-[#1A1A1A] inter">
          {value}
        </p>
      </div>
    </div>
  );
}
export default function CarDetail({vehicle}) {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const quickSpecs = [
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99805 21C6.36472 21 5.76905 20.8583 5.21105 20.575C4.65305 20.2917 4.18205 19.9 3.79805 19.4C3.41405 18.9 3.16405 18.3377 3.04805 17.713C2.93205 17.0883 2.96538 16.4757 3.14805 15.875L3.74805 13.825L2.99805 3.15L4.99805 3C6.09805 2.91667 7.06072 3.24167 7.88605 3.975C8.71138 4.70833 9.16538 5.625 9.24805 6.725L9.47305 9.7C9.55638 10.8 9.23572 11.7667 8.51105 12.6C7.78638 13.4333 6.87372 13.8917 5.77305 13.975L5.07305 16.425C4.98972 16.725 4.97705 17.0333 5.03505 17.35C5.09305 17.6667 5.21405 17.95 5.39805 18.2C5.48138 18.3 5.57305 18.3917 5.67305 18.475C5.77305 18.5583 5.88972 18.6417 6.02305 18.725C6.10638 17.675 6.52738 16.7917 7.28605 16.075C8.04472 15.3583 8.94872 15 9.99805 15H16.998C18.098 15 19.0397 15.3917 19.823 16.175C20.6064 16.9583 20.998 17.9 20.998 19V21H6.99805Z" fill="#F93C4C"/>
</svg>),
    label: "Seat Capacity",
    value: `${vehicle?.SeatCapacity} People`,
  },
  {
    icon: (<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5275 0.265182C19.6749 0.379637 19.7939 0.525147 19.8757 0.690858C19.9575 0.856569 20 1.0382 20 1.22221V15.4824C20 15.5313 19.9971 15.5806 19.9912 15.6303C19.9971 15.7158 20 15.8022 20 15.8894C19.9996 16.6677 19.7459 17.4256 19.2757 18.0536C18.8055 18.6816 18.1431 19.147 17.3845 19.3824C16.6258 19.6179 15.8102 19.6112 15.0557 19.3633C14.3012 19.1155 13.6469 18.6393 13.1876 18.0037C12.7282 17.3681 12.4876 16.6061 12.5005 15.8279C12.5134 15.0497 12.7792 14.2957 13.2595 13.6751C13.7397 13.0544 14.4095 12.5993 15.1718 12.3755C15.9342 12.1517 16.7496 12.1709 17.5 12.4304V7.65132L7.5 9.93329V18.3376C7.49905 19.1158 7.24494 19.8735 6.77442 20.5011C6.3039 21.1287 5.64138 21.5937 4.88271 21.8287C4.12403 22.0638 3.30856 22.0567 2.55425 21.8086C1.79995 21.5605 1.14594 21.0841 0.68685 20.4485C0.227756 19.8128 -0.0126161 19.0508 0.000510388 18.2727C0.0136369 17.4946 0.279581 16.7408 0.759868 16.1203C1.24015 15.4998 1.90987 15.0448 2.67214 14.8212C3.4344 14.5975 4.24967 14.6167 5 14.8761V4.07376C4.99997 3.7978 5.09544 3.52996 5.27088 3.31381C5.44632 3.09765 5.6914 2.94591 5.96625 2.88327L18.4662 0.03173C18.6479 -0.00955425 18.8367 -0.0105646 19.0188 0.0287731C19.201 0.0681108 19.3718 0.146799 19.5187 0.259071L19.5275 0.265182Z" fill="#F93C4C"/>
</svg>),
    label: "Music System",
    value: vehicle?.MusicSystem ? "Yes" : "No",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3632 0.0682112L15.2752 1.98221C15.7199 2.1553 16.1108 2.44315 16.408 2.81645C16.7053 3.18975 16.8983 3.63515 16.9674 4.10731C17.0365 4.57946 16.9792 5.0615 16.8014 5.50432C16.6236 5.94714 16.3316 6.33494 15.9552 6.62821L12.9102 8.99921L19.0002 9.00021C19.1629 9.00018 19.3231 9.03983 19.467 9.11573C19.6109 9.19163 19.7341 9.30148 19.8259 9.43577C19.9177 9.57005 19.9754 9.7247 19.9939 9.88632C20.0124 10.0479 19.9913 10.2116 19.9322 10.3632L18.0182 15.2752C17.8451 15.7199 17.5573 16.1108 17.184 16.408C16.8107 16.7053 16.3653 16.8983 15.8931 16.9674C15.421 17.0365 14.9389 16.9792 14.4961 16.8014C14.0533 16.6236 13.6655 16.3316 13.3722 15.9552L11.0002 12.9082V19.0002C11.0002 19.1629 10.9606 19.3231 10.8847 19.467C10.8088 19.6109 10.6989 19.7341 10.5647 19.8259C10.4304 19.9177 10.2757 19.9754 10.1141 19.9939C9.95248 20.0124 9.78879 19.9913 9.63721 19.9322L4.72521 18.0182C4.28053 17.8451 3.88966 17.5573 3.59241 17.184C3.29517 16.8107 3.10217 16.3653 3.03306 15.8931C2.96395 15.421 3.02122 14.9389 3.19901 14.4961C3.37681 14.0533 3.66879 13.6655 4.04521 13.3722L7.09021 11.0002H1.00021C0.837537 11.0002 0.67731 10.9606 0.533427 10.8847C0.389544 10.8088 0.266351 10.6989 0.17453 10.5647C0.0827089 10.4304 0.0250338 10.2757 0.00650684 10.1141C-0.0120201 9.95248 0.00916043 9.78879 0.0682112 9.63721L1.98221 4.72521C2.1553 4.28053 2.44315 3.88966 2.81645 3.59241C3.18975 3.29517 3.63515 3.10217 4.10731 3.03306C4.57946 2.96395 5.0615 3.02122 5.50432 3.19901C5.94714 3.37681 6.33494 3.66879 6.62821 4.04521L8.99921 7.08921L9.00021 1.00021C9.00018 0.837537 9.03983 0.67731 9.11573 0.533427C9.19163 0.389544 9.30148 0.266351 9.43577 0.17453C9.57005 0.0827089 9.7247 0.0250338 9.88632 0.00650684C10.0479 -0.0120201 10.2116 0.00916043 10.3632 0.0682112Z" fill="#F93C4C"/>
</svg>),
    label: "A/C",
    value: vehicle?.AC ? "Yes" : "No",
  },
];

const features = vehicle?.Features || [];

const half = Math.ceil(features.length / 2);
const leftFeatures = features.slice(0, half);
const rightFeatures = features.slice(half);

  return (
    <section className="w-full bg-[#f7f8fa] py-10 sm:py-14 inter">
      <div className=" px-4 sm:px-15">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8 lg:gap-[25px] items-start">
          {/* Left Column */}
          <div>
            <h1 className="text-2xl sm:text-[38px] font-bold text-[#101828] poppins mb-6">
              {vehicle?.vehicleName}
            </h1>

            {/* Quick Specs */}
       <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-y-4 gap-x-4 w-full pb-6 border-b border-[#E4E7EC]">
  {quickSpecs.map((spec) => (
    <QuickSpec key={spec.label} {...spec} />
  ))}
</div>

            {/* Description */}
            <h2 className="text-lg sm:text-[33px] font-[500] text-[#101828] mt-8 mb-4 inter">
              All You Need to Know About the {vehicle?.vehicleName}
            </h2>
            <p className="text-[#000000] text-sm leading-relaxed mb-4 inter sm:text-[19px] sm:tracking-[-0.32px] sm:leading-[39.54px]">
             {vehicle?.Description}
            </p>
            

            {/* Features */}
            <h2 className="text-lg sm:text-[33px] font-[500] text-[#111827] mt-10 mb-5 poppins">
              Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-[24px]">
              {[...leftFeatures, ...rightFeatures].map((feature, i) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E7F7EE] flex items-center justify-center shrink-0">
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.32422 5.32507L3.99089 7.99174L10.6576 1.32507" stroke="#22C55E" stroke-width="2.65024" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </span>
                  <span className="text-[#344054] text-base sm:text-[24px] inter font-[400]">{feature}</span>
                </div>
              ))}
            </div>

            <button className="text-[#2F6FE0] text-sm font-semibold mt-6 hover:underline">
              See more
            </button>
          </div>

          {/* Right Column: Booking Card */}
          <div className="w-full bg-white rounded-2xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)] py-6 px-5 sm:px-8 lg:px-10 lg:sticky lg:top-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[#FF6B35] text-xl sm:text-2xl lg:text-[32px] font-semibold poppins">
                Services
              </h3>
              <div className="flex items-center gap-1 text-xs text-[#101828] manrope">
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.70833 12.3542L8.33333 10.7708L10.9583 12.375L10.2708 9.375L12.5833 7.375L9.54167 7.10417L8.33333 4.27083L7.125 7.08333L4.08333 7.35417L6.39583 9.375L5.70833 12.3542ZM3.1875 15.8333L4.54167 9.97917L0 6.04167L6 5.52083L8.33333 0L10.6667 5.52083L16.6667 6.04167L12.125 9.97917L13.4792 15.8333L8.33333 12.7292L3.1875 15.8333Z" fill="#FF5F1F"/>
</svg>
                <span className="font-semibold">{vehicle?.StarRating}</span>
              </div>
            </div>

            {/* Pickup Date */}
            <label className="block text-[#344054] text-xs font-medium mb-[15px] manrope">
              Pickup Date
            </label>
            <div className="relative mb-4">
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-[#EFF4FF] border border-[#C6C6CD] rounded-lg px-3 py-2.5 text-sm text-[#101828] outline-none focus:border-[#2F6FE0] [color-scheme:light]"
              />
            </div>

            {/* Return Date */}
            <label className="block text-[#344054] text-xs font-medium mb-[15px]">
              Return Date
            </label>
            <div className="relative mb-5">
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-[#EFF4FF] border border-[#C6C6CD] rounded-lg px-3 py-2.5 text-sm text-[#101828] outline-none focus:border-[#2F6FE0] [color-scheme:light]"
              />
            </div>

            {/* Rate Info Box */}
            <div className="bg-[#D3E4FE] rounded-xl px-4 py-4 mb-6 space-y-2.5 manrope">
              <div className="flex items-center justify-between text-sm sm:text-[16px]">
                <span className="text-[#0B1C30]">Rate per km:</span>
                <span className="text-[#0B1C30] font-semibold">₹{vehicle?.RentPerKLM}</span>
              </div>
              <div className="flex items-center justify-between text-sm sm:text-[16px]">
                <span className="text-[#0B1C30]">Advance Required:</span>
                <span className="text-[#0B1C30] font-semibold">{vehicle?.AdvancePayment}%</span>
              </div>
              <div className="flex items-center justify-between text-sm sm:text-[16px]">
                <span className="text-[#0B1C30]">Cancellation:</span>
                <span className="text-[#0B1C30] font-semibold">Flexible</span>
              </div>
              <div className="flex items-center justify-between text-sm sm:text-[16px]">
                <span className="text-[#0B1C30]">Toll:</span>
                <span className="text-[#0B1C30] font-semibold">{vehicle?.TollCharges}</span>
              </div>
            </div>

            <button className="w-full bg-[#FF6B35] hover:bg-[#E85A28] transition-colors text-white font-semibold text-sm py-3 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}