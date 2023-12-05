import React from "react";
import LoginForm from "../../../composites/loginForm/LoginForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex min-h-[100vh]">
      <div className="flex-1 bg-black">
        <h1 className="text-white p-10 font-medium text-lg">
          <span className="border-2 p-2">WB</span> CREDENC WEB
        </h1>
      </div>
      <div className="flex-1  ">
        <div className="p-10 ">
          <Button variant="ghost" className="">
            <Link to="/register">Register</Link>
          </Button>
        </div>
        <div className="flex justify-center items-center ">
          <div className="  flex justify-center ">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// absolute top-0 right-0
//item-center
