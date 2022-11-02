import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import global_styles from "./src/styles/global/global_styles";
import WelcomePage from "./src/pages/Welcome";
import HomePage from "./src/pages/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  // LOAD FONTS
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
          "Catamaran-Light": require("./src/assets/fonts/Catamaran-Light.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <WelcomePage onLayoutRootView={onLayoutRootView} />
    // <HomePage />
  );
}
