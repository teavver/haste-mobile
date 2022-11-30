import { View, Text } from "react-native";
import PcStep1 from "../components/screens/profile_creation_screens/PcStep1";
import { useState, useEffect } from "react";
import profileData from "../data/profileData";
import updateProfileData from "../utils/updateProfileData";
import { preventAutoHideAsync } from "expo-splash-screen";

const ProfileCreationStep1 = (props) => {
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const updateFirstName = (input) => {
    setFirstName(input);
    updateProfileData("firstName")(input);
  };

  const updateBirthDate = (date_type) => (date_input) => {
    setBirthDate((prev) => ({
      ...prev,
      [date_type]: date_input,
    }));
  };

  useEffect(() => {
    console.log(birthDate);
  }, [birthDate]);

  return (
    <View>
      <PcStep1
        onChangeText={updateFirstName}
        onChangeTextYear={() => updateBirthDate("year")}
        onChangeTextMonth={updateBirthDate("month")}
        onChangeTextDay={updateBirthDate("day")}
        // valueYear={profileData.birthDate.year}
        // valueMonth={profileData.birthDate.month}
        // valueDay={profileData.birthDate.day}
        directions={"rightonly"}
        onPressRight={props.onPressRight}
      />
    </View>
  );
};

export default ProfileCreationStep1;
