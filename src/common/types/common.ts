export interface PageContainerProps {
    children:JSX.Element|JSX.Element[];
}

export interface ActionType {
    type:string,
    payload?:any
}