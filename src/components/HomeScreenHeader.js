import React, { Component } from "react";
import { Platform, StatusBar } from "react-native";
import {
  Header,
  Left,
  Button,
  Segment,
  Icon,
  Text,
  Body,
  Right
} from "native-base";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header
        hasSegment
        style={{
          //backgroundColor:'green',
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}
      >
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Segment>
            <Button first active>
              <Text>Overview</Text>
            </Button>
            <Button>
              <Text>News</Text>
            </Button>
            <Button last>
              <Text>Market</Text>
            </Button>
          </Segment>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Icon name="contact" />
          </Button>
        </Right>
      </Header>
    );
  }
}
