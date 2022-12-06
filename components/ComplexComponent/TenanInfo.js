import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants';
import Background from '../Background';

const TenanInfo = (props) => {
    const { name, phone } = props;
    return (
        <Background style={styles.container}>
            <Text style={{ color: COLOR.user.primaryShade[200] }}>{name}</Text>
            <Text>{phone}</Text>
        </Background>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.common.lightGrey,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
export default TenanInfo;
