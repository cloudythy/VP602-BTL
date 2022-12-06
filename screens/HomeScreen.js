import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/Button/CustomButton';
export default function HomeScreen() {
    return <View style={styles.container}>{<CustomButton />}</View>;
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
});
