import styled from "styled-components";

const LogoConatiner = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Mohave", sans-serif;
  margin: 40px 0 0 20px;
`;
const TextPrimary = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;
const TextSecondary = styled.h3`
  font-size: 15px;
  font-weight: 300;
`;
export const AppLogo = () => {
  return (
    <LogoConatiner>
      <TextPrimary>ARCRFTS</TextPrimary>
      <TextSecondary>civil aviation fleet encyclopedia</TextSecondary>
    </LogoConatiner>
  );
};
