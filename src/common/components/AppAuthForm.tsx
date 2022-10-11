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
  const [readyToSub, setReadytoSub] = useState(false);

  const refObj = {
    email: useRef<HTMLInputElement>(null),
    pass: useRef<HTMLInputElement>(null),
  };

  const inputValidate = (validator: ValidatorFunc, propToValidate: string) => {
    const checkedV = validator(propToValidate);
    if (checkedV!.isValid) {
      setError({ ...error, isValid: true, msg: "" });
      setReadytoSub(true);
    }
    if (!checkedV!.isValid) {
      setError({
        ...error,
        isValid: checkedV!.isValid,
        msg: checkedV!.message,
      });
      setReadytoSub(false);
    }
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
          <Input name="name" type={"text"} placeholder={"Name"} />
          <Input name="email" type={"email"} placeholder={"Email"} />
          <Input name="password" type={"password"} placeholder={"Password"} />
          <Input
            name="confirm_password"
            type={"password"}
            placeholder={"Confirm password"}
          />
        </>
      )}
      {error.isValid === false && <ErrorMsg>{error.msg}</ErrorMsg>}
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
        {mode === "login" ? "Create Account" : "I already have an accaount"}
      </Link>
      <ButtonContainer>
        <AppButton
          active={readyToSub}
          title={mode === "login" ? "Log in" : "Next"}
          onClickHandler={handleSubmit}
        />
      </ButtonContainer>
    </AuthConatiner>
  );
};
