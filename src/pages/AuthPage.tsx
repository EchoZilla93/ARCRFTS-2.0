import { AppAuthForm } from "../common/components/AppAuthForm";
import { AuthPageConatiner } from "../common/containers/AuthPageContainer";

export const AuthPage = () => {
  return (
    <AuthPageConatiner>
      <AppAuthForm mode="sign_up" />
    </AuthPageConatiner>
  );
};
