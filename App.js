import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'

import Home from './LittleFriendApp/screen/Home';
import SignUp from './LittleFriendApp/screen/SignUp';
import LogIn from './LittleFriendApp/screen/LogIn';
import Welcome from './LittleFriendApp/screen/Welcome';
import TabNavigator from './LittleFriendApp/screen/TabNavigator';

export default function App() {
  return  (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
  
}