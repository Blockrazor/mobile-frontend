import React, { Component } from "react";
import { Platform, StatusBar } from "react-native";
import {
  Container,
  Button,
  Icon,
  Text,
  Footer,
  FooterTab,
} from "native-base";
import CoinsStats from "../components/CoinsStats";
import HomeScreenHeader from "../components/HomeScreenHeader";
export default class DrawerExample extends Component {
  static navigationOptions = ({ navigation }) => {
    // headerTitle instead of title
    return {
      headerTitle: <Text />,
      headerLeft: (
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      )
    };
  };

  render() {
    return (
      <Container>
        <HomeScreenHeader navigation={this.props.navigation} />
        <CoinsStats navigation={this.props.navigation} />
        <Footer>
          <FooterTab>
            <Button full>
              <Icon name="thumbs-down" />
            </Button>
            <Button full>
              <Icon name="thumbs-up" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
