import React from "react";
<<<<<<< HEAD
=======
import { useFormikContext } from "formik";
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276

interface Props {
  label: string;
  type: string;
<<<<<<< HEAD
}

const PreAuthInput = ({ label, type }: Props) => {
=======
  name: string;
}

const PreAuthInput = ({ label, type, name }: Props) => {
  const { values, errors, handleChange, handleBlur } = useFormikContext();
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
  return (
    <div className="flex flex-col">
      <label htmlFor="Email-id" className="text-base">
        {label}
      </label>
<<<<<<< HEAD
      <input type={type} className="h-8" />
=======
      <input
        type={type}
        className="h-8"
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
    </div>
  );
};

export default PreAuthInput;
