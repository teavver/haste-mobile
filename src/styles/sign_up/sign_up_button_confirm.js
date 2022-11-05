import { StyleSheet } from "react-native";
import colors from "../global/colors";

export default StyleSheet.create({
  sign_up_button_confirm: {
    width: "75%",
    height: "7.5%",
    borderWidth: 1.5,
    borderRadius: 30,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light_mode.darker,
    // backGroundColor: "rgba(0,0,50,0.33)",
  },
  sign_up_button_confirm_active: {
    backgroundColor: colors.accent_color,
  },
});
