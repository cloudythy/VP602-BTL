import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/Button/CustomButton';
import Search from '../components/Input/Search';
export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Search />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 100,
    },
});
