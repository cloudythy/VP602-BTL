import {Text, View, StyleSheet} from 'react-native';
import RoomTypeDetail from '../../components/ComplexComponent/Room/RoomTypeDetail';

export default function RoomTypeDetailScreen(){
    return (
        <View>
            <RoomTypeDetail
                name = "New tower"
                type = "B-class"
                price = "3000000"
                address = "Hocmon"
                numOfBedRooms = "3"
                numOfPeople = "4"
                numOfRoom = "10"
                numOfRentedRoom = "4"
                numOfAvailableRoom = "6"
                numOfResgitration = "3"
                deposit = "1000000"
                roomList = " "
                description = "phong re lam thue di cam on"
                rules = "khong co luat gi ca"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: '70%',
        height: '70%',
    },
})