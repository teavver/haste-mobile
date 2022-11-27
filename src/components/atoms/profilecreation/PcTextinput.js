import { View, TextInput } from "react-native";
import pc_textinput from "../../../styles/profile_creation/pc_textinput";

const PcTextinput = (props) => {
  return (
    <View>
      <TextInput
        style={pc_textinput.textinput}
        placeholder={props.placeholder}
        placeholderTextColor="grey"
        value={props.value}
        underlineColorAndroid="transparent"
      ></TextInput>
    </View>
  );
};

export default PcTextinput;
