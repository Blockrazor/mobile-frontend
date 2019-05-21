import React, { Component } from "react";
import { View, Platform, StatusBar, Image } from "react-native";
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
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from "native-base";
import AndroidBack from "../../components/AndroidBack";
import LoginHeader from "../../components/Header";
import Meteor, { Accounts } from "react-native-meteor";
import { connect } from 'react-redux';
import { setLoggedIn } from '../../redux/app-redux';
//test1@test.com
//testtest


const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    user: state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: (logging, user) => { dispatch(setLoggedIn(logging, user)) }
  };
}

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null, // added this
      user: this.props.user,
      loading: false,
      loggedIn: this.props.loggedIn,
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
          this.props.setLoggedIn(true, Meteor.user());
        }
      });
    }
  }

  onLogoutPress() {
    Meteor.logout();
    this.props.setLoggedIn(false, Meteor.user());
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
    if (this.props.loggedIn) {
      return (
        <Container>
          <AndroidBack navigation={this.props.navigation} />
          <LoginHeader
            title="Profile"
            navigation={this.props.navigation}
            dest="Main"
          />
          <Content>
            <List>
              <ListItem itemDivider>
                <Left>
                <Text>{this.props.user.username}</Text>
                </Left>
              </ListItem>
              <ListItem>
                <Button transparent onPress={this.onLogoutPress.bind(this)}>
                  <Text>Log Out</Text>
                </Button>
              </ListItem>
              <ListItem>
                <Thumbnail source={{ uri: 'https://blockrazor.org/codebase_images/noprofile.png' }} />
              </ListItem>
              <ListItem itemDivider>
                <Text>Email</Text>
              </ListItem>
              <ListItem>
                <Text>{this.props.user.profile.email}</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>Role</Text>
              </ListItem>
              <ListItem>
                <Text>{this.props.user.emails[0].address}</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>About Me</Text>
              </ListItem>
              <ListItem>
                <Text>{this.props.user.emails[0].address}</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>Input Ranking</Text>
              </ListItem>
              <ListItem>
                <Text>{this.props.user.emails[0].address}</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>Overall rating for possible moderators</Text>
              </ListItem>
              <ListItem>
                <Text>{this.props.user.emails[0].address}</Text>
              </ListItem>
            </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);