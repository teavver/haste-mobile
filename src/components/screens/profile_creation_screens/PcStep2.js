import { View, Text, SafeAreaView, StatusBar, Pressable, ScrollView } from "react-native";
import StatusBarUniversal from "../../../utils/StatusBarUniversal";
import PcNavContainer from "../../molecules/profilecreation/PcNavContainer";
import { useState } from "react";
import SmallButtonContainer from "../../molecules/profilecreation/step2/SmallButtonContainer";

const PcStep2 = (props) => {
   return (
    <SafeAreaView style={{ height: "100%" }}>
      {/* user Gender */}
      <SmallButtonContainer onPress={props.onPressGenderChange} />

      {/* <View style={{width: "75%", height: 90, backgroundColor: "grey", alignSelf: "center", marginTop: 80, flexDirection: "row", justifyContent: "center"}}>
        <Pressable
        onPress={() => props.onChangeUserGender("userGender")("male")}
        style={{backgroundColor: "lightgrey", padding: 9,marginHorizontal: 10, height: 40, alignSelf: "center"}}
        >
        <Text>Male</Text>
        </Pressable>
         <Pressable
         onPress={() => props.onChangeUserGender("userGender")("female")}
         
        style={{backgroundColor: "lightgrey", padding: 9,marginHorizontal: 10, height: 40, alignSelf: "center"}}
        >
        <Text>Female</Text>
        </Pressable>
        <Pressable
          onPress={() => props.onChangeUserGender("userSexOrientation")("SLl")} 
        style={{backgroundColor: "lightgrey", padding: 9,marginHorizontal: 10, height: 40, alignSelf: "center"}}
        >
        <Text>Other</Text>
        </Pressable>
      </View> */}

        {/* userSexualOrientation */}
       <View style={{width: "75%", height: 90, backgroundColor: "grey", alignSelf: "center", marginTop: 80, flexDirection: "row", justifyContent: "center"}}>
        
        </View>
      <PcNavContainer
        directions={props.directions}
        onPressLeft={props.onPressLeft}
        onPressRight={props.onPressRight}
      />
      <StatusBar style="dark" />
      <StatusBarUniversal />
    </SafeAreaView>
  );
};

export default PcStep2;
