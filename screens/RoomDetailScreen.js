import {Text, View, StyleSheet} from 'react-native';
import RoomDetail from '../components/ComplexComponent/Room/RoomDetail';
import RecheckPaymentDialog from '../components/Dialog/RecheckPayment/RecheckPaymentDialog';
import {useState} from 'react';

export default function RoomDetailScreen(props){
    const roomInfo = {
        roomName: "Newww",
        price: 4000000,
        address: "HCM",
        deposit: 1000000,
        numOfPeople: 3
      };
    const tenantInfo = {
        tenantName: "Nguyen Mai Thy",
        phone: "012345678"
    };
    const billInfo = {
        type: "Water",
        value: "50 cubic meter",
        fee: "100000"
    };
    const [onModalVisible, setOnModalVisible] = useState(false);
    function confirmHandler() {

    }
    return (
        <View>
            <RoomDetail
                name = {props.route.params.room.buildingName}
                price= {props.route.params.room.pricePerMonth} 
                address = {props.route.params.room.address} 
                numOfRooms = {props.route.params.room.numOfBedrooms}
                numOfPeople = {props.route.params.room.capacity}
                deposit = "1000000" 
                description = "Beautiful view with amazing accomodation"
                onRegister={() => setOnModalVisible(true)}
            />
            <RecheckPaymentDialog 
                roomInfo={roomInfo}
                onVisible={onModalVisible}
                onCancel={() => setOnModalVisible(false)}
                onConfirm = {confirmHandler}
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