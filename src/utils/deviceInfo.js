import * as Device from "expo-device";

const getDeviceInfo = () => {
  const DEVICE_BRAND = Device.brand;
  const DEVICE_MANUFACTURER = Device.manufacturer;
  const DEVICE_MODEL_NAME = Device.modelName;
  console.log(DEVICE_BRAND, DEVICE_MANUFACTURER, DEVICE_MODEL_NAME);
};

export default getDeviceInfo;
