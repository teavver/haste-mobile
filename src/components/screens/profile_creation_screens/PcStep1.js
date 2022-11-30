import { View, Text, SafeAreaView, ShadowPropTypesIOS } from "react-native";
import PcTextAndTextinput from "../../molecules/profilecreation/PcTextAndTextinput";
import PcTitleContainer from "../../molecules/profilecreation/PcTitleContainer";
import PcNavContainer from "../../molecules/profilecreation/PcNavContainer";
import StatusBarUniversal from "../../../utils/StatusBarUniversal";
import PcBirthDateContainer from "../../molecules/profilecreation/PcBirthDateContainer";
import { StatusBar } from "expo-status-bar";
import I18n from "../../../i18n";

const PcStep1 = (props) => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <PcTitleContainer title={I18n.t("Pc.Step1.Title")} />
      <PcTextAndTextinput
        onChangeText={props.onChangeText}
        text={I18n.t("Pc.Step1.FirstNameText")}
        placeholder={I18n.t("Pc.Step1.FirstNameTextinputPlaceholder")}
      />
      <PcBirthDateContainer
        onChangeTextYear={props.onChangeTextYear}
        onChangeTextMonth={props.onChangeTextMonth}
        onChangeTextDay={props.onChangeTextDay}
        valueDay={props.valueDay}
        valueMonth={props.valueMonth}
        valueYear={props.valueYear}
      />
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

export default PcStep1;
