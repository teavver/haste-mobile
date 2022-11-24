import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import SignUpScreen from "../components/screens/SignUpScreen";
import global_styles from "../styles/global/global_styles";
import signupSubmit from "../api/signupSubmit";

const SignUpPage = () => {
  const [phone, setPhone] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [requiredDataFilled, setRequiredDataFilled] = useState(false);
  const [accountSuccess, setAccountSuccess] = useState(false);
  // Password checking
  const pwdREGEX = useEffect(() => {
    // if(phone.length === 9 && )
  }, [phone, pwd]);

  const SignUpTextInput = (field) => (input) => {
    const number_only_input = input.replace(/\D+/g, "");
    if (field === "PHONE") {
      setPhone(number_only_input);
    }
    if (field === "PWD") setPwd(input);
    if (field !== "PHONE" && field !== "PWD")
      console.warn("UNDEFINED SIGNUP TEXTINPUT FIELD");
  };

  const SubmitSignUpData = async () => {
    console.log(phone, pwd);
    console.log("---------------------------");
    console.log("testing data");
    // If both textfields passed tests, prompt sign up btn
    if (TestPhoneNumberData() === true && TestPasswordData === true) {
      try {
        console.log(signupSubmit(phone, pwd));
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const TestPhoneNumberData = () => {
    // Check if contains only numbers
    let phone_num_only = /^\d+$/.test(phone);
    if (phone_num_only && phone.length === 9) {
      console.log("phone number test passed");
    }
  };

  const TestPasswordData = () => {
    // Check if password is strong enough
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
