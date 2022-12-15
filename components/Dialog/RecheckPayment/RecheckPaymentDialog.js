import React from 'react';
import { Pressable, Text, StyleSheet, Image, View } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../../Background';
import CustomButton from '../../Button/CustomButton';
import PaymentOption from '../../Button/PaymentOptions';
import RoomInfo from '../../ComplexComponent/Room/RoomInfo';
import TenantInfo from '../ComplexComponent/TenantInfo';
import Dialog from '../Dialog';
import { ROLES } from '../../../constants';

const RecheckPaymentDialog = props => {
    const { onOk, onCancel, roomInfo, tenantInfoList, totalBill } = props;
    const { roomName, price, address, deposit, numOfPeople } = roomInfo;
    const { tenantName, phone, role} = tenantInfo;
    return (
        <Dialog
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
                role={role}
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
        </Dialog>
    );
};
const styles = StyleSheet.create({
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
