import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../Background';

const ServiceBill = props => {
    const { time, billInfo } = props;
    const { type, value, fee } = billInfo;
    return (
        <Background style={{ padding: 15, paddingLeft: 20, paddingRight: 20 }}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{time}</Text>
                <Text style={styles.text}>{type} bill</Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={[styles.text, { color: COLOR.common.darkGrey }]}>
                    {value}
                </Text>
                <Text style={styles.text}>{fee} VND</Text>
            </View>
        </Background>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        color: COLOR.admin.primaryShade[200],
        fontWeight: 600,
    },
    text: {
        fontSize: 10,
        color: COLOR.user.primaryShade[300],
        // paddingTop: 10
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
        // color: COLOR.common.darkGrey
    },
});
export default ServiceBill;
