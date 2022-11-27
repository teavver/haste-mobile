import { View, Text } from "react-native";
import PcTitle from "../../atoms/profilecreation/PcTitle";

const PcTitleContainer = (props) => {
  return (
    <View>
      <PcTitle title={props.title} />
    </View>
  );
};

export default PcTitleContainer;
