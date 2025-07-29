import clsx from "clsx";
import Image from "next/image";

function HeroBanner() {
  return (
    <section className="relative flex flex-col lg:flex-row items-start lg:justify-between gap-15 lg:gap-0 px-4 mt-18 md:mt-18 sm:px-[10%] py-12 sm:py-24 min-h-175 bg-black animate__animated animate__fadeIn animate__faster">
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
      <div className="z-10 w-full lg:w-1/2 flex flex-col gap-3 lg:gap-8 items-center lg:items-start justify-center animate__animated animate__fadeInUp animate__fast">
        <p className="text-display-lg font-semibold text-white text-center lg:text-left max-w-110 text-balance">
          Let&apos;s build your website.
        </p>
        <button
          className={clsx(
            "flex items-center gap-2 group w-fit transition cursor-pointer",
            "bg-white text-white hover:bg-gray-100",
            "rounded-xl px-8 py-3 mx-auto lg:mx-0"
          )}
        >
          <p className="text-md text-neutral-950 font-medium">
            Get your website
          </p>
          <Image
            src="/assets/arrow-right.svg"
            alt="arrow right icon"
            width={24}
            height={24}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Right: Info Card with 3 rectangles */}
      <div className="flex items-center self-center gap-8 z-10 relative animate__animated animate__fadeInUp animate__fast">
        <div className="text-white absolute bottom-32.5 lg:bottom-50 right-32.5 lg:right-50">
          <p className="lg:w-112.5 text-lg lg:text-display-xs text-balance text-right">
            We are 1202 (twelve-oh-two) and we make professional websites for
            your business quickly and affordably.
          </p>
        </div>
        <div className="absolute bottom-6 lg:bottom-12.5 left-10">
          <div className="font-semibold text-neutral-950 mb-1 text-xl lg:text-display-xs">
            Contact us
          </div>
          <a
            href="mailto:hello@1202design.com"
            className="text-lg lg:text-display-xs text-neutral-950 break-all"
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
          className="w-full max-w-100 h-100 lg:max-w-150 lg:h-150"
        />

        {/* Text Content */}
      </div>
    </section>
  );
}

export default HeroBanner;
