import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SignUpScreen from "../components/screens/SignUpScreen";
import global_styles from "../styles/global/global_styles";
import signupSubmit from "../api/signupSubmit";

const SignUpPage = () => {
  const [phone, setPhone] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [accountSuccess, setAccountSuccess] = useState(false);

  const SignUpTextInput = (field) => (input) => {
    if (field === "PHONE") setPhone(input);
    if (field === "PWD") setPwd(input);
    if (field !== "PHONE" && field !== "PWD")
      console.warn("ERR SIGN UP TEXTINPUT FIELD");
  };

  const SubmitSignUpData = async () => {
    try {
      signupSubmit(phone, pwd);
      if (signupSubmit(phone, pwd) === true) {
        console.log("SUCCESS????");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={global_styles.main_container}>
      <SignUpScreen
        onChangePhone={SignUpTextInput("PHONE")}
        onChangePassword={SignUpTextInput("PWD")}
        onSubmit={() => SubmitSignUpData()}
      />
    </View>
  );
};

export default SignUpPage;
