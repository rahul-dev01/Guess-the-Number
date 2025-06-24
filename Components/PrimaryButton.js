import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const PrimaryButton = ({ name , onPressFunction}) => {
    return (
        <Pressable
            onPress={() => {
                onPressFunction();
            }}
            android_ripple={{ color: "white" }}
            style={({ pressed }) =>
                pressed ? [styles.buttonStyle, styles.pressed] : styles.button
            }

            >
            <Text style={styles.buttonText}>{name}</Text>
        </Pressable>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: 'red',
        paddingVertical: 12,
        marginHorizontal: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
