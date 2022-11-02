import global_styles from "../styles/global/global_styles";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View style={global_styles.main_container}>
      <Text>HOME</Text>
    </View>
  );
};

export default HomePage;