"use client";

import { Accordion } from "@/app/ui";

const OFFERED_SERVICES = [
  {
    id: "Website Design",
    title: "Website Design",
    content:
      "We design visually stunning and user-friendly websites that captivate your visitors and boost your business' credibility.",
  },
  {
    id: "Website Development",
    title: "Website Development",
    content:
      "We build robust, scalable, and fast websites using modern technologies to ensure optimal performance and user experience.",
  },
  {
    id: "Website Copy Writing",
    title: "Website Copy Writing",
    content:
      "We craft compelling, SEO-optimized content that communicates your brand message effectively and drives conversions.",
  },
];

import { useRef, useEffect, useState } from "react";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="services"
      ref={sectionRef}
      className={`grid grid-cols-1 md:grid-cols-2 justify-center gap-5 px-4 lg:px-0 lg:mx-auto animate__animated ${
        visible ? "animate__fadeInUp" : "opacity-0"
      }`}
      style={{
        animationDuration: "0.8s",
        animationTimingFunction: "cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div className="flex flex-col gap-8 rounded-4xl bg-neutral-50 p-9 w-full md:max-w-[561px] animate__animated animate__fadeInLeft animate__fast">
        <div className="flex flex-col gap-3">
          <p className="text-display-sm md:text-display-lg uppercase text-gray-950 tracking-tight">
            Our Services
          </p>
          <p className="text-sm md:text-xl text-gray-500 leading-relaxed">
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

      <div className="min-h-[500px] rounded-4xl overflow-hidden size-full md:max-w-[561px] animate__animated animate__fadeInRight animate__fast">
        <iframe
          src="https://my.spline.design/keyboard-6538b65dd65ffbb21a5e4576bee802b3/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full min-h-[500px] rounded-4xl"
          title="3D Keyboard Animation"
        />
      </div>
    </div>
  );
};

export default Services;
