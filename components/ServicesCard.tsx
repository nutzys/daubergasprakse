import Image from "next/image";
import React from "react";
import image from "@/public/bg-ppl.webp";
import CTAButton from "./CTAButton";

type ServicesCardProps = {
  title: string;
  isFlexLarge?: boolean;
  CTAname: string;
};

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  isFlexLarge = false,
  CTAname,
}) => {
  return (
    <div
      className={`flex flex-col ${
        isFlexLarge && "flex-2"
      }flex-1 bg-white shadow-md transition delay-150 ease-in-out hover:scale-105`}
    >
      <div>
        <Image
          src={image}
          className={`w-full ${isFlexLarge && "object-cover"}`}
          alt="Card Image"
        />
      </div>
      <div className="flex flex-col items-center p-4">
        <h1 className="font-bold">{title}</h1>
        <p className="text-[14px] text-center my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          necessitatibus, dolorum nihil id alias ipsam eos quae assumenda ad
          commodi laborum, minus ducimus eaque nulla. Officiis, voluptatem.
          Voluptate, accusamus animi?
        </p>
        <CTAButton name={CTAname} />
      </div>
    </div>
  );
};

export default ServicesCard;
