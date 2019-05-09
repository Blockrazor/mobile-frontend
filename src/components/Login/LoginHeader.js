import React, { Component } from 'react';
import { View, Platform, StatusBar} from 'react-native';
import { Header, Icon, Text, Left, Right, Body, Button, Title} from 'native-base';
export default class LoginHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Header
          hasTabs
          style={{marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
            >
          <Left>
          <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
            </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
          </Right>
        </Header>
    );
  }
}
