import React, { Component } from "react";
import { View } from "react-native";
import {
  ListItem,
  Icon,
  Header,
  Left,
  Body,
  Text,
  Right,
  Thumbnail,
  Card,
  CardItem,
  Segment,
  Button,
  Content,
  Container,
  Footer,
  List
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class PriceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <List>
        <ListItem style={{ marginLeft: 0, paddingLeft: 15 }}>
          <Grid style={{ alignItems: "center", justifyContent: "center" }}>
            <Col>
              <Thumbnail
                source={{
                  uri:
                    "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
                }}
              />
            </Col>
            <Col>
              <Text style={{ fontSize: 20 , fontWeight: "bold" }}>Cardano</Text>
            </Col>
            <Col>
              <Text style={{ fontSize: 14 }}>ADA</Text>
            </Col>
          </Grid>
        </ListItem>
        <ListItem style={{ marginLeft: 0, paddingLeft: 15 }}>
          <Grid>
            <Col>
              <Text>
                0.00001020
              </Text>
              <Text style={{ fontSize: 10 , fontWeight: "bold"}}>BTC</Text>
            </Col>
            <Col>
              <Text>
                $0.063844
              </Text>
              <Text style={{ fontSize: 10 , fontWeight: "bold"}}>USD</Text>
            </Col>
          </Grid>
        </ListItem>
      </List>
    );
  }
}
