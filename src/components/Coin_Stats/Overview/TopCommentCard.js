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

class TopCommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getTopFeatures() {
    var feature = Meteor.collection("features").findOne(
      {
        currencySlug: this.props.currency.slug
      },
      { sort: { rating: -1 } }
    );
    if (feature != undefined) {
      var appealVote = 0;
      var downVote = 0;
      if (feature.downVoted != undefined) {
        downVote = feature.downVoted.length;
      }
      if (feature.appealVoted != undefined) {
        appealVote = feature.appealVoted.length;
      }
      return (
        <Body>
          <Text note>Top Positive Comment</Text>
          <Text>{feature.featureName}</Text>
        </Body>
      );
    } else {
      return (
        <Body>
          <Text note>Top Positive Comment</Text>
          <Text numberOfLines={5}>No feature yet</Text>
        </Body>
      );
    }
  }

  _getTopRedFlag() {
    var redflag = Meteor.collection("redflags").findOne(
      {
        currencyId: this.props.currency._id
      },
      { sort: { rating: -1 } }
    );
    if (redflag != undefined) {
      var appealVote = 0;
      var downVote = 0;
      if (redflag.downVoted != undefined) {
        downVote = redflag.downVoted.length;
      }
      if (redflag.appealVoted != undefined) {
        appealVote = redflag.appealVoted.length;
      }
      return (
        <Body>
          <Text note>Top Negative Comment</Text>
          <Text>{redflag.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button transparent>
              <Icon name="thumbs-up" style={{ color: "#ffffff" }} />
            </Button>
            <Text>{appealVote}</Text>
            <Button transparent style={{ marginLeft: 40 }}>
              <Icon name="thumbs-down" style={{ color: "#ffffff" }} />
            </Button>
            <Text>{downVote}</Text>
          </View>
        </Body>
      );
    } else {
      return (
        <Body>
          <Text note>Top Negative Comment</Text>
          <Text numberOfLines={5}>No RedFlag yet</Text>
        </Body>
      );
    }
  }

  render() {
    if (!(this.props.redFlagReady && this.props.featureReady)) {
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
        <CardItem
          style={{ backgroundColor: "#e0d1d1" }}
          button
          onPress={() => {
            this.props.tabs.goToPage.call(this.props.tabs, 3);
            // this.props.navigation.navigate("CoinRedFlag", {
            //   currencySlug: this.props.currency.slug,
            //   currencyId: this.props.currency._id
            // });
          }}
        >
          {this._getTopRedFlag()}
        </CardItem>
        <CardItem
          style={{ backgroundColor: "#d1e0d9" }}
          button
          onPress={() => {
            this.props.tabs.goToPage.call(this.props.tabs, 3);
            // this.props.navigation.navigate("CoinFeatures", {
            //   currencySlug: this.props.currency.slug
            // });
          }}
        >
          {this._getTopFeatures()}
        </CardItem>
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
    const FeatureHandle = Meteor.subscribe("features");
    const RedFlagHandle = Meteor.subscribe("redflags");
    return {
      featureReady: FeatureHandle.ready(),
      redFlagReady: RedFlagHandle.ready()
    };
  })(TopCommentCard)
);
