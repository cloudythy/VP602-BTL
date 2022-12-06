import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../Background';

const ElectricWaterOverview = (props) => {
    const { time, electric, water } = props;
    return (
        <Background style={{ padding: 15, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={styles.title}>{time}</Text>
            <Text style={styles.subTitle}>Electric</Text>
            <View style={styles.wrapper}>
                <Text style={styles.text}>{electric.value} Kwh</Text>
                <Text style={styles.text}>{electric.fee} VND</Text>
                {electric.isPaid ? (
                    <Text style={styles.text}> Paid</Text>
                ) : (
                    <Text
                        style={[
                            styles.text,
                            { color: COLOR.common.accentShade[200] },
                        ]}>
                        {' '}
                        Unpaid
                    </Text>
                )}
            </View>
            <Text style={styles.subTitle}>Water</Text>
            <View style={styles.wrapper}>
                <Text style={styles.text}>{water.value} Kwh</Text>
                <Text style={styles.text}>{water.fee} VND</Text>
                {water.isPaid ? (
                    <Text style={styles.text}> Paid</Text>
                ) : (
                    <Text
                        style={[
                            styles.text,
                            { color: COLOR.common.accentShade[200] },
                        ]}>
                        {' '}
                        Unpaid
                    </Text>
                )}
            </View>
        </Background>
    );
};
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: COLOR.admin.primaryShade[200],
        fontWeight: 600,
    },
    subTitle: {
        fontSize: 18,
        color: COLOR.admin.primaryShade[200],
        paddingTop: 10,
    },
    text: {
        color: COLOR.common.darkGrey,
        paddingTop: 10,
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
export default ElectricWaterOverview;
