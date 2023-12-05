import React from "react";
import PreAuthInput from "../preAuthInput/PreAuthInput";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <div className="">
      <h1 className="font-bold text-xl">Login to your Account</h1>
      <PreAuthInput label="Email*" />
      <PreAuthInput label="Password" />
    </div>
  );
};
export default LoginForm;
