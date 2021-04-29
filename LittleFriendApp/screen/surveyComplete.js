import React from 'react';
import { render } from 'react-dom';
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DogDatabase from '../screen/PetLibrary/DogDB/DogDatabase.json';


const surveyComplete = ({navigation}) =>  {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title1}>BEST COMPATIBLE DOG</Text>
                <View style={styles.dog1}>
                    <Button
                        title="Pug"
                        color= '#ffffff'
                        onPress={() => navigation.navigate('compatible')}/>
                </View>
                <Image source={{uri: 'https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg'}}
                        style={{width: 250, height: 250}} />

                <Text style={styles.title2}>NOT COMPATIBLE DOG</Text>
                <View style={styles.dog2}>
                    <Button
                        title="German Shepherd"
                        color= '#ffffff'
                        onPress={() => navigation.navigate('nonCompatible')}/>
                </View>
                <Image source={{uri: 'https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg'}}
                        style={{width: 250, height: 250}} />
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