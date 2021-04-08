import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>    
            <Image source={require("../assets/AppIcon.png")} />
            
            <View style={styles.space} />

            <View style={styles.button}>
                <Button
                    title="Log In"
                    color= '#ffffff'
                    onPress={() => navigation.navigate('LogIn')}/>
            </View>

            <View style={styles.space} />
            
            <View style={styles.button}>
                <Button
                    title="Sign Up"
                    color= '#ffffff'
                    onPress={() => navigation.navigate('SignUp')}/>
            </View>

        </View>

        
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
        width: 200,
        height: 50,
        borderRadius: 10
    },

    space: {
        width: 20,
        height: 20
    },

});

export default Home;