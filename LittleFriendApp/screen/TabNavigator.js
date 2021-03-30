import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='LogIn' component={LogIn} />
            <Tab.Screen name='SignUp' component={SignUp} />
        </Tab.Navigator>
    );
};

export default TabNavigator;