import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import global_styles from "../styles/global/global_styles";
import StatusBarUniversal from "../utils/StatusBarUniversal";
import WelcomeTitle from "../components/atoms/welcome/title";
import SignUpButtonText from "../components/atoms/welcome/sign_up_button_text";

const Stack = createNativeStackNavigator();

const WelcomePage = () => {
  return (
    <View style={global_styles.main_container}>
      <WelcomeTitle />
      <SignUpButtonText />
      <StatusBarUniversal />
    </View>
  );
};

export default WelcomePage;
