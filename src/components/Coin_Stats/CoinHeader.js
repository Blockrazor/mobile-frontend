import React, { Component } from 'react';
import { View , Platform, StatusBar} from 'react-native';
import { Header, Left, Right, Body, Title, Button, Icon, Text } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ActionSheet from 'react-native-actionsheet'

export default class CoinHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  showActionSheet = () => {
    this.ActionSheet.show()
  }

  _onPressActionList = (index) =>{
    
    switch(index) {
      case 0:
        // Login
      this.props.navigation.navigate('Auth');
        break;
      case 1:
        // About
      this.props.navigation.navigate('About');
        break;
      case 2:
        // cancel
      break;
      default:
        // code block
    }
  }

  render() {
    return (
      <View>
        <Header
          hasTabs
          style={{marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
            >
          <Left />
          <Body>
            <Title>deepBloq</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={this.showActionSheet}
            >
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          //title={'Which one do you like ?'}
          options={['Login/Sign Up', 'About deeqBloq', 'Cancel']}
          cancelButtonIndex={2}
          //destructiveButtonIndex={1}
          onPress={this._onPressActionList}
        />
      </View>
    );
  }
}
