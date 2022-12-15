import {View, Text, Image, StyleSheet, Pressable, KeyboardAvoidingView, ScrollView} from 'react-native';
import CustomButton from '../components/Button/CustomButton';
import InputText from '../components/Input/InputText';
import {signup} from '../components/Http';
import {React, useState} from 'react'
export default function SignUp({navigation}) {
    const defaultUserInfo = {
        fullname: {
            value: "",
            isValid: true,
        },
        phonenumber: {
            value: "",
            isValid: true,
        },
        username: {
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
        // const data = {
        //     fullname: userInfo.fullname.value,
        //     phonenumber: userInfo.phonenumber.value,
        //     username: userInfo.username.value,
        //     password: userInfo.password.value
        // }
        // setUserInfo(defaultUserInfo);
        // const response = await signup(signup);
        navigation.navigate("Sign Up Successfully");
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
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}> Sign Up </Text>
                    </View>
                    <InputText 
                        name = "fullname"
                        onChangeText={inputChangedHandler.bind(this, 'fullname')}
                    />
                    <InputText 
                        name = "phonenumber"
                        onChangeText={inputChangedHandler.bind(this, 'phonenumber')}
                    />
                    <InputText 
                        name = "username"
                        onChangeText={inputChangedHandler.bind(this, 'username')}
                    />
                    <InputText 
                        name = "password" 
                        onChangeText={inputChangedHandler.bind(this, 'password')}
                        isSecure={true}
                    />
                    <InputText 
                        name = "confirm password" 
                        isSecure={true}
                    />
                    <CustomButton 
                        type='important' 
                        title='Sign Up' 
                        size = 'medium'
                        onPress={submitHandler}
                    />
                    <View style={styles.textContainer}>
                    <Text>Already a member?</Text>
                    <Pressable onPress={()=>{navigation.navigate("Log In")}}>
                        <Text style={styles.textPress}> Login </Text>
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
        marginTop: '30%',
        marginHorizontal: '10%',
    },
    titleContainer: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    title: {
        color: '#2753CD',
        fontWeight: 'bold',
        fontSize: 30,
    },
    image: {
        width: '80%',
        height: '60%',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10%',
        marginLeft: '20%'
    },
    text: {
        color: '#2753CD',
        fontSize: 16,
    },
    textPress:{
        color: '#FDC52B'
    }
})