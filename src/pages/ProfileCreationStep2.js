import { View, Text } from "react-native";
import PcStep2 from "../components/screens/profile_creation_screens/PcStep2";
import { useState } from "react";

const ProfileCreationStep2 = (props) => {
  // Step 2 All logic

  return (
    <View>
      <PcStep2
        directions={"both"}
        onPressLeft={props.onPressLeft}
        onPressRight={props.onPressRight}
      />
    </View>
  );
};

export default ProfileCreationStep2;
