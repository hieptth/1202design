import clsx from "clsx";
import Image from "next/image";

const SubBanner = () => {
  return (
    <section id="work" className="px-3 sm:px-[10%]">
      <div className="rounded-4xl bg-neutral-50 border-box pt-6 px-4 pb-73.5 md:pt-16 md:pl-16 md:pb-23.5 md:pr-0 relative overflow-hidden">
        <div className="flex flex-col gap-2 sm:gap-3 sm:max-w-7/10 relative z-10">
          <p className="text-display-sm sm:text-display-lg text-neutral-950 text-balance">
            Bring your business forward.
          </p>
          <p className="text-sm sm:text-xl text-gray-500 text-pretty">
            84% of consumers believe that a website enhances a business&apos;s
            credibility. Don&apos;t just get a website, get a result-driven
            online presence that you and your customers will love.
          </p>

          <button
            type="button"
            className={clsx(
              "flex items-center gap-2 group w-fit transition cursor-pointer",
              "bg-neutral-950 text-white hover:bg-gray-900",
              "rounded-xl px-8 py-3 mt-3 sm:mt-6"
            )}
          >
            <p className="text-md font-medium">Our work</p>
            <Image
              src="/assets/arrow-right.svg"
              alt="arrow right icon"
              width={24}
              height={24}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Background decoration */}
        <div
          className={clsx(
            "absolute -bottom-2 sm:-bottom-6 -right-6 sm:-right-12 pointer-events-none",
            "w-[350px] sm:w-[400px] h-[250px] sm:h-[300px]"
          )}
        >
          <Image
            src="/assets/sub-banner-decor.svg"
            alt="decorative element"
            width={600}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Blurred ellipse overlay */}
        <div
          className={clsx(
            "absolute bottom-0 right-0 pointer-events-none",
            "translate-x-[15%] translate-y-[30%]",
            "rounded-full bg-[#6E7FA4] blur-xl opacity-30",
            "size-[351px]"
          )}
        />
      </div>
    </section>
  );
};

export default SubBanner;
