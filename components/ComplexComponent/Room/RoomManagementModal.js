import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../../Background';

const RoomManagementModal = () => {
    const editInformationHandler = () => {};
    const editPriceHandler = () => {};
    const deleteTypeHandler = () => {};

    return (
        <Background style={styles.container}>
            <Pressable style={styles.button} onPress={editInformationHandler}>
                <Text style={{ fontWeight: 500, color: COLOR.common.darkGrey }}>
                    (+) Edit information
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={editPriceHandler}>
                <Text style={{ fontWeight: 500, color: COLOR.common.darkGrey }}>
                    (+) Edit price
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={deleteTypeHandler}>
                <Text style={{ fontWeight: 500, color: COLOR.common.accent }}>
                    (+) Dalete type
                </Text>
            </Pressable>
        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 170,
        padding: 0,
    },
    button: { padding: 10, paddingLeft: 15 },
});
export default RoomManagementModal;
