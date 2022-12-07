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
                <View style={{ height: 154 }}>
                    <Image
                        source={require(`../../images/${image}`)}
                        style={([styles.image], { imageStyle })}
                    />
                </View>
                <Text style={{ color: COLOR.user.primaryShade[300] }}>
                    {name}
                </Text>
            </Pressable>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 179,
        height: 193,
    },
    image: {
        paddingLeft: 5,
        paddingRight: 5,
    },
});
export default HomeScreenButton;
