import { View } from "react-native";
import welcome_buttons_container from "../../styles/welcome/welcome_buttons_container";
import SignUpButton from "../molecules/welcome/SignUpButton";
import SignInButton from "../molecules/welcome/SignInButton";

const WelcomeButtonsContainer = (props) => {
  return (
    <View style={welcome_buttons_container.container}>
      <SignUpButton onPress={props.onPressSignUp} />
      <SignInButton onPress={props.onPressSignIn} />
    </View>
  );
};

export default WelcomeButtonsContainer;
