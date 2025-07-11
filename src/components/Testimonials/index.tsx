import clsx from "clsx";
import { TESTIMONIALS } from "./constants";
import Image from "next/image";

export type Testimonial = {
  image?: string;
  name: string;
  feedback: string;
  rating: number;
  display: boolean;
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-4 md:px-8 relative">
      {/* Section Title */}
      <div className="px-4 absolute top-1/2 left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-0 md:-z-1">
        <span className="italic font-extralight text-[96px] md:text-[128px] tracking-[-1.92px] md:tracking-[-2.56px] leading-[0.9] md:leading-none">
          Our
        </span>
        <span className="font-semibold text-[96px] md:text-[128px] tracking-[-1.92px] md:tracking-[-2.56px] leading-[0.9] md:leading-none">
          {" "}
          clients
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap items-center content-center gap-x-5 gap-y-31 md:gap-y-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col justify-between items-center shrink-0",
              "rounded-4xl bg-neutral-50 p-6 pb-8 w-[259px] h-[346px]",
              {
                invisible: !testimonial.display,
              }
            )}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="size-16 aspect-square bg-[#D9D9D9] rounded-full overflow-clip">
                {testimonial.image && (
                  <Image
                    src={testimonial.image}
                    alt="User Avatar"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                )}
              </div>

              <div className="flex flex-col gap-0.5 items-center">
                <p className="text-xl font-semibold text-neutral-950 text-center">
                  {testimonial.name}
                </p>
                <p className="text-md text-gray-500 text-center lining-nums proportional-nums text-pretty">
                  {testimonial.feedback}
                </p>
              </div>
            </div>

            <div className="flex items-center content-center gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Image
                  key={i}
                  src="/assets/star.svg"
                  alt="Star Icon"
                  width={16}
                  height={16}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
