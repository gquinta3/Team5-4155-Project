import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, Button } from 'react-native';

function Quiz(props) {
    return (
        <View style={styles.container}> 
        <Image 
            resizeMode="contain"
            style={styles.arrow} 
            source={require("../assets/backArrow.png")} />
        <Image 
            resizeMode="contain"
            style={styles.icon} 
            source={require("../assets/icon2.png")} />
        <Image 
            resizeMode="contain"
            style={styles.logOut} 
            source={require("../assets/logOut.png")} />
        <View>
            <Text style={styles.petquiz}>PET QUIZ</Text>
        </View>

        <View>
            <Text>PLACE</Text>
        </View>

        <Image 
            resizeMode="contain"
            style={styles.icon} 
            source={require("place.png")} />

        <Image 
            resizeMode="contain"
            style={styles.icon} 
            source={require("Exercise.png")} />

        <Image 
            resizeMode="contain"
            style={styles.icon} 
            source={require("time.png")} />

        <Image 
            resizeMode="contain"
            style={styles.icon} 
            source={require("spend.png")} />

        <Image 
            resizeMode="contain"
            style={styles.icon} 
            source={require("knowledge.png")} />

        
    </View>
        
    );
}

const styles = StyleSheet.create({
    arrow: {
        width: "10%",
        height: "10%",
        position: "absolute",
        top: 40,
        left: 20,
    },

    button: {
        width: 200,
        height: 50,
        position: "absolute",
        top: 400,
        left: 100
    },

    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    icon: {
        width: "10%",
        height: "10%",
        position: "absolute",
        top: 40,
        left: 175
    },

    logOut: {
        width: "10%",
        height: "10%",
        position: "absolute",
        top: 40,
        right: 20,
    },

    space: {
        width: 20,
        height: 20
    }

})

export default Quiz;
