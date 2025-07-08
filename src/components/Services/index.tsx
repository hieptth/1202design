"use client";

import { Accordion } from "@/app/ui";
import Image from "next/image";

const OFFERED_SERVICES = [
  {
    id: "Website Design",
    title: "Website Design",
    content: (
      <p className="text-gray-600 text-lg leading-relaxed">
        We designs visually stunning and user-friendly websites that captivate
        your visitors and boost your business&apos; credibility.
      </p>
    ),
  },
  {
    id: "Website Development",
    title: "Website Development",
    content: (
      <p className="text-gray-600 text-lg leading-relaxed">
        We build robust, scalable, and fast websites using modern technologies
        to ensure optimal performance and user experience.
      </p>
    ),
  },
  {
    id: "Website Copy Writing",
    title: "Website Copy Writing",
    content: (
      <p className="text-gray-600 text-lg leading-relaxed">
        We craft compelling, SEO-optimized content that communicates your brand
        message effectively and drives conversions.
      </p>
    ),
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5 px-4 py-8 md:px-35 md:py-24">
      <div className="flex flex-col gap-8 rounded-4xl bg-[#F8F8F8] p-9">
        <div className="flex flex-col gap-3">
          <p className="text-5xl/15 uppercase text-[#0C0C0C] tracking-tight">
            Our Services
          </p>
          <p className="text-xl text-[#767676] leading-relaxed">
            A website enhances your credibility, elevates visibility, and drive
            results. Our mission is to provide you with quality websites quickly
            and affordably to support your success.
          </p>
        </div>

        <Accordion
          items={OFFERED_SERVICES}
          defaultOpenId="Website Design"
          allowMultiple={false}
        />
      </div>

      <Image
        src="/assets/keyboard.png"
        alt="Services Image"
        width={500}
        height={500}
        className="w-full object-cover rounded-4xl"
      />
    </div>
  );
};

export default Services;
