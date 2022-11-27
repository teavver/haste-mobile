import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  title: {
    alignSelf: "center",
    width: "75%",
    fontSize: 40,
    paddingTop: StatusBar.currentHeight + 10, // Looks better
    paddingBottom: 18,
    // backgroundColor: "darkblue",
  },
});
