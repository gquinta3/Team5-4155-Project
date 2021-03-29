import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigation } from 'react-navigation-stack';

import Home from './LittleFriendApp/screen/Home';
import SignUp from './LittleFriendApp/screen/SignUp';
import LogIn from './LittleFriendApp/screen/LogIn';
import Welcome from './LittleFriendApp/screen/Welcome';

export default function App() {
  return  <Welcome />;
}
