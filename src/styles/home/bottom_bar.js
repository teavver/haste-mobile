import { StyleSheet } from "react-native";
import colors from "../global/colors";

export default StyleSheet.create({
  bottombar_container: {
    width: "100%",
    height: "9%",
    backgroundColor: colors.dark_mode.main,
  },
  bottombar_content: {
    bottom: "50%",
    height: "100%",
    width: "90%",
    alignSelf: "center",
  },
  bottombar_detail_container: {
    width: "50%",
    height: "50%",
    bottom: "50%",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  bottombar_detail_ovalbig: {
    height: 240,
    width: "45%",
    alignSelf: "center",
    top: -15,
    borderRadius: 150,
    transform: [{ scaleX: 4 }],
    backgroundColor: colors.dark_mode.main,
  },
  bottombar_detail_rect: {
    alignSelf: "center",
    width: "50%",
    height: 32,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
  },
  bottombar_logo_container: {
    position: "absolute",
    width: "15%",
    height: "92.5%",
    alignSelf: "center",
  },
  bottombar_logo_img: {
    resizeMode: "contain",
    width: "50%",
    height: "100%",
    alignSelf: "center",
    tintColor: "white",
  },
});
