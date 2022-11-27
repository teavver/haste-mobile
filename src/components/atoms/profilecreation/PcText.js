import { View, Text } from "react-native";
import pc_text from "../../../styles/profile_creation/pc_text";

const PcText = (props) => {
  return (
    <View style={pc_text.container}>
      <Text style={pc_text.text}>{props.text}</Text>
    </View>
  );
};

export default PcText;
