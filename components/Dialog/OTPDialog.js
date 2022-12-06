import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants';
import Dialog from './Dialog';

const OTPDialog = (props) => {
    const { size, user, onOk, onCancel } = props;
    const [otp, setOTP] = useState('');
    const okHandler = (otp) => {
        onOk(otp);
    };
    return (
        <Dialog
            type='2 opt'
            user={user}
            size={size}
            onOk={okHandler}
            onCancel={onCancel}
            okText='Reset Password'
            cancelText='Resent OTP'>
            <View style={styles.text}>
                <Text style={styles.title}>OTP sent</Text>
                <TextInput
                    placeholder='enter OTP'
                    onChangeText={(otp) => setOTP(otp)}
                    style={styles.otpInput}
                />
            </View>
        </Dialog>
    );
};
export default OTPDialog;
const styles = StyleSheet.create({
    text: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        paddingBottom: 10,
    },
    otpInput: {
        backgroundColor: COLOR.common.grey,
        // width: '100%',
        color: COLOR.common.dark,
        padding: 10,
        borderRadius: 6,
    },
});
