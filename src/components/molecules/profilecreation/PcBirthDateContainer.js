import { View, Text } from "react-native";
import PcBirthDateInput from "../../atoms/profilecreation/PcBirthDateInput";
import pc_birthdate_textinput_container from "../../../styles/profile_creation/pc_birthdate_textinput_container";

const PcBirthDateContainer = (props) => {
  return (
    <View style={pc_birthdate_textinput_container.container}>
      <PcBirthDateInput
        maxLength={2}
        placeholder="DD"
        onChangeText={props.onChangeTextDay}
        autoFocus={props.autoFocus}
      />
      <PcBirthDateInput
        maxLength={2}
        placeholder="MM"
        onChangeText={props.onChangeTextMonth}
        autoFocus={props.autoFocus}
      />
      <PcBirthDateInput
        placeholder="YYYY"
        maxLength={4}
        onChangeText={props.onChangeTextYear}
        value={props.valueYear}
        autoFocus={props.autoFocus}
      />
    </View>
  );
};

export default PcBirthDateContainer;
