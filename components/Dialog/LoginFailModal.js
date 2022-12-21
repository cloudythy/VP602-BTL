//<ion-icon name="checkmark-outline"></ion-icon>
import {View, Modal, Text, Pressable, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useState} from 'react';

export default function LoginFailModal(props) {
    return (
        <View style={styles.modalContainer}>
            <Modal
                animationType='fade'
                visible = {props.onVisible}
                transparent={true}
            >
                <View style={styles.modal}>
                    <Text style={styles.text}>Tên đăng nhập hoặc mật khẩu không đúng!</Text>
                    <Text style={styles.smallText}>Vui lòng đăng nhập lại.</Text>
                    
                </View>
                
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        jusifyContent: "center",
        alignItems: "center",
        flex: 1, 
    },
    modal: {
        marginHorizontal: 40,
        marginTop: 260,
        backgroundColor: 'white',
        borderRadius: 20,
        jusifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderColor: 'white',
        padding: 30,
    },
    text: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
		fontWeight: 'bold',
        color: "red"
    },
    smallText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 15,
    },
    buttonContainer: {
        marginTop:10,
		justifyContent: 'space-evenly',
		flexDirection: 'row',
	},
})