import haste from "../../../assets/images/haste.png";
import logo from "../../../styles/welcome/logo";
import { Image } from "react-native";

const Logo = () => {
  return <Image source={haste} style={logo.logo}></Image>;
};

export default Logo;
