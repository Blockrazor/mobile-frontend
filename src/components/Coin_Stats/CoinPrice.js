import React, { Component } from "react";
import { View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import AppStyle from "../AppStyle";

export default class CoinsPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <List style={{ flex: 0 }}>
          <ListItem>

              <Thumbnail
                source={{
                  uri:
                    "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
                }}
              />
              <Body>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Cardano
              </Text>
              </Body>
          </ListItem>
          <ListItem itemDivider>
            <View style={AppStyle.priceList}>
              <Text>Bitcoin Comparison Price</Text>
            </View>
          </ListItem>
          <ListItem>
            <View style={AppStyle.priceList}>
              <Text style={AppStyle.priceNumber}>$94</Text>
            </View>
          </ListItem>
          <ListItem itemDivider>
            <View style={AppStyle.priceList}>
              <Text>Price per Coin</Text>
            </View>
          </ListItem>
          <ListItem>
            <View style={AppStyle.priceList}>
              <Text style={AppStyle.priceNumber}>$0.0642</Text>
            </View>
          </ListItem>
          <ListItem itemDivider>
            <View style={AppStyle.priceList}>
              <Text>ADA per BTC</Text>
            </View>
          </ListItem>
          <ListItem>
            <View style={AppStyle.priceList}>
              <Text style={AppStyle.priceNumber}>97943</Text>
            </View>
          </ListItem>         
          <ListItem itemDivider>
            <View style={AppStyle.priceList}>
              <Text>Historical Price</Text>
            </View>
          </ListItem>
          <ListItem>
          <Image
          style={{width: '100%', height: 300, resizeMode: 'contain'}}
          source={{uri: 'https://raw.githubusercontent.com/jesperlekland/react-native-svg-charts/master/screenshots/y-axis.png'}}
        />
          </ListItem>
          <ListItem itemDivider>
            <View style={AppStyle.priceList}>
              <Text>Coin Distribution</Text>
            </View>
          </ListItem>
          <ListItem>
          <Image
          style={{width: '100%', height: 300, resizeMode: 'contain'}}
          source={{uri: 'https://raw.githubusercontent.com/jesperlekland/react-native-svg-charts/master/screenshots/pie-chart.png'}}
        />
          </ListItem>
        </List>
      </Content>
    );
  }
}
