import React from "react";
import CTAButton from "../CTAButton";
import heroImg from "@/public/heroImage.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between mt-[40px]">
      <div className="flex flex-col justify-center">
        <h1 className="text-[80px] mb-[18px] font-bold">Psihologs</h1>
        <p className="text-[16px] mb-[18px] max-w-[528px]">
          Šī ir telpa izaugsmei, briedumam, labklājībai, sevis iepazīšanai un
          pieņemšanai individuālās un grupu sesijās.
        </p>
        <p className="font-semibold text-sm mb-[18px]">
          Pieteikties tiešsaites vai klātienes sesijai
        </p>
        <CTAButton name="Pieteikties" />
      </div>
      <div>
        <Image src={heroImg} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
