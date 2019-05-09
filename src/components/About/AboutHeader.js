import React, { Component } from 'react';
import { View, Platform, StatusBar} from 'react-native';
import { Header, Icon, Text, Left, Right, Body, Button, Title} from 'native-base';
import AppStyle from "../AppStyle";

export default class AboutHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Header
          hasTabs
          style={AppStyle.headerDark}
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
            <Title style={{color:'white'}}>About</Title>
          </Body>
          <Right>
          </Right>
        </Header>
    );
  }
}
