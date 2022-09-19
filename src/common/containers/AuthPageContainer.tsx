import styled from "styled-components";
import { AppLogo } from "../components/AppLogo";
import { PageContainerProps } from "../types/common";

const AuthConatiner = styled.div``;

export const AuthPageConatiner: React.FC<PageContainerProps> = ({
  children,
}) => {
  return (
    <AuthConatiner>
      <AppLogo />
      {children}
    </AuthConatiner>
  );
};
