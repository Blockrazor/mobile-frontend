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
  Thumbnail,
  Tab,
  Tabs,
  TabHeading,
} from "native-base";
import AndroidBack from "./AndroidBack";
import LoginHeader from "./Header";
import Meteor, { withTracker, MeteorListView } from "react-native-meteor";
import AppStyle from '../components/AppStyle';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      loggedIn: this.props.loggedIn
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
  render() {
    if (!this.props.userdataReady || !Meteor.user()) {
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
    const userdata = Meteor.collection("userdata").findOne({ _id: Meteor.user()._id });
    return (
      <Container>
        <AndroidBack navigation={this.props.navigation} />
        <LoginHeader
          title="Profile"
          navigation={this.props.navigation}
          dest="Main"
        />
        <Tabs
          style={Platform.OS === "android" ? { overflow: "hidden" } : {}}
          onChangeTab={({ i }) => this.setState({ currentPage: i })}
          ref={(c) => { this.tabs = c; return; }}
        >
          <Tab
            heading={
              <TabHeading style={AppStyle.tabDark}>
                <Text>Profile</Text>
              </TabHeading>
            }
          >
            <Content>
              <List>
                <ListItem itemDivider>
                  <Text>UserName</Text>
                </ListItem>
                <ListItem style={{ marginLeft: 0, paddingLeft: 15 }}>
                  <Text>{Meteor.user().username}</Text>

                </ListItem>
                <ListItem itemDivider>
                  <Text>Email</Text>
                </ListItem>
                <ListItem>
                  <Text>{Meteor.user().emails[0].address}</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>Role</Text>
                </ListItem>
                <ListItem>
                  <Text>{userdata.moderator ? "Moderator " : ""} {userdata.developer ? "Developer " : ""}</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>About Me</Text>
                </ListItem>
                <ListItem>
                  <Text>{Meteor.user().bio}</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>Input Ranking</Text>
                </ListItem>
                <ListItem>
                  <Text>{userdata.inputRanking}</Text>
                </ListItem>
              </List>
            </Content>
          </Tab>
          <Tab
            heading={
              <TabHeading style={AppStyle.tabDark}>
                <Text>Wallet</Text>
              </TabHeading>
            }
          >
            <Content>
              <List>
                <ListItem itemDivider>
                  <Text>Krazor Balance</Text>
                </ListItem>
                <ListItem>
                  <Text>{userdata.balance}</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>USD Balance</Text>
                </ListItem>
                <ListItem>
                  <Text>{userdata.others.USD}</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>ETH Balance</Text>
                </ListItem>
                <ListItem>
                  <Text>{userdata.others.ETH}</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>XMR Balance</Text>
                </ListItem>
                <ListItem>
                  <Text>{userdata.others.XMR}</Text>
                </ListItem>
              </List>
            </Content>
          </Tab>
        </Tabs>

      </Container>
    );
  }
}

export default withTracker(params => {
  const handle = Meteor.subscribe("userdata");

  return {
    userdataReady: handle.ready(),
  };
})(Profile);


