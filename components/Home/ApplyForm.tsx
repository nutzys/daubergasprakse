import React from "react";
import InputField from "../InputField";

const ApplyForm = () => {
  return (
    <div className="flex">
      <div className="space-y-[20px]">
        <h1 className="text-[32px] text-primary font-bold">
          Aizpildi formu, lai pieteiktos
        </h1>
        <ul>
          <li>Individuālās konsultācijas klātienē - 70€</li>
          <li>Individuālās konsultācijas tiešsaistē - 70€</li>
        </ul>
        <p>
          Par pirmo sesiju ir 100% priekšapmaksa, par sesijas maiņu vai
          atcelšanu jāziņo vismaz 3 darbadienas pirms sesijas, ja netiek
          pateikts 3 darbadienās, netiek atmaksāta nauda.
        </p>
        <p>+371 26552986</p>
      </div>
      <div>
        <form>
          <span className="flex gap-[20px]">
            <InputField label="Vārds, Uzvārds" />
            <InputField label="E-pasts" />
          </span>
          <span className="flex gap-[20px]">
            <InputField label="Telefona nummurs" />
            <InputField label="Konsultācijas veids" />
          </span>
          <span>
            <p className="text-sm mb-[8px]">Komentārs</p>
            <textarea
              rows={10}
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-form-bg"
            ></textarea>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
