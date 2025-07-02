import React from "react";
import { FaChevronDown } from "react-icons/fa6";

type NavProps = {
  name: string;
  hasChevron: boolean;
};

const NavItem: React.FC<NavProps> = ({ name, hasChevron }) => {
  return (
    <span className="ml-12 hover:border-b-[1px] hover:border-b-primary flex items-center justify-center gap-2">
      {name}
      {hasChevron && <FaChevronDown className="w-2 h-2" />}
    </span>
  );
};

export default NavItem;
