import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Text
} from 'react-native';

import calc from '../api/calc';
import { NumberBox, NumberButtons, OperandButtons } from '../components';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column"
      },
      backgroundImg: {
        height: "100%",
        width: "100%",
        position: "relative",
        resizeMode: "cover",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonBox: {
        paddingTop: 20,
        paddingRight: 20,
        flexDirection: "row",
        justifyContent: "center"
      },
      button: {
        justifyContent: "center",
        padding: 5,
        width: "80%",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "teal"
      },
      buttonText: {
        textAlign: "center",
        fontSize: 25
      }
});

const HomeScreen: () => React$Node = ({ navigation }) => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operand, setOperand] = useState("");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState([]);
    const numButton = (num) => {
        setResult("");
        if (operand === "") setNum1(num1 + num)
        else setNum2(num2 + num)
    }
    const operButton = (oper) => {
        if (num1 !== "") setOperand(oper)
    }
    const equalBtn = () => {
        const answer = calc(parseInt(num1), parseInt(num2), operand)
        setHistory([...history, `${num1} ${operand} ${num2} = ${answer}`])
        setNum1("");
        setNum2("");
        setOperand("");
        setResult(answer);
    }
    const clearCalc = () => {
        setNum1("");
        setNum2("");
        setOperand("");
        setResult("");
    }
    const navHistory = () => {
        navigation.navigate("History", {
            history: history
        });
    }
    return (
        <>
            <View style={styles.main}>
                <ImageBackground style={styles.backgroundImg} source={require("../assets/images/background.jpg")}>
                    <NumberBox num1={num1} num2={num2} operand={operand} result={result} />
                    <View style={styles.buttonBox}>
                        <NumberButtons numButton={numButton} />
                        <OperandButtons operButton={operButton} clearCalc={clearCalc} equalBtn={equalBtn} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={navHistory}>
                        <Text style={styles.buttonText}>View History</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </>
    );
};

export default HomeScreen;