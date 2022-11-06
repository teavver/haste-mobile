import { View } from "react-native";
import SignUpTitleContainer from "../molecules/signup/SignUpTitleContainer";
import SignUpTextInput from "../atoms/signup/SignUpTextInput";
import SignUpButtonConfirm from "../atoms/signup/SignUpButtonConfirm";
import StatusBarUniversal from "../../utils/StatusBarUniversal";
import sign_up_screen from "../../styles/sign_up/sign_up_screen";
import I18n from "../../i18n";
import { StatusBar } from "expo-status-bar";

const SignUpScreen = (props) => {
  return (
    <View style={sign_up_screen.sign_up_screen}>
      <SignUpTitleContainer SignUpTitle={"SignUpTitle1"} />
      <SignUpTextInput
        placeholder={I18n.t("SignUpPlaceholder1")}
        onChangeText={props.onChangePhone}
        maxLength={9}
        keyboardType={"number-pad"}
        returnKeyType={"done"}
      />
      <SignUpTitleContainer SignUpTitle={"SignUpTitle2"} />
      <SignUpTextInput
        placeholder={I18n.t("SignUpPlaceholder2")}
        onChangeText={props.onChangePassword}
        maxLength={32}
        secureTextEntry={true}
        keyboardType={"default"}
      />
      <SignUpButtonConfirm onPress={props.onSubmit} />
      <StatusBar style="dark" />
      <StatusBarUniversal />
    </View>
  );
};

export default SignUpScreen;
