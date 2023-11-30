import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <div>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </div>
  );
};

export default LoginForm;
