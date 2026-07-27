import React from "react";
import { Leaf, Star, Infinity as InfinityIcon, Flag } from "lucide-react";
import img1 from "../../../../src/assets/About/PhilosophySection/1.jpg"
import img2 from "../../../../src/assets/About/PhilosophySection/2.jpg"

const philosophyCards = [
  {
    key: "earth",
    variant: "image",
    image:
      img1,
    icon: (<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49229 27.4606C3.08204 26.0439 1.98076 24.4149 1.18846 22.5736C0.396152 20.7324 0 18.8287 0 16.8625C0 14.8908 0.377562 12.9344 1.13269 10.9933C1.88781 9.05232 3.10768 7.23951 4.79228 5.5549C6.01024 4.33695 7.53524 3.33374 9.3673 2.54528C11.1994 1.75682 13.2744 1.15619 15.5923 0.743372C17.9103 0.330556 20.4365 0.0901756 23.1711 0.0222292C25.9057 -0.0457171 28.7743 0.0421013 31.7768 0.285684C31.9922 3.1523 32.0659 5.93752 31.9979 8.64135C31.93 11.3452 31.6935 13.8663 31.2883 16.2048C30.8832 18.5432 30.2915 20.649 29.5133 22.5221C28.7351 24.3952 27.7332 25.9445 26.5076 27.1702C24.8563 28.8343 23.0903 30.049 21.2095 30.8144C19.3288 31.5798 17.4239 31.9625 15.4949 31.9625C13.4726 31.9625 11.4858 31.5663 9.53457 30.774C7.5833 29.9817 5.90253 28.8772 4.49229 27.4606ZM8.97682 27.1318C9.98195 27.7625 11.0441 28.2254 12.1634 28.5202C13.2826 28.8151 14.3948 28.9625 15.4999 28.9625C17.0419 28.9625 18.5672 28.6574 20.0757 28.0472C21.5841 27.4369 23.0153 26.442 24.3692 25.0625C24.9668 24.4625 25.5727 23.6209 26.1868 22.5375C26.801 21.4542 27.3322 20.0375 27.7804 18.2875C28.2286 16.5375 28.5689 14.4209 28.8013 11.9375C29.0337 9.45421 29.0794 6.49587 28.9384 3.06254C27.3051 2.99587 25.457 2.97728 23.3942 3.00677C21.3313 3.03626 19.2736 3.20421 17.2211 3.51062C15.1685 3.81703 13.2288 4.29716 11.4018 4.951C9.57492 5.60485 8.09736 6.49587 6.96916 7.62408C5.48198 9.11125 4.44865 10.617 3.86916 12.1414C3.28967 13.6658 2.99993 15.1113 2.99993 16.4779C2.99993 18.3677 3.36852 20.0766 4.10569 21.6049C4.84287 23.1331 5.61019 24.2677 6.40764 25.0087C7.52557 22.4959 9.0967 20.085 11.121 17.7761C13.1454 15.4671 15.7101 13.4524 18.8152 11.7318C16.4665 13.7805 14.455 16.0305 12.7806 18.4818C11.1063 20.9331 9.83836 23.8164 8.97682 27.1318Z" fill="#00639A"/>
</svg>)
,
    iconColor: "#43B0FF",
    title: "Rooted in Earth",
    description:
      "Our itineraries are built around natural rhythms, favoring the organic over the artificial.",
    span: "md:col-span-2",
  },
  {
    key: "luxury",
    variant: "cream",
    icon: (<svg width="41" height="34" viewBox="0 0 41 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.7651 22.0575L36.0382 15.8075L40.4804 16.1921L32.3343 23.2459L34.7419 33.8074L30.969 31.5151L28.7651 22.0575ZM24.5075 8.86143L22.4844 4.11528L24.1882 0L28.0766 9.19603L24.5075 8.86143ZM11.2575 27.0921L17.5575 23.2921L23.8575 27.1421L22.2075 19.9421L27.7575 15.1421L20.4575 14.4921L17.5575 7.69212L14.6575 14.4421L7.35751 15.0921L12.9075 19.9421L11.2575 27.0921ZM6.70762 33.365L9.57298 21.0267L0 12.7306L12.6306 11.6345L17.5575 0L22.4844 11.6345L35.115 12.7306L25.542 21.0267L28.4074 33.365L17.5575 26.819L6.70762 33.365Z" fill="#2A2317"/>
</svg>
),
    iconColor: "#00263F",
    title: "Quiet Luxury",
    description:
      "Elegance that doesn't shout. Premium comfort that honors its natural surroundings.",
    span: "md:col-span-1",
  },
  {
    key: "connection",
    variant: "dark",
    icon:(<svg width="47" height="21" viewBox="0 0 47 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 20.9999C7.5727 20.9999 5.09089 19.9819 3.05453 17.9459C1.01818 15.9099 0 13.4285 0 10.5017C0 7.57491 1.01818 5.09293 3.05453 3.05576C5.09089 1.01859 7.5727 0 10.5 0C11.6655 0 12.7838 0.207051 13.8549 0.621152C14.926 1.03525 15.8922 1.62307 16.7538 2.38461L20.5769 5.75386L18.3077 7.7615L14.7461 4.61532C14.1615 4.11275 13.5038 3.71788 12.7731 3.4307C12.0423 3.14352 11.2841 2.99993 10.4985 2.99993C8.42749 2.99993 6.65996 3.73238 5.19595 5.19728C3.73193 6.66218 2.99993 8.43077 2.99993 10.5031C2.99993 12.5754 3.73193 14.3429 5.19595 15.8058C6.65996 17.2686 8.42749 18 10.4985 18C11.2841 18 12.0423 17.8564 12.7731 17.5692C13.5038 17.282 14.1615 16.8872 14.7461 16.3846L30.2461 2.38461C31.0949 1.61025 32.0568 1.01923 33.132 0.611536C34.2072 0.203845 35.3299 0 36.5 0C39.4272 0 41.909 1.01801 43.9454 3.05403C45.9818 5.09006 46.9999 7.57146 46.9999 10.4982C46.9999 13.425 45.9818 15.907 43.9454 17.9442C41.909 19.9813 39.4272 20.9999 36.5 20.9999C35.3307 20.9999 34.2147 20.7897 33.1519 20.3692C32.0891 19.9486 31.1205 19.364 30.2461 18.6153L26.4615 15.2461L28.6922 13.2192L32.2538 16.3846C32.8384 16.9026 33.4961 17.3013 34.2269 17.5808C34.9576 17.8603 35.7158 18 36.5014 18C38.5724 18 40.34 17.2675 41.804 15.8027C43.268 14.3378 44 12.5692 44 10.4969C44 8.42456 43.268 6.657 41.804 5.19417C40.34 3.73134 38.5724 2.99993 36.5014 2.99993C35.7158 2.99993 34.9576 3.14352 34.2269 3.4307C33.4961 3.71788 32.8384 4.11275 32.2538 4.61532L16.7538 18.6153C15.9051 19.3897 14.9431 19.9807 13.8679 20.3884C12.7927 20.7961 11.67 20.9999 10.5 20.9999Z" fill="#43B0FF"/>
</svg>
),
    iconColor: "#43B0FF",
    title: "Endless Connection",
    description:
      "Connecting people to places, and places to the future of conservation.",
    span: "md:col-span-1",
  },
  {
    key: "legacy",
    variant: "image",
    image:img2,
    icon: (<svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5384 29.6921C11.7077 29.6921 11 29.3998 10.4154 28.8152C9.8308 28.2306 9.5385 27.523 9.5385 26.6922V21.6923H15.3077V16.1922C14.0898 16.2922 12.8853 16.1429 11.6942 15.7442C10.5032 15.3454 9.47435 14.7025 8.60768 13.8153V11.3076H6.03843L0 5.26918C1.17436 3.97945 2.56794 3.04677 4.18075 2.47113C5.79356 1.8955 7.43586 1.60768 9.10764 1.60768C10.2 1.60768 11.2609 1.73204 12.2904 1.98077C13.3199 2.22949 14.3257 2.63976 15.3077 3.21157V0H37.3076V24.6922C37.3076 26.0896 36.8236 27.2723 35.8557 28.2402C34.8877 29.2082 33.7051 29.6921 32.3076 29.6921H12.5384ZM18.3076 21.6923H30.3076V24.6922C30.3076 25.2589 30.4993 25.7339 30.8826 26.1172C31.266 26.5005 31.741 26.6922 32.3076 26.6922C32.8743 26.6922 33.3493 26.5005 33.7326 26.1172C34.116 25.7339 34.3076 25.2589 34.3076 24.6922V2.99993H18.3076V5.2L29.8076 16.7V18.8076H27.7L21.8076 12.9153L21.0422 13.6807C20.614 14.1089 20.1769 14.4807 19.7307 14.7961C19.2846 15.1115 18.8102 15.3691 18.3076 15.5691V21.6923ZM7.31532 8.30768H11.6076V12.4154C12.1486 12.759 12.6743 12.9936 13.1846 13.1192C13.6948 13.2449 14.2025 13.3077 14.7076 13.3077C15.5512 13.3077 16.3134 13.1718 16.9942 12.9C17.675 12.6282 18.3282 12.1795 18.9538 11.5538L19.7 10.8076L16.5538 7.66146C15.5359 6.64351 14.3948 5.88005 13.1307 5.37107C11.8666 4.86209 10.5256 4.6076 9.10764 4.6076C8.28712 4.6076 7.49672 4.69607 6.73645 4.873C5.97618 5.04993 5.264 5.28968 4.59989 5.59225L7.31532 8.30768ZM27.3077 24.6922H12.5384V26.6922H27.7616C27.5975 26.405 27.4808 26.0916 27.4116 25.7518C27.3423 25.4121 27.3077 25.0589 27.3077 24.6922ZM12.5384 26.6922C12.5384 26.405 12.5384 26.0916 12.5384 25.7518C12.5384 25.4121 12.5384 25.0589 12.5384 24.6922C12.5384 25.0255 12.5384 25.3589 12.5384 25.6922C12.5384 26.0255 12.5384 26.3589 12.5384 26.6922Z" fill="#00639A"/>
</svg>
),
    iconColor: "#1D9E75",
    title: "Intentional Legacy",
    description:
      "We believe in travel that enriches both the visitor and the host community sustainably.",
    span: "md:col-span-2",
  },
];

function PhilosophyCard({ card }) {
const Icon = card.icon;
  if (card.variant === "image") {
    return (
      <div
        className={`relative rounded-[24px] overflow-hidden min-h-[220px] sm:min-h-[230px] ${card.span}`}
     
      >
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 " />
        <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
         <div className="mb-4">{Icon}</div>
          <h3 className="text-[#00263F] text-xl sm:text-[30px] font-[400] poppins mb-2">
            {card.title}
          </h3>
          <p className="text-[#42474E] text-[18px] leading-relaxed max-w-md">
            {card.description}
          </p>
        </div>
      </div>
    );
  }

  if (card.variant === "cream") {
    return (
      <div
        className={`rounded-[24px] bg-[#EFE1C8] p-6 sm:p-8 flex flex-col justify-center min-h-[220px] sm:min-h-[230px] ${card.span}`}
      >
        <div className="mb-16">{Icon}</div>
        <h3 className="text-[#00263F] text-xl sm:text-2xl font-semibold poppins mb-2">
          {card.title}
        </h3>
        <p className="text-[#00263F]/70 text-[16px] leading-relaxed max-w-[330px]">
          {card.description}
        </p>
      </div>
    );
  }

  // dark variant
  return (
    <div
      className={`rounded-[24px] bg-[#0A2540] p-6 sm:p-8 flex flex-col justify-end min-h-[220px] sm:min-h-[230px] ${card.span} p-10`}
    >
  <div className="mb-13 ">{Icon}</div>
      <h3 className="text-white text-xl sm:text-2xl font-semibold poppins mb-2">
        {card.title}
      </h3>
      <p className="text-white/60 text-[16px] leading-relaxed max-w-[150px]">
        {card.description}
      </p>
    </div>
  );
}

export default function CorePhilosophySection() {
  return (
    <section className="w-full bg-[#F7F8FA] py-16 sm:py-20 inter ">
      <div className="   text-center mb-10 sm:mb-14">
        <p className="text-[#D11115] text-xs font-[500] tracking-widest mb-3">
          TRUST
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#00263F] mb-3 poppins">
          Our Core Philosophy
        </h2>
        <p className="text-[#848484] font-[400] text-sm max-w-md mx-auto alexandria">
          Our purpose is clear, our vision is broad, and our values are the
          compass that guides us.
        </p>
      </div>

      <div className="px-7 md:px-[40px] w-full ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {philosophyCards.map((card) => (
            <PhilosophyCard key={card.key} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}