import React, { useCallback, useState } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants';

const InDeNumber = (props) => {
    const [number, setNumber] = useState(1);
    const [isDisable, setIsDisable] = useState(false);
    const decreaseHandler = useCallback(() => {
        if (number === 1) {
            setIsDisable(true);
        } else {
            setNumber((prevNum) => prevNum - 1);
        }
    }, [number, setIsDisable, setNumber]);
    const increaseHandler = useCallback(() => {
        setIsDisable(false);
        setNumber((prevNum) => prevNum + 1);
    }, [setNumber, setIsDisable]);
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={decreaseHandler}
                disable={isDisable}>
                <Text>-</Text>
            </Pressable>
            <Text>{number}</Text>
            <Pressable style={styles.button} onPress={increaseHandler}>
                <Text>+</Text>
            </Pressable>
        </View>
    );
};
export default InDeNumber;
const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
        height: 20,
        width: 20,
        backgroundColor: COLOR.common.grey,
        color: COLOR.common.lightGrey,
        borderRadius: 20,
        textAlign: 'center',
    },
});
