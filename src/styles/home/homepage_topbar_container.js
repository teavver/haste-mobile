import { StyleSheet } from "react-native";
import colors from "../global/colors";

export default StyleSheet.create({
  topbar_container: {
    width: "100%",
    height: "8%",
    backgroundColor: colors.dark_mode.main,
    alignContent: "space-between",
    justifyContent: "space-around", //testing
    flexWrap: "wrap",
  },
});
