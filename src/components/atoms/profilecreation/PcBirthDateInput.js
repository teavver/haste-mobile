import { View, Text, TextInput } from "react-native";
import pc_birthdate_textinput from "../../../styles/profile_creation/pc_birthdate_textinput";

const PcBirthDateInput = (props) => {
  return (
    <View>
      <TextInput
        style={
          props.maxLength === 4
            ? [
                pc_birthdate_textinput.textinput_default,
                pc_birthdate_textinput.textinput_year,
              ]
            : [
                pc_birthdate_textinput.textinput_default,
                pc_birthdate_textinput.textinput_month_day,
              ]
        }
        maxLength={props.maxLength}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        value={props.value}
        keyboardType={"number-pad"}
        autoFocus={props.autoFocus}
        textAlign="center"
        placeholderTextColor="grey"
        underlineColorAndroid="transparent"
      ></TextInput>
    </View>
  );
};

export default PcBirthDateInput;
