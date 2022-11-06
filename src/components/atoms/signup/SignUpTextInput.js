import { TextInput } from "react-native";
import sign_up_textinput from "../../../styles/sign_up/sign_up_textinput";

const SignUpTextInput = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      maxLength={props.maxLength}
      keyboardType={props.keyboardType}
      returnKeyType={props.returnKeyType}
      style={sign_up_textinput.sign_up_textinput}
      placeholderTextColor="grey"
    ></TextInput>
  );
};

export default SignUpTextInput;
