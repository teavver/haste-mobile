import * as Device from "expo-device";
import { Dimensions, PixelRatio } from "react-native";

const getDeviceInfo = () => {
  const DEVICE_BRAND = Device.brand;
  const DEVICE_MANUFACTURER = Device.manufacturer;
  const DEVICE_MODEL_NAME = Device.modelName;

  console.log("## BASIC DEVICE INFO");
  console.log(
    "\n",
    "DEVICE_BRAND: ",
    DEVICE_BRAND,
    "\n",
    "DEVICE_MANUFACTURER: ",
    DEVICE_MANUFACTURER,
    "\n",
    "DEVICE_MODEL_NAME: ",
    DEVICE_MODEL_NAME
  );

  // Future note (pixel ratio kinda irrelevant)
  // https://docs.expo.dev/versions/latest/react-native/pixelratio/

  // Dimensions are wrong
  // https://stackoverflow.com/questions/65606414/how-to-get-real-screen-resolution-using-dimensions-in-react-native-expo-and-st
  const DEVICE_WINDOW_WIDTH = Dimensions.get("window").width;
  const DEVICE_WINDOW_HEIGHT = Dimensions.get("window").height;
  const PIXEL_RATIO = PixelRatio.get();
  const FONT_SCALE = PixelRatio.getFontScale();

  console.log("## DEVICE DISPLAY INFORMATION");
  console.log(
    "\n",
    "DEVICE_DIMENSIONS: ",
    Math.round(DEVICE_WINDOW_WIDTH, 4),
    "x",
    Math.round(DEVICE_WINDOW_HEIGHT, 4),
    "\n",
    "PIXEL_RATIO: ",
    PIXEL_RATIO,
    "\n",
    "FONT_SCALE: ",
    FONT_SCALE
  );
};

export default getDeviceInfo;
