import Link from "next/link";

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
    <div className="relative flex justify-end px-4 md:px-2 lg:px-24">
      <ul className="hidden md:py-8 md:flex md:flex-row md:justify-end gap-1 md:gap-8 text-xl absolute">
        {items.map(Item)}
      </ul>
      <div className="w-full flex relative top-6 justify-end md:hidden">
        <HamburgerButton />
      </div>
    </div>
  );
}
