import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase, { createUserDocument } from '../firebase/firebase';

const SignUp = ({ navigation }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setName] = useState('');
    const [prefDog, setDog] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDocument(user, {displayName}, {prefDog});
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
                    label="Name                                                   "
                    placeholder="Enter your name"
                    value={displayName}
                    onChangeText={setName}
                    autoCapitalize="none"
                />

                <Input
                    label="Email Address                                          "
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />

                <Input
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    secureTextEntry
                />

                <Input 
                    value={prefDog}
                    onChangeText={setDog}
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
        top: -10,
        left: 175
    },

    infor: {
        position: "absolute",
        top: 100,
        left: 50
    },
});

export default SignUp;
