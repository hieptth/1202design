"use client";

import { HoverCard } from "@/app/ui";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const flickers = [
  {
    img: "/assets/keyboard.png",
    title: "Mechanical Keyboard",
    description: "High-quality mechanical keyboard with customizable keys.",
  },
  {
    img: "/assets/keyboard.png",
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse with RGB lighting.",
  },
  {
    img: "/assets/keyboard.png",
    title: "Wireless Headset",
    description: "Noise-cancelling wireless headset with long battery life.",
  },
  {
    img: "/assets/keyboard.png",
    title: "4K Monitor",
    description: "Ultra HD monitor with vibrant colors and high refresh rate.",
  },
  {
    img: "/assets/keyboard.png",
    title: "Gaming Laptop",
    description: "Powerful gaming laptop with high-end graphics card.",
  },
  {
    img: "/assets/keyboard.png",
    title: "4K Monitor",
    description: "Ultra HD monitor with vibrant colors and high refresh rate.",
  },
  {
    img: "/assets/keyboard.png",
    title: "Gaming Laptop",
    description: "Powerful gaming laptop with high-end graphics card.",
  },
  {
    img: "/assets/keyboard.png",
    title: "4K Monitor",
    description: "Ultra HD monitor with vibrant colors and high refresh rate.",
  },
  {
    img: "/assets/keyboard.png",
    title: "Gaming Laptop",
    description: "Powerful gaming laptop with high-end graphics card.",
  },
];

const Products = () => {
  const plugins = [
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true }),
  ];

  return (
    <section id="products" className="flex flex-col items-center gap-16">
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
        align="prev"
        circular={true}
        circularFallback="bound"
        deceleration={0.005}
        duration={1000}
        plugins={plugins}
        hideBeforeInit={true}
        className="w-full"
      >
        {flickers.map((item, index) => (
          <div key={index} className="px-5">
            <HoverCard
              props={{
                img: item.img,
                title: item.title,
                description: item.description,
              }}
            />
          </div>
        ))}
      </Flicking>
    </section>
  );
};

export default Products;
