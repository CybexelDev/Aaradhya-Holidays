// import heritage from "../assets/heritage.jpg";
// import hill from "../assets/hill.jpg";
// import international from "../assets/international.jpg";
// import beach from "../assets/beach.jpg";
import heritage from "../../../assets/Home/destination/des1.jpg";
import hill from "../../../assets/Home/destination/des2.jpg";
import international from "../../../assets/Home/destination/des3.jpg";
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
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="flex flex-col gap-[10px] text-center">
          <p className="uppercase tracking-[3px] text-[#F58220] text-xs font-semibold">
            Discover More
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mt-3">
            Explore Destinations
          </h2>

          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
            Our purpose is clear, our vision is broad, and our values are the
            compass that guides us.
          </p>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Left Large Card */}

          <div className="relative rounded-3xl overflow-hidden group h-[420px] md:h-[520px]">
            <img
              src={destinations[0].image}
              alt=""
              className="w-full h-full object-cover transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-6">
              <h3 className="text-white text-3xl font-semibold">
                {destinations[0].title}
              </h3>

              <p className="text-white/90 mt-1">
                {destinations[0].subtitle}
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div className="flex flex-col gap-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {destinations.slice(1, 3).map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl overflow-hidden group h-[250px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <h3 className="absolute bottom-5 left-5 text-white text-xl font-medium">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Bottom Card */}

            <div className="relative rounded-3xl overflow-hidden group h-[245px]">
              <img
                src={destinations[3].image}
                alt=""
                className="w-full h-full object-cover transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-5">
                <h3 className="text-white text-3xl font-semibold">
                  {destinations[3].title}
                </h3>

                <p className="text-white/90 mt-1">
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