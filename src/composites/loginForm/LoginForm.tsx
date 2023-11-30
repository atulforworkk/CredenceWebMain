<<<<<<< HEAD
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

=======
import React from "react";
import PreAuthInput from "../../components/input/PreAuthInput";
import { Link } from "react-router-dom";
import { Button, ColorInput } from "@mantine/core";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
type Props = {};

const LoginForm = (props: Props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("Password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { values, handleSubmit, setFieldValue } = formik;
  console.log("🚀 ~ file: LoginForm.tsx:26 ~ LoginForm ~ formik:", formik);

  return (
    <div className="">
      <div>
        <h1 className=" text-2xl font-semibold underline-offset-u ">Login</h1>
        <p>
          doesn't have a account yet ?{" "}
          <Link to="/" className="text-link-color">
            Register
          </Link>
        </p>
      </div>
      <div>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <PreAuthInput label="Email-id" type="Email" name="email" />
            <PreAuthInput label="Password" type="password" name="password" />
            <Button
              variant="filled"
              color="Purple"
              size="sm"
              radius="md"
              className="min-w-[300px] mt-4"
            >
              Login
            </Button>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
export default LoginForm;
