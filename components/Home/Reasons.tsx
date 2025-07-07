import React from "react";
import ReasonCard from "../ReasonCard";
import CTAButton from "../CTAButton";

const Reasons = () => {
  return (
    <div className="mb-[140px]">
      <h1 className="text-[32px] font-bold text-center mb-[24px]">
        Sastopamākie iemesli
      </h1>
      <div className="flex gap-5 mb-[48px]">
        <ReasonCard
          name="Trauksme un depresija"
          content="Trauksme un depresija ir viena no biežākajām grūtībām, kuru dēļ cilvēki meklē psihologa atbalstu. Psihologs var sniegt atbalstu šo grūtību risināšanā – palīdzot labāk izprast savu problēmu, kā arī apgūt dažādas paškontroles iemaņas."
        />
        <ReasonCard
          name="Attiecību problēmas"
          content="Grūtības attiecībās ģimenē, ar partneri, ar bērniem, darbā mēdz būt ļoti izaicinošs
            pārbaudījums. Bieži vien cilvēkiem ir nepieciešams atbalsts, lai uzlabotu vai
            pārtrauktu neveselīgu saziņu, atrisinātu konfliktus un iemācītos veidot veselīgas
            attiecības. Arī te noder psihologa palīdzība."
        />
        <ReasonCard
          name="Trauma"
          content="Dažādi emocionāli un fiziski pārdzīvojumi, zaudējumi mēdz atstāt traumatiskas sekas mūsu psihē, kas vēlāk ierobežo pilnvērtīgu un veselīgu funkcionēšanu. Psihologa atbalsts var palīdzētu pārvarēt šīs pieredzes sekas un virzīties uz priekšu veselīgā veidā."
        />
        <ReasonCard
          name="Personības izaugsme"
          content="Ne vienmēr pie psihologa vēršas grūtību brīdī. Bieži vien psihologs tiek uzmeklēts, lai iepazītu savu personību un efektīvāk virzītos uz augšu savā personības pilnveides procesā – lai veidotu sevi apmierinošu, apzinātu dzīvi un attiecības, lai izvēlētos sev
atbilstošāko karjeras virzienu, partneri u.c."
        />
      </div>
      <div className="flex justify-center">
        <CTAButton name="Pieteikt konsultāciju" />
      </div>
    </div>
  );
};

export default Reasons;
