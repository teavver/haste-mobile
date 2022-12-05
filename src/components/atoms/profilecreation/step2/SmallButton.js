import { View, Text, Pressable } from 'react-native';
import small_button from '../../../../styles/profile_creation/step2/small_button';

const SmallButton = (props) => {
    return(
        <Pressable
        onPress={props.onPress}
        style={small_button.button}
        >
        <Text>
            {props.text}
        </Text>
        </Pressable>
    )
}

export default SmallButton;