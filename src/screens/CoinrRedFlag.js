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

class CoinRedFlag extends Component {
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
          <CoinHeader title="RedFlags" navigation={this.props.navigation} />
          <ActivityIndicator size="large" />
        </Container>
      );
    }
    return (
      <Container>
        <AndroidBack navigation={this.props.navigation} />
        <CoinHeader title="RedFlags" navigation={this.props.navigation} />
        <Title style={{ paddingTop: 10, paddingBottom: 10 , color:"black"}}>
          {this.props.navigation.getParam("currencySlug", "Coin")}
        </Title>
        <MeteorComplexListView
          elements={() => {
            return Meteor.collection("redflags").find({
              currencyId: this.props.navigation.getParam(
                "currencyId",
                "Coin"
              )
            });
          }}
          enableEmptySections={true}
          options={{ sort: { createdAt: -1 } }}
          renderRow={redflag => {
            return (
              <Card>
                <CardItem bordered>
                  <Grid>
                    <Col>
                      <Text note>{redflag.author}</Text>
                      <Text>{redflag.name}</Text>
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
  const handle = Meteor.subscribe("redflags");
  return {
    dataReady: handle.ready()
  };
})(CoinRedFlag);
