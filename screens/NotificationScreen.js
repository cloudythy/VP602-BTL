import { View, Text, StyleSheet, Scrollable } from 'react-native';
import Search from '../components/Input/Search';
import LatePaymentNotification from '../components/ComplexComponent/LatePaymentNotification';

export default function NotificationScreen() {
    const notificationList = [
        {
            type: 'late payment',
            time: '12:00',
            date: '16/12/2022',
        },
        {
            type: 'payment succeed',
            time: '12:00',
            date: '16/12/2022',
        },
        {
            type: 'new bill',
            time: '12:00',
            date: '16/12/2022',
        },
        {
            type: 'price changed',
            time: '12:00',
            date: '16/12/2022',
        },
    ];
    return (
        <View>
            <Search />
            {notificationList.map(item => (
                <LatePaymentNotification
                    time={item.time}
                    date={item.date}
                    type={item.type}
                />
            ))}
        </View>
    );
}