import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    numButtons: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "60%"
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
    numBtnGroup: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center"
    }
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
            <View style={styles.numBtnGroup}>
                {numBtnArr.slice(0,3)}
            </View>
            <View style={styles.numBtnGroup}>
                {numBtnArr.slice(3,6)}
            </View>
            <View style={styles.numBtnGroup}>
                {numBtnArr.slice(6,9)}
            </View>
            {numBtnArr[9]}
        </View>
    );
};

export default NumberButtons;