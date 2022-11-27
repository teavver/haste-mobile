import { View, Text, Pressable } from "react-native";
import pc_button from "../../../styles/profile_creation/pc_button";

const PcButton = (props) => {
  return (
    <View>
      <Pressable
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        style={pc_button.button}
      >
        <Text style={pc_button.button_text}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default PcButton;
