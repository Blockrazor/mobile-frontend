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
          options={['Login', 'About deeqBloq', 'cancel']}
          cancelButtonIndex={2}
          //destructiveButtonIndex={1}
          onPress={(index) => { /* do something */ }}
        />
      </View>
    );
  }
}
