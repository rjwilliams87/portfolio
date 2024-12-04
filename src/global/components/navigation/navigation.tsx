"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import { Logo } from "@/global/components";
import { cn } from "@/lib/utils";

import s from "./navigation.module.css";
import { NAVIGATION_ITEMS } from "./navigation.content";
import { HamburgerButton } from "../hamburger-button";

export const NavContext = React.createContext({
  closeMenu: () => {},
  openMenu: () => {},
  menuVisible: false,
});

function NavigationProvider(props: { children: React.ReactNode }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const closeMenu = () => {
    setMenuVisible(false);
  };
  const openMenu = () => {
    setMenuVisible(true);
  };

  return (
    <NavContext.Provider value={{ closeMenu, openMenu, menuVisible }}>
      {props.children}
    </NavContext.Provider>
  );
}

function Item({ href, label }: { href: string; label: string }) {
  const { closeMenu } = useContext(NavContext);

  return (
    <li className={s.item} key={`nav-item-${label}`}>
      <Link className="w-full h-full" href={href} onClick={closeMenu} scroll>
        {label}
      </Link>
    </li>
  );
}

function MobileItem({ href, label }: { href: string; label: string }) {
  const { closeMenu } = useContext(NavContext);

  return (
    <li
      className="border-b border-floral-white hover:border-brand-black text-brand-black"
      key={`nav-item-${label}`}
    >
      <Link className="w-full h-full text-xl" href={href} onClick={closeMenu} scroll>
        {label}
      </Link>
    </li>
  );
}

const NavigationMenuButton = () => {
  const { closeMenu, openMenu } = useContext(NavContext);

  return <HamburgerButton onOpen={openMenu} onClose={closeMenu} />;
};

const MobileMenu = ({ items = NAVIGATION_ITEMS }) => {
  const { closeMenu, menuVisible } = useContext(NavContext);

  useEffect(() => {
    const handleWidthChange = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleWidthChange);

    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);

  return (
    <div
      className={cn(s["mobile-menu"], "bg-floral-white", "md:hidden", {
        [s["mobile-menu-show"]]: menuVisible,
      })}
    >
      <ul className="flex flex-col h-full gap-2 items-start justify-start text-lg px-6 py-10">
        {items.map(MobileItem)}
      </ul>
    </div>
  );
};

function NavigationBar({ items = NAVIGATION_ITEMS }) {
  return (
    <div className="relative md:absolute w-svw bg-brand-black pb-4 z-10">
      <div className="site-content-container w-full flex justify-between items-center py-4 md:pt-8">
        <Link className="flex gap-4 relative top-6 md:top-0 cursor-pointer" href="/">
          <Logo.Light height="45" width="45" />
          <div className="flex flex-col h-full justify-start items-start">
            <div className="text-base font-medium">Ryan J. Williams</div>
            <div className="text-sm">Software Engineer</div>
          </div>
        </Link>
        <div className="flex justify-end">
          <ul className="hidden md:flex md:flex-row md:justify-end gap-1 md:gap-8 text-lg">
            {items.map(Item)}
          </ul>
          <div className="w-full flex absolute top-6 justify-end md:hidden">
            <NavigationMenuButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navigation({ items = NAVIGATION_ITEMS }) {
  return (
    <NavigationProvider>
      <NavigationBar items={items} />
      <MobileMenu items={items} />
    </NavigationProvider>
  );
}
