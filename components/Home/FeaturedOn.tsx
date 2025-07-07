import Image from "next/image";
import React from "react";
import santaLogo from "@/public/featuredLogos/santa-logo.webp";
import forbesLogo from "@/public/featuredLogos/forbes-logo.webp";
import delfiLogo from "@/public/featuredLogos/delfi-logo.webp";
import laLogo from "@/public/featuredLogos/la-logo.webp";
import threeLogo from "@/public/featuredLogos/3-logo.webp";

const FeaturedOn = () => {
  return (
    <div className="mb-[140px]">
      <h1 className="text-center font-bold text-[32px]">
        Manus padomus lasi arī
      </h1>
      <div className="flex justify-center space-x-9">
        <Image src={santaLogo} width={200} height={200} alt="logo" />
        <Image src={forbesLogo} width={200} height={200} alt="logo" />
        <Image src={delfiLogo} width={200} height={200} alt="logo" />
        <Image src={laLogo} width={200} height={200} alt="logo" />
        <Image src={threeLogo} width={200} height={200} alt="logo" />
      </div>
    </div>
  );
};

export default FeaturedOn;
