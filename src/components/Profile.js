import React, { Component } from "react";
import {
  View,
  Platform,
  StatusBar,
  Image,
  DeviceEventEmitter,
  ActivityIndicator
} from "react-native";
import {
  Container,
  Header,
  Content,
  Icon,
  Button,
  Title,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail
} from "native-base";
import AndroidBack from "./AndroidBack";
import LoginHeader from "./Header";
import Meteor, { withTracker, MeteorListView } from "react-native-meteor";
import { connect } from "react-redux";
import { setLoggedIn } from "../redux/app-redux";

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedIn: (logging, user) => {
      dispatch(setLoggedIn(logging, user));
    }
  };
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      loggedIn: this.props.loggedIn
    };
  }
  onLogoutPress() {
    Meteor.logout(
      err => {
        if(err){
          console.log(err);
          this.props.setLoggedIn(true, Meteor.user());
        }
        else{
          this.props.setLoggedIn(false, Meteor.user());
        }
      }
    );
    this.props.setLoggedIn(false, null);
  }
  render() {
    if (!this.props.userdataReady) {
      return (
        <Container>
          <AndroidBack navigation={this.props.navigation} />
          <LoginHeader
            title="Profile"
            navigation={this.props.navigation}
            dest="Main"
          />
          <Content>
            <Text />
            <Text />
            <Text />
            <ActivityIndicator size="large" />
          </Content>
        </Container>
      );
    }
    return (
      <Container>
        <AndroidBack navigation={this.props.navigation} />
        <LoginHeader
          title="Profile"
          navigation={this.props.navigation}
          dest="Main"
        />
        <Content>
          <List >
            <ListItem style={{ marginLeft: 0, paddingLeft: 15 }}>
              <Left>
                <Text>{this.props.user.username}</Text>
              </Left>
              <Right>
                <Button transparent onPress={this.onLogoutPress.bind(this)}>
                  <Icon name="log-out" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Thumbnail
                source={{
                  uri: "https://blockrazor.org/codebase_images/noprofile.png"
                }}
              />
            </ListItem>
            <ListItem itemDivider>
              <Text>Email</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.user.emails[0].address}</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Krazor Balance</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.userdata.balance}</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>USD Balance</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.userdata.others.USD}</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>ETH Balance</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.userdata.others.ETH}</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>XMR Balance</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.userdata.others.XMR}</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Input Ranking</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.userdata.inputRanking}</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default withTracker(params => {
  
  const handle = Meteor.subscribe("userdata");

  return {
    userdataReady: handle.ready(),
    userdata: Meteor.collection("userdata").findOne({ _id: Meteor.user()._id })
  };
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
