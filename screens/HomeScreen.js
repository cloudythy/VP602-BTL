import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/Button/CustomButton';
import InDeNumber from '../components/Input/InDeNumber';
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <InDeNumber />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0000000',
        padding: 30,
    },
});
