"use client";

import { AutoPlay } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";
import { TESTIMONIALS } from "./constants";

export type Testimonial = {
  image?: string;
  name: string;
  feedback: string;
  rating: number;
  display: boolean;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const plugins = [
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true }),
  ];

  return (
    <section
      id="testimonials"
      className="px-4 md:px-8 xl:mx-auto xl:max-w-360 relative"
      ref={sectionRef}
    >
      {/* Section Title */}
      <div className="px-4 absolute top-1/2 left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-2 md:-z-1">
        <span className="italic font-extralight text-[96px] md:text-[128px] tracking-[-1.92px] md:tracking-[-2.56px] leading-[0.9] md:leading-none">
          Our
        </span>
        <span className="font-semibold text-[96px] md:text-[128px] tracking-[-1.92px] md:tracking-[-2.56px] leading-[0.9] md:leading-none">
          {" "}
          clients
        </span>
      </div>

      {/* Cards for desktop */}
      <div className="hidden md:grid grid-cols-12 xl:grid-cols-5 gap-x-5 gap-y-8 max-h-[calc(2*346px+32px)] overflow-hidden">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            className={`col-span-4 lg:col-span-3 xl:col-span-1`}
          />
        ))}
      </div>

      {/* Cards for mobile */}
      <div className="md:hidden flex flex-col gap-y-35 z-0">
        <div className="flex justify-end w-full">
          <TestimonialCard {...TESTIMONIALS[0]} />
        </div>

        <Flicking
          align="prev"
          circular={true}
          circularFallback="bound"
          deceleration={0.005}
          duration={1000}
          plugins={plugins}
          hideBeforeInit={true}
          className="w-full"
          style={{ overflow: "unset" }}
        >
          {TESTIMONIALS.slice(1).map((testimonial, index) => (
            <div key={index} className="px-2">
              <TestimonialCard key={index} {...testimonial} />
            </div>
          ))}
        </Flicking>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  image,
  name,
  feedback,
  rating,
  display,
  className,
  style,
}: Testimonial & { className?: string; style?: React.CSSProperties }) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between items-center shrink-0",
        "rounded-4xl bg-neutral-50 p-6 pb-8 w-[259px] h-[346px]",
        {
          "md:invisible": !display,
        },
        className
      )}
      style={style}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="size-16 aspect-square bg-[#D9D9D9] rounded-full overflow-clip">
          {image && (
            <Image
              src={image}
              alt="User Avatar"
              width={64}
              height={64}
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-0.5 items-center">
          <p className="text-xl font-semibold text-neutral-950 text-center">
            {name}
          </p>
          <p className="text-md text-gray-500 text-center lining-nums proportional-nums text-pretty">
            {feedback}
          </p>
        </div>
      </div>

      <div className="flex items-center content-center gap-1">
        {[...Array(rating)].map((_, i) => (
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
  );
};

export default Testimonials;
