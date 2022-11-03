import { Pressable } from "react-native";
import sign_button from "../../../styles/welcome/sign_button";
import SignUpButtonText from "../../atoms/welcome/SignUpButtonText";

const SignUpButton = ({ onPressSignUp }) => {
  return (
    <Pressable style={sign_button.sign_button} onPress={onPressSignUp}>
      <SignUpButtonText />
    </Pressable>
  );
};

export default SignUpButton;
