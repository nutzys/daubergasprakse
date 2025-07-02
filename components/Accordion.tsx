"use client";

import React, { useState } from "react";

type AccordionProps = {
  title: string;
  answer: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mb-4 border-b border-gray-200 p-4">
      <button
        className="flex justify-between items-center w-full mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold lg:text-lg text-sm text-left">{title}</span>
        {isOpen ? (
          <span className="text-lg">-</span>
        ) : (
          <span className="text-lg">+</span>
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        } overflow-hidden`}
      >
        <div className="overflow-hidden text-textSecondary leading-5 lg:text-md text-sm">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
