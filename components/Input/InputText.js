import {TextInput, Text, View, StyleSheet} from 'react-native'
import {useState} from 'react';

function InputText(props) {
    const [input, setInput] = useState(props.value);
    function inputHandler(enteredText) {
        setInput(enteredText);
        props.onChangeText(enteredText);
    }
    return (
        <View>
            <View style={styles.container}>
                <TextInput 
                    value = {input} 
                    secureTextEntry={props.isSecure} 
                    placeholder={props.name} 
                    style={styles.input} 
                    onChangeText={inputHandler}  
                    editable={props.editable}
                />
            </View>

        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 0.18,
        borderColor: 'grey',
        borderRadius: 5,
        margin: 10,
        marginLeft: 25,
        marginRight: 25
    },
    input: {
      margin: 6,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15,
    },
    text: {
		fontWeight: 'bold',
		marginLeft: 27,
	},
    
  });
export default InputText;
