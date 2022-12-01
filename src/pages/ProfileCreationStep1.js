import { View, Text } from "react-native";
import PcStep1 from "../components/screens/profile_creation_screens/PcStep1";
import { useState, useEffect } from "react";
import updateProfileData from "../utils/updateProfileData";

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

  const checkUserAge = () => {
    // Date string from birthDate state
    const birthDateStr =
      birthDate.year + "/" + birthDate.month + "/" + birthDate.day;
    var today = new Date();
    var date = new Date(birthDateStr);
    var age = today.getFullYear() - date.getFullYear();
    var m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      age--;
    }
    console.log(age);
    if (age >= 18) return true;
    else return false;
  };

  const validateStepData = () => {
    try {
      if (checkUserAge() === true && firstName.length > 0) {
        // If everything is OK, call parent fun to go next page
        props.onPressRight();
      } else {
        // Alert na gorze (modal?) o niepoprawnych danych
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <PcStep1
        onChangeText={updateFirstName}
        onChangeTextYear={updateBirthDate("year")}
        onChangeTextMonth={updateBirthDate("month")}
        onChangeTextDay={updateBirthDate("day")}
        directions={"rightonly"}
        onPressRight={() => validateStepData()}
      />
    </View>
  );
};

export default ProfileCreationStep1;
