import React from "react";
import ServicesCard from "../ServicesCard";

const Services = () => {
  return (
    <div className="mb-[140px]">
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
