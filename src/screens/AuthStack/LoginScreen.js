import React, { Component } from "react";
import { View, Platform, StatusBar } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Left,
  Body,
  Right,
  Icon,
  Title
} from "native-base";
import AndroidBack from "../../components/AndroidBack";
import LoginHeader from "../../components/Header";
import Meteor, { Accounts } from "react-native-meteor";

//test1@test.com
//testtest


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null, // added this
      user: Meteor.user(),
      loading: false
    };
  }
  isValid() {
    const { email, password } = this.state;
    let valid = false;

    if (email.length > 0 && password.length > 0) {
      valid = true;
    }

    if (email.length === 0) {
      this.setState({ error: "You must enter an email address" });
    } else if (password.length === 0) {
      this.setState({ error: "You must enter a password" });
    }

    return valid;
  }

  onLoginPress() {
    const { email, password } = this.state;

    if (this.isValid()) {
      Meteor.loginWithPassword(email, password, error => {
        if (error) {
          alert(error.reason);
          this.setState({ error: error.reason });
        } else {
          //alert("login success! id: " + Meteor.user()._id);
          this.setState({ user: Meteor.user() });
        }
      });
    }
  }

  onLogoutPress() {
    Meteor.logout();
    this.setState({ user: Meteor.user() });
  }

  renderButtonOrLoading() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <View>
        <Button
          transparent
          onPress={() => this.props.navigation.navigate("Forgot")}
        >
          <Text note>Forgot your Password?</Text>
        </Button>
        <Button transparent onPress={this.onLoginPress.bind(this)}>
          <Text>Login</Text>
        </Button>
        <Button
          transparent
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text>Sign Up</Text>
        </Button>
      </View>
    );
  }

  render() {
    if (this.state.user) {
      return (
        <Container>
          <AndroidBack navigation={this.props.navigation} />
          <LoginHeader
            title="Login"
            navigation={this.props.navigation}
            dest="Main"
          />
          <Content>
            <Text>{this.state.user._id}</Text>
            <Text> you are logged in!</Text>
            <Button onPress={this.onLogoutPress.bind(this)}>
              <Text>Log Out</Text>
            </Button>
            <Button
              onPress={() =>
                Meteor.call("signedUpLastMonth", (err, data) => {
                  alert(data);
                })
              }
            >
              <Text>Sign Up last month</Text>
            </Button>
          </Content>
        </Container>
      );
    }
    return (
      <Container>
        <AndroidBack navigation={this.props.navigation} />
        <LoginHeader
          title="Login"
          navigation={this.props.navigation}
          dest="Main"
        />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                value={this.state.email}
                onChangeText={email => this.setState({ email: email })}
              />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                value={this.setState.password}
                onChangeText={password => this.setState({ password: password })}
              />
            </Item>
          </Form>
          <Text>{this.state.error}</Text>
          {this.renderButtonOrLoading()}
        </Content>
      </Container>
    );
  }
}