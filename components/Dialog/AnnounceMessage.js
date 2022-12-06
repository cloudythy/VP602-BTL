import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants';
import Dialog from './Dialog';

const AnnounceDialog = (props) => {
    const { type, size, user, onOk, onCancel, shortMessage, fullMessage } =
        props;
    return (
        <Dialog
            type={type}
            user={user}
            size={size}
            onOk={onOk}
            onCancel={onCancel}
            okText='Confirm'
            cancelText='Cancel'>
            <View style={styles.text}>
                <Text style={styles.title}>{shortMessage}</Text>
                <Text>{fullMessage}</Text>
            </View>
        </Dialog>
    );
};
export default AnnounceDialog;
const styles = StyleSheet.create({
    text: {
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 16,
        paddingBottom: 10,
    },
});
