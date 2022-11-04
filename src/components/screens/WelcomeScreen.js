import { View, Text } from "react-native";
import global_styles from "../../styles/global/global_styles";
import welcome_screen from "../../styles/welcome/welcome_screen";
import Logo from "../atoms/welcome/Logo";
import WelcomeTitle from "../atoms/welcome/title";
import StatusBarUniversal from "../../utils/StatusBarUniversal";
import welcome_buttons_container from "../../styles/welcome/welcome_buttons_container";
import SignUpButton from "../molecules/welcome/SignUpButton";
import SignInButton from "../molecules/welcome/SignInButton";

const WelcomeScreen = ({ onPressSignUp, onPressSignIn }) => {
  return (
    <View style={global_styles.main_container}>
      <View style={welcome_screen.content_container}>
        <View style={welcome_screen.title_logo_container}>
          <Logo />
          <WelcomeTitle />
        </View>
        <View style={welcome_buttons_container.container}>
          <SignUpButton onPressSignUp={onPressSignUp} />
          <SignInButton onPressSignIn={onPressSignIn} />
        </View>
      </View>
      <StatusBarUniversal />
    </View>
  );
};

{
  /* <Text style={{ fontSize: 20 }}>DEFAULT FONT</Text>
        <Text style={{ fontSize: 20, fontFamily: "Inter-Bold" }}>
          INTER BOLD
        </Text>
        <Text style={{ fontSize: 20, fontFamily: "Catamaran-Light" }}>
          CATAMARAN LIGHT
        </Text> */
}

export default WelcomeScreen;
