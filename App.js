// React
import React, { useState, useEffect, useCallback } from "react";
// Expo
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
// Other
import WelcomePage from "./src/pages/WelcomePage";
import HomePage from "./src/pages/HomePage";
import I18n from "./src/i18n/index";
import { View, Text } from "react-native";
// Utils
import getDeviceInfo from "./src/utils/deviceInfo";
import fonts from "./src/utils/loadFonts";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here

        // console.log(fonts);
        // await Font.loadAsync(fonts);

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        console.log("LOADING ASSETS");
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (e) {
        console.warn(e);
      } finally {
        console.log("APP IS READY");
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    console.log("RENDER FINISHED");
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <WelcomePage />
    </View>
    // <HomePage />
  );
}
