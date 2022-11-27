import { View, Text, SafeAreaView } from "react-native";
import PcTextAndTextinput from "../../molecules/profilecreation/PcTextAndTextinput";
import PcTitleContainer from "../../molecules/profilecreation/PcTitleContainer";
import PcButtonContainer from "../../molecules/profilecreation/PcButtonContainer";
import PcNavContainer from "../../molecules/profilecreation/PcNavContainer";
import StatusBarUniversal from "../../../utils/StatusBarUniversal";
import { StatusBar } from "expo-status-bar";
import global_styles from "../../../styles/global/global_styles";

const PcStep1 = (props) => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <PcTitleContainer title={"Profile step 1"} />
      <PcTextAndTextinput text={"pc1 text"} placeholder={"placeholder"} />
      <PcButtonContainer onPress={() => testing()} text={"button pc1"} />
      <PcNavContainer
        directions="both"
        onPressRight={() => console.log("right")}
        onPressLeft={() => console.log("left")}
      />
      <StatusBar style="dark" />
      <StatusBarUniversal />
    </SafeAreaView>
  );
};

const testing = () => {
  console.log("testing");
};

export default PcStep1;
