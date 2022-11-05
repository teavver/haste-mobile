import { Text } from "react-native";
import I18n from "../../../i18n";
import sign_up_title from "../../../styles/sign_up/sign_up_title";

const SignUpTitle = (props) => {
  const SignUpTitle = props.SignUpTitle;
  return <Text style={sign_up_title.sign_up_title}>{I18n.t(SignUpTitle)}</Text>;
};

export default SignUpTitle;
