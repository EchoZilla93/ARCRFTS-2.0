import styled from "styled-components";
import { AppAuthForm } from "../common/components/AppAuthForm";
import { AuthPageConatiner } from "../common/containers/AuthPageContainer";

const PageTextContainer = styled.div`
  margin: 40px 0px 25px 0px;
  padding: 18px;
`;
const PageHeading = styled.h3`
  font-family: "Mohave", sans-serif;
  font-size: 24px;
`;

export const LoginPage = () => {
  return (
    <AuthPageConatiner>
      <PageTextContainer>
        <PageHeading>
          Welcome back! Enter your cradantials to sign in.
        </PageHeading>
      </PageTextContainer>
      <AppAuthForm mode="login" />
    </AuthPageConatiner>
  );
};
