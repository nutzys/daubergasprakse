import React from "react";

type FieldProps = {
  label: string;
};

const InputField: React.FC<FieldProps> = ({ label }) => {
  return (
    <div className="flex flex-col mb-[20px]">
      <p className="text-sm mb-[8px]">{label}</p>
      <input
        type="text"
        name="test"
        className="bg-form-bg h-[40px] w-[300px]"
      />
    </div>
  );
};

export default InputField;
