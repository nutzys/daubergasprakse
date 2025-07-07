import React from "react";

type CardProps = {
  name: string;
  content: string;
};

const ReasonCard: React.FC<CardProps> = ({ name, content }) => {
  return (
    <div className="flex justify-center items-center flex-col shadow-md p-4 h-[290px]">
      <h3 className="mb-[20px] font-bold">{name}</h3>
      <p className="text-[14px] leading-6 text-center">{content}</p>
    </div>
  );
};

export default ReasonCard;
