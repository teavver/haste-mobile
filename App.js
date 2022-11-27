// React
import React, { useState, useEffect, useCallback } from "react";
import { useWindowDimensions } from "react-native";
// Expo
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
// Pages + Others
import WelcomePage from "./src/pages/WelcomePage";
import HomePage from "./src/pages/HomePage";
import ProfileCreationPage from "./src/pages/ProfileCreationPage";
import I18n from "./src/i18n/index";
import { View, Text } from "react-native";
import Dev from "./src/pages/Dev";
// Utils
import fonts from "./src/utils/loadFonts";
import isFirstTimeLaunching from "./src/utils/firstTimeLaunch";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    async function prepare() {
      try {
        console.log("LOADING ASSETS");
        // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!

        // await Font.loadAsync(fontsLoaded); ??
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (e) {
        console.warn(e);
      } finally {
        // If all assets loaded, app is ready
        console.log(fontsLoaded);
        console.log("APP IS READY");
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

  if (appIsReady)
    return (
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <ProfileCreationPage />
        {/* <HomePage /> */}
        {/* <WelcomePage /> */}
        {/* <Dev /> */}
      </View>
    );
}
