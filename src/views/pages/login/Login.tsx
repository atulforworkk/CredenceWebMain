import React from "react";
import LoginForm from "../../../composites/loginForm/LoginForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
function Login() {
  return (
    <div className="flex min-h-[100vh]">
      <div className="flex-1 bg-black">
        <h1 className="text-white p-10 text-xl font-semibold ">
          <span className="border-2 p-1 tracking-widest ">CW</span>
          CredencWeb
        </h1>
      </div>
      <div className="flex-1 bg-gray-400">
        <div className="p-10">
          <Button variant={"outline"}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
