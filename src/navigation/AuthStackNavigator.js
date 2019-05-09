import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import LoginScreen from '../screens/AuthStack/LoginScreen';
import SignUpScreen from '../screens/AuthStack/SignUpScreen';
import ForgotScreen from '../screens/AuthStack/ForgotScreen';
import { Icon } from 'native-base';

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
        },
        SignUp: {
            screen: SignUpScreen,
        },
        Forgot: {
            screen: ForgotScreen,
        },
    },
    {
        initialRouteName: 'Login',
        headerMode: "none",
    }
);


export default AuthStack;
