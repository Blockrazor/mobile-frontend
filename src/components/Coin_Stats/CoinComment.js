import React, { Component } from "react";
import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { Text, Button, Icon, Item, Input, Picker } from "native-base";
import CommentCard from "./CommentCard";
import { connect } from "react-redux";
import Meteor, { withTracker } from "react-native-meteor";

class CoinsComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  compare(a, b) {
    if (a.createdAt < b.createdAt) {
      return -1;
    }
    if (a.createdAt > b.createdAt) {
      return 1;
    }
    return 0;
  }

  _renderComments = () => {
    var redflags = Meteor.collection("redflags").find(
      {
        currencyId: this.props.currency._id
      },
      { sort: { rating: -1 }, limit: 2 }
    );
    redflags.map(item => {
      item.type = "redflag";
    });
    //console.log(redflags);
    var feature = Meteor.collection("features").find(
      {
        currencySlug: this.props.currency.slug
      },
      { sort: { rating: -1 }, limit: 2 }
    );
    feature.map(item => {
      item.type = "feature";
    });
    var comments = redflags.concat(feature);
    comments = comments.sort(this.compare);
    return (
      <FlatList
        data={comments}
        renderItem={this._renderRow}
        keyExtractor={item => item._id.toString()}
      />
    );
  };

  _renderRow = (comment) => {
      if(comment.item.type == "redflag"){
        return <CommentCard comment={comment.item.name} color="#e0d1d1" />
      }
      else if(comment.item.type == "feature"){
        return <CommentCard comment={comment.item.featureName} color="#d1e0d9" />
      }
  }

  render() {
    if (!(this.props.redFlagReady && this.props.featureReady)) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this._renderComments()}
        </ScrollView>
        <View>
          <Item>
            <Input placeholder="Your comment here..." />
          </Item>
          <Item picker>
            <View style={{ flex: 5 }}>
              <Picker
                mode="dropdown"
                style={{ width: undefined }}
                placeholder="Please choose your stance"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Positive" value="positive" />
                <Picker.Item label="Negative" value="negative" />
              </Picker>
            </View>
            <View style={{ flex: 1 }}>
              <Button transparent>
                <Icon name="send" />
              </Button>
            </View>
          </Item>
        </View>
      </View>
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
  })(CoinsComments)
);
