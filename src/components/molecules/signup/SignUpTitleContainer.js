import { View } from "react-native";
import SignUpTitle from "../../atoms/signup/SignUpTitle";
import sign_up_title_container from "../../../styles/sign_up/sign_up_title_container";

const SignUpTitleContainer = (props) => {
  return (
    <View style={sign_up_title_container.sign_up_title_container}>
      <SignUpTitle SignUpTitle={props.SignUpTitle} />
    </View>
  );
};

export default SignUpTitleContainer;
