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
  Card,
  CardItem,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

class AllCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCurrencies: null
    };
  }

  _onSummaryPress = (slug)=>{
    this.props.navigation.navigate('CoinSummary', {currencySlug: slug});
  }


  _onFeaturePress = (slug)=>{
    this.props.navigation.navigate('CoinFeatures', {currencySlug: slug});
  }


  _onRedFlagPress = (slug, id)=>{
    this.props.navigation.navigate('CoinRedFlag', {currencySlug: slug,  currencyId: id});
  }


  render() {
    if (!this.props.dataReady) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <Container>
        <Content>
          <MeteorListView
            collection="currencies"
            options={{ sort: { eloRanking: -1 } }}
            renderRow={coin => {
              return (
                <Card>
                  <CardItem header bordered button onPress={()=>this._onSummaryPress(coin.slug)}>
                    <Left>
                      <Text style={{ fontSize: 20 , fontWeight: "bold"}}>{coin.currencyName}</Text>
                    </Left>
                    <Right>
                      <Text style={{ fontSize: 13 , fontWeight: "bold"}}>{coin.consensusSecurity}</Text>
                    </Right>
                  </CardItem>
                  <CardItem bordered>
                  <Grid>
                    <Col>
                      <Text style={{ fontSize: 10 , fontWeight: "bold"}}>Price</Text>
                      <Text>{coin.price}</Text>
                    </Col>
                    <Col>
                    <Text style={{ fontSize: 10 , fontWeight: "bold"}}>CPC</Text>
                    <Text>{coin.cpc}</Text>
                    </Col>
                    <Col>
                    <Text style={{ fontSize: 10 , fontWeight: "bold"}}>CPT</Text>
                    <Text>{coin.cpt}</Text>
                    </Col>
                    </Grid>
                  </CardItem>
                  <Grid>
                    <Col>
                    <CardItem bordered button onPress={()=>this._onFeaturePress(coin.slug)}>
                    <Text>Feature</Text>
                    </CardItem>
                    </Col>
                    <Col>
                    <CardItem bordered button onPress={()=>this._onRedFlagPress(coin.slug, coin._id)} >
                    <Text>RedFlag</Text>
                    </CardItem>
                    </Col>
                  </Grid>
                </Card>
              );
            }}
          />
        </Content>
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
