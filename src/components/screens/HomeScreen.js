import { View, Text, StatusBar, SafeAreaView } from "react-native";
import StatusBarUniversal from "../../utils/StatusBarUniversal";
import HomePageBottomBarContainer from "../molecules/home/HomePageBottomBarContainer";
import HomePageTopBarContainer from "../molecules/home/HomePageTopBarContainer";
import global_styles from "../../styles/global/global_styles";

const HomeScreen = (props) => {
  return (
    <View style={global_styles.main_container_nocenter_vertical}>
      <HomePageTopBarContainer />
      <HomePageBottomBarContainer />
      <StatusBar style="dark" />
      <StatusBarUniversal />
    </View>
  );
};

export default HomeScreen;
