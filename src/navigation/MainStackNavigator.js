import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator , createDrawerNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

import { Icon } from 'native-base';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: "none",
  }
);

HomeStack.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon name='home'/>
  ),
};

const Drawer = createDrawerNavigator(
  {
    HomeStack
  }
);
export default HomeStack;
