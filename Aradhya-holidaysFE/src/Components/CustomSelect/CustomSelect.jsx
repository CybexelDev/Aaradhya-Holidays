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
    className="flex w-full items-center gap-2 text-left"
  >
    {icon}

    <span
      className={`flex-1 truncate text-[16px] font-[500] ${
        selectedLabel ? "text-[#0A3552]" : "text-[#0A3552]/70"
      }`}
    >
      {selectedLabel || placeholder}
    </span>

    <ChevronDown
      size={16}
      className={`shrink-0 text-[#00263F] transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      }`}
    />
  </button>

  {/* Dropdown */}
  <div
  className={`absolute right-0 top-full z-20 mt-3 min-w-[45%] md:min-w-[45%] lg:min-w-[200px]
  max-h-64 overflow-y-auto rounded-[10px] bg-white shadow-xl
  transition-all duration-500 ease-out
  ${
    open
      ? "translate-y-0 opacity-100 visible"
      : "-translate-y-2 opacity-0 invisible pointer-events-none"
  }`}
>
  {options.map((opt, idx) => {
    const optValue = getValue(opt);
    const isSelected = optValue === value;

    return (
      <button
        key={idx}
        type="button"
        onClick={() => {
          onChange(optValue);
          setOpen(false);
        }}
        className={`inter flex w-full cursor-pointer items-center justify-between px-8 py-3 text-left text-[15px] transition-colors hover:bg-[#F1F5F9] ${
          isSelected
            ? "font-[600] text-[#0B4F8A]"
            : "text-[#00263F]"
        }`}
      >
        <span>{getLabel(opt)}</span>
      </button>
    );
  })}
</div>
</div>
  );
}