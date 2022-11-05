import { TextInput } from "react-native";
import sign_up_textinput from "../../../styles/sign_up/sign_up_textinput";

const SignUpTextInput = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="grey"
      onChangeText={props.onChangeText}
      style={sign_up_textinput.sign_up_textinput}
    ></TextInput>
  );
};

export default SignUpTextInput;
