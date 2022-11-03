import React, { useState, useEffect, useCallback } from "react";
import WelcomeScreen from "../components/screens/WelcomeScreen";

const WelcomePage = () => {
  const navigateToSignUp = () => {
    console.log("moving to sign up");
  };
  const navigateToSignIn = () => {
    console.log("sign in");
  };

  return (
    <WelcomeScreen
      onPressSignUp={navigateToSignUp}
      onPressSignIn={navigateToSignIn}
    />
  );
};

export default WelcomePage;
