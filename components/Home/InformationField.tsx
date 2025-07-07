import React from "react";
import Accordion from "../Accordion";
import svgOne from "@/public/dp-ilustration.webp";
import svgTwo from "@/public/dp-diagram.webp";
import Image from "next/image";

const InformationField = () => {
  return (
    <div className="space-y-11 mb-[140px]">
      <div className="flex justify-between items-center">
        <div className="mr-52">
          <div>
            <h5 className="text-[16px] text-accent mb-[8px]">PSIHOLOĢIJA</h5>
            <h1 className="text-[32px] font-bold mb-[16px]">
              Kas ir psihologs?
            </h1>
          </div>
          <Accordion
            title="Kas ir psiholoģija?"
            answer="Zinātne, kas pēta prātu un uzvedību – gan cilvēkiem, gan dzīvniekiem, gan indivīdam, gan grupām. Psiholoģijai ir vairākas disciplīnas, kur katrai ir savs interešu lauks – klīniskā, veselības, izglītības, juridiskā, sporta, organizāciju, transpersonālā jeb garīgā u.c. Latvijā var iegūt klīniskā, izglītības, organizāciju un transpersonālā psihologa izglītību."
          />
          <Accordion
            title="Ko dara psihologs?"
            answer="Speciālists, kurš ieguvis augstāko izglītību psiholoģijas zinātnē. Latvijā Psihologu likums regulē kārtību, kādā psihologs drīkst praktiski darboties. Līdz ar to psihologa darbu uzrauga Psihologu sertifikācijas komisija un Psihologu ētikas komisija. Sertificētie psihologi atrodami Psihologu reģistrā. Saskaņā ar likumu psihologs tiesīgs strādāt gan privātpraksē, gan iestādē, kas var būt skola, medicīnas iestāde vai cita organizācija."
          />
          <Accordion
            title="Kāda ir psihologa darbība?"
            answer="Psihologa darbība var būt ļoti plaša – pētniecība, individuālās psiholoģiskās izpētes veikšana, atzinumu sniegšana, konsultēšana visdažādākajos mentālās, emocionālās, attiecību, pašizaugsmes jautājumos gan individuāli, gan grupā."
          />
        </div>
        <Image src={svgOne} width={570} height={570} alt="ilustration" />
      </div>
      <div className="flex justify-between items-center">
        <Image src={svgTwo} width={570} height={570} alt="ilustration" />
        <div className="ml-52">
          <div>
            <h5 className="text-[16px] text-accent mb-[8px]">PSIHOLOĢIJA</h5>
            <h1 className="text-[32px] font-bold mb-[16px]">
              Kādēļ cilvēki vēršas pie psihologa?
            </h1>
          </div>
          <Accordion
            title="Kas ir psiholoģija?"
            answer="Zinātne, kas pēta prātu un uzvedību – gan cilvēkiem, gan dzīvniekiem, gan indivīdam, gan grupām. Psiholoģijai ir vairākas disciplīnas, kur katrai ir savs interešu lauks – klīniskā, veselības, izglītības, juridiskā, sporta, organizāciju, transpersonālā jeb garīgā u.c. Latvijā var iegūt klīniskā, izglītības, organizāciju un transpersonālā psihologa izglītību."
          />
          <Accordion
            title="Ko dara psihologs?"
            answer="Speciālists, kurš ieguvis augstāko izglītību psiholoģijas zinātnē. Latvijā Psihologu likums regulē kārtību, kādā psihologs drīkst praktiski darboties. Līdz ar to psihologa darbu uzrauga Psihologu sertifikācijas komisija un Psihologu ētikas komisija. Sertificētie psihologi atrodami Psihologu reģistrā. Saskaņā ar likumu psihologs tiesīgs strādāt gan privātpraksē, gan iestādē, kas var būt skola, medicīnas iestāde vai cita organizācija."
          />
          <Accordion
            title="Kāda ir psihologa darbība?"
            answer="Psihologa darbība var būt ļoti plaša – pētniecība, individuālās psiholoģiskās izpētes veikšana, atzinumu sniegšana, konsultēšana visdažādākajos mentālās, emocionālās, attiecību, pašizaugsmes jautājumos gan individuāli, gan grupā."
          />
        </div>
      </div>
    </div>
  );
};

export default InformationField;
