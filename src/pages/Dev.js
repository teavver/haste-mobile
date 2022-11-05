import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import getDeviceInfo from "../utils/deviceInfo";

const Dev = (props) => {
  const DEVICE_SCREEN_DIMENSIONS = useWindowDimensions();
  const DEVICE_FONT_SCALE = props.DEVICE_FONT_SCALE;
  const DEVICE_SCALE = props.DEVICE_SCALE;

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 40, fontFamily: "Inter-Bold", fontWeight: "900" }}
      >
        Devlog
      </Text>
      <Text>
        screen_width : {Math.round(DEVICE_SCREEN_DIMENSIONS.width * 100) / 100}
      </Text>
      <Text>
        screen_height :{" "}
        {Math.round(DEVICE_SCREEN_DIMENSIONS.height * 100) / 100}
      </Text>
      <Text style={styles.text_log}></Text>
      <Pressable onPress={getDeviceInfo} style={styles.debug_button}>
        <Text>get_deviceinfo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    marginTop: 42,
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
