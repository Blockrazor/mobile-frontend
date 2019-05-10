import React from 'react';
import { createStackNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SearchScreen from '../screens/SearchScreen';
import WallScreen from '../screens/WallScreen';
import { Icon } from 'native-base';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Wall: {
      screen: WallScreen,
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: "none",
  }
);

// HomeStack.navigationOptions = {
//   drawerLabel: 'Home',
//   drawerIcon: ({ tintColor }) => (
//     <Icon name='home'/>
//   ),
// };

// const Drawer = createDrawerNavigator(
//   {
//     HomeStack
//   }
// );
export default HomeStack;
