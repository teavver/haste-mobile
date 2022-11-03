import { View, Text } from "react-native";
import global_styles from "../../styles/global/global_styles";
import welcome_screen from "../../styles/welcome/welcome_screen";
import WelcomeButtonsContainer from "../organisms/WelcomeButtonsContainer";
import Logo from "../atoms/welcome/Logo";
import WelcomeTitle from "../atoms/welcome/title";
import StatusBarUniversal from "../../utils/StatusBarUniversal";

const WelcomeScreen = (props) => {
  return (
    <View style={global_styles.main_container}>
      <View style={welcome_screen.content_container}>
        <View style={welcome_screen.title_logo_container}>
          <Logo />
          <WelcomeTitle />
        </View>
        <WelcomeButtonsContainer onPressSignUp={""} onPressSignIn={""} />
      </View>
      <StatusBarUniversal />
    </View>
  );
};

export default WelcomeScreen;
