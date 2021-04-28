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
import Update from './LittleFriendApp/screen/Update';
import { NavigationContainer } from "@react-navigation/native";
import LibraryHome from './LittleFriendApp/screen/PetLibrary/LibraryHome';
import dogSizes from './LittleFriendApp/screen/PetLibrary/dogSizes';
import smallDogScreen from './LittleFriendApp/screen/PetLibrary/smallDogScreen';
import medDogScreen from './LittleFriendApp/screen/PetLibrary/medDogScreen';
import largeDogScreen from './LittleFriendApp/screen/PetLibrary/largeDogScreen';
import surveyComplete from './LittleFriendApp/screen/surveyComplete';
import LoadingScreen from './LittleFriendApp/screen/LoadingScreen';
import Profile from './LittleFriendApp/screen/Profile';
import topic1 from './LittleFriendApp/screen/topic1';
import AddDiscussion from './LittleFriendApp/screen/AddDiscussion';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Welcome1 = ()  => (
  <Tab.Navigator>
    <Tab.Screen name='Welcome' component={Welcome} />
    <Tab.Screen name='petQuiz' component={petQuiz} />
    <Tab.Screen name='Profile' component={Profile} />
    <Tab.Screen name='Pet Library' component={LibraryHome} />
    <Tab.Screen name='Discussion' component={Discussion} />
    <Tab.Screen name='Update' component={Update} />
  </Tab.Navigator>
);
    
const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={'Loading'} component={LoadingScreen} />
      <Stack.Screen name = "Home" component={Home} />
      <Stack.Screen name = "SignUp" component={SignUp} />
      <Stack.Screen name = "LogIn" component={LogIn} />
      <Stack.Screen name = "LittleFriend" component={Welcome1} />
      <Stack.Screen name = "petQuiz" component={petQuiz} />
      <Stack.Screen name = "Update" component={Update} />
      <Stack.Screen name = "Profile" component={Profile} />
      <Stack.Screen name = "Pet Library" component={LibraryHome} />
      <Stack.Screen name = "Dog Sizes" component={dogSizes} />
      <Stack.Screen name = "Small Dogs" component={smallDogScreen} />
      <Stack.Screen name = "Medium Dogs" component={medDogScreen} />
      <Stack.Screen name = "Large Dogs" component={largeDogScreen} />
      <Stack.Screen name = "Discussion" component={Discussion} />
      <Stack.Screen name = "topic1" component={topic1}/>
      <Stack.Screen name = "AddDiscussion" component={AddDiscussion} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;