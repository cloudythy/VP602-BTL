import {Text, View, StyleSheet} from 'react-native';
import RoomDetail from '../../components/ComplexComponent/Room/RoomDetail';

export default function RoomDetailScreen(){
    return (
        <View>
            <RoomDetail
            name = "New tower" 
            type = "B-class"
            price= "3000000" 
            address ="Hocmon" 
            numOfBedRooms = "3" 
            numOfPeople = "4" 
            deposit = "1000000" 
            description = "abcde"
            rules = "nothing"
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