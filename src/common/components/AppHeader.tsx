import styled from "styled-components";
import { AppLogo } from "./AppLogo";

const HeaderContainer = styled.div``;

interface HeaderProps {
  showMenu?: boolean;
}

export const AppHeader: React.FC<HeaderProps> = ({ showMenu }) => {
  return (
    <HeaderContainer>
      <AppLogo />
      {showMenu && <></>}
    </HeaderContainer>
  );
};
