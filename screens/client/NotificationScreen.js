import { View, Text, StyleSheet, Scrollable } from 'react-native';
import Search from '../../components/Input/Search';
import LatePaymentNotification from '../../components/ComplexComponent/LatePaymentNotification';

export default function NotificationScreen() {
    return (
        <View>
            <Search/>
            <LatePaymentNotification
                time='300'
                date = '123'
            />
        </View>
    )
}