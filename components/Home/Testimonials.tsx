import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Testimonial from "../Testimonial";

const Testimonials = () => {
  return (
    <div className="mb-[140px] flex">
      <div className="flex flex-col">
        <h5 className="text-accent mb-[8px]">ATSAUKSMES</h5>
        <h1 className="font-bold text-[32px] mb-[20px] w-[400px]">
          Vieta, kur var uzticēties profesionāļiem
        </h1>
        <div className="flex gap-10">
          <span className="rounded-full flex justify-center items-center w-14 h-14 bg-primary hover:bg-secondary">
            <FaChevronLeft />
          </span>
          <span className="rounded-full flex justify-center items-center w-14 h-14 bg-white hover:bg-secondary">
            <FaChevronRight />
          </span>
        </div>
      </div>
      <div className="flex gap-5">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
