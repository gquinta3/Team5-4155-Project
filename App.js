import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createSwitchNavigator, createDrawerNavigator, createAppContainer, StackRouter } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from './LittleFriendApp/screen/LogIn';
import SignUp from './LittleFriendApp/screen/SignUp';
import Home from './LittleFriendApp/screen/Home';
import Welcome from './LittleFriendApp/screen/Welcome';
import petQuiz from './LittleFriendApp/screen/petQuiz';
import Discussion from './LittleFriendApp/screen/Discussion';
import { NavigationContainer } from "@react-navigation/native";
import LibraryHome from './LittleFriendApp/screen/PetLibrary/LibraryHome';
import dogSizes from './LittleFriendApp/screen/PetLibrary/dogSizes';
import smallDogScreen from './LittleFriendApp/screen/PetLibrary/smallDogScreen';
import medDogScreen from './LittleFriendApp/screen/PetLibrary/medDogScreen';
import largeDogScreen from './LittleFriendApp/screen/PetLibrary/largeDogScreen';
import surveyComplete from './LittleFriendApp/screen/surveyComplete';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Welcome1 = ()  => (
  <Tab.Navigator>
    <Tab.Screen name='Welcome' component={Welcome} />
    <Tab.Screen name='petQuiz' component={petQuiz} />
    <Tab.Screen name='Pet Library' component={LibraryHome} />
    <Tab.Screen name='Discussion' component={Discussion} />
  </Tab.Navigator>
);
    
const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name = "Home" component={Home} />
      <Stack.Screen name = "SignUp" component={SignUp} />
      <Stack.Screen name = "LogIn" component={LogIn} />
      <Stack.Screen name = "LittleFriend" component={Welcome1} />
      <Stack.Screen name = "petQuiz" component={petQuiz} />
      <Stack.Screen name = "surveyComplete" component={surveyComplete} />
      <Stack.Screen name = "Dog Sizes" component={dogSizes} />
      <Stack.Screen name = "Small Dogs" component={smallDogScreen} />
      <Stack.Screen name = "Medium Dogs" component={medDogScreen} />
      <Stack.Screen name = "Large Dogs" component={largeDogScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
