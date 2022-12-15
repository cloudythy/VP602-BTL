import React from 'react';
import { Pressable, Text, StyleSheet, Image, View } from 'react-native';
import { COLOR } from '../../constants';
import Background from '../Background';

const HomeScreenButton = (props) => {
    const { image, name, imageStyle, onPress } = props;
    const pressHandler = () => {
        onPress();
    };
    return (
        <Background style={{ width: 179 }}>
            <Pressable style={styles.container} onPress={pressHandler}>
                <View style={styles.image}>
                    {image}
                </View>
                <Text style={styles.text}>
                    {name}
                </Text>
            </Pressable>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 169,
        height: 190,
        backgroundColor: 'white',
        borderRadius: 20
    },
    image: {
        lignItems: 'center',
		justifyContent: 'center',
        height: 154,
        paddingLeft: '15%',
    },
    text: {
        paddingLeft: '10%',
        color: '#87670E'
    }
});
export default HomeScreenButton;
