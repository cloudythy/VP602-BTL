import React from 'react';
import {StyleSheet} from 'react-native';
import RecheckPaymentDialog from './RecheckPaymentDialog';
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
