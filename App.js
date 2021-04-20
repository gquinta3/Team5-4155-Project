/*
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './LittleFriendApp/screen/Home';
import SignUp from './LittleFriendApp/screen/SignUp';
import LogIn from './LittleFriendApp/screen/LogIn';


const stackNavigator = createStackNavigator (
  {
    Home: Home,
    SignUp : SignUp,
    LogIn : LogIn,
    Welcome : Welcome,
  }
);


const App  = createAppContainer(stackNavigator);

export default App;
*/
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
      <Stack.Screen name = "Welcome1" component={Welcome1} />
      <Stack.Screen name = "Dog Sizes" component={dogSizes} />
      <Stack.Screen name = "Small Dogs" component={smallDogScreen} />
      <Stack.Screen name = "Medium Dogs" component={medDogScreen} />
      <Stack.Screen name = "Large Dogs" component={largeDogScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;


/*
const stackNavigator = createStackNavigator({
  Home: Home,
  SignUp : SignUp,
  LogIn : LogIn,
  Welcome : Welcome,
});

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='petQuiz' component={petQuiz} />
            <Tab.Screen name='Library' component={Library} />
            <Tab.Screen name='Discussion' component={Discussion} />
        </Tab.Navigator>
    );
};



const AppTabNavigator = createBottomTabNavigator({
  petQuiz: {
    screen: petQuiz,
    navigationOptions: {
      tabBarLabel: 'Quiz'
    }
  },

  Library: {
    screen: Library,
    navigationOptions: {
      tabBarLabel: 'Library'
    }
  }
});


TabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle = routeName;

  return {
    headerTitle,
  };
};

const App = createAppContainer(stackNavigator);

export default App;


const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Your App',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})



AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle = routeName;

  return {
    headerTitle,
  };
};
*/



/*
export default createSwitchNavigator({
  SignUp: SignUp,
  LogIn: LogIn
})


const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
*/