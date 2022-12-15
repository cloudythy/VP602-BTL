import {Text, View, StyleSheet} from 'react-native';
import RoomDetail from '../components/ComplexComponent/Room/RoomDetail';
import RecheckPaymentDialog from '../components/Dialog/RecheckPayment/RecheckPaymentDialog';
import {useState} from 'react';

export default function RoomDetailScreen(){
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
                name = "New tower" 
                price= "3000000" 
                address ="Hocmon" 
                numOfRooms = "3" 
                numOfPeople = "4" 
                deposit = "1000000" 
                description = "abcde"
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