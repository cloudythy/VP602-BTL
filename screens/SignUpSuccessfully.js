import {View, Text, Image, StyleSheet, Pressable} from 'react-native';


export default function SignUpSuccessfully({navigation}) {
    return (
        <View style={styles.container}>
            <Pressable onPress={()=>{navigation.navigate("Main Screen")}}>
                <Image source={require('../images/signupsuccessfully.png')} style={styles.image} scale = 'scale'/>
            </Pressable>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sign up successfully!</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Your account has been successfully created.</Text> 
                <Text style={styles.text}>Thank you for joining us.</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '20%',
        marginHorizontal: '10%',
    },
    image: {
        width: '100%',
        height: '70%',
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        color: '#CDA027',
        fontSize: 30,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '2%',
    },
    text: {
        color: '#2753CD',
        fontSize: 16,
    },

}); 