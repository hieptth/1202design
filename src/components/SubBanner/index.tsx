import Image from "next/image";

const SubBanner = () => {
  return (
    <section id="work" className="px-3 lg:px-[10%]">
      <div className="rounded-4xl bg-neutral-50 border-box pt-6 px-4 lg:pt-16 lg:pl-16 lg:pb-23.5 lg:pr-0 h-[550px] lg:h-auto">
        <div className="flex flex-col gap-2 lg:gap-3 lg:max-w-7/10">
          <p className="text-display-sm lg:text-display-lg text-neutral-950 text-balance">
            Bring your business forward.
          </p>
          <p className="text-sm lg:text-xl text-gray-500 text-pretty">
            84% of consumers believe that a website enhances a business&apos;s
            credibility. Don&apos;t just get a website, get a result-driven
            online presence that you and your customers will love.
          </p>

          <button
            type="button"
            className="w-fit flex items-center gap-2 rounded-xl bg-neutral-950 text-white px-8 py-3 mt-3 lg:mt-6 hover:bg-gray-900 transition"
          >
            <p className="text-md font-medium">Our work</p>
            <Image
              src="/assets/arrow-right.svg"
              alt="arrow right icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;
