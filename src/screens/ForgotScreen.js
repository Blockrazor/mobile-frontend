import React, { Component } from "react";
import { View, ActivityIndicator, Platform, StatusBar } from "react-native";
import * as firebase from "firebase";
import {
  Content,
  Container,
  Form,
  Input,
  Header,
  Left,
  Body,
  Right,
  Title,
  Item,
  Label,
  Button,
  Text,
  Icon
} from "native-base";

export default class ForgotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: "",
      loading: false
    };
  }
  onForgotPress() {
    this.setState({ error: "", loading: true });
    const { email } = this.state;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        this.setState({ error: "", loading: false });
        this.props.navigation.navigate("Login");
      })
      .catch(err => {
        alert(err);
        this.setState({ error: err.toString(), loading: false });
      });
  }

  renderButtonOrLoading() {
    //loading
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    //not filled yet
    if (this.state.email == "") {
      return (
        <View>
          <Button block disabled>
            <Text>Send Password Reset Email</Text>
          </Button>
        </View>
      );
    }
    //everything is ok
    return (
      <View>
        <Button block onPress={this.onForgotPress.bind(this)}>
          <Text>Send Password Reset Email</Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <Header
          style={{
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
          }}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>BlockRazor</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                value={this.state.email}
                onChangeText={email => this.setState({ email: email })}
              />
            </Item>
          </Form>
          <Text />
          <Text />
          {this.renderButtonOrLoading()}
        </Content>
      </Container>
    );
  }
}
