import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants';

export default function CustomButton(props) {
    const { type, size, shape, title, onPress, style } = props;
    const pressHandler = () => {
        onPress();
    };
    const buttonStyleHandler = (type, size, shape) => {
        let color = '#000000';
        let disable = false;
        let backgroundColor;
        let height;
        let borderRadius;
        switch (type) {
            case 'neutral':
                backgroundColor = '#EAEDF0';
                break;
            case 'accent':
                backgroundColor = COLOR.common.accent;
                color = '#ffffff';
                break;
            case 'disable':
                backgroundColor = COLOR.common.darkGrey;
                color = '#ffffff';
                disable = true;
                break;
            case 'user':
                backgroundColor = COLOR.user.primary;
                break;
            case 'admin':
                backgroundColor = COLOR.admin.primary;
                color = '#ffffff';
                break;
            default:
                backgroundColor = '#EAEDF0';
                break;
        }
        switch (size) {
            case 'big':
                height = 44;
                break;
            case 'medium':
                height = 40;
                break;
            case 'small':
                height = 36;
                break;
            default:
                height = 36;
                break;
        }
        switch (shape) {
            case 'square':
                borderRadius = 6;
                break;
            case 'round':
                borderRadius = 50;
                break;
            default:
                borderRadius = 6;
                break;
        }
        return { color, backgroundColor, height, borderRadius, disable };
    };

    const { color, height, disable } = buttonStyleHandler(type, size, shape);

    return (
        <View style={styles.container}>
            <Pressable
                style={[buttonStyleHandler(type, size, shape), style]}
                disable={disable}
                onPress={pressHandler}>
                <Text
                    style={{
                        color: color,
                        lineHeight: height - 40,
                        padding: 20,
                    }}>
                    {title}
                </Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
    },
});
