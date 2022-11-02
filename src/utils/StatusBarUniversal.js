import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

const StatusBarUniversal = () => {
  return (
    <StatusBar
      style={Platform.OS === "android" ? "light" : "dark"}
      backgroundColor="black"
    />
  );
};

export default StatusBarUniversal;
