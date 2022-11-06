import axios from "axios";

const signinSubmit = async (phone, pwd, token, uid) => {
  // Log in to existing account
  // (sign in)
  try {
    const res = await axios.post("https://tumer.pl/user/login", {
      phone,
      pwd,
      token,
      uid,
    });
    console.log(res.data);
    if (res.status === 200) {
      return true;

      // const setCookieHeader = response.headers["set-cookie"][0];
      // const sessionToken = setCookieHeader.split(";")[0].split("=")[1]
      //   const sessionToken = setCookieHeader;
      //     try {
      //     await AsyncStorage.setItem("sessionToken", sessionToken);
      //     } catch (error) {
      //     console.log(error);
      //     }
    }
  } catch (err) {
    console.warn(err);
  }
};

export default signinSubmit;
