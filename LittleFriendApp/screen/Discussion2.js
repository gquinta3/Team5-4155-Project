import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
    
const Discussion2 = () => {
    return (
        <View style={styles.container}>
            <Image 
                resizeMode="contain"
                style={styles.arrow} 
                source={require("../assets/backArrow.png")} />
            <Image 
                resizeMode="contain"
                style={styles.icon} 
                source={require("../assets/pink footprint.png")} />
            <Text>Dog Health & Nutrition</Text>

            <View style={styles.button}>
                <Button
                    title="+ Comment"
                    color= '#ffffff'
                    onPress={() => console.log("Button tapped")}
                    
                    
                />
            </View>

            <View style={styles.infor}>
                <Text>Dog Health and Nutrition</Text>
                <Text>Dog Training and Behavior</Text>
                <Text>Cat Toys</Text>
                <Text>First Cat Owner</Text>
            </View>

            <Text style={styles.title}>PET DISCUSSION</Text>
        </View>
    );
}
//make the text area pop up
const AppButton = ({onPress, Comment}) => {
    const [text, onChangeText] = React.useState("Comment Body");
    const [number, onChangeNumber] = React.useState(null);
    return(
        <SafeAreaView>
            <TextInput>
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            </TextInput>
        </SafeAreaView>
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
        position: "absolute",
        top: 200,
        textAlign:"center",
        backgroundColor: '#4169e1',
        padding: 20,
        borderRadius: 10,
    },
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    infor: {
        color:"#FF0000",
        fontSize: 20,
    },
    icon: {
        width: "10%",
        height: "10%",
        position: "absolute",
        top: 40,
        left: 175
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#000000',
        position: "absolute",
        top: 120,
    },
    
})

export default Discussion2;