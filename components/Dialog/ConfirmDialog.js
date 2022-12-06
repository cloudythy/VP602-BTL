import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants';
import Dialog from './Dialog';

const ConfirmDialog = (props) => {
    const { children, size, user, onOk, onCancel } = props;
    return (
        <Dialog
            type='2 opt'
            user={user}
            size={size}
            onOk={onOk}
            onCancel={onCancel}
            okText='Confirm'
            cancelText='Cancel'>
            <View style={styles.text}>
                <Text style={styles.title}>Confirm {children}</Text>
                <Text>Are you sure to {children}</Text>
            </View>
        </Dialog>
    );
};
export default ConfirmDialog;
const styles = StyleSheet.create({
    text: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        paddingBottom: 10,
    },
});
