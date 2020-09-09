import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    numBorder: {
        borderStyle: "solid",
        borderRadius: 25,
        borderWidth: 5,
        borderColor: "black",
        backgroundColor: "white",
        width: "90%"
    },
    numBox: {
        fontSize: 40,
        textAlign: "center",
    }
});

const NumberBox: () => React$Node = (props) => {
    const { num1, operand, num2, result } = props;
    return (
        <View style={styles.numBorder}>
            <Text style={styles.numBox}>{(result === "") ? `${num1} ${operand} ${num2}` : result}</Text>
        </View>
    );
};

export default NumberBox;