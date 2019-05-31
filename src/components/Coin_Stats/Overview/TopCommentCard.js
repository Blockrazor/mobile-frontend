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
          <Text note>{feature.author}</Text>
          <Text>{feature.featureName}</Text>
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
            <Text> </Text>
            <Button transparent>
              <Icon name="thumbs-down" style={{ color: "#ffffff" }} />
            </Button>
            <Text>{downVote}</Text>
          </View>
        </Body>
      );
    } else {
      return (
        <View>
          <Text note>No feature yet</Text>
          <Text numberOfLines={5}>No feature yet</Text>
        </View>
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
        <CardItem style={{ backgroundColor: "#e0d1d1" }}>
          <Body>
            <Text>
              This might change with the launch of Bitcoin trading by Fidelity.
            </Text>
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
              <Text>238</Text>
              <Text> </Text>
              <Button transparent>
                <Icon name="thumbs-down" style={{ color: "#ffffff" }} />
              </Button>
              <Text>2</Text>
            </View>
          </Body>
        </CardItem>
        <CardItem style={{ backgroundColor: "#d1e0d9" }}>
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
    const handle = Meteor.subscribe("features");
    return {
      dataReady: handle.ready()
    };
  })(TopCommentCard)
);
