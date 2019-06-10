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
import { connect } from "react-redux";
import { setCurrency } from "../redux/app-redux";


class AllCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCurrencies: null,
      keyword: ""
    };
  }

  _onSummaryPress = coin => {
    this.props.setCurrency(coin);
    this.props.navigation.navigate("Home");
  };

  SearchFilterFunction(keyword) {
    key = new RegExp(keyword);
    this.setState({
      keyword: keyword
    });
  }

  _navigateToLiked = () => {
    if (!Meteor.user()) {
      //Not Logged In
      alert("Please Login!");
    }
    else{
      //Logged In  
      this.props.navigation.navigate('LikedCoin');
    }
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
            <Item style={{ flex: 0.8 }}>
              <Icon name={"search"} />
              <Input />
            </Item>
            <Right style={{ flex: 0.15 }}>
              <Button transparent onPress={()=>this._navigateToLiked()}>
                <Icon name="heart" style={{ color: "red" }} />
              </Button>
            </Right>
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
          <Item style={{ flex: 0.8 }}>
            <Icon name={"search"} />
            <Input
              onChangeText={keyword => {
                this.SearchFilterFunction(keyword);
              }}
              placeholder="Search"
              autoCorrect={false}
              autoFocus={true}
              maxLength={100}
              value={this.state.keyword}
            />
          </Item>
          <Right style={{ flex: 0.15 }}>
            <Button transparent onPress={()=>this._navigateToLiked()}>
              <Icon name="heart" style={{ color: "red" }} />
            </Button>
          </Right>
        </Header>
        <MeteorComplexListView
          elements={() => {
            key = new RegExp(this.state.keyword);
            return Meteor.collection("currencies").find({
              currencyName: key
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
                  onPress={() => this._onSummaryPress(coin)}
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
                <CardItem
                  bordered
                  button
                  onPress={() => this._onSummaryPress(coin)}
                >
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
              </Card>
            );
          }}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: state.currency
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrency: currency => {
      dispatch(setCurrency(currency));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withTracker(params => {
    const handle = Meteor.subscribe("approvedcurrencies");
    return {
      dataReady: handle.ready()
    };
  })(AllCoins)
);
