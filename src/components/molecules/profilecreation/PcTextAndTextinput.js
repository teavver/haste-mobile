import { View } from "react-native";
import PcText from "../../atoms/profilecreation/PcText";
import PcTextinput from "../../atoms/profilecreation/PcTextinput";
import pc_text_and_textinput from "../../../styles/profile_creation/pc_text_and_textinput";

const PcTextAndTextinput = (props) => {
  return (
    <View style={pc_text_and_textinput.container}>
      <PcText text={props.text} />
      <PcTextinput placeholder={props.placeholder} />
    </View>
  );
};

export default PcTextAndTextinput;
