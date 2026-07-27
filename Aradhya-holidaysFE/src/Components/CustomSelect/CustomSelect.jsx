import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function CustomSelect({
  icon,
  placeholder,
  options = [],
  value,
  onChange,
  getLabel = (item) => item,
  getValue = (item) => item,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => getValue(opt) === value) &&
    getLabel(options.find((opt) => getValue(opt) === value));

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 w-full text-left"
      >
        {icon}
        <span
          className={`flex-1 text-[16px] font-[500] truncate ${
            selectedLabel ? "text-[#0A3552]" : "text-[#0A3552]/70"
          }`}
        >
          {selectedLabel || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`text-[#00263F] shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-0 top-full mt-3 w-full min-w-[220px] origin-top rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,38,63,0.18)] border border-[#00263F0D] overflow-hidden z-50 transition-all duration-300 ease-out ${
          open
            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <ul className="max-h-[260px] overflow-y-auto py-2">
          {options.map((opt, idx) => {
            const optValue = getValue(opt);
            const isSelected = optValue === value;
            return (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(optValue);
                    setOpen(false);
                  }}
                  className={`w-full cursor-pointer flex items-center justify-between px-5 py-3 text-[15px] font-[400] transition-colors ${
                    isSelected
                      ? "bg-[#00263F0D] text-[#00263F] font-[600]"
                      : "text-[#42474E] hover:bg-[#00263F0D]"
                  }`}
                >
                  {getLabel(opt)}
                  {isSelected && <Check size={16} className="text-[#D11115]" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}