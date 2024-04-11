"use client";

import { useState, useEffect, useRef } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { MagneticButton } from "@/global/components";

export function SocialsModule() {
  return (
    <div className="flex gap-8 items-center">
      <MagneticButton>Contact Me</MagneticButton>
      <div className="flex flex-row gap-4">
        <FaGithubSquare className="w-[28px] h-[28px]" />
        <FaLinkedin className="w-[28px] h-[28px]" />
      </div>
    </div>
  );
}
