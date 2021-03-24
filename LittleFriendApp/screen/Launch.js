import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';

function Launch(props) {
    return (
        <SafeAreaView style={styles.container}>    
            <Image source={require("../assets/AppIcon.png")} />

            <View style={styles.button}>
                <Button
                    title="Sign up"
                    color= "darkgrey"
                    onPress={() => console.log("Button tapped")}
                />
            </View>
            
            <View style={styles.button}>
                <Button
                    title="Log in"
                    color= "darkgrey"
                    onPress={() => console.log("Button tapped")}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    
    button: {
        textAlign:"center",
        paddingVertical: 10,
        width: 200,
        height: 50
    },
})

export default Launch;