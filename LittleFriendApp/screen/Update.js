import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase, { createUserDocument } from '../firebase/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { PetRef } from "../firebase/firebase";
import { Alert } from 'react-native';
import {addDog} from '../firebase/firebase';

const Update = ({ navigation }) => {
    
    const [email, setEmail] = useState('');
    const [displayName, setName] = useState('');
    const [prefDog, setDog] = useState('');
    const [error, setError] = useState('');
    const [userData, setUserData] = useState(null);

    const getUser =  async() => {
      const currentUser = firebase.auth().currentUser; 

      PetRef.where('userId','==',currentUser.uid)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ users: data });
      })
    }
 
    const handleUpdate = async() => {  
      const currentUser = firebase.auth().currentUser; 
      PetRef.doc(currentUser.uid)
      .update({
        prefDog: userData.prefDog,
      })
      .then(() => {
        console.log('Updated!');
        Alert.alert('Sucessfully Updated!');
      })

    }

    useEffect(() =>  {
      getUser();
    },  []);
    
    return (
        <View style={styles.container}> 
            <Image 
                resizeMode="contain"
                style={styles.icon} 
                source={require("../assets/icon2.png")} />

            <View style={styles.infor}>

                <Input
                    label="Dog Recommendation from us" 
                    value={userData ? userData.prefDog: ''}
                    onChangeText={(txt) => setUserData({...userData, prefDog: txt})}
                />
                  
                
                {
                    error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null
                }
            </View>

            
            <Button
                title="Save"
                color= '#ffffff'
                onPress={() => handleUpdate()}/>
            
        
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

export default Update;
