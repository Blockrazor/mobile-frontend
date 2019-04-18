import React, { Component } from "react";
import { View, ActivityIndicator, Platform,StatusBar } from "react-native";
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
  Text
} from "native-base";
import AppHeader from '../components/AppHeader';

firebase.initializeApp({
  apiKey: "AIzaSyAH2POco6dMPfsdwL04OREBoPdK6oQnGOg",
  authDomain: "blockrazor-6a2d7.firebaseapp.com",
  databaseURL: "https://blockrazor-6a2d7.firebaseio.com",
  projectId: "blockrazor-6a2d7",
  storageBucket: "blockrazor-6a2d7.appspot.com",
  messagingSenderId: "925090422418"
});

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: "", loading: false };
  }

  onLoginPress() {
    this.setState({ error: "", loading: true });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: "", loading: false });
        this.props.navigation.navigate("Main");
      })
      .catch(err => {
        alert(err);
        this.setState({ error: err.toString(), loading: false });
      });
  }


  renderButtonOrLoading() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <Container>
        <Button transparent onPress={()=> this.props.navigation.navigate("Forgot")}>
        <Text note>Forgot your Password?</Text>
        </Button>
          <Button transparent onPress={this.onLoginPress.bind(this)}>
            <Text>Login</Text>
          </Button>
          <Button transparent onPress={()=> this.props.navigation.navigate("SignUp")}>
            <Text>Sign Up</Text>
          </Button>
      </Container>
    );
  }

  render() {
    return (
      <Container>
        <Header style={{
            //backgroundColor:'green', 
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}} >
            <Left/>
            <Body>
              <Title>BlockRazor</Title>
            </Body>
            <Right/>
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
          </Form>
          {this.renderButtonOrLoading()}
        </Content>
      </Container>
    );
  }
}
