import { View, Text, StyleSheet, Image } from 'react-native';
import HomeScreenButton from '../components/Button/HomeScreenButton';
import Search from '../components/Input/Search';
import Background from '../components/Background';
export default function WelcomeScreen() {
    let image = [
        <Image source={require('../images/Home/MyRoomBtn.png')} style={styles.image} scale = 'scale'/>,
        <Image source={require('../images/Home/EWBtn.png')} style={styles.image} scale = 'scale'/>,
        <Image source={require('../images/Home/MyServiceBtn.png')} style={styles.image} scale = 'scale'/>,
        <Image source={require('../images/Home/MyBillBtn.png')} style={styles.image} scale = 'scale'/>
    ]
    return (
        <View>
            {/* <View style={styles.container}>
                <Image source={require('../images/Logo.png')} style={styles.image} scale = 'scale'/>
            </View> */}
            
            <Background>
                <View style={styles.rowButton}>
                    <HomeScreenButton name='My room' image={image[0]}/>
                    <HomeScreenButton name='My electric&water' image={image[1]}/>
                </View>
                <View style={styles.rowButton}>
                    <HomeScreenButton name='My service'image={image[2]}/>
                    <HomeScreenButton name='My bill' image={image[3]}/>
                </View>
                
                
            </Background>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: '20%',
        paddingLeft: '25%'
    },
    image: {
        width: '70%',
        height: '70%',
    },
    rowButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: '30%',
    }
});
