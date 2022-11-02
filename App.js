import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import global_styles from "./src/styles/global/global_styles";
import WelcomePage from "./src/pages/WelcomePage";
import HomePage from "./src/pages/HomePage";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import { en } from "./src/i18n/en.js";
import { pl } from "./src/i18n/pl.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // i18n Configuration
  const [locale, setLocale] = useState(Localization.locale);
  const translations = {
    en,
    pl,
  };
  const i18n = new I18n(translations);
  i18n.locale = Localization.locale;
  I18n.fallbacks = true;

  // Load fonts
  useEffect(() => {
    // console.log(i18n.locale);
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

  // Splash screen while loading
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
