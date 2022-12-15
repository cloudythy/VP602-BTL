import React from 'react';
import { Pressable, Text, StyleSheet, Image, View, Modal } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../../Background';
import CustomButton from '../../Button/CustomButton';
import PaymentOption from '../../Button/PaymentOptions';
import RoomInfo from '../../ComplexComponent/Room/RoomInfo';
// import TenantInfo from '../../ComplexComponent/TenantInfo';
import Dialog from '../Dialog';

const RecheckPaymentDialog = props => {
    const { onOk, onCancel, roomInfo, tenantInfo, totalBill } = props;
    const { roomName, price, address, deposit, numOfPeople } = roomInfo;
    // const { tenantName, phone } = tenantInfo;
    return (
        <Modal
            animationType='fade'
            visible = {props.onVisible}
        >
            <View style={styles.modal}>
            {/* <Dialog
                type="2 opt"
                user="user"
                onCancel={onCancel}
                onOk={onOk}
                cancelText="Cancel"
                okText="Confirm"
                style={{ padding: 20 }}>
                <Text style={styles.title}>Confirm</Text>
                <View style={styles.roomInfo}>
                    <RoomInfo
                        name={roomName}
                        price={price}
                        address={address}
                        deposit={deposit}
                    />
                </View>
                <Text style={{ marginTop: 5 }}>
                    Tenants (maximum {numOfPeople})
                </Text>
                <TenantInfo
                    name={tenantName}
                    phone={phone}
                />
                <Text style={{ marginTop: 10 }}>Payment method</Text>
                <View style={styles.payment}>
                    <PaymentOption type="momo" />
                    <PaymentOption type="zaloPay" />
                    <PaymentOption type="viettelPay" />
                </View>
                <View style={styles.totalBill}>
                    <Text>Total bill</Text>
                    <Text style={{ color: COLOR.user.primaryShade[300] }}>
                        {totalBill}
                    </Text>
                </View>
            </Dialog> */}
            <Text> New Tower </Text>
            <Text> Ngô Diễm Quỳnh </Text>

            <View style={styles.button}>
                <CustomButton onPress={props.onCancel} title="Cancel"/>
                <CustomButton onPress={props.onConfirm}type="important" size="small" title="Confirm"/>
            </View>
            </View>
        </Modal>
        
    );
};
const styles = StyleSheet.create({
    modal: {
        marginTop: '40%',
        marginHorizontal: '10%',
        backgroundColor: 'white',
        borderRadius: 20,
        jusifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderColor: 'grey',
        padding: 30,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 25,
    },
    roomInfo: {
        width: '100%',
    },
    payment: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalBill: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
    },
});
export default RecheckPaymentDialog;
