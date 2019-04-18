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

export default class SignUpScreen extends Component {
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
    this.setState({ error: "", loading: true });
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
          <Button block disabled>
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
          <Button block disabled>
            <Text>Sign Up</Text>
          </Button>
        </View>
      );
    }

    //everything is ok
    return (
      <View>
        <Button block onPress={this.onSignUpPress.bind(this)}>
          <Text>Sign Up</Text>
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
          <Text />
          {this.renderButtonOrLoading()}
        </Content>
      </Container>
    );
  }
}
