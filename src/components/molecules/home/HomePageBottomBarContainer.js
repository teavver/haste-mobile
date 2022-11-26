import { View, Text, Image } from "react-native";
import HomePageBottomBarElem from "../../atoms/home/HomePageBottomBarElem";
import bottom_bar from "../../../styles/home/bottom_bar";
import haste from "../../../assets/images/haste.png";

const HomePageBottomBarContainer = () => {
  return (
    <View style={[bottom_bar.bottombar_container, { marginTop: "auto" }]}>
      <View style={bottom_bar.bottombar_detail_ovalbig}></View>
      <View style={bottom_bar.bottombar_logo_container}>
        <Image source={haste} style={bottom_bar.bottombar_logo_img}></Image>
      </View>
      <View style={bottom_bar.bottombar_content}>
        <View style={bottom_bar.bottombar_icon}></View>
        <View style={bottom_bar.bottombar_icon}></View>
      </View>
    </View>
  );
};
export default HomePageBottomBarContainer;
