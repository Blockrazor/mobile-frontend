import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import Meteor, {
  withTracker,
  MeteorListView,
  ReactiveVar
} from "react-native-meteor";
import {
  Container,
  Header,
  Content,
  Icon,
  Button,
  Title,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail
} from "native-base";

class AllCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCurrencies: null
    };
  }

  componentWillMount() {}

  render() {
    if (!this.props.dataReady) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <Container>
        <List>
          <MeteorListView
            collection="currencies"
            options={{ sort: { createdAt: -1 } }}
            renderRow={coin => {
              return (
                <View>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 15 }}>
                    <Left>
                      <Text>{coin.currencyName}</Text>
                    </Left>
                    <Right>
                      <Text>version: {coin.consensusSecurity}</Text>
                    </Right>
                  </ListItem>
                </View>
              );
            }}
          />
        </List>
      </Container>
    );
  }
}

export default withTracker(params => {
  //const handle = Meteor.subscribe("auctions");
  const handle = Meteor.subscribe('approvedcurrencies');
  return {
    dataReady: handle.ready()
  };
})(AllCoins);
