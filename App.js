import React from 'react';
import { Platform, StatusBar, StyleSheet, View, DeviceEventEmitter } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/app-redux';
import Meteor, { connectMeteor } from 'react-native-meteor';
import Toast, { DURATION } from 'react-native-easy-toast';

export default class App extends React.Component {

  componentWillMount() {
    const url = 'ws://blockrazor.org:80/websocket';
    Meteor.connect(url);
  }
  
  state = {
    isLoadingComplete: false,
  };

  componentWillUnmount() {
    // Don't forget to unsubscribe when the component unmounts
    if (this.listener) {
      this.listener.remove();
    }
  }
  componentDidMount() {
    this.listener = DeviceEventEmitter.addListener('showToast', (text) => {
      this.refs.toast.show(text, 5000);
    });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
            <Toast ref="toast" />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./src/assets/images/logo/deepBloqLogo.jpg'),
        require('./src/assets/images/logo/whitelogo.png'),
        // require('./src/assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        //'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
        //'Roboto': require("native-base/Fonts/Roboto.ttf"),
        'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
