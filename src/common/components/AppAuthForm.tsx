import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { loginInputs, signupInputs } from "../../constants/AuthInputsData";
import { colors } from "../../constants/theme/colors";
import { AuthInputActionTypes } from "../../store/actions/actionTypes";
import { ActionType } from "../types/common";

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

type ModeType = "login" | "sign_up";
interface AppAuthFormProps {
  mode: ModeType;
}

const initialInputState = loginInputs;
const AuthInputStateReducer = (
  state: {
    type: string;
    placeholder: string;
  }[],
  action: ActionType
) => {
  switch (action.type) {
    case AuthInputActionTypes.LOG_IN:
      return loginInputs;
    case AuthInputActionTypes.SIGN_UP:
      return signupInputs;
    default:
      return initialInputState;
  }
};
export const AppAuthForm: React.FC<AppAuthFormProps> = ({ mode }) => {
  const [inputState, dispatch] = useReducer(
    AuthInputStateReducer,
    initialInputState
  );

  useEffect(() => {
    if (mode === "login") dispatch({ type: AuthInputActionTypes.LOG_IN });
    if (mode === "sign_up") dispatch({ type: AuthInputActionTypes.SIGN_UP });
  }, [mode]);
  return (
    <AuthConatiner>
      {inputState.map((input, indx) => {
        return (
          <React.Fragment key={`${indx}${input.placeholder}`}>
            <Input type={input.type} placeholder={input.placeholder} />
          </React.Fragment>
        );
      })}
    </AuthConatiner>
  );
};
