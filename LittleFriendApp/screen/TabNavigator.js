import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Welcome from './Welcome';
import Library from './Library';
import Discussion from './Discussion';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='LogIn' component={LogIn} />
            <Tab.Screen name='SignUp' component={SignUp} />
            <Tab.Screen name='Welcome' component={Welcome} />
            <Tab.Screen name='Library' component={Library} />
            <Tab.Screen name='Discussion' component={Discussion} />
        </Tab.Navigator>
    );
};

export default TabNavigator;