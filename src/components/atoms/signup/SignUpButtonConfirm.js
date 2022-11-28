import { Pressable, Text } from "react-native";
import sign_up_button_confirm from "../../../styles/sign_up/sign_up_button_confirm";
import sign_up_button_text from "../../../styles/sign_up/sign_up_button_text";
import I18n from "../../../i18n";

const SignUpButtonConfirm = (props) => {
  return (
    <Pressable
      style={sign_up_button_confirm.sign_up_button_confirm}
      onPress={props.onPress}
    >
      <Text style={sign_up_button_text.sign_up_button_text}>
        {I18n.t("SignUpPage.SubmitButtonText")}
      </Text>
    </Pressable>
  );
};

export default SignUpButtonConfirm;
