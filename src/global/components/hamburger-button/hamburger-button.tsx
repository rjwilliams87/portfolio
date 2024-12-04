"use client";
import { clsx } from "clsx";
import { useContext, useEffect, useState } from "react";

import s from "./hamburger-button.module.css";
import { NavContext } from "../navigation";

type HamburgerButtonProps = {
  onOpen?: () => void;
  onClose?: () => void;
};

// should refactor to be part of navigation component
export function HamburgerButton({ onOpen, onClose }: HamburgerButtonProps) {
  const [isClosed, setIsClosed] = useState(false);
  const { menuVisible, closeMenu } = useContext(NavContext);

  const handleButtonClick = () => {
    const button = document.getElementById("hamburger");

    if (!button) return;

    if (isClosed) {
      button.classList.remove(s["is-open"]);
      button.classList.add(s["is-closed"]);
      setIsClosed(false);
      if (onClose) onClose();
    } else {
      button.classList.remove(s["is-closed"]);
      button.classList.add(s["is-open"]);
      setIsClosed(true);
      if (onOpen) onOpen();
    }
  };

  useEffect(() => {
    if (isClosed && !menuVisible) {
      const button = document.getElementById("hamburger");

      if (!button) return;

      button.classList.remove(s["is-open"]);
      button.classList.add(s["is-closed"]);
      setIsClosed(false);
    }
  }, [menuVisible, isClosed, closeMenu]);

  useEffect(() => {
    const handleWidthChange = () => {
      const button = document.getElementById("hamburger");

      if (!button) return;

      if (window.innerWidth >= 768) {
        button.classList.remove(s["is-open"]);
        button.classList.remove(s["is-closed"]);
        setIsClosed(false);
      }
    };

    window.addEventListener("resize", handleWidthChange);

    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);

  return (
    <>
      <a id="hamburger" className={clsx(s["hamburglar"], "z-20")} onClick={handleButtonClick}>
        <div className={clsx(s["burger-icon"])}>
          <div className={clsx(s["burger-container"])}>
            <span className={clsx(s["burger-bun-top"])}></span>
            <span className={clsx(s["burger-filling"])}></span>
            <span className={clsx(s["burger-bun-bot"])}></span>
          </div>
        </div>

        <div className={clsx(s["burger-ring"])}>
          <svg className={clsx(s["svg-ring"])}>
            <path
              className={clsx(s["path"])}
              fill="none"
              stroke="#f7f5ed"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
            />
          </svg>
        </div>

        <svg width="0" height="0">
          <mask id="mask">
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
            />
          </mask>
        </svg>
        <div className={clsx(s["path-burger"])}>
          <div className={clsx(s["animate-path"])}>
            <div className={clsx(s["path-rotation"])}></div>
          </div>
        </div>
      </a>
    </>
  );
}
