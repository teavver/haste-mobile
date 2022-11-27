import { View, Text } from "react-native";
import pc_title from "../../../styles/profile_creation/pc_title";

const PcTitle = (props) => {
  return (
    <View>
      <Text style={pc_title.title}>{props.title}</Text>
    </View>
  );
};

export default PcTitle;
