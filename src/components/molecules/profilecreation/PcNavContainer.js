import { View } from "react-native";
import PcNavButton from "../../atoms/profilecreation/PcNavButton";
import pc_nav_container from "../../../styles/profile_creation/pc_nav_container";
import { useState } from "react";

const PcNavContainer = (props) => {
  const [directions, setDirections] = useState(props.directions);

  if (directions === "both") {
    return (
      <View style={pc_nav_container.container}>
        <PcNavButton dir={"left"} onPress={props.onPressLeft} />
        <PcNavButton onPress={props.onPressRight} />
      </View>
    );
  }
  if (directions === "leftonly") {
    return (
      <View style={pc_nav_container.container}>
        <PcNavButton dir={"left"} onPress={props.onPressLeft} />
      </View>
    );
  }
  if (directions === "rightonly") {
    return (
      <View style={pc_nav_container.container}>
        <PcNavButton onPress={props.onPressRight} />
      </View>
    );
  }
};

export default PcNavContainer;
