import AsyncStorage from "@react-native-async-storage/async-storage";

const isFirstTimeLaunching = async () => {
  try {
    const FIRST_LAUNCH = await AsyncStorage.getItem("FIRST_LAUNCH");
    if (FIRST_LAUNCH === null) {
      await AsyncStorage.setItem("FIRST_LAUNCH", "true");
      return true;
    }
    await AsyncStorage.setItem("FIRST_LAUNCH", "false");
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default isFirstTimeLaunching;
