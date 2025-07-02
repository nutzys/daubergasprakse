import React from "react";

type ButtonProps = {
  name: string;
};

const CTAButton: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="bg-highlight hover:bg-muted-dark transition-all duration-300 ease-in-out px-8 py-2 w-fit">
      {name}
    </button>
  );
};

export default CTAButton;
