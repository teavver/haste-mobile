import { View } from "react-native";
import PcButton from "../../atoms/profilecreation/PcButton";
import pc_button_container from "../../../styles/profile_creation/pc_button_container";

const PcButtonContainer = (props) => {
  return (
    <View style={pc_button_container.container}>
      <PcButton
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        text={props.text}
      />
    </View>
  );
};

export default PcButtonContainer;
