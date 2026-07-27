import ctaImage from "../../../src/assets/Home/cta/bg.jpg";

export default function CTASection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[50px] py-10 sm:py-14 lg:py-16 bg-[#F7F8FA] inter">
      <div
        className="relative h-auto lg:h-[461px] min-h-[420px] lg:min-h-0 mx-auto rounded-[24px] lg:rounded-[40px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${ctaImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#003B57]/25" />

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-12 lg:px-14 py-12 lg:py-0">
          <div className="text-white max-w-full lg:max-w-[518px]">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-3 sm:mb-4">
              AARADHYA HOLIDAYS
            </p>

            <h2 className="text-[28px] sm:text-[32px] lg:text-[35px] leading-tight font-semibold poppins mb-4 sm:mb-5">
              Ready to Start Your Journey?
            </h2>

            <p className="text-[14px] leading-7 font-normal max-w-full lg:max-w-[382px] mb-8 sm:mb-10">
              Your next great adventure is just a click away. Let's craft a
              journey that reflects who you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-8 h-12 rounded-full bg-[#D11115] text-white font-semibold hover:scale-105 transition">
                Plan My Trip
              </button>

              <button className="w-full sm:w-auto px-8 h-12 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#003B57] transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}