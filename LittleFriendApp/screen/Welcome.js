import React from 'react';
import { Image, StyleSheet, View, Button, Text } from 'react-native';

function Welcome(props) {
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
                <Text style={styles.welcome}>WELCOME</Text>
            </View> 
            <Image 
                resizeMode="contain"
                style={styles.account} 
                source={require("../assets/accountIcon.jpeg")} />   
            <View>
                <Button
                    style={styles.button}
                    title="Ready to take quiz"
                    color= "darkgrey"
                    onPress={() => console.log("Button tapped")}
                />
                <View style={styles.space} />
                <Button
                    style={styles.button}
                    title="Pet Profile"
                    color= "darkgrey"
                    onPress={() => console.log("Button tapped")}
                />
                <View style={styles.space} />
                <Button
                    style={styles.button}
                    title="Pet Library"
                    color= "darkgrey"
                    onPress={() => console.log("Button tapped")}
                />
                <View style={styles.space} />
                <Button
                    style={styles.button}
                    title="Pet Discussion"
                    color= "darkgrey"
                    onPress={() => console.log("Button tapped")}
                />
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    account: {
        width: "50%",
        height: "50%",
        position: "relative",
        top: -20,
        left: 8,
    },

    arrow: {
        width: "10%",
        height: "10%",
        position: "absolute",
        top: 40,
        left: 20,
    },

    button: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 10
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
    },

    welcome: {
        position: "absolute",
        fontSize: 40,
        fontWeight: "bold",
        top: 10,
        left: -90
    }

});

export default Welcome;