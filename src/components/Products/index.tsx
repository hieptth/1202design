"use client";

import { HoverCard } from "@/app/ui";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useState } from "react";
import { CARD_ITEMS } from "./constants";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const plugins = [
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true }),
  ];

  return (
    <section id="products" className="flex flex-col items-center gap-16 pb-32">
      <div className="flex flex-col gap-4 text-center px-4 lg:max-w-2/3">
        <p className="text-3xl/7.5 font-medium lg:text-5xl/15 uppercase text-[#0C0C0C] tracking-tight">
          Popular Products
        </p>
        <p className="text-md/3.5 lg:text-xl text-[#767676] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Neque sed enim consectetur
          venenatis tellus. Imperdiet nunc faucibus vestibulum eu morbi auctor.
          Dignissim elit eget in etiam lectus gravida amet lobortis.
        </p>
      </div>

      <Flicking
        align="center"
        circular={true}
        circularFallback="bound"
        deceleration={0.005}
        duration={1000}
        adaptive={true}
        plugins={plugins}
        hideBeforeInit={true}
        className="w-full"
        style={{ overflow: "unset", height: "395px !important" }}
        onWillChange={(e) => setActiveIndex(e.index)}
      >
        {CARD_ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex items-end box-border"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <HoverCard
              props={{
                index,
                img: item.img,
                title: item.title,
                description: item.description,
                isActive:
                  hoveredIndex === null
                    ? index === activeIndex
                    : index === hoveredIndex,
              }}
            />
          </div>
        ))}
      </Flicking>
    </section>
  );
};

export default Products;
