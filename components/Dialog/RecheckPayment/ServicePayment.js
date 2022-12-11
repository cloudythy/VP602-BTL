import React from 'react';
import { Pressable, Text, StyleSheet, Image, View } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../../Background';
import RoomInfo from '../../ComplexComponent/Room/RoomInfo';
import RecheckPaymentDialog from './RecheckPaymentDialog';
import TenantInfo from '../../ComplexComponent/TenantInfo';
import ServiceBill from '../../ComplexComponent/ServiceBill';

const ServicePayment = props => {
    const { time, billInfo, onOk, onCancel } = props;

    return (
        <RecheckPaymentDialog
            onOk={onOk}
            onCancel={onCancel}
            totalBill={billInfo.fee}>
            <ServiceBill
                time={time}
                billInfo={billInfo}
            />
        </RecheckPaymentDialog>
    );
};
const styles = StyleSheet.create({});
export default ServicePayment;
