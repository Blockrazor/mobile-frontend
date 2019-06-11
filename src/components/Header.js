import React, { Component } from "react";
import { View, Platform, StatusBar } from "react-native";
import {
  Header,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Button,
  Title,
  Item,
  Input
} from "native-base";
import AppStyle from "./AppStyle";
import Meteor from "react-native-meteor";

export default class NormalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  onLogoutPress() {
    Meteor.logout(err => {
      if (err) {
      } else {
        //console.log("Logged out");
        this.props.navigation.navigate("Home");
      }
    });
  }

  _renderleftbutton() {
    if (this.props.dest == undefined) {
      return (
        <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      );
    } else {
      return (
        <Button
          transparent
          onPress={() => this.props.navigation.navigate(this.props.dest)}
        >
          <Icon name="arrow-back" />
        </Button>
      );
    }
  }
  _renderrightbutton() {
    if (this.props.title == "Profile") {
      return <Button transparent onPress={this.onLogoutPress.bind(this)}>
        <Icon name="ios-log-out" />
      </Button>;
    }
    return;
  }

  _renderbody() {
    return <Title style={{ color: "white" }}>{this.props.title}</Title>;
  }

  render() {
    return (
      <Header hasTabs style={AppStyle.headerDark}>
        <Left>{this._renderleftbutton()}</Left>
        <Body>{this._renderbody()}</Body>
        <Right>{this._renderrightbutton()}</Right>
      </Header>
    );
  }
}
