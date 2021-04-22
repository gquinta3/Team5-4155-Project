import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/firebase';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('LittleFriend')
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
                title="Sign up"
                color= '#ffffff'
                onPress={() => signUp()}/>
            
            <TouchableOpacity onPress={()=> navigation.navigate('LogIn')}>
                <Text>Already have an account? Log In</Text>
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
        top: 40,
        left: 175
    },

    infor: {
        position: "absolute",
        top: 150,
        left: 50
    },
});

export default SignUp;
