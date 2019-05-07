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
            <Button transparent
              //onPress={() => this.props.navigation.openDrawer()}
            >
            <Icon name='home' />
            </Button>
            <Button transparent
              //onPress={() => this.props.navigation.openDrawer()}
            >
            <Icon name='eye' />
            </Button>
            <Button transparent
              //onPress={() => this.props.navigation.openDrawer()}
            >
            <Icon name='logo-rss' />
            </Button>
            <Button transparent
              //onPress={() => this.props.navigation.openDrawer()}
            >
            <Icon name='trending-up' />
            </Button>
            <Button transparent
              //onPress={() => this.props.navigation.openDrawer()}
            >
            <Icon name='chatbubbles' />
            </Button>            
            <Button transparent
              //onPress={() => this.props.navigation.openDrawer()}
            >
            <Icon name='search' />
            </Button>
        </Header>
    );
  }
}
