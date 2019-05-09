import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';

import LoginScreen from '../screens/AuthStack/LoginScreen';
import { Icon } from 'native-base';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: "none",
  }
);


export default AuthStack;
