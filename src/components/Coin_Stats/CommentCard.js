import React, { Component } from "react";
import { View } from "react-native";
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
import Meteor from "react-native-meteor";

class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderComment = () => {
    if (this.props.comment.type == "feature") {
      return <Text>{this.props.comment.featureName}</Text>;
    } else if (this.props.comment.type == "redflag") {
      return <Text>{this.props.comment.name}</Text>;
    }
  };

  _vote = vote => {
      if(!Meteor.user()){
        alert("Please Login to vote!");
        return;
      }
    //console.log(this.props.comment._id + vote + this.props.comment.type);
    if (this.props.comment.type == "redflag") {
      Meteor.call("vote", "Redflags", this.props.comment._id, vote, function(
        error,
        result
      ) {
        if (!error) {
        //   console.log("success!");
        } else {
          console.log(error.reason);
        }
      });
    } else if (this.props.comment.type == "feature") {
      Meteor.call("vote", "Features", this.props.comment._id, vote, function(
        error,
        result
      ) {
        if (!error) {
        //   console.log("success!");
        } else {
          console.log(error.reason);
        }
      });
    }
  };

  render() {
    var appealVote = 0;
    var downVote = 0;
    if (this.props.comment.downVoted != undefined) {
      downVote = this.props.comment.downVoted.length;
    }
    if (this.props.comment.appealVoted != undefined) {
      appealVote = this.props.comment.appealVoted.length;
    }
    var color = "#e0d1d1";
    if (this.props.comment.type == "feature") {
      color = "#d1e0d9";
    }
    return (
      <Card>
        <CardItem
          style={{ backgroundColor: color }}
          //  button onPress={() => alert("Check details")} onLongPress={() => alert("Remove")}
        >
          <Body>
            {this._renderComment()}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                transparent
                onPress={() => {
                  this._vote("up");
                }}
              >
                <Icon name="thumbs-up" style={{ color: "#ffffff" }} />
              </Button>
              <Text>{appealVote}</Text>
              <Button
                transparent
                onPress={() => {
                  this._vote("down");
                }}
                style={{marginLeft: 40}}
              >
                <Icon name="thumbs-down" style={{ color: "#ffffff" }} />
              </Button>
              <Text>{downVote}</Text>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CommentCard;
