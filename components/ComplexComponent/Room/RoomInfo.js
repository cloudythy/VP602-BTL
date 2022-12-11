import React from 'react';
import { Image, Text, StyleSheet, View , Pressable} from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../../Background';

const NormalRoomInfo = (props) => {
    const { name, price, address, numOfRooms, numOfPeople, deposit, service, onPress } =
        props;
    const pressHandler = () => {
        onPress();
    };
    return (
        <Pressable onPress={pressHandler}>
            <View style={styles.normal.image}>
                <Image
                    resizeMode='cover'
                    source={require('../../../images/room-pic.png')}
                />
            </View>
            <View style={styles.normal.info}>
                <Text style={styles.normal.title}>{name}</Text>
                <View style={styles.wrapper}>
                    <Text style={{ color: COLOR.common.darkGrey }}>
                        <Text style={styles.normal.price}>{price}</Text>{' '}
                        VND/month
                    </Text>
                    <Text style={styles.normal.address}>(+) {address}</Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.normal.text}>
                        (+) {numOfRooms}{' '}
                        {numOfRooms > 1 ? 'bedrooms' : 'bedroom'}
                    </Text>
                    <Text style={styles.normal.text}>
                        (+) {numOfPeople}{' '}
                        {numOfPeople > 1 ? 'persons' : 'person'}
                    </Text>
                    <Text style={styles.normal.text}>
                        (+) Deposit: {deposit} VND
                    </Text>
                </View>
                {/* <View
                    style={[styles.wrapper, { justifyContent: 'flex-start' }]}>
                    {service.map((item) => {
                        return (
                            <View style={styles.normal.serviceItems}>
                                <Text style={styles.normal.text}>{item}</Text>
                            </View>
                        );
                    })}
                </View> */}
            </View>
        </Pressable>
    );
};

const SmallRoomInfo = (props) => {
    const pressHandler = () => {
        onPress();
    };
    const { name, price, address, deposit } = props;
    return (
        <Pressable style={{ display: 'flex', flexDirection: 'row' }} onPress={pressHandler}>
            <View style={styles.small.image}>
                <Image
                    resizeMode='cover'
                    source={require('../../../images/room-pic.png')}
                />
            </View>
            <View style={styles.small.info}>
                <View style={styles.wrapper}>
                    <Text style={styles.small.title}>{name}</Text>
                    <Text style={styles.small.text}>
                        <Text style={{ color: COLOR.user.primaryShade[200] }}>
                            {price}
                        </Text>{' '}
                        VND/month
                    </Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.small.text}>{address}</Text>
                    <Text style={styles.small.text}>
                        <Text style={{ color: COLOR.user.primaryShade[200] }}>
                            {deposit}
                        </Text>{' '}
                        deposit
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};
function RoomInfo (props) {
    const {
        type,
        name,
        price,
        address,
        numOfRooms,
        numOfPeople,
        deposit,
        service,
        onPress
    } = props;
    return (
        <Background style={styles.container}>
            {type === 'normal' ? (
                <NormalRoomInfo
                    name={name}
                    price={price}
                    address={address}
                    numOfRooms={numOfRooms}
                    numOfPeople={numOfPeople}
                    deposit={deposit}
                    service={service}
                    onPress={onPress}
                />
            ) : (
                <SmallRoomInfo
                    name={name}
                    price={price}
                    address={address}
                    deposit={deposit}
                    onPress={onPress}
                />
            )}
        </Background>
    );
};
const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1
  },

  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5
    // color: COLOR.common.darkGrey
  },
  normal: {
    image: {
      height: 200,
      backgroundColor: COLOR.common.grey
    },
    text: {
      color: COLOR.common.darkGrey,
      paddingRight: 10,
      fontSize: 13
    },
    info: {
      padding: 10
    },
    title: {
      color: COLOR.common.darkGrey,
      fontWeight: 600,
      fontSize: 20,
      paddingBottom: 3
    },

    price: {
      fontWeight: "bold",
      color: COLOR.user.primaryShade[200]
    },
    address: {
      fontSize: 13,
      color: COLOR.user.primaryShade[200]
    },
    serviceItems: {
      backgroundColor: COLOR.common.grey,
      padding: 5,
      paddingLeft: 15,
      borderRadius: 50,
      marginRight: 5
    }
  },
  small: {
    image: {
      height: "100%",
      width: 80,
      backgroundColor: COLOR.common.grey
    },
    info: {
      flex: 1,
      padding: 10
    },
    title: {
      fontSize: 12,
      fontWeight: 500
    },
    text: {
      fontSize: 10,
      padding: 3,
      color: COLOR.common.darkGrey
    }
  }
});
export default RoomInfo;
