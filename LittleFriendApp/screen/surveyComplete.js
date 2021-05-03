import React, { Component } from 'react';
import { render } from 'react-dom';
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { parse } from 'react-native-redash';
import DogDatabase from '../screen/PetLibrary/DogDB/DogDatabase.json';

class surveyComplete extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            dogSize: '0', place1: '0', place2: '0', exercise: '0', time: '0', spend: '0'
        }
    }

    
    render () {
        
        const {surveyAnswers} = this.props.route.params;
        
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.title1}>BEST COMPATIBLE DOG</Text>

                    <Text>{surveyAnswers.dogSize.value}</Text>
                    <Text>{surveyAnswers.place1.value}</Text>
                    <Text>{surveyAnswers.place2.value}</Text>
                    <Text>{surveyAnswers.exercise.value}</Text>
                    <Text>{surveyAnswers.time.value}</Text>
                    <Text>{surveyAnswers.spend.value}</Text>
                                    
                </ScrollView>
            </SafeAreaView>
        );
    }
}

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    dog1: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center",
        backgroundColor: "#228b22"
    },

    dog2: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center",
        backgroundColor: "#ff4500"
    },

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center"
    },

    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center"
    },
})

export default surveyComplete;