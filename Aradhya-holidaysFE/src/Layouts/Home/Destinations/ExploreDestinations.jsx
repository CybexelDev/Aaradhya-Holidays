// import heritage from "../assets/heritage.jpg";
// import hill from "../assets/hill.jpg";
// import international from "../assets/international.jpg";
// import beach from "../assets/beach.jpg";
import heritage from "../../../assets/Home/destination/des1.jpg";
import hill from "../../../assets/Home/destination/des3.jpg";
import international from "../../../assets/Home/destination/des2.jpg";
import beach from "../../../assets/Home/destination/des4.jpg";



const destinations = [
  {
    title: "Heritage Wonders",
    subtitle: "Step back in time with royalty",
    image: heritage,
    large: true,
  },
  {
    title: "Hill Stations",
    image: hill,
  },
  {
    title: "International",
    image: international,
  },
  {
    title: "Tropical Beaches",
    subtitle: "Luxury stays by the shore",
    image: beach,
    wide: true,
  },
];

export default function ExploreDestinations() {
  return (
    <section className="bg-[#CDE5FF4D] py-16 lg:py-[60px] px-5 md:px-8 lg:px-12">
      <div className="mx-auto">

        {/* Heading */}

        <div className="flex flex-col gap-[10px] text-center">
          <p className="uppercase text-[#FF7A00] inter text-[12px] font-[500]">
            Discover More
          </p>

          <h2 className="poppins text-3xl md:text-[35px] font-[600] text-[#191919]">
            Explore Destinations
          </h2>

          <p className="text-[#848484] text-[12px] font-[400] inter ">
            Our purpose is clear, our vision is broad, and our values are the
            compass that guides us.
          </p>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[60px]">

          {/* Left Large Card */}

          <div className="relative rounded-[24px] overflow-hidden group h-[480px] md:h-[600px]  shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
            <img
              src={destinations[0].image}
              alt=""
              className="w-full h-full object-cover transition duration-500"
            />

<div className="absolute inset-0 bg-gradient-to-t from-[#00263FCC] via-[#00263F00] to-[#00263F00]" />
            <div className="absolute bottom-5 px-8">
                <h3 className="text-white inter text-[24px] leading-[33px] font-[600]">
                {destinations[0].title}
              </h3>

                <p className="text-white/80 inter font-[400] text-[16px] leading-[24px]">
                {destinations[0].subtitle}
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div className="flex flex-col gap-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">

              {destinations.slice(1, 3).map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl overflow-hidden group h-[290px]  shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transition duration-500"
                  />

<div className="absolute inset-0 bg-gradient-to-t from-[#00263FCC] via-[#00263F00] to-[#00263F00]" />

                  <h3 className="absolute px-8 bottom-4 inter leading-[28px] text-white text-[18px] font-[600]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Bottom Card */}

            <div className="relative rounded-3xl overflow-hidden group h-[285px]  shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <img
                src={destinations[3].image}
                alt=""
                className="w-full h-full object-cover transition duration-500"
              />

<div className="absolute inset-0 bg-gradient-to-t from-[#00263FCC] via-[#00263F00] to-[#00263F00]" />

              <div className="absolute bottom-5 px-8">
                <h3 className="text-white inter text-[24px] leading-[33px] font-[600]">
                  {destinations[3].title}
                </h3>

                <p className="text-white/80 inter font-[400] text-[16px] leading-[24px]">
                  {destinations[3].subtitle}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}