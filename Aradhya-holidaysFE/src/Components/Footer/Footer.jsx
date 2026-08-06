import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Plane,
} from "lucide-react";
import bg from "../../assets/Home/footer/footerbg.jpg";
import logo from "../../assets/Home/footer/logofooter2.png"
import { Link } from "react-router-dom";
import logo2 from "../../assets/logofooter.png"
// Custom X (formerly Twitter) icon since it's missing from standard lucide packs
function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  { icon: (<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.825 0H4.84167C1.80833 0 0 1.80833 0 4.84167V11.8167C0 14.8583 1.80833 16.6667 4.84167 16.6667H11.8167C14.85 16.6667 16.6583 14.8583 16.6583 11.825V4.84167C16.6667 1.80833 14.8583 0 11.825 0ZM8.33333 11.5667C6.55 11.5667 5.1 10.1167 5.1 8.33333C5.1 6.55 6.55 5.1 8.33333 5.1C10.1167 5.1 11.5667 6.55 11.5667 8.33333C11.5667 10.1167 10.1167 11.5667 8.33333 11.5667ZM13.2667 4.06667C13.225 4.16667 13.1667 4.25833 13.0917 4.34167C13.0083 4.41667 12.9167 4.475 12.8167 4.51667C12.7167 4.55833 12.6083 4.58333 12.5 4.58333C12.275 4.58333 12.0667 4.5 11.9083 4.34167C11.8333 4.25833 11.775 4.16667 11.7333 4.06667C11.6917 3.96667 11.6667 3.85833 11.6667 3.75C11.6667 3.64167 11.6917 3.53333 11.7333 3.43333C11.775 3.325 11.8333 3.24167 11.9083 3.15833C12.1 2.96667 12.3917 2.875 12.6583 2.93333C12.7167 2.94167 12.7667 2.95833 12.8167 2.98333C12.8667 3 12.9167 3.025 12.9667 3.05833C13.0083 3.08333 13.05 3.125 13.0917 3.15833C13.1667 3.24167 13.225 3.325 13.2667 3.43333C13.3083 3.53333 13.3333 3.64167 13.3333 3.75C13.3333 3.85833 13.3083 3.96667 13.2667 4.06667Z" fill="white"/>
</svg>)
, label: "Instagram" },
  { icon:(<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6667 11.825C16.6667 14.8583 14.8583 16.6667 11.825 16.6667H10.8333C10.375 16.6667 10 16.2917 10 15.8333V11.025C10 10.8 10.1833 10.6083 10.4083 10.6083L11.875 10.5833C11.9917 10.575 12.0917 10.4917 12.1167 10.375L12.4083 8.78334C12.4333 8.63334 12.3167 8.49167 12.1583 8.49167L10.3833 8.51667C10.15 8.51667 9.96668 8.33334 9.95834 8.10834L9.925 6.06667C9.925 5.93333 10.0333 5.81668 10.175 5.81668L12.175 5.78334C12.3167 5.78334 12.425 5.67501 12.425 5.53335L12.3917 3.53333C12.3917 3.39166 12.2833 3.28334 12.1417 3.28334L9.89166 3.31668C8.50833 3.34168 7.40834 4.475 7.43334 5.85833L7.475 8.15C7.48333 8.38333 7.30001 8.56667 7.06668 8.57501L6.06667 8.59166C5.925 8.59166 5.81668 8.69999 5.81668 8.84165L5.84167 10.425C5.84167 10.5667 5.95 10.675 6.09166 10.675L7.09167 10.6583C7.32501 10.6583 7.50832 10.8417 7.51666 11.0667L7.59165 15.8167C7.59999 16.2833 7.22499 16.6667 6.75832 16.6667H4.84166C1.80833 16.6667 0 14.8583 0 11.8167V4.84166C0 1.80833 1.80833 0 4.84166 0H11.825C14.8583 0 16.6667 1.80833 16.6667 4.84166V11.825Z" fill="white"/>
</svg>
  )
, label: "Facebook" },
  { icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2389_1383)">
<mask
  id="mask0_2389_1383"
  style={{ maskType: "luminance" }}
  maskUnits="userSpaceOnUse"
  x="0"
  y="0"
  width="20"
  height="20"
><path d="M0 0H20V20H0V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_2389_1383)">
<path d="M15.75 0.937012H18.8171L12.1171 8.61415L20 19.0627H13.8286L8.99143 12.727L3.46286 19.0627H0.392857L7.55857 10.8484L0 0.93844H6.32857L10.6943 6.72844L15.75 0.937012ZM14.6714 17.2227H16.3714L5.4 2.6813H3.57714L14.6714 17.2227Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_2389_1383">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
), label: "X" },
  { icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 15L15.69 12L10.5 9V15ZM22.06 7.17C22.19 7.64 22.28 8.27 22.34 9.07C22.41 9.87 22.44 10.56 22.44 11.16L22.5 12C22.5 14.19 22.34 15.8 22.06 16.83C21.81 17.73 21.23 18.31 20.33 18.56C19.86 18.69 19 18.78 17.68 18.84C16.38 18.91 15.19 18.94 14.09 18.94L12.5 19C8.31 19 5.7 18.84 4.67 18.56C3.77 18.31 3.19 17.73 2.94 16.83C2.81 16.36 2.72 15.73 2.66 14.93C2.59 14.13 2.56 13.44 2.56 12.84L2.5 12C2.5 9.81 2.66 8.2 2.94 7.17C3.19 6.27 3.77 5.69 4.67 5.44C5.14 5.31 6 5.22 7.32 5.16C8.62 5.09 9.81 5.06 10.91 5.06L12.5 5C16.69 5 19.3 5.16 20.33 5.44C21.23 5.69 21.81 6.27 22.06 7.17Z" fill="white"/>
</svg>

  ), label: "Youtube" },
];

const linkColumns = [
  {
    title: "Quick Link",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/service" },
      { name: "Tour Plan", path: "/tour-plan" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", path: "/contact" },
      { name: "Cancellation Policy", path: "/contact" },
      { name: "Terms & Conditions", path: "/contact" },
      { name: "Privacy Policy", path: "/contact" },
      { name: "Customer Support", path: "/contact" },
    ],
  },
];

const handleLinkClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
};

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden font-sans">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative mx-auto px-4 sm:px-6 md:px-12 pt-8 sm:pt-10 pb-8">

        {/* Top Contact Row */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-center lg:justify-end items-center sm:items-center gap-3 sm:gap-6 md:gap-18 text-xs md:text-sm text-white mb-4 flex-wrap text-center sm:text-left">
          <div className="flex items-center gap-2">
<svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.15042 12.1398C4.50392 12.4314 4.87258 12.698 5.25 12.9582C5.62823 12.7014 5.99511 12.4284 6.34958 12.1398C6.9405 11.6545 7.49662 11.1284 8.01383 10.5653C9.20617 9.26158 10.5 7.37158 10.5 5.25C10.5 4.56056 10.3642 3.87787 10.1004 3.24091C9.83653 2.60395 9.44982 2.0252 8.96231 1.53769C8.4748 1.05018 7.89605 0.66347 7.25909 0.399632C6.62213 0.135795 5.93944 0 5.25 0C4.56056 0 3.87787 0.135795 3.24091 0.399632C2.60395 0.66347 2.0252 1.05018 1.53769 1.53769C1.05018 2.0252 0.66347 2.60395 0.399632 3.24091C0.135795 3.87787 -1.02735e-08 4.56056 0 5.25C0 7.37158 1.29383 9.261 2.48617 10.5653C3.00336 11.1286 3.55948 11.6544 4.15042 12.1398ZM5.25 7.14583C4.74719 7.14583 4.26498 6.94609 3.90944 6.59056C3.55391 6.23502 3.35417 5.75281 3.35417 5.25C3.35417 4.74719 3.55391 4.26498 3.90944 3.90944C4.26498 3.55391 4.74719 3.35417 5.25 3.35417C5.75281 3.35417 6.23502 3.55391 6.59056 3.90944C6.94609 4.26498 7.14583 4.74719 7.14583 5.25C7.14583 5.75281 6.94609 6.23502 6.59056 6.59056C6.23502 6.94609 5.75281 7.14583 5.25 7.14583Z" fill="white"/>
</svg>
            <span>Dhaliyur, Pannimadai, Coimbatore</span>
          </div>
          <div className="flex items-center gap-2">
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.81372 12.2497C9.27997 12.2497 8.53021 12.0567 7.40747 11.4294C6.0422 10.6638 4.98618 9.95697 3.62829 8.60264C2.31907 7.29424 1.68196 6.44713 0.790284 4.82455C-0.21706 2.99252 -0.0453414 2.03221 0.146612 1.62178C0.375205 1.13123 0.712627 0.837832 1.14876 0.546621C1.39648 0.384319 1.65863 0.245189 1.93189 0.130996C1.95923 0.119238 1.98466 0.108028 2.00735 0.0979104C2.14271 0.0369338 2.34778 -0.0552146 2.60755 0.0432229C2.78091 0.108301 2.93567 0.241465 3.17794 0.480723C3.67478 0.970723 4.35372 2.06201 4.60419 2.59795C4.77235 2.95916 4.88364 3.1976 4.88392 3.46502C4.88392 3.77811 4.72642 4.01955 4.53528 4.28014C4.49946 4.32908 4.46392 4.37584 4.42946 4.42123C4.22138 4.69467 4.17571 4.77369 4.20579 4.91479C4.26677 5.19834 4.72149 6.04244 5.4688 6.78811C6.2161 7.53377 7.03587 7.95978 7.32052 8.02049C7.46763 8.05193 7.54829 8.00436 7.83048 7.78889C7.87095 7.75799 7.91251 7.726 7.95599 7.694C8.24747 7.47717 8.47771 7.32377 8.78341 7.32377H8.78505C9.0511 7.32377 9.27888 7.43916 9.65622 7.62947C10.1484 7.87775 11.2725 8.54795 11.7655 9.04533C12.0053 9.28705 12.139 9.44127 12.2044 9.61436C12.3028 9.87494 12.2101 10.0792 12.1497 10.2159C12.1396 10.2386 12.1284 10.2635 12.1166 10.2911C12.0015 10.5639 11.8616 10.8255 11.6985 11.0726C11.4079 11.5074 11.1134 11.844 10.6217 12.0728C10.3693 12.1923 10.093 12.2528 9.81372 12.2497Z" fill="white"/>
</svg>
            <span> +91 9965696307</span>
          </div>
          <div className="flex items-center gap-2">
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 0H1.16667C0.525 0 0 0.525 0 1.16667V8.16667C0 8.80833 0.525 9.33333 1.16667 9.33333H10.5C11.1417 9.33333 11.6667 8.80833 11.6667 8.16667V1.16667C11.6667 0.525 11.1417 0 10.5 0ZM10.2667 2.47917L6.45167 4.865C6.0725 5.10417 5.59417 5.10417 5.215 4.865L1.4 2.47917C1.34151 2.44633 1.29029 2.40197 1.24944 2.34876C1.20858 2.29556 1.17895 2.23462 1.16234 2.16963C1.14572 2.10465 1.14246 2.03696 1.15276 1.97068C1.16306 1.9044 1.1867 1.84089 1.22225 1.78401C1.2578 1.72713 1.30452 1.67805 1.35959 1.63975C1.41466 1.60145 1.47693 1.57471 1.54262 1.56117C1.60832 1.54763 1.67608 1.54756 1.74181 1.56097C1.80753 1.57438 1.86985 1.60098 1.925 1.63917L5.83333 4.08333L9.74167 1.63917C9.79681 1.60098 9.85914 1.57438 9.92486 1.56097C9.99059 1.54756 10.0583 1.54763 10.124 1.56117C10.1897 1.57471 10.252 1.60145 10.3071 1.63975C10.3621 1.67805 10.4089 1.72713 10.4444 1.78401C10.48 1.84089 10.5036 1.9044 10.5139 1.97068C10.5242 2.03696 10.5209 2.10465 10.5043 2.16963C10.4877 2.23462 10.4581 2.29556 10.4172 2.34876C10.3764 2.40197 10.3252 2.44633 10.2667 2.47917Z" fill="white"/>
</svg>
            <span>Aaradhyaholidays2026@gmail.com</span>
          </div>
        </div>

        {/* Top Decorative Line with Plane */}
        <div className="hidden lg:flex items-center justify-end w-full mb-6 ">
          <div className="w-[45%] flex items-center">
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.947 8L12 0H14L11.474 8H16.834L18.5 5H20L19 9.5L20 14H18.5L16.833 11H11.473L14 19H12L6.947 11H1.5C1.10218 11 0.720644 10.842 0.43934 10.5607C0.158035 10.2794 0 9.89782 0 9.5C0 9.10218 0.158035 8.72064 0.43934 8.43934C0.720644 8.15804 1.10218 8 1.5 8H6.947Z" fill="#D11115"/>
</svg>

            <div className="flex-1 border-t border-[#D4AF37] ml-1" />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-12 lg:gap-8 mb-12 sm:mb-16">

          {/* Left Column: Logo & Branding Headline */}
<div className="w-full lg:w-1/3 max-w-md mt-6 lg:-mt-22 text-center lg:text-left mx-auto lg:mx-0">
            {/* Mountain Styled Logo */}
  <div className="mb-6 flex justify-center lg:justify-start">
  <img
    src={logo}
    alt="Aaradhya Holidays"
    className="w-[92px] h-[44px] object-cover"
  />
</div>

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-[#D11115]">Curating</span> Seamless Journeys and Global Experiences
            </h2>
  <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs mx-auto lg:mx-0">
              Explore stunning destinations, unique experiences and unforgettable journey with Voyara.
            </p>

            {/* Social Media Links */}
<div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
  {socials.map(({ icon, label }) => (
    <a
      key={label}
    href="#"
      aria-label={label}
      className="text-white hover:text-orange-500 transition-colors"
    >
      {icon}
    </a>
  ))}
</div>
          </div>

          {/* Right Column: Links Grid */}
          <div className="w-full lg:w-2/5 grid grid-cols-2  gap-x-4 gap-y-8 sm:gap-8 poppins px-5 lg:px-0">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[#D11115] font-semibold text-sm sm:text-base mb-[6px] tracking-wide">
                  {col.title}
                </h3>
                <ul className="space-y-[6px]">
                  {col.links.map((link) => (
  <li key={link.name}>
    <Link
      to={link.path}
      onClick={handleLinkClick}
      className="text-white text-xs sm:text-sm hover:text-orange-500 transition-colors font-[500]"
    >
      {link.name}
    </Link>
  </li>
))}
                </ul>
              </div>
            ))}
          </div>
        </div>
{/* Newsletter */}
<div className="flex flex-col lg:flex-row justify-between items-center mb-0 gap-8">
  <div></div>

  <div className="w-full lg:max-w-[530px]">
    <h2 className="text-2xl sm:text-[28px] font-bold leading-tight sora text-center lg:text-left">
Stay Inspired. Travel Smarter.    </h2>

    <p className="text-white/70 mt-1 mb-6 text-sm text-center lg:text-left">
      Get exclusive offers and destination insights delivered to your inbox.
    </p>

    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <div className="flex-1 flex items-center bg-black border border-white rounded-full px-5 py-3">
<svg  className="mr-3 shrink-0"  width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L11.06 8.34C10.41 8.75 9.59 8.75 8.94 8.34L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z" fill="white"/>
</svg>
        <input
          type="email"
          placeholder="Enter your email address..."
          className="bg-transparent outline-none flex-1 min-w-0 text-sm placeholder-white/50"
        />
      </div>

      <button className="bg-[#D11115] hover:bg-[#ae0b0e] rounded-full px-8 py-3 font-medium shrink-0">
        Subscribe
      </button>
    </div>
  </div>
</div>

        {/* Bottom Decorative Line */}
       {/* Brand Logo */}
<div className="mb-6 mt-10 lg:mt-0 flex justify-center lg:justify-start">
  <img
    src={logo2}
    alt="Aaradhya Holidays"
    className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto object-contain"
  />
</div>

{/* Orange Line */}
<div className="w-full mb-4 flex items-center">
  <div className="flex-1 border-t border-[#D4AF37] mr-1" />
 <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.053 11L8 19H6L8.526 11H3.166L1.5 14H0L1 9.5L0 5H1.5L3.167 8H8.527L6 0H8L13.053 8H18.5C18.8978 8 19.2794 8.15804 19.5607 8.43934C19.842 8.72064 20 9.10218 20 9.5C20 9.89782 19.842 10.2794 19.5607 10.5607C19.2794 10.842 18.8978 11 18.5 11H13.053Z" fill="#D11115"/>
</svg>


</div>

        {/* Footer Base Info Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-white/50">

          <div>
            <p className="tracking-wide">© 2026 Aaradhya Holidays. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}