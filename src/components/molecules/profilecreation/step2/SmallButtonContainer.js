import { View, Text } from 'react-native';
import small_button_container from '../../../../styles/profile_creation/step2/small_button_container';
import SmallButton from '../../../atoms/profilecreation/step2/SmallButton';
import I18n from '../../../../i18n';

const SmallButtonContainer = (props) => {
    return(
        <View style={small_button_container.container}>
            <SmallButton text={I18n.t("Pc.Step2.GenderMale")} onPress={() => props.onPress("Male")}/>
            <SmallButton text={I18n.t("Pc.Step2.GenderFemale")} onPress={() => props.onPress("Female")}/>
            <SmallButton text={I18n.t("Pc.Step2.GenderOther")} onPress={() => props.onPress("Other")}/>
        </View>
    )   
}

export default SmallButtonContainer