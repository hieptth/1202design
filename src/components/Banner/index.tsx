import Image from "next/image";

function HeroBanner() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center lg:justify-between px-4 mt-[81px] sm:mt-[77px] sm:px-8 py-12 sm:py-24 min-h-[700px] bg-black">
      {/* Background Particles Image */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Image
          src="/assets/particles.png"
          alt="particles background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          className="opacity-80"
        />
      </div>
      {/* Left: Hero Text */}
      <div className="z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center mt-8 lg:mt-0">
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
      <div className="flex items-center gap-8 z-10 relative">
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
