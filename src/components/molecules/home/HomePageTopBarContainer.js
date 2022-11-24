import { View } from "react-native";
import homepage_topbar_container from "../../../styles/home/homepage_topbar_container";
import HomePageTopBarElem from "../../atoms/home/HomePageTopBarElem";

const HomePageTopBarContainer = () => {
  return (
    <View style={homepage_topbar_container.topbar_container}>
      <HomePageTopBarElem />
      <HomePageTopBarElem />
    </View>
  );
};

export default HomePageTopBarContainer;
