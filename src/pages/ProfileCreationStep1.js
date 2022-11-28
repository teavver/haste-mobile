import { View, Text } from "react-native";
import PcStep1 from "../components/screens/profile_creation_screens/PcStep1";
import { useState, useEffect } from "react";
import profileData from "../data/profileData";
import updateProfileData from "../utils/updateProfileData";

const ProfileCreationStep1 = (props) => {
  const [firstName, setFirstName] = useState("");

  const updateFirstName = (input) => {
    setFirstName(input);
    updateProfileData("firstName")(input);
  };

  const updateBirthDate = (dateType) => (input) => {
    console.log(dateType);
    console.log(input);
  };

  useEffect(() => {
    // Split profileData.birthDate into small parts to display as textinput value on load
  }, []);

  return (
    <View>
      <PcStep1
        onChangeText={updateFirstName}
        onChangeTextYear={updateBirthDate("year")}
        onChangeTextMonth={updateBirthDate("month")}
        onChangeTextDay={updateBirthDate("day")}
        valueYear={profileData.birthDate} // Use small pData.birthDate parts here
        valueMonth={profileData.birthDate}
        valueDay={profileData.birthDate}
        directions={"rightonly"}
        onPressRight={props.onPressRight}
      />
    </View>
  );
};

export default ProfileCreationStep1;
