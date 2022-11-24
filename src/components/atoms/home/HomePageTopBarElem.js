import { View } from "react-native";
import homepage_topbar_elem from "../../../styles/home/homepage_topbar_elem";

const HomePageTopBarElem = (icon) => {
  return (
    <View>
      <View style={homepage_topbar_elem.topbar_elem_template}></View>
      {/* Icon with icon.props path instead of template */}
    </View>
  );
};

export default HomePageTopBarElem;
