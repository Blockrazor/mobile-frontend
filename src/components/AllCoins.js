import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
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
  InputGroup,
  Input,
  Item
} from "native-base";
import AppStyle from "./AppStyle";
import { Col, Row, Grid } from "react-native-easy-grid";

class AllCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCurrencies: null,
      keyword: ""
    };
  }

  _onSummaryPress = slug => {
    this.props.navigation.navigate("CoinSummary", { currencySlug: slug });
  };

  _onFeaturePress = slug => {
    this.props.navigation.navigate("CoinFeatures", { currencySlug: slug });
  };

  _onRedFlagPress = (slug, id) => {
    this.props.navigation.navigate("CoinRedFlag", {
      currencySlug: slug,
      currencyId: id
    });
  };

  SearchFilterFunction(keyword) {
    key = new RegExp(keyword);
    this.setState({
      keyword: keyword
    });
  }

  render() {
    if (!this.props.dataReady) {
      return (
        <Container>
          <Header searchBar rounded style={AppStyle.headerDark}>
            <Left style={{ flex: 0.1 }}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Item style={{ flex: 0.9 }}>
              <Icon name={"search"} />
              <Input />
            </Item>
            {/* <Right style={{ flex: 0.3 }}>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Right> */}
          </Header>
          <ActivityIndicator size="large" />
        </Container>
      );
    }
    return (
      <Container>
        <Header searchBar rounded style={AppStyle.headerDark}>
          <Left style={{ flex: 0.1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Item style={{ flex: 0.9 }}>
            <Icon name={"search"} />
            <Input
              onChangeText={keyword => {
                this.SearchFilterFunction(keyword);
              }}
              onSubmitEditing={() => this.search()}
              placeholder="Search"
              autoCorrect={false}
              autoFocus={true}
              maxLength={100}
              value={this.state.keyword}
            />
          </Item>
          {/* <Right style={{ flex: 0.3 }}>
            <Button transparent onPress={() => this.search()}>
              <Text>Search</Text>
            </Button>
          </Right> */}
        </Header>
        <MeteorComplexListView
          elements={() => {
            key = new RegExp(this.state.keyword);
            return Meteor.collection("currencies").find({
              currencyName : key
            });
          }}
          options={{ sort: { eloRanking: -1 } }}
          enableEmptySections={true}
          renderRow={coin => {
            return (
              <Card>
                <CardItem
                  header
                  bordered
                  button
                  onPress={() => this._onSummaryPress(coin.slug)}
                >
                  <Left>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {coin.currencyName}
                    </Text>
                  </Left>
                  <Right>
                    <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                      {coin.consensusSecurity}
                    </Text>
                  </Right>
                </CardItem>
                <CardItem bordered>
                  <Grid>
                    <Col>
                      <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                        Price
                      </Text>
                      <Text>{coin.price}</Text>
                    </Col>
                    <Col>
                      <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                        CPC
                      </Text>
                      <Text>{coin.cpc}</Text>
                    </Col>
                    <Col>
                      <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                        CPT
                      </Text>
                      <Text>{coin.cpt}</Text>
                    </Col>
                  </Grid>
                </CardItem>
                <Grid>
                  <Col>
                    <CardItem
                      bordered
                      button
                      onPress={() => this._onFeaturePress(coin.slug)}
                    >
                      <Text>Feature</Text>
                    </CardItem>
                  </Col>
                  <Col>
                    <CardItem
                      bordered
                      button
                      onPress={() => this._onRedFlagPress(coin.slug, coin._id)}
                    >
                      <Text>RedFlag</Text>
                    </CardItem>
                  </Col>
                </Grid>
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
  const handle = Meteor.subscribe("approvedcurrencies");
  return {
    dataReady: handle.ready()
  };
})(AllCoins);
