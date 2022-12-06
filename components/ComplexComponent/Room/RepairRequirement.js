import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../../Background';
import DoubleButtons from '../../Button/DoubleButtons';

const RepairRequirement = (props) => {
    const { time, date, room, tower, requirement } = props;
    return (
        <Background style={{ padding: 15 }}>
            <View style={[{ marginBottom: 5 }, styles.wrapper]}>
                <Text style={styles.room}>{room}</Text>
                <View>
                    <Text style={styles.time}>{date}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
            <Text style={styles.tower}>{tower}</Text>
            <Text style={styles.require}>{requirement}</Text>
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
    room: {
        fontSize: 20,
        fontWeight: 500,
        color: COLOR.admin.primaryShade[200],
    },
    require: {
        fontSize: 14,
        color: COLOR.common.darkGrey,
        marginBottom: 5,
    },
    tower: {
        fontSize: 18,
        paddingBottom: 10,
        // padding: 3,
        color: COLOR.admin.primaryShade[200],
    },
});
export default RepairRequirement;
