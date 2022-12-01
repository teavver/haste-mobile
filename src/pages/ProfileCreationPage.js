import { View, Text } from "react-native";
import { useState } from "react";
import ProfileCreationStep1 from "./ProfileCreationStep1";
import ProfileCreationStep2 from "./ProfileCreationStep2";

const ProfileCreationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const updateCurrentPage = (direction) => {
    // 1 -> Move to next step
    // 0 -> Move back
    console.log("updatepage");
    if (direction === 1) setCurrentPage(currentPage + 1);
    if (direction === 0) setCurrentPage(currentPage - 1);
    return;
  };

  if (currentPage === 1) {
    return <ProfileCreationStep1 onPressRight={() => updateCurrentPage(1)} />;
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
        <Text>Step 3</Text>
      </View>
    );
  }
};

export default ProfileCreationPage;
