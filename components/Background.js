import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../constants';

const Background = (props) => {
    const { children, style } = props;

    return <View style={[styles.background, style]}>{children}</View>;
};
const styles = StyleSheet.create({
    background: {
        flex: 1,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        margin: 10,
        backgroundColor: COLOR.common.lightGrey,
    },
});
export default Background;
