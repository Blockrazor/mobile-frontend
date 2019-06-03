import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
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
import { connect } from "react-redux";

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
    getCurrencies: () => {
      dispatch(getCurrencies());
    }
  };
};

class PriceCard extends Component {
  constructor(props) {
    super(props);
    this.state = { currency: {} };
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
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {this.props.currency.currencyName}
              </Text>
            </Col>
            <Col>
              <Text style={{ fontSize: 14 }}>
                {this.props.currency.currencySymbol}
              </Text>
            </Col>
          </Grid>
        </ListItem>
        <ListItem style={{ marginLeft: 0, paddingLeft: 15 }}>
          <Grid>
            <Col>
              <Text>{this.props.currency.cpt}</Text>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>CPT</Text>
            </Col>
            <Col>
              <Text>{this.props.currency.price}</Text>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>USD</Text>
            </Col>
          </Grid>
        </ListItem>
      </List>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  PriceCard
);
