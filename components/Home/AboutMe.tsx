import React from "react";
import image from "@/public/bg-ppl.webp";
import Image from "next/image";
import CTAButton from "../CTAButton";

const AboutMe = () => {
  return (
    <div className="my-[140px] flex justify-between">
      <div>
        <Image
          src={image}
          width={640}
          height={360}
          className="rounded-lg"
          alt="Image"
        />
      </div>
      <div className="max-w-[530px] flex flex-col justify-center">
        <h5 className="text-[16px] text-accent mb-[8px]">PAR MANI</h5>
        <h1 className="text-[32px] font-bold mb-[16px]">Natālija Dauberga</h1>
        <p className="text-[16px] mb-[16px]">
          Man ir prieks, ka tiekamies vietā, ko esmu radījusi tiem, kam rūp
          sevis iepazīšana un pieņemšana, savas dzīves kvalitātes celšana.
        </p>
        <p className="text-[16px] mb-[16px]">
          Šī ir telpa izaugsmei, briedumam, atvieglojumam, kurš nāk caur sevis
          iepazīšanu, izprašanu un pieņemšanu.
        </p>
        <CTAButton name="Par mani" />
      </div>
    </div>
  );
};

export default AboutMe;
