import React from "react";
import { Input } from "@/components/ui/input";
type Props = {
  label: string;
};

const PreAuthInput = ({ label }: Props) => {
  return (
    <div className="flex flex-col  ">
      <p className="">{label}</p>
      {/* <Input type={label} placeholder={label} /> */}
      <Input
        id="email"
        placeholder="name@example.com"
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
      />
    </div>
  );
};

export default PreAuthInput;
