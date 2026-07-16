import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Services",
    "Tour Plan",
    "Contact",
  ];

  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-5 md:px-10 py-4 mt-4 mx-4 md:mx-[60px] rounded-[50px] bg-[#919191B2]  shadow-[0px_17px_23px_0px_rgba(0,0,0,0.25)]">

        {/* Logo */}
        <div className="text-white text-[19px] sm:text-[24px] md:text-[30px] leading-[30px] md:leading-[40px] tracking-[-0.93px] font-[700] inter">
          Aaradhya <span className="text-sky-400">Holidays</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 inter leading-[24px] text-[16px]">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="relative px-4 py-[2px] rounded-[34px] cursor-pointer"
            >
              {active === item && (
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
                  active === item
                    ? "text-[#FF7A00] font-[600]"
                    : "text-white hover:text-orange-300 font-[300]"
                }`}
              >
                {item}
              </span>
            </button>
          ))}
        </div>

        {/* Desktop Call Button */}
        <button className="hidden md:flex inter items-center gap-2 bg-gradient-to-r from-[#FF7A00] to-[#FF4E7A] text-white text-[16px] font-[700] leading-[24px] px-7 py-2 rounded-[30px] hover:opacity-90 transition">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-4 mt-[-24px] rounded-[30px] bg-[#919191E6] backdrop-blur-[23px] p-5 shadow-lg"
          >
            <div className="flex flex-col gap-3">

              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setMenuOpen(false);
                  }}
                  className={`py-3 rounded-full transition-all duration-300 ${
                    active === item
                      ? "bg-[#FFFFFF1A] border border-[#FFFFFF80] text-[#FF7A00] font-[600]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}

              <button className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4E7A] py-3 text-white font-[700]">
                Call Now
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}