import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../../Background';

const RoomInfoManagement = (props) => {
    const { name, price, address, deposit, numOfRooms, rented, available } =
        props;
    return (
        <Background style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={styles.image}>
                    <Image
                        resizeMode='cover'
                        source={require('../../../images/room-pic.png')}
                    />
                </View>
                <View style={styles.info}>
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.text}>
                            <Text
                                style={{
                                    color: COLOR.admin.primaryShade[200],
                                }}>
                                {price}
                            </Text>{' '}
                            VND/month
                        </Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>{address}</Text>
                        <Text style={styles.text}>
                            <Text
                                style={{
                                    color: COLOR.admin.primaryShade[200],
                                }}>
                                {deposit}
                            </Text>{' '}
                            deposit
                        </Text>
                    </View>
                    <View
                        style={[
                            styles.wrapper,
                            { justifyContent: 'space-around' },
                        ]}>
                        <Text style={styles.text}>
                            <Text
                                style={{
                                    color: COLOR.admin.primaryShade[200],
                                }}>
                                {numOfRooms}
                            </Text>{' '}
                            rooms
                        </Text>
                        <Text style={styles.text}>
                            <Text
                                style={{
                                    color: COLOR.admin.primaryShade[200],
                                }}>
                                {rented}
                            </Text>{' '}
                            rented out
                        </Text>
                        <Text style={styles.text}>
                            <Text
                                style={{
                                    color: COLOR.admin.primaryShade[200],
                                }}>
                                {available}
                            </Text>{' '}
                            available
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.manageButton} onClick={() => {}}></View>{' '}
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
        paddingTop: 5,
        paddingBottom: 5,
        // color: COLOR.common.darkGrey
    },

    image: {
        width: 80,
        height: '100%',
        backgroundColor: COLOR.common.grey,
    },
    info: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: 500,
    },
    text: {
        fontSize: 10,
        // padding: 3,
        color: COLOR.common.darkGrey,
    },
    manageButton: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: COLOR.common.darkGrey,
        margin: 10,
    },
});

export default RoomInfoManagement;
