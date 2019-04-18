import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import ForgotScreen from '../screens/ForgotScreen';

import { Icon } from 'native-base';
const LoginStack = createStackNavigator(
  {
    Login: {
        screen: LoginScreen,
    },
    SignUp: {
        screen : SignUpScreen,
    },
    Forgot: {
        screen : ForgotScreen,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: "none",
  }
);

LoginStack.navigationOptions = {

};

export default LoginStack;
