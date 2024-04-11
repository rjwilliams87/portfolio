"use client";
import { useState, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function MagneticButton({ children, onClick }: Props) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  const [hover, setHover] = useState(false);

  const onMouseMove = (event: MouseEvent) => {
    if (buttonRef.current && contentRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const x = event.clientX - buttonRect.left - buttonRect.width / 2;
      const y = event.clientY - buttonRect.top - buttonRect.height / 2;

      // Adjust the button translation
      buttonRef.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;

      // Adjust the content translation within the button
      contentRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    }
  };

  const onMouseLeave = () => {
    if (buttonRef.current && contentRef.current) {
      buttonRef.current.style.transform = "translate(0px, 0px)";
      contentRef.current.style.transform = "translate(0px, 0px)";
    }
    setHover(false);
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mousemove", onMouseMove);
      button.addEventListener("mouseleave", onMouseLeave);
      return () => {
        button.removeEventListener("mousemove", onMouseMove);
        button.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      className={`inline-flex items-center justify-center w-[7.5rem] h-[7.5rem] rounded-full text-center uppercase tracking-wider text-[1.05rem] leading-[1.2] px-[1.5rem] text-[#121111] bg-[#f7f5ed] border-2 border-gray-300 transition-all duration-300 ease-out`}
    >
      <span ref={contentRef} className="flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}
