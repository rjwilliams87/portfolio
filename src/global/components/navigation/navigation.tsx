import Link from "next/link";

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

export function Navigation({ items = NAVIGATION_ITEMS }) {
  return (
    <div className="flex justify-between items-center w-full px-4 md:px-2 lg:px-24 py-4 md:py-8 absolute">
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
          <HamburgerButton />
        </div>
      </div>
    </div>
  );
}
