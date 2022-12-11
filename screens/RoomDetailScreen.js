import {Text, View, StyleSheet} from 'react-native';
import RoomDetail from '../components/ComplexComponent/Room/RoomDetail';

export default function RoomDetailScreen(){
    return (
        <View>
            <RoomDetail
            name = "New tower" 
            price= "3000000" 
            address ="Hocmon" 
            numOfRooms = "3" 
            numOfPeople = "4" 
            deposit = "1000000" 
            description = "abcde"/>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: '70%',
        height: '70%',
    },
})