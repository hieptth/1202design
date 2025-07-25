"use client";

import Image from "next/image";
import { useState } from "react";

import { NAV_ITEMS } from "@/app/shared/constants";
import NavbarDrawer from "./components/Drawer";
import Logo from "./components/Logo";
import NavbarItem from "./components/NavbarItem";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="flex items-center self-stretch justify-between px-4 py-3 md:p-5 border-b border-gray-400 bg-white fixed w-full top-0 z-50">
      <Logo />

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center justify-center gap-8">
        {NAV_ITEMS.map((item) => (
          <NavbarItem
            key={item.label}
            item={item}
            active={active}
            onActive={(active) => setActive(active)}
          />
        ))}
      </ul>

      {/* Contact button */}
      <a
        href="#contact"
        className="hidden lg:flex items-center gap-2 bg-neutral-950 text-white px-8 py-3 rounded-xl hover:opacity-80 transition"
      >
        <Image
          src="/assets/envelope.svg"
          alt="envelope icon"
          width={24}
          height={24}
          className="invert"
        />
        <p className="text-md font-medium">Contact us</p>
      </a>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden flex items-center justify-center p-3 rounded-xl cursor-pointer bg-gray-950 hover:opacity-80 transition duration-500"
        aria-label="Open menu"
        onClick={() => setDrawerOpen(true)}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <NavbarDrawer
          active={active}
          drawerOpen={drawerOpen}
          onActive={(active) => setActive(active)}
          onDrawerOpen={(open) => setDrawerOpen(open)}
        />
      )}
    </nav>
  );
}

export default Navbar;
