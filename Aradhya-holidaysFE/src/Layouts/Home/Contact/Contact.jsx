import React, { useState } from "react";
import contact from "../../../assets/Home/contact/contact.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry submitted:", form);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex items-start lg:items-center justify-center px-4 sm:px-6 md:px-10 lg:px-[112px] py-10 md:py-2">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
        {/* Quote / Image panel */}
        <div
          className="relative flex-none w-full lg:w-[35%] min-h-[200px] sm:min-h-[260px] md:min-h-[360px] lg:min-h-[650px] rounded-[20px] sm:rounded-[24px] lg:rounded-[30px] overflow-hidden box-border shadow-[0px_9px_28px_0px_rgba(0,0,0,0.25)] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(20,30,50,0.15) 0%,
              rgba(10,20,35,0.75) 100%
            ), url(${contact})`,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10 text-white">
            <p className="play text-sm sm:text-lg md:text-xl lg:text-[24px] font-[400] leading-[130%] sm:leading-[120%] lg:leading-[100%] mb-3 sm:mb-4">
              &ldquo;The world is a book and those who do not travel read only
              one page&rdquo;
            </p>
            <div className="poppins text-[#FF7A00] text-[12px] sm:text-[13px] lg:text-[14px] font-[600] leading-[100%] uppercase">
              -- Wolfgang Amadeus Mozart
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="flex-1 min-w-0 box-border inter flex flex-col bg-white border-[0.88px] border-[#E0E3E580] rounded-2xl shadow-[0px_12.26px_31.52px_-10.51px_rgba(0,0,0,0.25)] px-5 py-7 sm:px-8 sm:py-9 md:px-12 md:py-10 lg:px-14 lg:py-12">
          <h1 className="text-center text-xl sm:text-2xl lg:text-[28px] font-[550] leading-[130%] sm:leading-[35px] tracking-[-0.28px] text-[#00263F] mb-2">
            Speak to an Expert
          </h1>
          <p className="text-center text-[#42474E] text-[13px] sm:text-[14.01px] mb-6 sm:mb-7 leading-[20px] sm:leading-[21.01px] px-2 sm:px-0">
            Fill out the form and our travel experts will get back to you
            within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col h-full justify-between"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-4 sm:mb-0">
              <div className="flex flex-col flex-1 min-w-0 mb-4 sm:mb-4">
                <label
                  htmlFor="name"
                  className="text-[14px] font-[400] text-[#42474E] mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full min-w-0 box-border border-[0.88px] border-[#191C1E1A] rounded-[14px] px-4 py-3.5 sm:px-[21px] sm:py-[16px] text-sm text-gray-800 placeholder-gray-400 outline-none"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0 mb-4 sm:mb-4">
                <label
                  htmlFor="phone"
                  className="text-[14px] font-[400] text-[#42474E] mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 234 567 890"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full min-w-0 box-border border-[0.88px] border-[#191C1E1A] rounded-[14px] px-4 py-3.5 sm:px-[21px] sm:py-[16px] text-sm text-gray-800 placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-4 sm:mb-0">
              <div className="flex flex-col flex-1 min-w-0 mb-4 sm:mb-4">
                <label
                  htmlFor="destination"
                  className="text-[14px] font-[400] text-[#42474E] mb-1"
                >
                  Destination
                </label>
                <select
                  id="destination"
                  value={form.destination}
                  onChange={handleChange}
                  className="w-full min-w-0 box-border appearance-none border-[0.88px] border-[#191C1E1A] rounded-[14px] px-4 py-3.5 sm:px-[21px] sm:py-[16px] text-sm text-gray-800 placeholder-gray-400 outline-none bg-no-repeat cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' fill-rule='evenodd'/></svg>\")",
                    backgroundPosition: "right 1rem center",
                  }}
                >
                  <option value="" disabled>
                    Select a destination
                  </option>
                  <option value="thailand">Thailand</option>
                  <option value="bali">Bali</option>
                  <option value="maldives">Maldives</option>
                  <option value="japan">Japan</option>
                  <option value="italy">Italy</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 min-w-0 mb-4 sm:mb-4">
                <label
                  htmlFor="date"
                  className="text-[14px] font-[400] text-[#42474E] mb-1"
                >
                  Date of Travel
                </label>
                <input
                  type="date"
                  id="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full min-w-0 box-border border-[0.88px] border-[#191C1E1A] rounded-[14px] px-4 py-3.5 sm:px-[21px] sm:py-[16px] text-sm text-gray-800 placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="message"
                className="text-[14px] font-[400] text-[#42474E] mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your dream trip..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full min-w-0 box-border resize-none border-[0.88px] border-[#191C1E1A] rounded-[14px] px-4 py-3.5 sm:px-[21px] sm:py-[16px] text-sm text-gray-800 placeholder-gray-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-bold bg-gradient-to-r from-[#FF7A00] to-[#FF4E7A] cursor-pointer hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}