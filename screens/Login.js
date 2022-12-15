import {View, Text, Image, StyleSheet, Pressable, ScrollView, KeyboardAvoidingView} from 'react-native';
import CustomButton from '../components/Button/CustomButton';
import InputText from '../components/Input/InputText';
import {auth} from '../components/Http';
import {React, useState} from 'react'

export default function Login({navigation}) {
    const defaultUserInfo = {
        phonenumber: {
            value: "",
            isValid: true,
        },
        password: {
            value: "",
            isValid: true
        }
    }
    const [userInfo, setUserInfo] = useState(defaultUserInfo);
    async function submitHandler() {
        console.log("abc");
        const data = {
            phonenumber: userInfo.phonenumber.value,
            password: userInfo.password.value
        }
        setUserInfo(defaultUserInfo);
        console.log(data);
        const response = await auth(data);
        
        navigation.navigate("Main Screen");
    }
    function inputChangedHandler(inputIdentifier, enteredValue) {
        setUserInfo((currentInput) => {
          return {
            ...currentInput,
            [inputIdentifier]: { value: enteredValue, isValid: true },
          };
        });
      }
    return (
        <ScrollView>
        <KeyboardAvoidingView behavior="position">
            <View style = {styles.container}>
                {/* <View style={styles.imageContainer}>
                    <Image source={require('../images/Logo.png')} style={styles.image}/>
                </View> */}

                <InputText 
                    name = "phonenumber"
                    onChangeText={inputChangedHandler.bind(this, 'phonenumber')}
                />
                <InputText 
                    name = "password" 
                    isSecure={true}
                    onChangeText={inputChangedHandler.bind(this, 'password')}
                />
                <CustomButton 
                    type='important'  
                    title='Login' 
                    size = 'medium'
                    onPress={submitHandler}
                />
                <View style={styles.textContainer}>
                    <Text>Don't have an accounts.</Text>
                    <Pressable onPress={()=>{navigation.navigate("Sign Up")}}>
                        <Text style={styles.textPress}> Sign Up </Text>
                    </Pressable>
                    <Text>now</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '50%',
        marginHorizontal: '10%',
    },
    imageContainer: {
        marginLeft: '15%',
        justifyContent: 'center',
        textAlign: 'center',
    },
    image: {
        width: '80%',
        height: '60%',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5%',
        marginLeft: '10%'
    },
    text: {
        color: '#2753CD',
        fontSize: 16,
    },
    textPress:{
        color: '#FDC52B'
    }
})