import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
export default function Navbar() {
 const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Tour Plan", path: "/tour-plan" },
  { name: "Contact", path: "/contact" },
];
const navigate = useNavigate();
const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // 1. Wrap everything in a relative container so the mobile menu
    //    can be absolutely positioned against it.
    <div className="relative z-50">
      <nav className="flex items-center justify-between px-5 lg:px-10 py-2 sm:py-4 mt-0 mx-4 md:mx-[20px] lg:mx-[41px] xl:mx-[60px] rounded-[50px] bg-[#919191B2]  shadow-[0px_17px_23px_0px_rgba(0,0,0,0.25)]">

        {/* Logo */}
        <div className="text-white text-[19px] sm:text-[24px] lg:text-[30px] leading-[30px] lg:leading-[40px] tracking-[-0.93px] font-[700] inter"   onClick={() => navigate("/")}
>
          Aaradhya <span className="text-sky-400">Holidays</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[1px] lg:gap-2 inter leading-[24px] text-[16px] md:text-[11px] lg:text-[16px]">
         {navItems.map((item) => (
  <button
    key={item.name}
    onClick={() => {
      navigate(item.path);
    }}
    className="relative px-4 py-[2px] rounded-[34px] cursor-pointer"
  >
    {location.pathname === item.path && (
      <motion.div
        layoutId="activeTab"
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 25,
          mass: 0.8,
        }}
        className="absolute inset-0 rounded-[34px] bg-[#FFFFFF1A] border border-[#FFFFFF80]"
      />
    )}

    <span
      className={`relative z-10 transition-colors duration-300 ${
location.pathname === item.path          ? "text-[#D11115] font-[600]"
          : "text-white hover:text-[#D11115] font-[300]"
      }`}
    >
      {item.name}
    </span>
  </button>
))}
        </div>

        {/* Desktop Call Button */}
        <button className="hidden md:flex inter items-center bg-[#D11115] text-white md:text-[14px] lg:text-[16px] font-[700] leading-[24px] md:px-6 lg:px-7 md:py-[6px] lg:py-2 rounded-[30px] hover:opacity-90 transition" onClick={()=>navigate("/contact")}>
          Call Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu — now absolutely positioned so it overlays content
          instead of pushing it down */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 mx-4 mt-[10px] rounded-[30px] bg-[#919191E6] backdrop-blur-[23px] p-5 shadow-lg z-50"
          >
            <div className="flex flex-col gap-3">

            {navItems.map((item) => (
  <button
    key={item.name}
    onClick={() => {
      setMenuOpen(false);
      navigate(item.path);
    }}
    className={`py-3 rounded-full transition-all duration-300 ${
location.pathname === item.path        ? "bg-[#FFFFFF1A] border border-[#FFFFFF80] text-[#D11115] font-[600]"
        : "text-white hover:bg-white/10"
    }`}
  >
    {item.name}
  </button>
))}

              <button className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#D11115] py-3 text-white font-[700]">
                Call Now
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}