import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    numButtons: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "60%",
    },
    numButton: {
        justifyContent: "center",
        height: 70,
        width: 70,
        margin: 2,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "teal"
    },
    buttonText: {
        textAlign: "center",
        fontSize: 25
    },
});

const NumberButtons: () => React$Node = (props) => {
    const numBtnArr = [];
    for (let i = 0; i < 10; i++) {
        numBtnArr.push(
            <TouchableOpacity style={styles.numButton} key={i} onPress={() => props.numButton(i.toString())}>
                <Text style={styles.buttonText}>{i.toString()}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.numButtons}>
            {numBtnArr}
        </View>
    );
};

export default NumberButtons;