import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import global_styles from "../styles/global/global_styles";

const Stack = createNativeStackNavigator();

const WelcomePage = () => {
  return (
    <View style={global_styles.main_container}>
      <Text style={{ fontFamily: "Inter-Bold" }}> WELCOME PAGE</Text>
    </View>
  );
};

export default WelcomePage;
