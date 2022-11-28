import { View, Text, SafeAreaView, StatusBar } from "react-native";
import StatusBarUniversal from "../../../utils/StatusBarUniversal";
import PcNavContainer from "../../molecules/profilecreation/PcNavContainer";

const PcStep2 = (props) => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Text>Step 2</Text>
      <PcNavContainer
        directions={props.directions}
        onPressLeft={props.onPressLeft}
        onPressRight={props.onPressRight}
      />
      <StatusBar style="dark" />
      <StatusBarUniversal />
    </SafeAreaView>
  );
};

export default PcStep2;
