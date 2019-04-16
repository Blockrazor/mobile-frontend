import React, { Component } from 'react';
import { View, Text , Platform, StatusBar} from 'react-native';
import {Header, Left, Body, Button, Icon} from 'native-base';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Header style={{
            //backgroundColor:'green', 
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}} >
            <Left>
            <Button transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
            <Icon name='menu' />
            </Button>
            </Left>
            <Body></Body>
        </Header>
    );
  }
}
