import React, { Component} from 'react';
import {Platform, StatusBar} from 'react-native';
import { Drawer , Container, Left, Header, Body, Content, Button, Icon, Text,Footer, FooterTab, Right} from 'native-base';
import  CoinsStats  from '../components/CoinsStats';

export default class DrawerExample extends Component {
  static navigationOptions = ({navigation}) => {
    // headerTitle instead of title
    return{
    headerTitle: <Text></Text>,
    headerLeft: (
    <Button transparent
      onPress={() => navigation.openDrawer()}
    >
    <Icon name='menu' />
    </Button>
    )
    }
  };

  render() {

    return (
      <Container>
          <CoinsStats navigation={this.props.navigation}/>
          <Footer>
          <FooterTab>
          <Button full>
              <Icon name='thumbs-down'/>
            </Button>
            <Button full>
              <Icon name='thumbs-up'/>
            </Button>
          </FooterTab>
          </Footer>
      </Container>
    );
  }
}