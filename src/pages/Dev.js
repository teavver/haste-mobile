import { View, Text, Pressable, StyleSheet } from "react-native";
import getDeviceInfo from "../utils/deviceInfo";

const Dev = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Devlog</Text>
      <Text style={styles.text_log}></Text>
      <Pressable onPress={getDeviceInfo} style={styles.debug_button}>
        <Text>Device info</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  text_log: {
    fontSize: 20,
  },
  debug_button: {
    backgroundColor: "rgba(0,0,255,0.55)",
    padding: 3,
    width: 100,
  },
});

export default Dev;
