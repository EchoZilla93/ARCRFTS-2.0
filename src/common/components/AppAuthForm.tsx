import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { colors } from "../../constants/theme/colors";
import { AppButton } from "./AppButton";
import { Link } from "react-router-dom";

const AuthConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 363px;
  height: 51px;
  border-radius: 14px;
  border: none;
  background: ${colors.input.background};
  color:${colors.typography.primary_color}
  padding-left: 15px;
  font-family: "Mohave", sans-serif;
  font-weight:bold;
  font-size:20px;
  margin-bottom:25px
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
`;

type ModeType = "login" | "sign_up";
interface AppAuthFormProps {
  mode: ModeType;
}

export const AppAuthForm: React.FC<AppAuthFormProps> = ({ mode }) => {
  const initialFormikValues =
    mode === "login"
      ? { email: "", password: "" }
      : { email: "", password: "", name: "", role: "", confirm_password: "" };

  const loginSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().max(8).min(6),
  });
  const signupSchema = Yup.object({
    name: Yup.string().max(12).min(3).required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().max(8).min(6),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  return (
    <AuthConatiner>
      <Formik
        initialValues={initialFormikValues}
        validationSchema={mode === "login" ? loginSchema : signupSchema}
        onSubmit={(v) => {
          console.log(v);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            {mode === "login" && (
              <>
                <Input
                  name="email"
                  type={"email"}
                  placeholder={"Enter your email"}
                />
                <Input
                  name="password"
                  type={"password"}
                  placeholder={"Enter your password"}
                />
              </>
            )}
            {mode === "sign_up" && (
              <>
                <Input name="name" type={"text"} placeholder={"Name"} />
                <Input name="email" type={"email"} placeholder={"Email"} />
                <Input
                  name="password"
                  type={"password"}
                  placeholder={"Password"}
                />
                <Input
                  name="confirm_password"
                  type={"password"}
                  placeholder={"Confirm password"}
                />
              </>
            )}
            <Link
              style={{
                fontFamily: '"Mohave", sans-serif',
                textDecoration: "none",
                color: colors.typography.primary_color,
                textAlign: "center",
                fontSize: 20,
              }}
              to={mode === "login" ? "/sign-up" : "/login"}
            >
              {mode === "login"
                ? "Create Account"
                : "I already have an accaount"}
            </Link>
            <ButtonContainer>
              <AppButton
                active
                title={mode === "login" ? "Log in" : "Next"}
                onClickHandler={() => 1}
              />
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </AuthConatiner>
  );
};
