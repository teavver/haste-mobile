import { View, Text } from "react-native";
import { useState } from "react";
import ProfileCreationStep1 from "./ProfileCreationStep1";
import ProfileCreationStep2 from "./ProfileCreationStep2";
import profileData from "../data/profileData";

const ProfileCreationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  if (currentPage === 1) {
    return <ProfileCreationStep1 onPressRight={() => setCurrentPage(2)} />;
  }
  if (currentPage === 2) {
    return (
      <ProfileCreationStep2
        onPressLeft={() => {
          setCurrentPage(1);
        }}
        onPressRight={() => setCurrentPage(3)}
      />
    );
  }
  if (currentPage === 3) {
    return (
      <View>
        <Text>Lmao</Text>
      </View>
    );
  }
};

export default ProfileCreationPage;
