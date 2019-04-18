import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//  Auth: AuthStackNavigator,
  Main: MainDrawerNavigator,
}));
