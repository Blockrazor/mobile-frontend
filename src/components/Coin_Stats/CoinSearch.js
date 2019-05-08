import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Content, Icon, Text, Header, Item, Input, Button, List, ListItem} from 'native-base';

export default class CoinSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search a Coin" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView>
        <List>
            <ListItem>
              <Text>BitCoin</Text>
            </ListItem>
            <ListItem>
              <Text>Ethereum</Text>
            </ListItem>
            <ListItem>
              <Text>XRP</Text>
            </ListItem>
            <ListItem>
              <Text>Bitcoin Cash</Text>
            </ListItem>
            <ListItem>
              <Text>Litecoin</Text>
            </ListItem>
            <ListItem>
              <Text>EOS</Text>
            </ListItem>
            <ListItem>
              <Text>Binance Coin</Text>
            </ListItem>
            <ListItem>
              <Text>Tether</Text>
            </ListItem>
            <ListItem>
              <Text>Stellar</Text>
            </ListItem>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Cardano</Text>
            </ListItem>
            <ListItem>
              <Text>TRON</Text>
            </ListItem>
          </List>
        </ScrollView>
        </View>
    );
  }
}
