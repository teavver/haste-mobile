import { StyleSheet } from "react-native";
import colors from "../global/colors";

export default StyleSheet.create({
  button: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    height: "100%",
    borderRadius: 30,
    backgroundColor: colors.accent_color,
  },
  button_text: {
    fontWeight: 800,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
