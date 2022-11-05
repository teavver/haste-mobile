import { View } from "react-native";
import SignUpTitleContainer from "../../molecules/signup/SignUpTitleContainer";
import SignUpTextInput from "../../atoms/signup/SignUpTextInput";
import SignUpButtonConfirm from "../../atoms/signup/SignUpButtonConfirm";
import sign_up_container from "../../../styles/sign_up/sign_up_container";
import I18n from "../../../i18n";

const SignUpContainer = (props) => {
  return (
    <View style={sign_up_container.sign_up_container}>
      <SignUpTitleContainer SignUpTitle={"SignUpTitle1"} />
      <SignUpTextInput
        placeholder={I18n.t("SignUpPlaceholder1")}
        onChangeText={() => console.log("123")}
      />
      <SignUpTitleContainer SignUpTitle={"SignUpTitle2"} />
      <SignUpTextInput
        placeholder={I18n.t("SignUpPlaceholder2")}
        onChangeText={() => console.log("321")}
      />
      <SignUpButtonConfirm onPress={() => console.log("Sign up confirm")} />
    </View>
  );
};

export default SignUpContainer;
