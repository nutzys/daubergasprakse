import React from "react";
import Navlist from "./Navlist";
import { NAV_ITEMS } from "@/data/NavItems";
import CTAButton from "./CTAButton";
import logo from "@/public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="min-w-full flex items-center justify-between py-4">
      <Image src={logo} width={150} height={150} alt="logo" />
      <Navlist navItems={NAV_ITEMS} />
      <CTAButton name="Pieteikties" />
    </div>
  );
};

export default Navbar;
