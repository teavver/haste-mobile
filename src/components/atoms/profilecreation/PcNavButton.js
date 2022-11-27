import { View, TouchableOpacity, Image } from "react-native";
import pc_nav_button from "../../../styles/profile_creation/pc_nav_button";
import pc_nav_prev from "../../../assets/images/icons/pc_nav_prev.png";
import pc_nav_next from "../../../assets/images/icons/pc_nav_next.png";

const PcNavButton = (props) => {
  return (
    <View style={pc_nav_button.btn_container}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={pc_nav_button.icon}
          source={props.dir === "left" ? pc_nav_prev : pc_nav_next}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default PcNavButton;
