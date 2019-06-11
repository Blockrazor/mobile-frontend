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
  Input,
  Item,
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
      loggedIn: this.props.loggedIn,
      loading: false,
      editing: false,
      userName: "",
      email: "",
      bio: "",
    };
  }

  _setUserState = () => {
    this.setState(
      {
        userName: Meteor.user().username,
        email: Meteor.user().emails[0].address,
        bio: Meteor.user().bio,
      }
    );
  }

  componentDidMount() {
    this._setUserState();
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

  _renderUserName = () => {
    if (this.state.editing) {
      return <Item>
        <Input
          value={this.state.userName}
          onChangeText={(text) => this.setState({ userName: text })}
        />
      </Item>
    }
    else {
      return <Text>{Meteor.user().username}</Text>
    }
  }

  _renderUserEmail = () => {
    if (this.state.editing) {
      return <Item>
        <Input
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />
      </Item>
    }
    else {
      return <Text>{Meteor.user().emails[0].address}</Text>
    }
  }

  _renderUserBio = () => {
    if (this.state.editing) {
      return <Item>
        <Input
          value={this.state.bio}
          onChangeText={(text) => this.setState({ bio: text })}
        />
      </Item>
    }
    else {
      return <Text>{Meteor.user().bio}</Text>
    }
  }

  _submitEditProfile(){
    this.setState({loading: true});

    var data = {
        email: this.state.email,
        bio: this.state.bio,
        username: this.state.userName,
        secret: window.secret ? window.secret.base32 : '',
        userToken: undefined,
        status2fa: false,
    }

    Meteor.call('editProfile', data, (err, data) => {
      this.setState({editing: false, loading: false})
      if(err){
        console.log(err);
      }
    }
    );
  }

  _renderSubmit = () => {
    if (this.state.editing) {
      return <Right>
          <Button transparent
          onPress={()=>{
            this._submitEditProfile();
          }}
          >
            <Text> Submit </Text>
          </Button>
        </Right>
    }
    else {
      return
    }
  }


  render() {
    if (!this.props.userdataReady || !Meteor.user() || this.state.loading) {
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
                  <Left>
                    <Text>UserName</Text>
                  </Left>
                  <Right>
                    <Button small transparent
                      onPress={() => {
                        this._setUserState();
                        this.setState({ editing: !this.state.editing })
                      }}
                    >
                      <Icon name="ios-create" />
                    </Button>
                  </Right>
                </ListItem>
                <ListItem style={{ marginLeft: 0, paddingLeft: 15 }}>
                  {this._renderUserName()}
                </ListItem>
                <ListItem itemDivider>
                  <Left>
                    <Text>Email</Text>
                  </Left>
                  <Right>
                    <Button small transparent
                      onPress={() => {
                        this._setUserState();
                        this.setState({ editing: !this.state.editing })
                      }}>
                      <Icon name="ios-create" />
                    </Button>
                  </Right>
                </ListItem>
                <ListItem>
                  {this._renderUserEmail()}
                </ListItem>
                <ListItem itemDivider>
                  <Left>
                    <Text>About Me</Text>
                  </Left>
                  <Right>
                    <Button small transparent
                      onPress={() => {
                        this._setUserState();
                        this.setState({ editing: !this.state.editing })
                      }}>
                      <Icon name="ios-create" />
                    </Button>
                  </Right>
                </ListItem>
                <ListItem>
                  {this._renderUserBio()}
                </ListItem>
                {this._renderSubmit()}
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
          <Tab
            heading={
              <TabHeading style={AppStyle.tabDark}>
                <Text>Role</Text>
              </TabHeading>
            }
          >
            <Content>
              <List>
                <ListItem itemDivider>
                  <Text>Role</Text>
                </ListItem>
                <ListItem>
                  <Text>{userdata.moderator ? "Moderator " : ""} {userdata.developer ? "Developer " : ""}</Text>
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


