import React from 'react';
import { render } from 'react-dom';
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DogDatabase from '../screen/PetLibrary/DogDB/DogDatabase.json';


const compatible = ({navigation}) =>  {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title1}>BEST COMPATIBLE DOG</Text>
                <Text style={styles.dog1}>Pug</Text>
                <Image source={{uri: 'https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg'}}
                        style={{width: 250, height: 250}} />
                
                <Text style={styles.txt}>The Pug is often described as a lot of dog in a small space. They are known as the clowns of the canine world because they have a great sense of humor and like to show off.
                </Text>

                <View style={styles.update}>
                    <Button
                        title="Please Update Dog Preference"
                        color= '#ffffff'
                        onPress={() => navigation.navigate('Update')}/>
                </View>

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
        backgroundColor: "#228b22",
        color: "#ffffff"
    },

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center"
    },

    txt: {
        fontSize: 20,
        position: "absolute",
        left: 20,
        right: 20,
        top: 360,
        textAlign: "center",
        borderWidth: 1,
        padding: 10
    },

    update: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center",
        color: "#ffffff",
        position: "absolute",
        top: 600, 
        left: 20
    },
})

export default compatible;