import global_styles from "../styles/global/global_styles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUpContainer from "../components/organisms/signup/SignUpContainer";

const SignUpPage = () => {
  return (
    <View style={global_styles.main_container}>
      <SignUpContainer />
    </View>
  );
};

export default SignUpPage;
