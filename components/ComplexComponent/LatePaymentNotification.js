import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants';
import Background from '../Background';

const LatePaymentNotification = (props) => {
    const { time, date } = props;
    return (
        <Background>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={styles.icon}></View>
                <View style={styles.info}>
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>Late payment</Text>
                        <View>
                            <Text style={styles.text}>abcde</Text>
                            <Text style={styles.text}>{time}</Text>
                        </View>
                    </View>
                    <Text style={styles.text}>Please pay your water bill</Text>
                </View>
            </View>
        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1,
    },

    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 5,
        paddingBottom: 5,
        // color: COLOR.common.darkGrey
    },

    icon: {
        width: 80,
        height: '100%',
        backgroundColor: COLOR.common.grey,
    },
    info: {
        flex: 1,
        padding: 5,
        paddingLeft: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
        color: COLOR.common.accentShade[200],
    },
    text: {
        fontSize: 12,
        // padding: 3,
        color: COLOR.common.darkGrey,
    },
});
export default LatePaymentNotification;
