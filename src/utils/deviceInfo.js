import * as Device from "expo-device";

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
};

export default getDeviceInfo;
