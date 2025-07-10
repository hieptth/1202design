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
    <nav className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-200 bg-white fixed w-full top-0 z-50">
      <Logo />
      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        {NAV_ITEMS.map((item) => (
          <NavbarItem
            key={item.label}
            item={item}
            active={active}
            onActive={(active) => setActive(active)}
          />
        ))}
      </ul>
      <a
        href="#contact"
        className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition"
      >
        <Image
          src="/assets/envelope.svg"
          alt="envelope icon"
          width={28}
          height={28}
          className="invert"
        />
        Contact us
      </a>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center p-2 ml-2 rounded hover:bg-gray-100"
        aria-label="Open menu"
        onClick={() => setDrawerOpen(true)}
      >
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="black"
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
