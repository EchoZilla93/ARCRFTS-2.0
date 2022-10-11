export interface PageContainerProps {
    children:JSX.Element|JSX.Element[];
}

export interface ActionType {
    type:string,
    payload?:any
}

export type AuthInputType = "email" | "password" | "name" | "confirm_password";

export interface InputErrorState {
        isValid?: undefined | boolean;
        val?: string;
        msg?: string;
}