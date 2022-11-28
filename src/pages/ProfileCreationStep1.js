import { View, Text } from "react-native";
import PcStep1 from "../components/screens/profile_creation_screens/PcStep1";
import { useState, useEffect } from "react";
import updateProfileData from "../utils/updateProfileData";

const ProfileCreationStep1 = (props) => {
  const updateFirstName = (input) => {
    setFirstName(input);
    updateProfileData("firstName")(input);
  };

  return (
    <View>
      <PcStep1
        onChangeText={updateFirstName}
        onChangeTextYear={() => console.log("changing year.")}
        onChangeTextMonth={""}
        onChangeTextDay={""}
        directions={"rightonly"}
        onPressRight={props.onPressRight}
      />
    </View>
  );
};

export default ProfileCreationStep1;
