import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import global_styles from "./src/styles/global/global_styles";
import WelcomePage from "./src/pages/WelcomePage";
import HomePage from "./src/pages/HomePage";
import I18n from "./src/i18n/index";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  // Load fonts
  useEffect(() => {
    // console.log(I18n);
    console.log(I18n.locale);
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
