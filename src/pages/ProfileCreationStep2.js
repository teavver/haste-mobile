import { View, Text } from "react-native";
import PcStep2 from "../components/screens/profile_creation_screens/PcStep2";
import { useEffect, useState } from "react";
import updateProfileData from "../utils/updateProfileData";

const ProfileCreationStep2 = (props) => {
  const [userGender, setUserGender] = useState("");
  const [userSexOrientation, setUserSexOrientation] = useState([]);

  const genderPick = () => {
    console.log(userGender);
    // setUserGender(picked_gender);
  }

  const updateStepData = (type) => (input) => {
  console.log(type);
  console.log(input);
  }

  return (
    <View>
      <PcStep2
        directions={"both"}
        onPressLeft={props.onPressLeft}
        onPressRight={() => genderPick()}
        onPressGenderChange={setUserGender}
      />
    </View>
  );
};

export default ProfileCreationStep2;
