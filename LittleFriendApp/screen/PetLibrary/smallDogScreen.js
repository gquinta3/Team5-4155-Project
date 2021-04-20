import React from 'react';
import { render } from 'react-dom';
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView } from 'react-native';
import DogDatabase from './DogDB/DogDatabase.json';


const smallList = DogDatabase.small;

export default function smallDogs() {
    return(
        <SafeAreaView>
            <ScrollView>
                {smallList.map((dog, id) => (
                    <View key={id} style={styles.card}>
                        <Text style={styles.title}>{dog.name}</Text>
                        <Image 
                            style={styles.dogPic}
                            source={{
                                uri: dog.picLink
                            }}
                        />
                        <Text style={styles.statCategory}>
                            Trainability Difficulty: <Text style={styles.stats}>{dog.trainingDifficulty}</Text>{'\n'}
                            Grooming Frequency: <Text style={styles.stats}>{dog.grooming}</Text>{'\n'}
                            Shed Frequency: <Text style={styles.stats}>{dog.shedType}</Text>{'\n'}
                            Life Expectancy: <Text style={styles.stats}>{dog.lifeSpan}</Text>{'\n'}
                            Height: <Text style={styles.stats}>{dog.height}</Text>{'\n'}
                            Weight: <Text style={styles.stats}>{dog.weight}</Text>{'\n'}
                            Temperament: <Text style={styles.stats}>{dog.temperament}</Text>
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#99ff99',
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    dogPic: {
        height: 300,
        width: 300,
        margin: 10,
        borderRadius: 5
    },
    statCategory: {
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        color: 'green',
        fontSize: 15
    },
    stats: {
        fontWeight: 'bold',
        color: 'seagreen',
    }
})