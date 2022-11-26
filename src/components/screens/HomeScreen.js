import { View, Text, StatusBar, SafeAreaView } from "react-native";
import StatusBarUniversal from "../../utils/StatusBarUniversal";
import HomePageBottomBarContainer from "../molecules/home/HomePageBottomBarContainer";
import HomePageTopBarContainer from "../molecules/home/HomePageTopBarContainer";
import global_styles from "../../styles/global/global_styles";

const HomeScreen = (props) => {
  return (
    <SafeAreaView
      style={[
        global_styles.main_container_nocenter_vertical,
        { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <StatusBar style="dark" />
      <StatusBarUniversal />
      <HomePageTopBarContainer />
      <HomePageBottomBarContainer />
    </SafeAreaView>
  );
};

export default HomeScreen;
