import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Search from '../components/Input/Search';
import RoomInfo from '../components/ComplexComponent/Room/RoomInfo';
export default function ListOfRoom({navigation}) {
    function pressHandler() {
        console.log("abc");
        navigation.navigate("Room Detail");
    }
    const roomList = [
        {
            buildingName: 'Bcons',
            name: '',
            address: 'Hocmon',
            status: '',
            type: '',
            floor: '',
            pricePerMonth: '3.000.000',
            numOfBedrooms: 3,
            capacity: 4,
        },
        {
            buildingName: 'New Tower 2',
            name: '',
            address: 'Hocmon',
            status: '',
            type: '',
            floor: '',
            pricePerMonth: '3.000.000',
            numOfBedrooms: 1,
            capacity: 2,
        },
        {
            buildingName: 'Idico',
            name: '',
            address: 'Hocmon',
            status: '',
            type: '',
            floor: '',
            pricePerMonth: '2.000.000',
            numOfBedrooms: 3,
            capacity: 4,
        },
    ];
    return (
        <View style={styles.container}>
            <Search/>
            <ScrollView>
                {roomList.map(room => {
                    console.log("abc")
                    return(
                        <RoomInfo
                        type="normal"
                        name={room.buildingName}
                        price={room.pricePerMonth}
                        address={room.address}
                        numOfRooms={room.numOfBedrooms}
                        numOfPeople={room.capacity}
                        deposit="100"
                        onPress={() => navigation.navigate('Room Detail', {room: room})}
                    />
                    )
                    
                })}
                    

            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0000000',
        padding: 30,
    },
});