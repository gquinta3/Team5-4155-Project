import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, Button } from 'react-native';

function LogIn(props) {
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
        <View style={styles.infor}>
            <Text>Email Address:</Text>
            <TextInput
                style={styles.input}
                placeholder='abc@gmail.com' />
            <Text>Password:</Text>
            <TextInput
                style={styles.input}/>
        </View>

        <View style={styles.button}>
            <Button
                title="Log In"
                color= "darkgrey"
                onPress={() => console.log("Button tapped")}
            />
        </View>

        <View>
            <Text>Forgot Password</Text>
        </View>
        
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

    infor: {
        position: "absolute",
        top: 200,
        left: 50
    },

    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 250
    },

})

export default LogIn;