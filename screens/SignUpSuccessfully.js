import {View, Text, Image, StyleSheet, Pressable, Image} from 'react-native';


export default function SignUpSuccessfully() {
    return (
        <View style={styles.container}>
            <Pressable>
                <Image source={require('../images/signupsuccessfully.png')} style={styles.image} scale = 'scale'/>
            </Pressable>
            <View>
                <Text>Sign Up successfully</Text>
            </View>
            <View>
                <Text>Your account has been successfully created.</Text> 
                <Text>Thank you for joining us.</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '2%',
        marginHorizontal: '10%',
    },
    image: {
        width: '100%',
        height: '60%',
    },

}); 