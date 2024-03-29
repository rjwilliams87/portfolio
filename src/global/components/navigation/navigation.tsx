import Link from "next/link";

import s from "./navigation.module.css";
import { NAVIGATION_ITEMS } from "./navigation.content";

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
    <div className="relative flex justify-end px-4 md:px-2 lg:px-10">
      <ul className="md:py-8 flex flex-col md:flex-row md:justify-end gap-1 md:gap-8 text-xl absolute">
        {items.map(Item)}
      </ul>
    </div>
  );
}
