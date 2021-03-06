import React, { Component } from "react";
import { View, ActivityIndicator, Platform, StatusBar ,DeviceEventEmitter } from "react-native";
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
import LoginHeader from '../../components/Header';
import AndroidBack from '../../components/AndroidBack';
import Meteor, { Accounts } from "react-native-meteor";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Cpassword: "",
      password: "",
      error: "",
      loading: false
    };
  }
  onSignUpPress() {
    Accounts.createUser({
      username: this.state.email,
      email: this.state.email,
      password: this.state.password
    }, (err) => {
      if (!err) {
        DeviceEventEmitter.emit('showToast', "sign up successful!");
      } else {
        this.setState({ error: err.reason });
        DeviceEventEmitter.emit('showToast', err.reason);
      }
    })
  }

  renderButtonOrLoading() {
    //the form is loading
    if (this.state.loading) {
      return <ActivityIndicator />;
    }

    //the form is not completed 
    if (
      this.state.email == "" ||
      this.state.password == "" ||
      this.state.Cpassword == ""
    ) {
      return (
        <View>
          <Button transparent disabled>
            <Text>Sign Up</Text>
          </Button>
        </View>
      );
    }

    //the password not match
    if (this.state.Cpassword != this.state.password) {
      return (
        <View>
          <Left>
            <Body>
              <Text note>Password not match</Text>
            </Body>
          </Left>

          <Button transparent disabled>
            <Text>Sign Up</Text>
          </Button>
        </View>
      );
    }

    //everything is ok
    return (
      <View>
        <Button transparent onPress={this.onSignUpPress.bind(this)}>
          <Text>Sign Up</Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <AndroidBack navigation={this.props.navigation} />
        <LoginHeader title="Sign Up" navigation={this.props.navigation} />
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
            <Item stackedLabel>
              <Label>Confirm Password</Label>
              <Input
                secureTextEntry
                value={this.setState.Cpassword}
                onChangeText={Cpassword =>
                  this.setState({ Cpassword: Cpassword })
                }
              />
            </Item>
          </Form>
          <Text />
          <Left>
            <Body>
              <Text note>{this.state.error}</Text>
            </Body>
          </Left>
          {this.renderButtonOrLoading()}
        </Content>
      </Container>
    );
  }
}

export default SignUpScreen;