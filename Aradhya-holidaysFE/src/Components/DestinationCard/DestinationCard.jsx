import { Clock } from "lucide-react";

export default function DestinationCard({
  image,
  duration,
  title,
  price,
}) {
  return (
    <div className="relative w-full h-[420px] sm:h-[537px] rounded-[24px] sm:rounded-[32px] overflow-hidden group shrink-0 inter shadow-[0_10px_40px_-10px_rgba(11,60,93,0.10)]">
      {/* Background */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05243A]/95 via-[#05243A]/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:px-[34px] sm:pb-8">
        <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-medium mb-[6px]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M7.75833 8.575L8.575 7.75833L6.41667 5.6V2.91667H5.25V6.06667L7.75833 8.575ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667ZM5.83333 10.5C7.12639 10.5 8.22743 10.0455 9.13646 9.13646C10.0455 8.22743 10.5 7.12639 10.5 5.83333C10.5 4.54028 10.0455 3.43924 9.13646 2.53021C8.22743 1.62118 7.12639 1.16667 5.83333 1.16667C4.54028 1.16667 3.43924 1.62118 2.53021 2.53021C1.62118 3.43924 1.16667 4.54028 1.16667 5.83333C1.16667 7.12639 1.62118 8.22743 2.53021 9.13646C3.43924 10.0455 4.54028 10.5 5.83333 10.5Z"
              fill="white"
            />
          </svg>

          <span>{duration}</span>
        </div>

        <h3 className="text-white text-[24px] leading-[30px] sm:text-[32px] sm:leading-[40px] font-[700] max-w-full sm:max-w-[368px] tracking-[-0.32px]">
          {title}
        </h3>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-white/60 text-[13px] sm:text-[14px]">
              Starting from
            </p>

            <p className="text-white text-[18px] sm:text-[20px] font-bold">
              {price}
            </p>
          </div>

          <button className="w-full sm:w-auto bg-white text-[#1A1A1A] rounded-full px-5 sm:px-4 py-3 sm:py-2 font-semibold text-[15px] sm:text-base transition hover:bg-orange-50">
            View Journey
          </button>
        </div>
      </div>
    </div>
  );
}