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

export const SignupPage = () => {
  return (
    <AuthPageConatiner>
      <PageTextContainer>
        <PageHeading>
          Welcome! Let’s create your accaount to dive in to amazing jurney!
        </PageHeading>
      </PageTextContainer>
      <AppAuthForm mode="sign_up" />
    </AuthPageConatiner>
  );
};
