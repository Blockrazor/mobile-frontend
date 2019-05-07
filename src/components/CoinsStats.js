import React, { Component } from 'react';
import { View, Image, Platform, StatusBar} from 'react-native';
import { ListItem , Icon, Header, Left, Body, Text, Right, Thumbnail, Card, CardItem, Segment, Button, Content,Container, Footer} from 'native-base';
import AppHeader from './AppHeader';
export default class CoinsStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
        <AppHeader />
        <Content>
        <ListItem>
          <Left>
          <Thumbnail source={{uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'}}/>
          </Left>
          <Body>
          <Text>BitCoin</Text>
          </Body>
          <Right>
              <Text>
                  BTC
              </Text>
          </Right>
         </ListItem>
         <ListItem>
         <Left>
              <Text>BTC Price: $9000</Text>
              <Right>
              <Text>Price: $9999</Text>
              </Right>
          </Left>
         </ListItem>
         <Card>
            <CardItem bordered>
              <Body>
                <Text>
                Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card cardDefaultBg='red' >
            <CardItem>
            <Body>
                <Text>
                Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card styles={{ card: { cardDefaultBg: 'green' }}}>
            <CardItem>
            <Body>
                <Text>
                Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer
                </Text>
              </Body>
            </CardItem>
          </Card>
          </Content>
          </Container>
    );
  }
}
