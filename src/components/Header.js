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
  Title
} from "native-base";
import AppStyle from "./AppStyle";

export default class NormalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _renderleftbutton() {
    if (this.props.dest == undefined) {
      return <Button transparent onPress={() => this.props.navigation.goBack()}>
        <Icon name="arrow-back" />
      </Button>;
    }
    else{
      return <Button transparent onPress={() => this.props.navigation.navigate(this.props.dest)}>
      <Icon name="arrow-back" />
    </Button>;
    }
  }
  _renderrightbutton() {
      return;
  }
  render() {
    return (
      <Header
        hasTabs
        style={AppStyle.headerDark}
      >
        <Left>
          {this._renderleftbutton()}
        </Left>
        <Body>
          <Title style={{ color: "white" }}>{this.props.title}</Title>
        </Body>
        <Right>
          {this._renderrightbutton()}
        </Right>
      </Header>
    );
  }
}
