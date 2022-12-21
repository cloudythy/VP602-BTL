import React from 'react';
import { Pressable, Text, StyleSheet, Image, View, Modal } from 'react-native';
import { COLOR } from '../../../constants';
import Background from '../../Background';
import CustomButton from '../../Button/CustomButton';
import PaymentOption from '../../Button/PaymentOptions';
import RoomInfo from '../../ComplexComponent/Room/RoomInfo';
// import TenantInfo from '../../ComplexComponent/TenantInfo';
import Dialog from '../Dialog';
export default function RecheckPaymentDialog(props) {
    return (
        <View style={styles.modalContainer}>
            <Modal
                animationType='slide'
                visible = {props.onVisible}
                transparent={true}
            >
                <View style={styles.modal}>
                    <Text style={styles.text}> Confirm this room? </Text>

                    <View style={styles.button}>
                        <CustomButton onPress={props.onCancel} title="Cancel"/>
                        <CustomButton onPress={props.onConfirm}type="important" size="small" title="Confirm"/>
                    </View>
                </View>
                
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: '20%',
        flex: 1, 
    },
    modal: {
        marginTop: '175%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'grey',
        padding: 30,
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
		fontWeight: 'bold',
    },
    header: {
		flexDirection: 'row',
	},

	cancelButton: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: 'white',
		marginTop: 5,
        marginLeft: '8%'
	},

	cancelButtonText: {
		paddingVertical:10,
		paddingHorizontal: 25,
		fontSize: 12,
		fontWeight: 'bold',
        color: '#264F7B'
	},
    line: {
        width: '65%',
        alignSelf: 'center',
        height: 0.3,
        backgroundColor: 'grey',
        marginVertical: 5
    },
    content: {
        marginTop: 15,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
