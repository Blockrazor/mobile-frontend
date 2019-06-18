import React, { Component } from "react";
import { View, ScrollView, ActivityIndicator, FlatList, Alert, DeviceEventEmitter } from "react-native";
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
    Meteor.call('updateMarketCap2');
  }
  onValueChange(value) {
    this.setState({
      stance: value
    });
  }

  compare(a, b) {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
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

  _addComment = (stance) => {
    if (stance == "positive") {
      Meteor.call('addNewFeatureMobile', this.props.currency._id, this.state.comment, "pass", function(error, result) {
        if(!error) {
          console.log('success added feature (some errors are not reflected)'); //some errors are not reflected
          DeviceEventEmitter.emit('showToast', "your comment is added successfully");
          this.setState({comment : ''});
        } else {
          console.log(error);
          DeviceEventEmitter.emit('showToast', error.message);
          return;
        }
      });
    }
    else if(stance == "negative") {
      Meteor.call('newRedFlagMethod', this.props.currency._id, this.state.comment, "pass", (err, data) => {
        if(!err) {
          DeviceEventEmitter.emit('showToast', "your comment is added successfully");
          this.setState({comment : ''});
        //  console.log('success added redflag');
        } else {
          DeviceEventEmitter.emit('showToast', err.message);
         // console.log(err);
          return;
        }
      });
    }
  };

  _renderAddComment = ()=>{
    // if(Meteor.user())
    {
      return <View>
      <Item>
        <Input
          style={{ flex: 0.85 }}
          placeholder="Your comment here..."
          onChangeText={comment => this.setState({ comment: comment })}
          value={this.state.comment}
        />
        <Button
          transparent
          onPress={() => {
            if(!Meteor.user()){
              alert('Please Login to add comment');
              return;
            }
            Alert.alert(
              'Please Choose your stance',
              '',
              [
                {text: 'Cancel', onPress: () => console.log('Ask me later pressed'), style: 'cancel'},
                {text: 'Positive', onPress: () => {this._addComment("positive")}},
                {text: 'Negative', onPress: () => {this._addComment("negative")}},
              ],
              {cancelable: true},
            );
          }}
          style={{ flex: 0.15 }}
        >
          <Icon name="send" />
        </Button>
      </Item>
    </View>     
  }
}

  render() {
    if (!(this.props.redFlagReady && this.props.featureReady)) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <View style={{ flex: 1 }}>
      <Title style={{color:"#000000", marginBottom: 6, marginTop:6}}>{this.props.currency.currencyName}</Title>
        <ScrollView>{this._renderComments()}</ScrollView>
        {this._renderAddComment()}
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
    // const CoinPerf = Meteor.subscribe("coinPerf");
    // console.log(Meteor.collection("coinPerf").find());
    return {
      featureReady: FeatureHandle.ready(),
      redFlagReady: RedFlagHandle.ready()
    };
  })(CoinsComments)
);
