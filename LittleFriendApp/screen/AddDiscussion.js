import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
    
const AddDiscussion = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image 
                resizeMode="contain"
                style={styles.icon} 
                source={require("../assets/icon2.png")} />

            <Text style={styles.title}>ADD DISCUSSION</Text>

        <View style={styles.input1}>
                <Input   
                    label="Topic Title:                                         "
                    placeholder="Enter your Topic"
                    autoCapitalize="none"
                />
            </View>

        <View style={styles.input2}>
                <Input   
                    label="Content                                         "
                    placeholder="Enter topic content"
                    autoCapitalize="none"
                />
            </View>    

            
            <View style={styles.button}>
                <Button
                    title="Post Discussion"
                    color= '#ffffff'
                    onPress={() => console.log("Button tapped")}
                />
            </View>
             
        </View>
    );
}
 
    
const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: 570,
        textAlign:"center",
        backgroundColor: '#4169e1',
        padding: 10,
        borderRadius: 10,
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
        top: 10,
        left: 175
    },

    input1:{
        position: "absolute",
        top: 150,
        left: 50,
        borderWidth: 1,
        paddingVertical: 10,
        paddingRight: 20
    },

    input2:{
        position: "absolute",
        top: 280,
        left: 50,
        borderWidth: 1,
        paddingVertical: 10,
        paddingRight: 40,
        paddingBottom: 150
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#000000',
        position: "absolute",
        top: 80,
    },
    
})

export default AddDiscussion;