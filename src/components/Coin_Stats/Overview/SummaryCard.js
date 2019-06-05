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
  Footer
} from "native-base";
import { connect } from "react-redux";
import Meteor, { withTracker } from "react-native-meteor";

class SummaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: {},
      summary: {}
    };
  }
  _getTopSummary() {
    var summary = Meteor.collection("summaries").findOne(
      {
        currencySlug: this.props.currency.slug
      },
      { sort: { rating: -1 } }
    );
    if (summary != undefined) {
      return (
        <Body>
          <Text note>Top Summary</Text>
          <Text numberOfLines={5}>{summary.summary}</Text>
        </Body>
      );
    } else {
      return (
        <Body>
          <Text note>Top Summary</Text>
          <Text numberOfLines={5}>No summary yet</Text>
        </Body>
      );
    }
  }

  render() {
    if (!this.props.dataReady) {
      return (
        <Card>
          <CardItem bordered>
            <Body>
              <ActivityIndicator size="large" />
            </Body>
          </CardItem>
        </Card>
      );
    }

    return (
      <Card>
        <CardItem bordered button onPress={()=>{this.props.navigation.navigate("CoinSummary", { currencySlug: this.props.currency.slug })}}>{this._getTopSummary()}</CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: state.currency
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withTracker(params => {
    const handle = Meteor.subscribe("summaries");
    return {
      dataReady: handle.ready()
    };
  })(SummaryCard)
);
