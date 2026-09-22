"use client";

import type { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { SmoothScroll } from "./SmoothScroll";
import "@/app/editorial.css";

/** Dark editorial ground, motion features and smooth scrolling for pages built in the new style. */
export function EditorialShell({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <SmoothScroll />
      <div className="editorial min-h-screen overflow-x-clip">{children}</div>
    </LazyMotion>
  );
}
