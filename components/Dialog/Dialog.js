import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants';
import CustomButton from '../Button/CustomButton';
import DoubleButtons from '../Button/DoubleButtons';

const Dialog = (props) => {
    const { children, type, user, size, onOk, onCancel, okText, cancelText } =
        props;

    return (
        <View style={styles.container}>
            <View>{children}</View>
            {type === '1 opt' ? (
                <CustomButton
                    type={user ? user : 'accent'}
                    size={size}
                    shape='square'
                    title={okText}
                    onPress={onOk}
                />
            ) : (
                <DoubleButtons
                    size={size}
                    type={user ? user : 'accent'}
                    onOk={onOk}
                    onCancel={onCancel}
                    okText={okText}
                    cancelText={cancelText}
                />
            )}
        </View>
    );
};
export default Dialog;
const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        padding: 20,
        paddingBottom: 10,
        backgroundColor: COLOR.common.lightGrey,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
});
