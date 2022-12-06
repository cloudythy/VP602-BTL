import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants';
import CustomButton from './CustomButton';

const DoubleButtons = (props) => {
    const { size, type, onOk, onCancel, okText, cancelText } = props;
    return (
        <View style={styles.doubleButtons}>
            <CustomButton
                style={styles.button}
                type='neutral'
                size={size}
                shape='square'
                title={cancelText}
                onPress={onCancel}
            />
            <CustomButton
                style={styles.button}
                type={type}
                size={size}
                shape='square'
                title={okText}
                onPress={onOk}
            />
        </View>
    );
};
export default DoubleButtons;
const styles = StyleSheet.create({
    button: {
        // width: 100,
        margin: 10,
    },
    doubleButtons: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: "center",
        justifyContent: 'center',
    },
});
