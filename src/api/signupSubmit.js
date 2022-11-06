import axios from "axios";

const signupSubmit = async (phone, pwd) => {
  // Account creation
  // (sign up)

  try {
    const res = await axios.post("https://tumer.pl/user", {
      phone: phone,
      password: pwd,
    });
    console.log(res.data);
    if (res.status === 200) {
      return true;
    }
  } catch (err) {
    console.warn(err);
  }
};

export default signupSubmit;
