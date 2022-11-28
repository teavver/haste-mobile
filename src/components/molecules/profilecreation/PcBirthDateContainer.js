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
        value={props.valueDay}
      />
      <PcBirthDateInput
        maxLength={2}
        placeholder="MM"
        onChangeText={props.onChangeTextMonth}
        autoFocus={props.autoFocus}
        value={props.valueMonth}
      />
      <PcBirthDateInput
        placeholder="YYYY"
        maxLength={4}
        onChangeText={props.onChangeTextYear}
        autoFocus={props.autoFocus}
        value={props.valueYear}
      />
    </View>
  );
};

export default PcBirthDateContainer;
