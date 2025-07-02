"use client";

import React from "react";
import ServicesCard from "../ServicesCard";
import { useInView } from "@/lib/useIsInView";

const Services = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      className={`mb-[140px] transition-opacity duration-1000 ease-in-out ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
      ref={ref}
    >
      <div className="mb-[40px]">
        <h5 className="text-[16px] text-accent mb-[8px]">MANI PAKALPOJUMI</h5>
        <h1 className="text-[32px] font-bold mb-[16px]">
          Psihologa pakalpojumi
        </h1>
      </div>
      <div className="flex gap-6">
        <ServicesCard CTAname="Apskatīt" title="Klātienes sesijas" />
        <ServicesCard
          CTAname="Apskatīt"
          isFlexLarge={true}
          title="Tiešsaites sesijas"
        />
        <ServicesCard CTAname="Apskatīt" title="Ceļveži" />
      </div>
    </div>
  );
};

export default Services;
