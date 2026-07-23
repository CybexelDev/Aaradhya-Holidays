import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

import bgImage from "../../../assets/Contact/contact1.jpg"; // Change to your image
import Navbar from "../../../Components/Navbar/Navbar";

export default function ContactHeader() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative pt-4 min-h-screen overflow-hidden">
        <Navbar />
      {/* Background */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00263F99]/70"></div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#9FB1BE]/55 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 xl:px-[80px] py-0">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-[64px] items-center px-2 sm:px-6 xl:px-[64px] py-12 sm:py-16 lg:py-[80px] xl:py-[120px] ">

          {/* Left Side */}
          <div className="text-white flex flex-col gap-6 lg:gap-8">
  {/* Header Section */}
  <div className="flex flex-col gap-4">
    <p className="inter uppercase tracking-[2.4px] text-[12px] font-[600] text-[#CDE5FF] ">
      GET IN TOUCH
    </p>

    <div className="poppins tracking-[-1.28px] text-4xl lg:text-[64px]">
      <h2 className="font-[600] leading-tight lg:leading-[72px]">
        Let's Plan Your
      </h2>       

      <h2 className="bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] bg-clip-text text-transparent italic font-[400]">
  Next Adventure.
</h2>
    </div>

    <p className="max-w-full lg:max-w-[512px] inter text-white leading-7 font-[400]">
      Our travel curators are ready to design your personalized
      escape. Reach out to start your journey into the world's
      most pristine landscapes.
    </p>
  </div>

  {/* Contact Section */}
  <div className="flex flex-col gap-6 pt-4 inter">
    <div className="flex gap-4">
      <div className="shrink-0 w-11 h-11 rounded-[12px] bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] flex items-center justify-center">
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
      fill="white"
    />
  </svg>
</div>

      <div className="min-w-0">
        <h4 className="font-[700] text-[16px]">Office Address</h4>
        <p className="text-white font-[300] text-[16px] break-words">
          1200 Pacific Heights, Suite 400
          <br />
          Sydney, NSW 2000, Australia
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="shrink-0 py-3 px-3 rounded-[12px] bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="white"/>
</svg>

      </div>

      <div className="min-w-0">
        <h4 className="font-[700] text-[16px]">Phone</h4>
        <p className="text-white font-[300] text-[16px]">
          +61 (2) 5550-1234
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="shrink-0 py-3 px-3 rounded-[12px] bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] flex items-center justify-center">
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="white"/>
</svg>

      </div>

      <div className="min-w-0">
        <h4 className="font-[700] text-[16px]">Email</h4>
        <p className="text-white font-[300] text-[16px] break-words">
          expeditions@oceaniatravels.com
        </p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="shrink-0 py-3 px-3 rounded-[12px] bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20ZM4 12H12V10H4V12ZM4 9H16V7H4V9ZM4 6H16V4H4V6Z" fill="white"/>
</svg>

      </div>

      <div className="min-w-0">
        <h4 className="font-[700] text-[16px]">WhatsApp</h4>
        <p className="text-white font-[300] text-[16px]">
          +61 400 123 456
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">

            <div className="w-full inter max-w-full lg:max-w-[512px] rounded-[24px] lg:rounded-[32px] border corder-[#FFFFFF33] bg-[#FFFFFF99] backdrop-blur-md shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] p-6 sm:p-8 xl:p-10">

              <h3 className="text-2xl sm:text-[28px] lg:text-[32px]  font-[700] text-white tracking-[-0.32px] mb-6 lg:mb-[32px]">
                Enquiry Form
              </h3>

             <div className="grid sm:grid-cols-2 gap-5 inter">
  <div>
    <label className="block mb-2 text-[12px] font-[600] text-[#42474E]">
      Full Name
    </label>

    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="John Doe"
      className="w-full px-4 py-[14px] rounded-[12px] bg-[#FFFFFF66] font-[400] text-[16px] text-[#050c16] border border-[#FFFFFF33] outline-none"
    />
  </div>

  <div>
    <label className="block mb-2 text-[12px] font-[600] text-[#42474E]">
      Email Address
    </label>

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="john@example.com"
      className="w-full px-4 py-[14px] rounded-[12px] bg-[#FFFFFF66] font-[400] text-[16px] text-[#050c16] border border-[#FFFFFF33] outline-none"
    />
  </div>

  <div>
    <label className="block mb-2 text-[12px] font-[600] text-[#42474E]">
      Phone Number
    </label>

    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="+1 (555) 000-0000"
      className="w-full px-4 py-[14px] rounded-[12px] bg-[#FFFFFF66] font-[400] text-[16px] text-[#050c16] border border-[#FFFFFF33] outline-none"
    />
  </div>

  <div>
    <label className="block mb-2 text-[12px] font-[600] text-[#42474E]">
      Travel Dates
    </label>

    <input
      type="text"
      name="date"
      value={formData.date}
      onChange={handleChange}
      placeholder="e.g. June 2026"
      className="w-full px-4 py-[14px] rounded-[12px] bg-[#FFFFFF66] font-[400] text-[16px] text-[#050c16] border border-[#FFFFFF33] outline-none"
    />
  </div>
</div>


              <div className="mt-5">
                <label className="text-xs font-medium text-gray-700 mb-2 block">
                  Tell us about your dream trip
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your preferences, dietary needs, or celebration details..."
      className="w-full px-4 py-[14px] resize-none rounded-[12px] bg-[#FFFFFF66] font-[400] text-[16px] text-[#050c16] border border-[#FFFFFF33] outline-none"
                />
              </div>

              <button className="w-full cursor-pointer text-[16px] mt-6 py-4 rounded-[12px] bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] shadow-[0_0_20px_0_rgba(255,126,95,0.3)] text-white font-[600] ">
                Send Message
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}