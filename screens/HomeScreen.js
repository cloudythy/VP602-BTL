import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Search from '../components/Input/Search';
import RoomInfo from '../components/ComplexComponent/Room/RoomInfo';
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Search/>
            <ScrollView>
                <RoomInfo
                    type = "normal"
                    name = "NewTower"
                    price = "3.000.000"
                    address = "Hocmon"
                    numOfRooms = "3"
                    numOfPeople = "4"
                    deposit = "100"
    

                />
                <RoomInfo
                    type = "normal"
                    name = "NewTower"
                    price = "3.000.000"
                    address = "Hocmon"
                    numOfRooms = "3"
                    numOfPeople = "4"
                    deposit = "100"
    

                />
                <RoomInfo
                    type = "normal"
                    name = "NewTower"
                    price = "3.000.000"
                    address = "Hocmon"
                    numOfRooms = "3"
                    numOfPeople = "4"
                    deposit = "100"
    

                />
                <RoomInfo
                    type = "normal"
                    name = "NewTower"
                    price = "3.000.000"
                    address = "Hocmon"
                    numOfRooms = "3"
                    numOfPeople = "4"
                    deposit = "100"
    

                />
                
                    

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
