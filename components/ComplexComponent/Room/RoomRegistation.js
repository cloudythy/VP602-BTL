import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../../Background';
import DoubleButtons from '../../Button/DoubleButtons';

const RoomRegistation = (props) => {
    const { time, date, renters } = props;
    return (
        <Background style={{ padding: 15 }}>
            <View style={[{ marginBottom: 10 }, styles.wrapper]}>
                <Text style={styles.title}>New tower, B-class</Text>
                <View>
                    <Text style={styles.time}>{date}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
            {renters.map((renter) => {
                return (
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>{renter.name}</Text>
                        <Text style={styles.text}>{renter.phone}</Text>
                    </View>
                );
            })}
            <DoubleButtons
                type='admin'
                onOk={() => {}}
                onCancel={() => {}}
                okText='Accept'
                cancelText='Deny'
            />
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
    info: {
        flex: 1,
        padding: 5,
        paddingLeft: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
        color: COLOR.admin.primaryShade[200],
    },
    time: {
        fontSize: 12,
        color: COLOR.common.darkGrey,
    },
    text: {
        fontSize: 16,
        padding: 3,
        color: COLOR.common.darkGrey,
    },
});
export default RoomRegistation;
