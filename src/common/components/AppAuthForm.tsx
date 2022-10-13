import React, { useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants/theme/colors";
import { Link } from "react-router-dom";
import { AppButton } from "./AppButton";
import Validator from "../../services/Validator";
import { InputErrorState } from "../types/common";

const AuthConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ErrorMsg = styled.h3`
  color: #ff4d6e;
  font-family: "Mohave", sans-serif;
  margin: 10px 0 40px 0;
`;

const AuthLink = styled(Link)`
  font-family: "Mohave", sans-serif;
  text-decoration: none;
  color: ${colors.typography.primary_color};
  text-align: "center";
  font-size: 20px;
`;
interface AppAuthFormProps {
  mode: "login" | "sign_up";
}

type ValidatorFunc = (v: string) =>
  | {
      isValid: boolean;
      message: string;
    }
  | undefined;

export const AppAuthForm: React.FC<AppAuthFormProps> = ({ mode }) => {
  const [error, setError] = useState<InputErrorState>({
    isValid: undefined,
    msg: "",
  });

  const refObj = {
    email: useRef<HTMLInputElement>(null),
    pass: useRef<HTMLInputElement>(null),
    confPass: useRef<HTMLInputElement>(null),
    name: useRef<HTMLInputElement>(null),
  };

  const resetError = () => {
    setError({ ...error, isValid: true, msg: "" });
  };

  const inputValidate = (validator: ValidatorFunc, propToValidate: string) => {
    const checkedV = validator(propToValidate);
    if (checkedV!.isValid) resetError();
    if (!checkedV!.isValid) {
      setError({
        ...error,
        isValid: checkedV!.isValid,
        msg: checkedV!.message,
      });
    }
  };

  const passwordMatch = () => {
    const { confPass, pass } = refObj;
    const match = Validator.confirmPass(
      pass.current!.value,
      confPass.current!.value
    );
    if (match.isValid) resetError();
    setError({ ...error, isValid: match.isValid, msg: match.message });
  };

  const handleSubmit = () => {
    console.log(1);
  };
  return (
    <AuthConatiner>
      {mode === "login" && (
        <>
          <Input
            ref={refObj.email}
            onBlur={() =>
              inputValidate(Validator.email, refObj.email.current!.value)
            }
            name="email"
            type={"email"}
            placeholder={"Enter your email"}
          />
          <Input
            ref={refObj.pass}
            onBlur={() =>
              inputValidate(Validator.password, refObj.pass.current!.value)
            }
            name="password"
            type={"password"}
            placeholder={"Enter your password"}
          />
        </>
      )}
      {mode === "sign_up" && (
        <>
          <Input
            ref={refObj.name}
            onBlur={() =>
              inputValidate(Validator.userName, refObj.name.current!.value)
            }
            name="name"
            type={"text"}
            placeholder={"Name"}
          />
          <Input
            ref={refObj.email}
            onBlur={() =>
              inputValidate(Validator.email, refObj.email.current!.value)
            }
            name="email"
            type={"email"}
            placeholder={"Email"}
          />
          <Input
            onBlur={() =>
              inputValidate(Validator.password, refObj.pass.current!.value)
            }
            ref={refObj.pass}
            name="password"
            type={"password"}
            placeholder={"Password"}
          />
          <Input
            onBlur={() => passwordMatch()}
            ref={refObj.confPass}
            name="confirm_password"
            type={"password"}
            placeholder={"Confirm password"}
          />
        </>
      )}
      {error.isValid === false && <ErrorMsg>{error.msg}</ErrorMsg>}
      <AuthLink to={mode === "login" ? "/sign-up" : "/login"}>
        {mode === "login" ? "Create Account" : "I already have an account"}
      </AuthLink>
      <ButtonContainer>
        <AppButton
          active
          title={mode === "login" ? "Log in" : "Next"}
          onClickHandler={handleSubmit}
        />
      </ButtonContainer>
    </AuthConatiner>
  );
};
