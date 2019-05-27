import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import AndroidBack from "../components/AndroidBack";
import CoinHeader from "../components/Header";
import Meteor, {
  withTracker,
  MeteorComplexListView,
  ReactiveVar
} from "react-native-meteor";
import {
  Container,
  Header,
  Content,
  Icon,
  Button,
  Card,
  CardItem,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Title
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

class CoinFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  render() {
    if (!this.props.dataReady) {
      return (
        <Container>
          <AndroidBack navigation={this.props.navigation} />
          <CoinHeader title="Features" navigation={this.props.navigation} />
          <ActivityIndicator size="large" />
        </Container>
      );
    }
    return (
      <Container>
        <AndroidBack navigation={this.props.navigation} />
        <CoinHeader title="Features" navigation={this.props.navigation} />
        <Title style={{ paddingTop: 10, paddingBottom: 10 }}>
          {this.props.navigation.getParam("currencySlug", "Coin")}
        </Title>
        <MeteorComplexListView
          elements={() => {
            return Meteor.collection("features").find({
              currencySlug: this.props.navigation.getParam(
                "currencySlug",
                "Coin"
              )
            });
          }}
          options={{ sort: { createdAt: -1 } }}
          renderRow={feature => {
            return (
              <Card>
                <CardItem bordered>
                  <Grid>
                    <Col>
                      <Text note>{feature.author}</Text>
                      <Text>{feature.featureName}</Text>
                    </Col>
                  </Grid>
                </CardItem>
              </Card>
            );
          }}
        />
      </Container>
    );
  }
}

export default withTracker(params => {
  //const handle = Meteor.subscribe("auctions");
  const handle = Meteor.subscribe("features");
  return {
    dataReady: handle.ready()
  };
})(CoinFeatures);
