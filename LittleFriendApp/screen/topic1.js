import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
    
const topic1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image 
                resizeMode="contain"
                style={styles.icon} 
                source={require("../assets/icon2.png")} />

            <Text style={styles.title}>PET DISCUSSION</Text>    

            <Image 
                resizeMode="contain"
                style={styles.paw1} 
                source={require("../assets/greenPaw.png")} />

            <View style={styles.button1}>
                <Button
                    title="Dog Health and Nutrition"
                    color= '#000000'
                    onPress={() => navigation.navigate('SignUp')}/>
            </View>
            
            <Text style={styles.txt}>Lorem ipsum dolor sit amet, atqui aperiri vel in, purto eirmod reprehendunt mea no. Sale deseruisse cu est, veniam nemore nominavi ea ius. No quo option meliore, vim integre conclusionemque no, eu numquam conclusionemque has. Sea aliquam debitis scaevola ne, illud tamquam vivendum cum te.</Text>

            <View style={styles.input}>
                <Input   
                    label="Add Comment                                         "
                    placeholder="Enter your comment"
                    autoCapitalize="none"
                />
            </View>
            
            <View style={styles.button}>
                <Button
                    title="Post Comment"
                    color= '#ffffff'
                    onPress={() => console.log("Button tapped")}
                />
            </View>
             
        </View>
    );
}
 
    
const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: 650,
        textAlign:"center",
        backgroundColor: '#4169e1',
        padding: 10,
        borderRadius: 10,
    },

    button1: {
        position: "absolute",
        top: 150,
        left: 100,
        textAlign:"center",
        backgroundColor: '#d3d3d3',
        padding: 20
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
        top: 10,
        left: 175
    },

    input:{
        position: "absolute",
        top: 520,
        left: 20
    },

    paw1: {
        width: "15%",
        height: "15%",
        position: "absolute",
        top: 130,
        left: 15
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#000000',
        position: "absolute",
        top: 80,
    },

    txt: {
        fontSize: 20,
        position: "absolute",
        left: 30,
        right: 30,
        textAlign: "center",
        borderWidth: 1,
        padding: 10
    }
    
})

export default topic1;