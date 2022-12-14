import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import CustomButton from '../../Button/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import { COLOR } from "../../../constants";

export default function RoomTypeDetail(props){
    const { name, price, address, numOfBedRoom, numOfPeople, numOfRoom, numOfRentedRoom, numOfAvailableRoom, numOfResgitration, deposit, roomList, description, rules } =
        props;
    return (
        <View >
            <ScrollView contentContainerStyle={styles.container}>
                <View style = {styles.imageContainer}>
                    <Image source={require('../../../images/Room/RoomDetail.png')}/>
                </View>
                <View >
                    <View style={styles.line1}>
                    <Text style={styles.normal.title}>{name}{' - '}{type}</Text>
                        <Text>
                            <Text style={styles.normal.price}>{price}</Text>{' '}
                            VND/month
                        </Text>
                    </View>
                    <View style={styles.line1}>
                        <Ionicons name = "location" size = {20} color = "#CDA027" />
                        <Text style={styles.normal.address}>{address}</Text>
                        <Text>
                            <Text style={styles.normal.price}>{deposit}</Text>{' '}
                            deposit
                        </Text>
                    </View>
                    <View style={styles.line1}>
                        <Ionicons name = "people" size = {20} color = "#CDA027" />
                        <Text style={styles.normal.text}>
                            {numOfPeople}{' '}
                            {numOfPeople > 1 ? 'persons' : 'person'}
                        </Text>
                        <Ionicons name = "bed" size = {20} color = "#CDA027" />
                        <Text style={styles.normal.text}>
                            {numOfBedRoom}{' '}
                            {numOfBedRoom > 1 ? 'bedrooms' : 'bedroom'}
                        </Text>
                    </View>
                    <View style={styles.line1}>
                        <Text style={styles.normal.text}>
                            {numOfRoom}{' '}
                            {numOfRoom > 1 ? 'rooms' : 'room'}
                        </Text>
                        <Text style={styles.normal.text}>
                            {numOfRentedRoom}{' '}
                            {'rented out'}
                        </Text>
                        <Text style={styles.normal.text}>
                            {numOfAvailableRoom}{' '}
                            {'available'}
                        </Text>
                    </View>
                    <View style= {styles.line2}>
                        <Text style = {styles.normal.text}>
                            {numOfResgitration}{' '}
                            {numOfResgitration > 1 ? 'registrations' : 'registration'}
                        </Text>
                    </View>
                    <Text style={styles.normal.header}>Room List</Text>
                    <View style = {styles.container}>
                        {roomList.map((room) => {
                            return (
                                <CustomButton
                                    type = {room.registed == true ? 'admin' : 'neutral'}
                                    shape = "round"
                                    title = {room.name}
                                />
                            )
                        })}
                    </View>
                    <Text style={styles.normal.header}>Description</Text>
                    <Text style={styles.normal.text}>{description}</Text>
                    <Text style={styles.normal.header}>Preview</Text>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{paddingRight: '60%'}}
                    >
                        <Image source={require('../../../images/Room/RoomDetail.png')} style={styles.normal.image}/>
                        <Image source={require('../../../images/Room/RoomDetail.png')} style={styles.normal.image}/>
                        
                    </ScrollView>
                    <Text style={styles.normal.header}>Rules</Text>
                    <Text style={styles.normal.text}>{rules}</Text>
                </View>               
            </ScrollView>
        </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        marginRight: '5%',
        paddingBottom: 250,
    },
    map: {
        width: '100%',
        height: '30%',
      },
    imageContainer: {
        justifyContent: 'center',
        marginTop: '5%'
    },
    line1: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2%'
    },
    line2: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2%',
        backgroundColor: COLOR.admin.primary,
        color: '#ffffff'
    },
    normal: {
        imageContainer: {
            // paddingRight: '5%'
        },
        image: {
            width: '30%',
            height: '40%',
            borderRadius: '10%',
        },
        text: {
            // color: COLOR.common.darkGrey,
            paddingRight: 10,
            fontSize: 13,
        },
        title: {
            color: '#6D7578',
            fontSize: 20,
            fontWeight: 'bold'
        },
        price: {
            fontWeight: 'bold',
            color: '#CDA027',
            paddingLeft: 20,
            fontSize: 18
        },
        address: {
            fontSize: 13,
            // color: COLOR.user.primaryShade[200],
        },
        header: {
            fontSize: 18,
        }
    }

    //     price: {
    //         fontWeight: 'bold',
    //         color: COLOR.user.primaryShade[200],
    //     },
    //     address: {
    //         fontSize: 13,
    //         color: COLOR.user.primaryShade[200],
    //     },
    //     serviceItems: {
    //         backgroundColor: COLOR.common.grey,
    //         padding: 5,
    //         paddingLeft: 15,
    //         borderRadius: 50,
    //         marginRight: 5,
    //     },
    // },
    // small: {
    //     image: {
    //         height: 80,
    //         width: 80,
    //         backgroundColor: COLOR.common.grey,
    //     },
    //     info: {
    //         flex: 1,
    //         padding: 10,
    //     },
    //     title: {
    //         fontSize: 12,
    //         fontWeight: 500,
    //     },
    //     text: {
    //         fontSize: 10,
    //         padding: 3,
    //         color: COLOR.common.darkGrey,
    //     },
    // },
})