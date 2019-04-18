import React from 'react';
import { createStackNavigator} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import ForgotScreen from '../screens/ForgotScreen';

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
