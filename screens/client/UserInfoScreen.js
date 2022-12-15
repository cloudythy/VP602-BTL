import {View, Image, StyleSheet, Text} from 'react-native';
import CustomButton from '../../components/Button/CustomButton';
export default function UserInfoScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../../images/ava.jpg')} style={styles.image} scale = 'scale'/>
            <Text style={styles.text}>
                Ngô Diễm Quỳnh
            </Text>
            <CustomButton type = 'neutral' size='big' title='Edit information'/>
            <CustomButton type = 'neutral' size='big' title='Log Out'/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '30%',
        height: '15%',
        borderRadius: '150%',
        marginTop: '30%'
    },
    container: {
        flex: 1, 
        alignItems: 'center',
    },
    text: {
        marginTop: '6%',
        fontSize: 20,
        fontWeight: 'bold'

    }
})