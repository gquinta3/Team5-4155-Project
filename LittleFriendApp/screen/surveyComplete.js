import React, { Component } from 'react';
import { render } from 'react-dom';
import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView} from 'react-native';
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
                    <Text style={styles.dog1}> {this.result1()}</Text>
                    
                    <Text style={styles.title2}>NOT COMPATIBLE DOG</Text>
                    <Text style={styles.dog2}> {this.result2()}</Text>

                </ScrollView>
            </SafeAreaView>     
        );
    }
    //CONDITION FOR BEST COMPATIBLE DOG
    result1(){
        const {surveyAnswers} = this.props.route.params;
        if ((surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "111") || (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "112")) {
            return <View>
                        <Text style={styles.dog1}>Affenpinscher</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if ((surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "113") || (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "121")) {
            return <View>
                        <Text style={styles.dog1}>American Eskimo Dog</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/Bymjyec4m.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "122") {
            return <View>
                        <Text style={styles.dog1}>Australian Terrier</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "123") {
            return <View>
                        <Text style={styles.dog1}>Basenji</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg'}}
                        style={{width: 250, height: 250}} />
                        </View>; 
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "131") {
            return <View>
                        <Text style={styles.dog1}>French Bulldog</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/HyWNfxc47.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "132") {
            return <View>
                        <Text style={styles.dog1}>Pug</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "133") {
            return <View>
                        <Text style={styles.dog1}>Shih Tzu</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        
        } if ((surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "211") || (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "212")) {
            return <View>
                        <Text style={styles.dog1}>Airedale Terrier</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if ((surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "213") || (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "221")) {
            return <View>
                        <Text style={styles.dog1}>American Foxhound</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "222") {
            return <View>
                        <Text style={styles.dog1}>American Staffordshire Terrier</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/rJIakgc4m.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "223") {
            return <View>
                        <Text style={styles.dog1}>American Water Spaniel</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "231") {
            return <View>
                        <Text style={styles.dog1}>Appenzeller Sennenhund</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "232") {
            return <View>
                        <Text style={styles.dog1}>Australian Cattle Dog</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "233") {
            return <View>
                        <Text style={styles.dog1}>Australian Kelpie</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        }
        
        if ((surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "311") || (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "312")) {
            return <View>
                        <Text style={styles.dog1}>Afghan Hound</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "313") {
            return <View>
                        <Text style={styles.dog1}>Akita</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/BFRYBufpm.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if ((surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "322") || (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "321")) {
            return <View>
                        <Text style={styles.dog1}>Alaskan Malamute</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/dW5UucTIW.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "323") {
            return <View>
                        <Text style={styles.dog1}>American Bulldog</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "331") {
            return <View>
                        <Text style={styles.dog1}>German Shepherd</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "332") {
            return <View>
                        <Text style={styles.dog1}>Giant Schnauzer</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } if (surveyAnswers.dogSize.value  + surveyAnswers.place1.value  + surveyAnswers.spend.value == "333") {
            return <View>
                        <Text style={styles.dog1}>Golden Retriever</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        }
        
        else {
            return <Text>No Dog</Text>
        } 
    }

    //CONDITION FOR NOT COMPATIBLE DOG
    result2(){
        const {surveyAnswers} = this.props.route.params;
        if (surveyAnswers.dogSize.value == "1") {
            return <View>
                        <Text style={styles.dog2}>German Shepherd</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        
        } if (surveyAnswers.dogSize.value == "2") {
            return <View>
                        <Text style={styles.dog2}>Giant Schnauzer</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } else {
            return <View>
                        <Text style={styles.dog2}>Pug</Text>
                        <Image source={{uri: 'https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg'}}
                        style={{width: 250, height: 250}} />
                    </View>;
        } 
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