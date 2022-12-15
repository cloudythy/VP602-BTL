import {View, Text, Image, StyleSheet} from 'react-native';
import CustomButton from '../components/Button/CustomButton'
export default function GetStartedScreen({navigation}) {
    return (
        <View style = {styles.container}>
            <View style={styles.container}>
                <Image source={require('../images/GetStarted.png')} style={styles.image} scale = 'scale'/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>"You pick an apartment, we make it home.</Text>
                <Text  style={styles.text}>RAP here, wrap your life!"</Text>
            </View>
            <CustomButton 
                type='important' 
                title='Get Started' 
                size = 'medium'
                onPress={() => navigation.navigate("Login Screen")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '2%',
        marginHorizontal: '8%',
    },
    image: {
        width: '100%',
        height: '60%',
    },
    textContainer: {
        marginBottom: '10%',
        alignItems: "center"
    },
    text: {
        color: '#2753CD',
        fontSize: 16,
    }
})