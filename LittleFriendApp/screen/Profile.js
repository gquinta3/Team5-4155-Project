import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';
import React from "react";
import { PetRef } from "../firebase/firebase";
import { firestore } from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from '../firebase/firebase';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  
  componentDidMount() {
    const currentUser = firebase.auth().currentUser; 
    
      PetRef.where('userId','==',currentUser.uid)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ users: data });
      });
  }

  render() {
    const { users } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image 
                resizeMode="contain"
                style={styles.icon} 
                source={require("../assets/icon2.png")} />
        <View>
                <Text style={styles.title}>PROFILE DETAILS</Text>
        </View> 
        <Image 
                style={styles.account}
                resizeMode="contain"
                source={require("../assets/accountIcon.jpeg")} />      

        {users.map((user, uid) => (
          <View key={uid}>
                  <Text style={styles.text1}>Name: {user.displayName}</Text>
                  <View style={styles.space} />
                  <Text style={styles.text2}>Email: {user.email}</Text>
                  <View style={styles.space} />
                  <Text style={styles.text3}>Preference Dog: {user.prefDog}</Text>
          </View>
          

        ))}

        <View style={styles.button}>
            <Button
                title="View Dog Details"
                color= '#ffffff'
                onPress={() => navigate('viewDog')}
            />
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  account: {
    width: "50%",
    height: "50%",
    position: "relative",
    top: -50,
},

  button: {
    position: "absolute",
    top: 550,
    textAlign:"center",
    backgroundColor: '#4169e1',
    padding: 20,
    borderRadius: 10,
},

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
    top: 1,
    left: 175
},

  title: {
      position: "absolute",
      fontSize: 30,
      fontWeight: "bold",
      top: -30,
      left: -120
  },

  text1: {
    fontSize: 20,
    left: -10,
    top: -90,
    backgroundColor: '#add8e6',
    padding: 10
},

  text2: {
    fontSize: 20,
    left: -10,
    top: -70,
    backgroundColor: '#add8e6',
    padding: 10
},

  text3: {
    fontSize: 20,
    left: -10,
    top: -50,
    backgroundColor: '#ffb6c1',
    padding: 10
},
  
  space: {
  width: 20,
  height: 8
},

});

export default Profile;
