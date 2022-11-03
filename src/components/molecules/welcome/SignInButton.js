import { Pressable } from "react-native";
import sign_button from "../../../styles/welcome/sign_button";
import SignInButtonText from "../../atoms/welcome/SignInButtonText";

const SignInButton = (props) => {
  return (
    <Pressable style={sign_button.sign_button} onPress={props.onPressSignIn}>
      <SignInButtonText />
    </Pressable>
  );
};

export default SignInButton;
