import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/firebase';

const LogIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const logIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Welcome1')
        } catch (err){
            setError(err.message);
        }  

    }

    return (
        <View style={styles.container}> 
        <Image 
            resizeMode="contain"
            style={styles.icon} 
            source={require("../assets/icon2.png")} />
            
        <View style={styles.infor}>
            <Input   
                label="Email Address                                          "
                value={email}
                onChangeText={setEmail}
            />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {
                error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
            }
        </View>

        <Button
            title="Log In"
            color= '#ffffff'
            onPress={() => logIn()}/>
            
        <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
            <Text>Don't have an account? Sign Up</Text>
        </TouchableOpacity>

        
    </View>
        
    );
}

const styles = StyleSheet.create({
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

    infor: {
        position: "absolute",
        top: 150,
        left: 50
    },

})

export default LogIn;