import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        height: 80,
        width: 80,
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
    opButtons: {
        flexDirection: "column",
        height: "90%",
    },
    opBtnGroup: {
        flexDirection: "row"
    }
});

const OperandButtons: () => React$Node = (props) => {
    const { operButton, clearCalc, equalBtn } = props;
    return (
        <View style={styles.opButtons}>

            <View style={styles.opBtnGroup}>
                <TouchableOpacity style={styles.button} onPress={() => operButton("+")}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => operButton("-")}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.opBtnGroup}>
                <TouchableOpacity style={styles.button} onPress={() => operButton("x")}>
                    <Text style={styles.buttonText}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => operButton("/")}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.opBtnGroup}>
                <TouchableOpacity style={styles.button} onPress={() => operButton("%")}>
                    <Text style={styles.buttonText}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => operButton("^")}>
                    <Text style={styles.buttonText}>^</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.opBtnGroup}> 
                <TouchableOpacity style={styles.button} onPress={clearCalc}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={equalBtn}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OperandButtons;