import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    FlatList,
    SafeAreaView
} from 'react-native';

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
      historyBox: {
        backgroundColor: "white",
        width: "80%",
        height: "90%",
        marginBottom: 5,
        borderStyle: "solid",
        borderRadius: 25,
        borderWidth: 5,
        borderColor: "black",
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
      },
      historyItem: {
        fontSize: 40,
        textAlign: "center"
      }
});

const HistoryScreen: () => React$Node = ({ route, navigation }) => {
    const navHome = () => {
        navigation.navigate("Home");
    }
    const Item: () => React$Node = ({ item }) => {
        return (
            <View >
                <Text style={styles.historyItem}>{item}</Text>
            </View>
        );
    }
    return (
        <View style={styles.main}>
            <ImageBackground style={styles.backgroundImg} source={require("../assets/images/background.jpg")}>
                <SafeAreaView style={styles.historyBox}>
                    <FlatList
                        data={route.params.history}
                        renderItem={Item}
                        keyExtractor={(x, i) => i.toString()}
                    />
                </SafeAreaView>
                <TouchableOpacity style={styles.button} onPress={navHome}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

export default HistoryScreen;