import Image from "next/image";

function HeroBanner() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center lg:justify-between px-4 mt-[81px] sm:mt-[77px] sm:px-8 py-12 sm:py-24 min-h-[700px] bg-black animate__animated animate__fadeIn animate__faster">
      {/* Background Spline Animation */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <iframe
          src="https://my.spline.design/particles-7cf1560892450412e3ac1a75f902a4c7/"
          title="Spline Particles Animation"
          className="w-full h-full border-0"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          allowFullScreen
        />

        <div className="absolute w-40 h-10 bottom-4 right-4 bg-[#121212] z-1"></div>
      </div>
      {/* Left: Hero Text */}
      <div className="z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center mt-8 lg:mt-0 animate__animated animate__fadeInUp animate__fast">
        <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-center lg:text-left leading-tight">
          Let&apos;s build
          <br />
          your website.
        </h1>
        <button className="mt-2 bg-white text-black px-6 py-3 rounded-md font-semibold text-base sm:text-lg flex items-center gap-2 hover:bg-gray-100 transition cursor-pointer mx-auto lg:mx-0">
          Get your website
          <Image
            src="/assets/arrow-right.svg"
            alt="arrow right icon"
            width={24}
            height={24}
            className="w-5 h-5 sm:w-8 sm:h-8"
          />
        </button>
      </div>
      {/* Right: Info Card with 3 rectangles */}
      <div className="flex items-center gap-8 z-10 relative animate__animated animate__fadeInUp animate__fast">
        <div className="text-white absolute bottom-[130px] lg:bottom-[200px] right-[130px] lg:right-[200px]">
          <p className="lg:w-[450px] text-base lg:text-2xl text-right">
            We are 1202 (twelve-oh-two) and we make professional websites for
            your business quickly and affordably.
          </p>
        </div>
        <div className="absolute bottom-[24px] lg:bottom-[50px] left-10">
          <div className="font-bold text-black mb-1 text-2xl">Contact us</div>
          <a
            href="mailto:hello@1202design.com"
            className="text-black break-all"
          >
            hello@1202design.com
          </a>
        </div>
        {/* Image */}
        <Image
          src="/assets/union.png"
          alt="Union image"
          width={800}
          height={800}
          className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] mt-8 lg:mt-0"
        />

        {/* Text Content */}
      </div>
    </section>
  );
}

export default HeroBanner;
