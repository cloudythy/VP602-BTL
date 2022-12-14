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
            <Text style={styles.text}>Xin chào, Ngô Diễm Quỳnh </Text>
            
            <Background>
                <View style={styles.rowButton}>
                    <HomeScreenButton name='My room' image={image[0]} onPress={()=>console.log("abc")}/>
                    <HomeScreenButton name='My electric&water' image={image[1]}  onPress={()=>console.log("abcd")}/>
                </View>
                <View style={styles.rowButton}>
                    <HomeScreenButton name='My service'image={image[2]}  onPress={()=>console.log("abce")}/>
                    <HomeScreenButton name='My bill' image={image[3]}  onPress={()=>console.log("abcf")}/>
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
    },
    text: {
        marginTop: '40%',
        marginLeft: '10%',
        fontSize: 18,
    }
});
