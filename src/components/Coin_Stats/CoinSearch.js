import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Content, Icon, Text, Header, Item, Input, Button, List, ListItem , InputGroup } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class CoinSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Grid>
        <Row size={10}>
          <Grid>
          <Col size={75}>
          <InputGroup>
            <Icon name="ios-search" />
            <Input placeholder="Search a Coin" />
          </InputGroup>
          </Col>
          <Col size={25}>
          <Button transparent>
            <Text>Search</Text>
          </Button>
          </Col>
          </Grid>
        </Row>
        <Row size={90}>
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
        </Row>
        </Grid>
    );
  }
}
