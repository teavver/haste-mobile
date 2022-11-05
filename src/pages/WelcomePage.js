import { useState } from "react";
import WelcomeScreen from "../components/screens/WelcomeScreen";
import SignUpPage from "./SignUpPage";
// import SignInPage

const WelcomePage = () => {
  const [renderSignUpPage, setRenderSignUpPage] = useState(false);
  const [renderSignInPage, setRenderSignInPage] = useState(false);

  if (renderSignUpPage) return <SignUpPage />;
  if (renderSignInPage) return null;
  return (
    <WelcomeScreen
      onPressSignUp={() => setRenderSignUpPage(true)}
      onPressSignIn={() => setRenderSignInPage(true)}
    />
  );
};

export default WelcomePage;
