import React, { useRef } from 'react';
import { Image, StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import TabNavigator from './TabNavigator';

const Welcome = () => {

    let actionSheet = useRef();
    let optionArray = [
        'Take Photo', 'Choose From Library', 'Cancel'
    ];

    const showActionSheet = () => {
        actionSheet.current.show();
    };

    return (
        <View style={styles.container}> 
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
                style={styles.account}
                resizeMode="contain"
                source={require("../assets/accountIcon.jpeg")} />

            <TouchableOpacity 
                style={styles.button}
                onPress={showActionSheet}    
            >
                <Text style={styles.buttonPress}>Upload Photo</Text>
            </TouchableOpacity>

                
            <ActionSheet
                ref={actionSheet}
                title={'Upload Photo'}
                options={optionArray}
                cancelButtonIndex={2}
                destructiveButtonIndex={1}
                onPress={(index) => {
                    alert(optionArray[index]);
                }}
            />
            
            <View style={styles.button1}>
                <Button
                    title="Ready to take quiz"
                    color= '#ffffff'
                    onPress={() => console.log("Button tapped")}
                />
            </View>

            <View style={styles.button2}>
                <Button
                    title="Pet Profile"
                    color= '#ffffff'
                    onPress={() => console.log("Button tapped")}
                />
            </View>
            
            <View style={styles.button3}>
                <Button
                    title="Pet Library"
                    color= '#ffffff'
                    onPress={() => console.log("Button tapped")}
                />
            </View>

            <View style={styles.button4}>
                <Button
                    title="Pet Discussion"
                    color= '#ffffff'
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
        top: -150,
    },

    button: {
        position: "absolute",
        top: 370,
        left: 130,
        backgroundColor: '#ffffff',
    },

    button1: {
        position: "absolute",
        top: 400,
        backgroundColor: '#4169e1',
        width: 180,
        height: 40,
        borderRadius: 10,
    },

    button2: {
        position: "absolute",
        top: 450,
        backgroundColor: '#4169e1',
        width: 180,
        height: 40,
        borderRadius: 10,
    },

    button3: {
        position: "absolute",
        top: 500,
        backgroundColor: '#4169e1',
        width: 180,
        height: 40,
        borderRadius: 10,
    },

    button4: {
        position: "absolute",
        top: 550,
        backgroundColor: '#4169e1',
        width: 180,
        height: 40,
        borderRadius: 10,
    },

    buttonPress: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000000',
        position: "absolute",
        top: -55,
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
        top: 1,
        left: 175
    },

    logOut: {
        width: "10%",
        height: "10%",
        position: "absolute",
        top: 1,
        right: 20,
    },

    welcome: {
        position: "absolute",
        fontSize: 40,
        fontWeight: "bold",
        top: -120,
        left: -90
    }

});

export default Welcome;
