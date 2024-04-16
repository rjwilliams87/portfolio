"use client";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/global/components";

import s from "./navigation.module.css";
import { NAVIGATION_ITEMS } from "./navigation.content";
import { HamburgerButton } from "../hamburger-button";

function Item({ href, label }: { href: string; label: string }) {
  return (
    <li className={s.item} key={`nav-item-${label}`}>
      <Link className="w-full h-full uppercase" href={href} scroll>
        {label}
      </Link>
    </li>
  );
}

function MobileItem({ href, label }: { href: string; label: string }) {
  return (
    <li className="border-b border-[#202020] hover:border-floral-white" key={`nav-item-${label}`}>
      <Link className="w-full h-full uppercase text-6xl" href={href} scroll>
        {label}
      </Link>
    </li>
  );
}

export function Navigation({ items = NAVIGATION_ITEMS }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMobileMenu = () => {
    setMenuVisible(true);
  };

  const closeMobileMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="md:absolute w-svw">
      <div className="site-content-container w-full flex justify-between items-center py-4 md:pt-8">
        <div className="flex gap-4 relative top-6 md:top-0">
          <Logo.Light height="45" width="45" />
          <div className="flex flex-col h-full justify-start items-start">
            <div className="text-base font-medium">Ryan J. Williams</div>
            <div className="text-sm">Software Engineer</div>
          </div>
        </div>
        <div className="flex justify-end">
          <ul className="hidden md:flex md:flex-row md:justify-end gap-1 md:gap-8 text-xl">
            {items.map(Item)}
          </ul>
          <div className="w-full flex absolute top-6 justify-end md:hidden">
            <HamburgerButton onOpen={openMobileMenu} onClose={closeMobileMenu} />
          </div>
        </div>
      </div>
      {menuVisible && (
        <div className="fixed w-svw h-svh bg-[#202020] z-10">
          <ul className="flex flex-col h-full gap-4 items-center justify-center text-xl sm:text-2xl">
            {items.map(MobileItem)}
          </ul>
        </div>
      )}
    </div>
  );
}
