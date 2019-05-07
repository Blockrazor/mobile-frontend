import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Icon, Item, Input, Picker } from 'native-base';
import CommentCard from './CommentCard';

export default class CoinsComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <CommentCard comment="Of the many like centralization and distribution levels, the hash rate can divulge more than just security. " color="#d1e0d9"/>
          <CommentCard comment="It’s a gambling device… there’s been a lot of frauds connected with it. " color="#e0d1d1"/>
          <CommentCard comment="It doesn’t do anything." color="#e0d1d1"/>
          <CommentCard comment="In just under 20 years, the bank has been indicted a staggering 93 times and fined more than $14 billion. And the crimes ascribed to Wells Fargo, well, they include such gems as account forgeries, insurance fraud, and illegal charges to mention a few." color="#e0d1d1"/>
          <CommentCard comment="the top-ranked cryptocurrency as being nothing but a gamble dominated by frauds." color="#d1e0d9"/>
          <CommentCard comment="Blockchain brought decentralization with the community building applications on public ledger securing the network by running full nodes." color="#e0d1d1"/>
          <CommentCard comment="Even so, Bitcoin’s parameters are not immune to fluctuations." color="#d1e0d9"/>
        </ScrollView>
        <View>
          <Item>
            <Input placeholder='Your comment here...' />
          </Item>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Please choose your stance"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Positive" value="positive" />
              <Picker.Item label="Negative" value="negative" />
            </Picker>
            <Button transparent>
              <Icon name='send' />
            </Button>
          </Item>
        </View>
      </View>
    );
  }
}
