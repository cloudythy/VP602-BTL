import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Search from '.../components/Input/Search';
import RoomInfoManageMent from '.../components/ComplexComponent/Room/RoomInfoManageMent';
import CustomButton from '../../components/Button/CustomButton';
export default function ListOfRoomScreen({navigation}) {
    const pressHandler = () => {
        navigation.navigate("Room detail");
        console.log("abc");
    };
    return (
        <View style={styles.container}>
            <Search/>
            <ScrollView>
                <RoomInfoManageMent
                    name = "New tower, B-class"
                    price = "4.000.000"
                    address = "123 To Ky, Hoc Mon, HCMC"
                    deposit = "1.000.000"
                    numOfRooms = "10"
                    rented = "4"
                    available = "6"
                />
                <RoomInfoManageMent
                    name = "New tower, B-class"
                    price = "4.000.000"
                    address = "123 To Ky, Hoc Mon, HCMC"
                    deposit = "1.000.000"
                    numOfRooms = "10"
                    rented = "4"
                    available = "6"
                />
                <RoomInfoManageMent
                    name = "New tower, B-class"
                    price = "4.000.000"
                    address = "123 To Ky, Hoc Mon, HCMC"
                    deposit = "1.000.000"
                    numOfRooms = "10"
                    rented = "4"
                    available = "6"
                />
                <RoomInfoManageMent
                    name = "New tower, B-class"
                    price = "4.000.000"
                    address = "123 To Ky, Hoc Mon, HCMC"
                    deposit = "1.000.000"
                    numOfRooms = "10"
                    rented = "4"
                    available = "6"
                />
                <RoomInfoManageMent
                    name = "New tower, B-class"
                    price = "4.000.000"
                    address = "123 To Ky, Hoc Mon, HCMC"
                    deposit = "1.000.000"
                    numOfRooms = "10"
                    rented = "4"
                    available = "6"
                />
                <RoomInfoManageMent
                    name = "New tower, B-class"
                    price = "4.000.000"
                    address = "123 To Ky, Hoc Mon, HCMC"
                    deposit = "1.000.000"
                    numOfRooms = "10"
                    rented = "4"
                    available = "6"
                />
                <RoomInfoManageMent
                    name = "New tower, B-class"
                    price = "4.000.000"
                    address = "123 To Ky, Hoc Mon, HCMC"
                    deposit = "1.000.000"
                    numOfRooms = "10"
                    rented = "4"
                    available = "6"
                />
                <RoomInfoManageMent
                    name = "New tower, B-class"
                    price = "4.000.000"
                    address = "123 To Ky, Hoc Mon, HCMC"
                    deposit = "1.000.000"
                    numOfRooms = "10"
                    rented = "4"
                    available = "6"
                />
                <RoomInfoManageMent
                    name = "New tower, B-class"
                    price = "4.000.000"
                    address = "123 To Ky, Hoc Mon, HCMC"
                    deposit = "1.000.000"
                    numOfRooms = "10"
                    rented = "4"
                    available = "6"
                />
            </ScrollView>
            <CustomButton
                size='big' 
                type='admin' 
                onPress={()=> console.log("Add room")}
                title = 'Add room'
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0000000',
        padding: 30,
    },
});
