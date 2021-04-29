import React from 'react';
import { render } from 'react-dom';
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DogDatabase from '../screen/PetLibrary/DogDB/DogDatabase.json';


const viewDog = () =>  {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.dog}>Pug</Text>
                <Image source={{uri: 'https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg'}}
                        style={{width: 270, height: 270}} />
                
                <Text style={styles.statCategory}>
                            <Text> Trainability Difficulty: 2/5</Text>{'\n'}
                            <Text> Grooming Frequency: 3/5</Text>{'\n'}
                            <Text> Shed Frequency: light shed</Text>{'\n'}
                            <Text> Life Expectancy: 12-14 years</Text>{'\n'}
                            <Text> Height: 10-12 inches</Text>{'\n'}
                            <Text> Weight: 14-18 inches</Text>{'\n'}
                            <Text> Temperament: Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive</Text>
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

    dog: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center",
        backgroundColor: "#228b22",
        color: "#ffffff"
    },

    statCategory: {
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        fontSize: 18,
        position: "absolute",
        top: 320,
        borderWidth: 1,
    },

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center"
    },

})

export default viewDog;