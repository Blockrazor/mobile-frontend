import React, { Component } from "react";
import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { Text, Button, Icon, Item, Input, Picker ,Title} from "native-base";
import CommentCard from "./CommentCard";
import { connect } from "react-redux";
import Meteor, { withTracker } from "react-native-meteor";

class CoinsComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stance: undefined,
      comment: ""
    };
  }
  onValueChange2(value) {
    this.setState({
      stance: value
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
      { sort: { rating: -1 }, limit: 5 }
    );
    redflags.map(item => {
      item.type = "redflag";
    });
    //console.log(redflags);
    var feature = Meteor.collection("features").find(
      {
        currencySlug: this.props.currency.slug
      },
      { sort: { rating: -1 }, limit: 5 }
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

  _renderRow = comment => {
    return <CommentCard comment={comment.item} />;
  };

  _addComment = () => {
    if (this.state.stance == "positive") {
      // Meteor.call('newComment', this.props.currency._id, this.state.comment, 1, true, function(error, result) {
      //   if(!error) {
      //     console.log('success');
      //   } else {
      //     console.log(error);
      //     return;
      //   }
      // });
      // Meteor.collection("features").insert({
      //   currencyId: this.props.currency._id,
      //   currencySlug: this.props.currency.slug,
      //   featureName: this.state.comment,
      //   appeal: 2,
      //   appealNumber: 2,
      //   appealVoted: [Meteor.userId()],
      //   flags: 0,
      //   flagRatio: 0,
      //   flaggedBy: [],
      //   commenters: [],
      //   createdAt: Date.now(),
      //   author: Meteor.user().username,
      //   createdBy: Meteor.userId(),
      //   rating: 1
      // });
    }
  };

  render() {
    if (!(this.props.redFlagReady && this.props.featureReady)) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <View style={{ flex: 1 }}>
      <Title style={{color:"#000000", marginBottom: 6, marginTop:6}}>{this.props.currency.currencyName}</Title>
        <ScrollView>{this._renderComments()}</ScrollView>
        <View>
          <Item picker>
            <Picker
              mode="dropdown"
              style={{ width: undefined }}
              placeholder="Please choose your stance"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.stance}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Positive" value="positive" />
              <Picker.Item label="Negative" value="negative" />
            </Picker>
          </Item>
          <Item>
            <Input
              style={{ flex: 0.85 }}
              placeholder="Your comment here..."
              onChangeText={comment => this.setState({ comment: comment })}
            />
            <Button
              transparent
              onPress={() => {
                this._addComment();
              }}
              style={{ flex: 0.15 }}
            >
              <Icon name="send" />
            </Button>
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
