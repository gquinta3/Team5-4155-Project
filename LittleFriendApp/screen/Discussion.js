import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons';
import { mdiPaw } from '@mdi/js';
import Unorderedlist from 'react-native-unordered-list';
    
const Discussion = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image 
                resizeMode="contain"
                style={styles.icon} 
                source={require("../assets/icon2.png")} />

            <Text style={styles.title}>PET DISCUSSION</Text>    

            <View style={styles.button}>
                <Button
                    title="+ Discussion"
                    color= '#ffffff'
                    onPress={() => navigation.navigate('AddDiscussion')}
                />
            </View>

            <Image 
                resizeMode="contain"
                style={styles.paw1} 
                source={require("../assets/greenPaw.png")} />

            <View style={styles.button1}>
                <Button
                    title="Dog Health and Nutrition"
                    color= '#000000'
                    onPress={() => navigation.navigate('topic1')}/>
            </View>

            <View style={styles.space} />

            <Image 
                resizeMode="contain"
                style={styles.paw2} 
                source={require("../assets/yellowPaw.jpeg")} />
            
            <View style={styles.button2}>
                <Button
                    title="Dog Training and Behavior"
                    color= '#000000'
                    onPress={() => console.log("Button tapped")} />
            </View>

            <View style={styles.space} />

            <Image 
                resizeMode="contain"
                style={styles.paw3} 
                source={require("../assets/pinkPaw.png")} />

            <View style={styles.button3}>
                <Button
                    title="Safe Dog Toys Discussion"
                    color= '#000000'
                    onPress={() => console.log("Button tapped")}/>
            </View>

            <View style={styles.space} />

            <Image 
                resizeMode="contain"
                style={styles.paw4} 
                source={require("../assets/bluePaw.png")} />
            
            <View style={styles.button4}>
                <Button
                    title="First Time Dog Owner!!! "
                    color= '#000000'
                    onPress={() => console.log("Button tapped")}/>
            </View>

             
        </View>
    );
}
 
    
const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: 120,
        textAlign:"center",
        backgroundColor: '#4169e1',
        padding: 20,
        borderRadius: 10,
    },

    button1: {
        position: "absolute",
        top: 250,
        left: 100,
        textAlign:"center",
        backgroundColor: '#d3d3d3',
        padding: 20
    },

    button2: {
        position: "absolute",
        top: 350,
        left: 100,
        textAlign:"center",
        backgroundColor: '#d3d3d3',
        padding: 20
    },

    button3: {
        position: "absolute",
        top: 450,
        left: 100,
        textAlign:"center",
        backgroundColor: '#d3d3d3',
        padding: 20
    },

    button4: {
        position: "absolute",
        top: 550,
        left: 100,
        textAlign:"center",
        backgroundColor: '#d3d3d3',
        padding: 20
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
        top: -10,
        left: 175
    },

    paw1: {
        width: "15%",
        height: "15%",
        position: "absolute",
        top: 230,
        left: 15
    },
    paw2: {
        width: "15%",
        height: "15%",
        position: "absolute",
        top: 330,
        left: 15
    },
    paw3: {
        width: "15%",
        height: "15%",
        position: "absolute",
        top: 430,
        left: 15
    },
    paw4: {
        width: "15%",
        height: "15%",
        position: "absolute",
        top: 530,
        left: 15
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#000000',
        position: "absolute",
        top: 50,
    },
    
})

export default Discussion;