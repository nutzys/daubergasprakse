import { NavItemType } from "@/types/types";
import React from "react";
import NavItem from "./NavItem";

type NavListProps = {
  navItems: NavItemType[];
};

const Navlist: React.FC<NavListProps> = ({ navItems }) => {
  return (
    <ul className="list-none flex">
      {navItems.map((item) => (
        <li key={item.id}>
          <NavItem name={item.name} hasChevron={item.hasChevron} />
        </li>
      ))}
    </ul>
  );
};

export default Navlist;
