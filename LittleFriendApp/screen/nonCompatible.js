import React from 'react';
import { render } from 'react-dom';
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView } from 'react-native';
import DogDatabase from '../screen/PetLibrary/DogDB/DogDatabase.json';


export default function surveyComplete() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title2}>NOT COMPATIBLE DOG</Text>
                <Text style={styles.dog2}>German Shepherd</Text>
                <Image source={{uri: 'https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg'}}
                        style={{width: 250, height: 250}} />

                <Text style={styles.txt}>German shepherds shed a lot.
                                        They need “a job”.
                                        They often have a lot of health problems.
                                        They are large in size and have an abundance of energy.
                                        They’re also going to need a lot of exercise.           
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    dog2: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center",
        backgroundColor: "#ff4500",
        color: "#ffffff"
    },

    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center"
    },

    txt: {
        fontSize: 20,
        position: "absolute",
        left: 15,
        right: 15,
        top: 360,
        textAlign: "center",
        borderWidth: 1,
        padding: 10
    }
})